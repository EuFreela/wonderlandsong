import { useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';

type Props = {
  project: Project;
};

/**
 * Fixed-background parallax panel.
 *
 * Image panels: CSS `background-attachment: fixed`.
 * Video panels: fixed media clipped by the section (“window”) so scroll
 * transitions match the image panels.
 */
function ParallaxProjectPanel({ project }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const isHashLink = project.href.startsWith('#');
  const label = project.buttonLabel?.trim();
  const showButton = Boolean(label);
  const useVideo = Boolean(project.video) && !prefersReducedMotion;
  const filterOpacity = Math.min(1, Math.max(0, project.filterOpacity ?? 0));
  const hasColorFilter = Boolean(project.filterColor) && filterOpacity > 0;

  const buttonClassName =
    'mt-6 inline-flex min-h-[38px] items-center justify-center bg-[#111] px-5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white transition duration-200 hover:bg-white hover:text-[#111] focus-visible:bg-white focus-visible:text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]';

  return (
    <section
      id={project.id}
      className={`parallax-panel relative flex min-h-[72vh] items-end overflow-hidden bg-cover bg-center bg-no-repeat ${useVideo ? 'parallax-panel--video' : ''}`}
      style={useVideo ? undefined : { backgroundImage: `url('${project.image}')` }}
      aria-label={project.title}
    >
      {useVideo ? (
        /*
          Clip + position:fixed reproduces background-attachment:fixed for video:
          the media stays pinned to the viewport while this section acts as a
          scrolling “window” over it.
        */
        <div className="parallax-media" aria-hidden>
          <div className="parallax-media__clip">
            <video
              className="parallax-media__fixed"
              src={project.video}
              poster={project.image}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      ) : null}

      {hasColorFilter ? (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ backgroundColor: project.filterColor, opacity: filterOpacity }}
          aria-hidden
        />
      ) : null}

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/[0.03] via-black/[0.06] to-black/30"
        aria-hidden
      />

      <div className="panel-content relative z-10 w-full px-[5vw] pb-[60px] max-md:px-5 max-md:pb-[34px]">
        <span className="mb-3.5 block w-fit max-w-full bg-white/95 px-3 py-1.5 text-[0.67rem] font-bold uppercase tracking-[0.14em] text-black/70">
          {project.category}
        </span>

        <h2 className="m-0 block w-fit max-w-full bg-white/95 px-3 py-2 text-[clamp(1.6rem,3vw,2.8rem)] font-medium leading-[1.08] text-[#222]">
          {project.title}
        </h2>

        {showButton ? (
          <div>
            {isHashLink ? (
              <a href={project.href} className={buttonClassName}>
                {label}
              </a>
            ) : (
              <Link to={project.href} className={buttonClassName}>
                {label}
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ParallaxProjectPanel;
