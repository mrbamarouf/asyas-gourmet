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
  const visibleRef = useRef(false);
  const retryRef = useRef<number | null>(null);
  const retryCountRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(eager);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    visibleRef.current = false;
    retryCountRef.current = 0;
    setIsLoaded(eager);
    setIsPlaying(false);
    setHasError(false);
  }, [asset.src, eager]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || isLoaded) return;

    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsLoaded(true);
      },
      { rootMargin: "560px 0px", threshold: 0.01 },
    );

    loader.observe(shell);
    return () => loader.disconnect();
  }, [isLoaded]);

  useEffect(() => {
    const shell = shellRef.current;
    const video = videoRef.current;
    if (!shell || !video || !isLoaded) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clearRetry = () => {
      if (retryRef.current !== null) {
        window.clearTimeout(retryRef.current);
        retryRef.current = null;
      }
    };
    const pauseVideo = () => {
      clearRetry();
      video.pause();
    };
    const pauseCompetingVideos = () => {
      document.querySelectorAll<HTMLVideoElement>(".home2026-video-frame video").forEach((other) => {
        if (other !== video) other.pause();
      });
    };
    const queueRetry = (showPoster = true) => {
      if (showPoster) setIsPlaying(false);
      clearRetry();
      if (!visibleRef.current || retryCountRef.current >= 3) return;

      retryCountRef.current += 1;
      retryRef.current = window.setTimeout(requestPlayback, 900);
    };
    const requestPlayback = () => {
      if (!visibleRef.current || reducedMotion || hasError) return;

      pauseCompetingVideos();
      video.muted = true;
      video.defaultMuted = true;
      video.controls = false;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");

      const playPromise = video.play();

      if (playPromise) {
        playPromise.catch(queueRetry);
      }
    };

    video.muted = true;
    video.defaultMuted = true;
    video.controls = false;
    video.playsInline = true;
    video.preload = eager ? "auto" : "metadata";
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.load();

    const player = new IntersectionObserver(
      ([entry]) => {
        const shouldPlay =
          Boolean(entry?.isIntersecting) &&
          (entry?.intersectionRatio ?? 0) >= (eager ? 0.12 : 0.2);

        visibleRef.current = shouldPlay;

        if (!shouldPlay || reducedMotion) {
          retryCountRef.current = 0;
          pauseVideo();
          return;
        }

        requestPlayback();
      },
      { rootMargin: "0px", threshold: [0, 0.12, 0.2, 0.45, 0.7] },
    );
    const handleCanPlay = () => requestPlayback();
    const handlePlaying = () => {
      retryCountRef.current = 0;
      setHasError(false);
      setIsPlaying(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };
    const handleStalledPlayback = () => {
      if (!visibleRef.current) return;
      queueRetry(false);
    };
    const handleError = () => {
      if (retryCountRef.current < 3) {
        queueRetry();
        return;
      }

      setIsPlaying(false);
      setHasError(true);
      pauseVideo();
    };
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseVideo();
      } else {
        requestPlayback();
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    video.addEventListener("stalled", handleStalledPlayback);
    video.addEventListener("waiting", handleStalledPlayback);
    video.addEventListener("error", handleError);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    player.observe(shell);

    return () => {
      clearRetry();
      player.disconnect();
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("stalled", handleStalledPlayback);
      video.removeEventListener("waiting", handleStalledPlayback);
      video.removeEventListener("error", handleError);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.pause();
    };
  }, [isLoaded, asset.src, eager, hasError]);

  return (
    <figure
      ref={shellRef}
      className={`home2026-video-frame ${className}`.trim()}
      aria-label={asset.label}
      data-video-state={isPlaying && !hasError ? "playing" : "poster"}
    >
      <video
        ref={videoRef}
        poster={asset.poster}
        autoPlay={eager}
        muted
        loop
        playsInline
        preload={eager ? "auto" : "metadata"}
        controls={false}
        disablePictureInPicture
      >
        {isLoaded ? <source src={asset.src} type="video/mp4" /> : null}
      </video>
      <img src={asset.poster} alt={asset.alt} loading={eager ? "eager" : "lazy"} decoding="async" />
    </figure>
  );
}
