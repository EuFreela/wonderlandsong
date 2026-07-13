import { useEffect, useState } from 'react';
import type { Project } from '../types';
import {
  blendLuminance,
  sampleImageLuminance,
  toneFromLuminance,
  type HeaderTone,
} from '../utils/luminance';

const toneCache = new Map<string, HeaderTone>();

async function resolveProjectTone(project: Project): Promise<HeaderTone> {
  if (project.headerTone === 'light' || project.headerTone === 'dark') {
    return project.headerTone;
  }

  const cached = toneCache.get(project.id);
  if (cached) return cached;

  const imageLum = await sampleImageLuminance(project.image);
  const blended = blendLuminance(imageLum, project.filterColor, project.filterOpacity);
  const tone = toneFromLuminance(blended);
  toneCache.set(project.id, tone);
  return tone;
}

/**
 * Tracks which parallax panel sits under the sticky header and returns
 * a contrast-safe text tone (`light` = white text, `dark` = black text).
 */
export function useActivePanelTone(projects: Project[]): HeaderTone {
  const [tone, setTone] = useState<HeaderTone>('dark');

  useEffect(() => {
    let cancelled = false;
    const projectById = new Map(projects.map((p) => [p.id, p]));

    // Prefetch tones for all panels
    void Promise.all(projects.map((p) => resolveProjectTone(p)));

    const pickActive = () => {
      const headerHeight = 72;
      const probeY = headerHeight / 2;
      const panels = Array.from(document.querySelectorAll<HTMLElement>('.parallax-panel'));

      let active: HTMLElement | null = null;
      for (const panel of panels) {
        const rect = panel.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          active = panel;
          break;
        }
      }

      // Footer / past last panel → dark text on white page
      if (!active) {
        if (!cancelled) setTone('dark');
        return;
      }

      const id = active.id;
      const project = projectById.get(id);
      if (!project) {
        if (!cancelled) setTone('dark');
        return;
      }

      void resolveProjectTone(project).then((next) => {
        if (!cancelled) setTone(next);
      });
    };

    pickActive();
    window.addEventListener('scroll', pickActive, { passive: true });
    window.addEventListener('resize', pickActive);

    return () => {
      cancelled = true;
      window.removeEventListener('scroll', pickActive);
      window.removeEventListener('resize', pickActive);
    };
  }, [projects]);

  return tone;
}
