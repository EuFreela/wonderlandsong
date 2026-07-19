import { useEffect, useRef, useState } from 'react';
import type { Project } from '../types';
import type { HeaderTone } from '../utils/luminance';

const HEADER_HEIGHT = 72;

function toneForProject(project: Project | undefined): HeaderTone {
  if (project?.headerTone === 'light' || project?.headerTone === 'dark') {
    return project.headerTone;
  }
  // Safe default for dark full-bleed panels
  return 'light';
}

/**
 * Sticky-header contrast tone from static `project.headerTone`.
 * IntersectionObserver only (no canvas sampling / image decode on main thread).
 */
export function useActivePanelTone(projects: Project[]): HeaderTone {
  const initial = toneForProject(projects[0]);
  const [tone, setTone] = useState<HeaderTone>(initial);
  const toneRef = useRef<HeaderTone>(initial);
  const activeIdRef = useRef<string | null>(projects[0]?.id ?? null);

  useEffect(() => {
    let cancelled = false;
    const projectById = new Map(projects.map((p) => [p.id, p]));

    const applyTone = (next: HeaderTone) => {
      if (cancelled || next === toneRef.current) return;
      toneRef.current = next;
      setTone(next);
    };

    const activate = (id: string | null) => {
      if (id === activeIdRef.current) return;
      activeIdRef.current = id;

      if (!id) {
        // Keep dark header (light text) until a panel is known — avoids a flash of gray/white.
        applyTone('light');
        return;
      }

      applyTone(toneForProject(projectById.get(id)));
    };

    const panels = Array.from(
      document.querySelectorAll<HTMLElement>('.parallax-panel'),
    );

    if (panels.length === 0) {
      applyTone('light');
      return () => {
        cancelled = true;
      };
    }

    // Preferred: IntersectionObserver on a top probe band
    if (typeof IntersectionObserver !== 'undefined') {
      const ratios = new Map<string, number>();
      let observer: IntersectionObserver | null = null;

      const pickBestId = (): string | null => {
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        return bestId;
      };

      const buildObserver = () => {
        observer?.disconnect();
        ratios.clear();
        const bottomShrink = Math.max(0, window.innerHeight - HEADER_HEIGHT);
        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              const id = (entry.target as HTMLElement).id;
              if (!id) continue;
              if (entry.isIntersecting && entry.intersectionRatio > 0) {
                ratios.set(id, entry.intersectionRatio);
              } else {
                ratios.delete(id);
              }
            }
            activate(pickBestId());
          },
          {
            root: null,
            rootMargin: `0px 0px -${bottomShrink}px 0px`,
            // Fewer thresholds → fewer callbacks / less main-thread work
            threshold: [0, 0.5, 1],
          },
        );
        for (const panel of panels) observer.observe(panel);
      };

      buildObserver();

      let resizeFrame = 0;
      const onResize = () => {
        if (resizeFrame) return;
        resizeFrame = window.requestAnimationFrame(() => {
          resizeFrame = 0;
          buildObserver();
        });
      };
      window.addEventListener('resize', onResize, { passive: true });

      return () => {
        cancelled = true;
        observer?.disconnect();
        window.removeEventListener('resize', onResize);
        if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      };
    }

    // Fallback: rAF-throttled scroll (jsdom / rare envs)
    let frame = 0;
    const pickFromRects = () => {
      frame = 0;
      const probeY = HEADER_HEIGHT / 2;
      let active: HTMLElement | null = null;
      for (const panel of panels) {
        const rect = panel.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          active = panel;
          break;
        }
      }
      activate(active?.id ?? null);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(pickFromRects);
    };
    pickFromRects();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      cancelled = true;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [projects]);

  return tone;
}
