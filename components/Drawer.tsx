import { useEffect, useRef } from "react";

import styles from "./Drawer.module.css";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  position?: "right" | "bottom";
  children: React.ReactNode;
};

function Drawer({ isOpen, onClose, title, position = "right", children, }: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) { // !!! How to effeciently set and unset these... ? !!!
      document.body.style.top = "0px";
      document.body.style.left = "0px";
      document.body.style.right = "0px";
      document.body.style.position = "fixed";
      // document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "contain";
      document.body.style.scrollbarWidth = "thin";
      document.body.style.scrollbarColor = "hsl(240 5.9% 90%) transparent";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.position = "";
      // document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
      document.body.style.scrollbarWidth = "";
      document.body.style.scrollbarColor = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.drawer} ${position === "bottom" ? styles.bottom : ""}`}
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {
          title
          &&
          <div className={styles.header}>
            <h2>{ title }</h2>
          </div>
        }

        <div className={styles.content}>
          { children }
        </div>
      </div>
    </div>
  );
}

export default Drawer;