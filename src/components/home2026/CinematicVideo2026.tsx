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
  const hasErrorRef = useRef(false);
  const playFrameRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(eager);
  const [showPoster, setShowPoster] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    visibleRef.current = false;
    retryCountRef.current = 0;
    hasErrorRef.current = false;
    setIsLoaded(eager);
    setShowPoster(true);
    setHasError(false);
  }, [asset.src, eager]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || isLoaded) return;

    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsLoaded(true);
      },
      { rootMargin: "1400px 900px", threshold: 0.01 },
    );

    loader.observe(shell);
    return () => loader.disconnect();
  }, [isLoaded]);

  useEffect(() => {
    const shell = shellRef.current;
    const video = videoRef.current;
    if (!shell || !video || !isLoaded) return;

    let disposed = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clearRetry = () => {
      if (retryRef.current !== null) {
        window.clearTimeout(retryRef.current);
        retryRef.current = null;
      }
    };
    const clearPlayFrame = () => {
      if (playFrameRef.current !== null) {
        window.cancelAnimationFrame(playFrameRef.current);
        playFrameRef.current = null;
      }
    };
    const pauseVideo = () => {
      clearRetry();
      clearPlayFrame();
      video.pause();
    };
    const primeVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.controls = false;
      video.loop = true;
      video.playsInline = true;
      video.preload = "auto";
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
    };
    const queueRetry = (reload = false) => {
      clearRetry();
      clearPlayFrame();
      if (disposed || !visibleRef.current || retryCountRef.current >= 5) return;

      retryCountRef.current += 1;
      retryRef.current = window.setTimeout(() => {
        if (reload && video.readyState < 2) video.load();
        requestPlayback();
      }, 450);
    };
    const requestPlayback = () => {
      if (disposed || !visibleRef.current || document.hidden || reducedMotion || hasErrorRef.current) return;

      primeVideo();
      clearPlayFrame();
      playFrameRef.current = window.requestAnimationFrame(() => {
        playFrameRef.current = null;
        if (disposed || !visibleRef.current || document.hidden || hasErrorRef.current) return;

        const playPromise = video.play();

        if (playPromise) {
          playPromise.catch(() => queueRetry(false));
        }
      });
    };

    primeVideo();
    video.load();

    const player = new IntersectionObserver(
      ([entry]) => {
        const shouldPlay =
          Boolean(entry?.isIntersecting) &&
          (entry?.intersectionRatio ?? 0) >= 0.01;

        visibleRef.current = shouldPlay;

        if (!shouldPlay || reducedMotion) {
          retryCountRef.current = 0;
          pauseVideo();
          return;
        }

        requestPlayback();
      },
      { rootMargin: "260px 120px", threshold: [0, 0.01, 0.12, 0.25, 0.5, 0.75] },
    );
    const handleCanPlay = () => requestPlayback();
    const handleLoadedData = () => {
      if (visibleRef.current) requestPlayback();
    };
    const handlePlaying = () => {
      hasErrorRef.current = false;
      retryCountRef.current = 0;
      clearRetry();
      setHasError(false);
      setShowPoster(false);
    };
    const handlePause = () => {
      if (visibleRef.current && !document.hidden && !reducedMotion && !video.ended) {
        queueRetry(false);
      }
    };
    const handleStalledPlayback = () => {
      if (!visibleRef.current) return;
      queueRetry(false);
    };
    const handleError = () => {
      if (retryCountRef.current < 5) {
        queueRetry(true);
        return;
      }

      hasErrorRef.current = true;
      setHasError(true);
      setShowPoster(true);
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
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    video.addEventListener("stalled", handleStalledPlayback);
    video.addEventListener("waiting", handleStalledPlayback);
    video.addEventListener("error", handleError);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    player.observe(shell);

    return () => {
      disposed = true;
      clearRetry();
      clearPlayFrame();
      player.disconnect();
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("stalled", handleStalledPlayback);
      video.removeEventListener("waiting", handleStalledPlayback);
      video.removeEventListener("error", handleError);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.pause();
    };
  }, [isLoaded, asset.src, eager]);

  return (
    <figure
      ref={shellRef}
      className={`home2026-video-frame ${className}`.trim()}
      aria-label={asset.label}
      data-video-state={!showPoster && !hasError ? "playing" : "poster"}
    >
      <video
        ref={videoRef}
        poster={asset.poster}
        autoPlay={eager}
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
      >
        {isLoaded ? <source src={asset.src} type="video/mp4" /> : null}
      </video>
      <img src={asset.poster} alt={asset.alt} loading={eager ? "eager" : "lazy"} decoding="async" />
    </figure>
  );
}
