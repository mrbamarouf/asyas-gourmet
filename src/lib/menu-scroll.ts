function isIntroBlockingMenuScroll() {
  return (
    document.documentElement.classList.contains("asya-desktop-intro-lock") ||
    document.documentElement.classList.contains("asya-mobile-intro-lock") ||
    document.body.classList.contains("asya-desktop-intro-lock") ||
    document.body.classList.contains("asya-mobile-intro-lock") ||
    Boolean(document.querySelector(".desktop-intro-overlay, .mobile-intro-overlay"))
  );
}

export function centerMenuRailItem(
  rail: HTMLElement | null,
  item: HTMLElement | null,
  behavior: ScrollBehavior = "smooth",
) {
  if (!rail || !item) return;
  const railRect = rail.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();
  const horizontalOffset = itemRect.left - railRect.left - (railRect.width - itemRect.width) / 2;

  rail.scrollBy({ left: horizontalOffset, behavior });
}

export function runWhenMenuScrollUnlocked(callback: () => void | (() => void)) {
  let frame: number | undefined;
  let observer: MutationObserver | undefined;
  let callbackCleanup: (() => void) | undefined;

  const cleanup = () => {
    observer?.disconnect();
    observer = undefined;
    if (frame !== undefined) window.cancelAnimationFrame(frame);
    frame = undefined;
    callbackCleanup?.();
    callbackCleanup = undefined;
  };

  const watchForUnlock = () => {
    if (observer) return;
    observer = new MutationObserver(schedule);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      subtree: true,
    });
  };

  const check = () => {
    frame = undefined;
    if (isIntroBlockingMenuScroll()) {
      watchForUnlock();
      return;
    }
    observer?.disconnect();
    observer = undefined;
    frame = window.requestAnimationFrame(() => {
      frame = undefined;
      callbackCleanup = callback() ?? undefined;
    });
  };

  const schedule = () => {
    if (frame !== undefined) return;
    frame = window.requestAnimationFrame(check);
  };

  schedule();

  return cleanup;
}

export function scrollClickedMenuTargetIntoView(target: HTMLElement, behavior: ScrollBehavior) {
  target.scrollIntoView({ behavior, block: "start" });

  let canRealign = false;
  let cancelled = false;
  let frame: number | undefined;
  const timers: number[] = [];

  const cleanup = () => {
    cancelled = true;
    observer.disconnect();
    if (frame !== undefined) window.cancelAnimationFrame(frame);
    timers.forEach((timer) => window.clearTimeout(timer));
    window.removeEventListener("wheel", cancelForUserInput);
    window.removeEventListener("touchstart", cancelForUserInput);
    window.removeEventListener("pointerdown", cancelForUserInput);
    window.removeEventListener("keydown", cancelForUserInput);
  };

  const align = () => {
    frame = undefined;
    if (!canRealign || cancelled) return;
    const offset = target.getBoundingClientRect().top;
    if (Math.abs(offset) > 4) window.scrollBy({ top: offset, behavior: "auto" });
  };

  const scheduleAlignment = () => {
    if (!canRealign || cancelled || frame !== undefined) return;
    frame = window.requestAnimationFrame(align);
  };

  function cancelForUserInput() {
    cleanup();
  }

  const observer = new ResizeObserver(scheduleAlignment);
  observer.observe(document.body);

  window.addEventListener("wheel", cancelForUserInput, { passive: true });
  window.addEventListener("touchstart", cancelForUserInput, { passive: true });
  window.addEventListener("pointerdown", cancelForUserInput, { passive: true });
  window.addEventListener("keydown", cancelForUserInput);

  timers.push(
    window.setTimeout(
      () => {
        canRealign = true;
        scheduleAlignment();
      },
      behavior === "smooth" ? 650 : 0,
    ),
  );
  timers.push(window.setTimeout(cleanup, 2600));

  return cleanup;
}
