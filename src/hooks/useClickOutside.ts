import { useRef, useEffect } from "react";

export default function useClickOutside<T extends HTMLElement = HTMLElement>(
  callback: () => void
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        ref.current instanceof HTMLElement &&
        !ref.current.contains(event.target as Node)
      ) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
}
