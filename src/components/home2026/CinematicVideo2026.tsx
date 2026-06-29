import { useEffect, useRef, useState } from "react";

export interface CinematicVideoAsset2026 {
  src: string;
  poster: string;
  alt: string;
  label: string;
}

interface CinematicVideo2026Props {
  asset: CinematicVideoAsset2026;
  className?: string;
  eager?: boolean;
}

export function CinematicVideo2026({
  asset,
  className = "",
  eager = false,
}: CinematicVideo2026Props) {
  const shellRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(eager);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || isLoaded) return;

    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsLoaded(true);
      },
      { rootMargin: "520px 0px", threshold: 0.01 },
    );

    loader.observe(shell);
    return () => loader.disconnect();
  }, [isLoaded]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const player = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || entry.intersectionRatio < 0.42 || reducedMotion) {
          video.pause();
          return;
        }

        video.play().catch(() => undefined);
      },
      { rootMargin: "80px 0px", threshold: [0, 0.42, 0.7] },
    );

    player.observe(video);
    return () => {
      player.disconnect();
      video.pause();
    };
  }, [isLoaded, asset.src]);

  return (
    <figure
      ref={shellRef}
      className={`home2026-video-frame ${className}`.trim()}
      aria-label={asset.label}
    >
      <video
        ref={videoRef}
        poster={asset.poster}
        muted
        defaultMuted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
      >
        {isLoaded ? <source src={asset.src} /> : null}
      </video>
      <img src={asset.poster} alt={asset.alt} loading={eager ? "eager" : "lazy"} decoding="async" />
    </figure>
  );
}
