"use client";

import { useEffect } from "react";

const DisableFeatures = () => {
  useEffect(() => {
    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    const disableCopy = (e) => {
      e.preventDefault();
    };

    const disableInspect = (e) => {
      if (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "i" || e.key === "j")) {
        e.preventDefault();
      }
      if (e.keyCode === 123) { // F12 key
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("copy", disableCopy);
    document.addEventListener("keydown", disableInspect);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("keydown", disableInspect);
    };
  }, []);

  return null;
};

export default DisableFeatures;
