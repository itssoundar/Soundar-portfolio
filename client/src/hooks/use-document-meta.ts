import { useEffect } from "react";

/**
 * Sets the browser tab title and description for the current page and
 * restores the previous values when the page unmounts (client-side routing).
 * Social-share previews are handled separately at build time (script/build.ts).
 */
export function useDocumentMeta(title: string, description: string, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const prevTitle = document.title;
    const descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = descEl?.content;
    document.title = title;
    if (descEl) descEl.content = description;
    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== undefined) descEl.content = prevDesc;
    };
  }, [title, description, enabled]);
}
