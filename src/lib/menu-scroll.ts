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

export function runWhenMenuScrollUnlocked(callback: () => void) {
  let frame: number | undefined;
  let observer: MutationObserver | undefined;

  const cleanup = () => {
    observer?.disconnect();
    observer = undefined;
    if (frame !== undefined) window.cancelAnimationFrame(frame);
    frame = undefined;
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
      callback();
    });
  };

  const schedule = () => {
    if (frame !== undefined) return;
    frame = window.requestAnimationFrame(check);
  };

  schedule();

  return cleanup;
}
