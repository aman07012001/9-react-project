import { useEffect } from "react";

function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) return;
      return handler(false);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) return;
      return handler(false);
    }
  }, [ref, handler]);
}

export default useOutsideClick;
