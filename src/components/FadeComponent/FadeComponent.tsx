import React, { useState, useEffect } from "react";
import type { FadeComponentProps } from "./types";
import clx from "classnames";

const FadeComponent: React.FC<FadeComponentProps> = ({ show, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!isVisible && !isAnimating) return null;

  return (
    <div className={clx(isAnimating ? "fade-in" : "fade-out", "fade")}>
      {children}
    </div>
  );
};

export default FadeComponent;
