import observer, { update, scheduleUpdate, setConfig } from "./observer";

(() => {
  const config = {
    attributes: true,
    attributeFilter: ["class"],
    characterData: true,
    childList: true,
    subtree: true,
  };

  new MutationObserver(observer).observe(document.documentElement, config);

  scheduleUpdate();

  window.tailwindCSS = {
    refresh: update,
    setConfig: setConfig,
  };
})();
