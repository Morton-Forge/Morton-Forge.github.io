/**
 * Lightweight site behavior (ES module). Loaded on static pages that include this script.
 */
function setFooterYear() {
  const yearEl = document.querySelector("[data-current-year]");
  if (!yearEl) return;
  yearEl.textContent = String(new Date().getFullYear());
}

setFooterYear();
