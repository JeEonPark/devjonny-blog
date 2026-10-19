"use client";

import { useEffect } from "react";

// Marks the document once the first page has rendered. CSS uses the attribute
// to skip entrance animations on later client-side navigations (e.g. language
// switches), so the page does not flash each time.
export default function FirstLoadMarker() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.documentElement.setAttribute("data-navigated", "");
    }, 900);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
