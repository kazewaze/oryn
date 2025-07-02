import { useEffect, useRef, useState } from "react";

import styles from "./Drawer.module.css";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: "right" | "bottom" | "auto";
};

export default function Drawer({
  isOpen,
  onClose,
  title,
  position = "auto",
  children,
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [closing, setClosing] = useState(false);
  const [effectivePosition, setEffectivePosition] = useState<"right" | "bottom">("right");
  const touchStart = useRef<number | null>(null);
  const scrollY = useRef<number>(0);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => { // Position Detection for Drawer-Scroll Bug Fix.
    const determinePosition = () => {
      if (position === "auto") {
        setEffectivePosition(window.innerWidth < 768 ? "bottom" : "right");
      } else {
        setEffectivePosition(position);
      }
    };

    determinePosition();
    window.addEventListener("resize", determinePosition);
    return () => window.removeEventListener("resize", determinePosition);
  }, [position]);

  useEffect(() => { // Animation/Rendering Control.
    if (isOpen) {
      setShouldRender(true);
      setClosing(false);
    } else if (shouldRender) {
      setClosing(true);
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!shouldRender) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !drawerRef.current) return;

      const focusableEls = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl?.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl?.focus();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = effectivePosition === "bottom"
                           ? e.touches[0].clientY
                           : e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStart.current === null) return;

      const current = effectivePosition === "bottom"
                      ? e.touches[0].clientY
                      : e.touches[0].clientX;

      const delta = current - touchStart.current;

      if (delta > 75) {
        onClose();
        touchStart.current = null;
      }
    };

    scrollY.current = window.scrollY;
    lastFocusedElement.current = document.activeElement as HTMLElement;

    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", trapFocus);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    setTimeout(() => {
      drawerRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY.current);

      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", trapFocus);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);

      lastFocusedElement.current?.focus();
    };
  }, [shouldRender, effectivePosition, onClose]);

  if (!shouldRender) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={`
          ${styles.drawer}
          ${effectivePosition === "bottom" ? styles.bottom : styles.right}
          ${closing ? (
            effectivePosition === "bottom" ? styles.slideOutBottom : styles.slideOutRight
          ) : ""}
        `}
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Drawer"}
        tabIndex={-1}
      >
        {
          title && (
            <div className={styles.header}>
              <h2>{title}</h2>
            </div>
          )
        }
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}