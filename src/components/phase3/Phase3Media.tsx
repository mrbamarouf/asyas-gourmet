import { useEffect, useRef, useState } from "react";

export interface Phase3MediaAsset {
  src: string;
  poster: string;
  alt: string;
  label: string;
}

type Phase3PlaybackMode = "leader" | "visible";

interface RegisteredVideo {
  ratio: number;
  requestPlay: () => void;
  pause: () => void;
}

const registeredVideos = new Map<HTMLVideoElement, RegisteredVideo>();

function updatePlaybackLeader() {
  let leader: HTMLVideoElement | null = null;
  let bestRatio = 0.34;

  registeredVideos.forEach((entry, video) => {
    if (entry.ratio > bestRatio) {
      bestRatio = entry.ratio;
      leader = video;
    }
  });

  registeredVideos.forEach((entry, video) => {
    if (video === leader) entry.requestPlay();
    else entry.pause();
  });
}

export function Phase3Media({
  asset,
  className = "",
  eager = false,
  playback = "leader",
}: {
  asset: Phase3MediaAsset;
  className?: string;
  eager?: boolean;
  playback?: Phase3PlaybackMode;
}) {
  const shellRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldPlayRef = useRef(false);
  const visibilityRatioRef = useRef(eager ? 1 : 0);
  const retryRef = useRef<number | null>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || shouldLoad) return;

    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "700px 240px", threshold: 0 },
    );

    loader.observe(shell);
    return () => loader.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    const shell = shellRef.current;
    const video = videoRef.current;
    if (!shell || !video || !shouldLoad) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;

    const clearRetry = () => {
      if (retryRef.current !== null) {
        window.clearTimeout(retryRef.current);
        retryRef.current = null;
      }
    };

    const pause = () => {
      shouldPlayRef.current = false;
      clearRetry();
      video.pause();
    };

    const scheduleRetry = (delay = 350) => {
      clearRetry();
      retryRef.current = window.setTimeout(() => {
        if (!shouldPlayRef.current || disposed || document.hidden || hasError) return;
        video.muted = true;
        video.defaultMuted = true;
        void video.play().catch(() => undefined);
      }, delay);
    };

    const requestPlay = () => {
      if (disposed || (reducedMotion && playback === "leader") || document.hidden || hasError) {
        return;
      }
      shouldPlayRef.current = true;
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();

      playPromise?.catch(() => {
        scheduleRetry(450);
      });
    };

    if (playback === "leader") {
      registeredVideos.set(video, { ratio: eager ? 1 : 0, requestPlay, pause });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry?.isIntersecting ? (entry.intersectionRatio ?? 0) : 0;
        visibilityRatioRef.current = ratio;

        if (playback === "visible") {
          if (ratio >= 0.28) requestPlay();
          else if (!entry?.isIntersecting || ratio <= 0.08) pause();
          return;
        }

        const registered = registeredVideos.get(video);
        if (registered) {
          registered.ratio = ratio;
          updatePlaybackLeader();
        }
      },
      { rootMargin: "100px 0px", threshold: [0, 0.08, 0.28, 0.5, 0.75] },
    );

    const handlePlaying = () => {
      clearRetry();
      setHasError(false);
      setIsPlaying(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
      if (shouldPlayRef.current) scheduleRetry();
    };
    const handleCanPlay = () => {
      if (shouldPlayRef.current) requestPlay();
    };
    const handleStall = () => {
      if (shouldPlayRef.current) scheduleRetry(700);
    };
    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
      pause();
    };
    const handleVisibility = () => {
      if (document.hidden) {
        pause();
      } else if (playback === "visible") {
        if (visibilityRatioRef.current >= 0.28) requestPlay();
      } else {
        updatePlaybackLeader();
      }
    };

    observer.observe(shell);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("stalled", handleStall);
    video.addEventListener("error", handleError);
    document.addEventListener("visibilitychange", handleVisibility);
    if (playback === "leader") updatePlaybackLeader();

    return () => {
      disposed = true;
      clearRetry();
      observer.disconnect();
      if (playback === "leader") registeredVideos.delete(video);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("stalled", handleStall);
      video.removeEventListener("error", handleError);
      document.removeEventListener("visibilitychange", handleVisibility);
      video.pause();
      if (playback === "leader") updatePlaybackLeader();
    };
  }, [eager, hasError, playback, shouldLoad]);

  return (
    <figure
      ref={shellRef}
      className={`phase3-media ${className}`.trim()}
      aria-label={asset.label}
      data-media-state={isPlaying && !hasError ? "playing" : "poster"}
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
        {shouldLoad ? <source src={asset.src} type="video/mp4" /> : null}
      </video>
      <img
        src={asset.poster}
        alt={asset.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
      />
    </figure>
  );
}
