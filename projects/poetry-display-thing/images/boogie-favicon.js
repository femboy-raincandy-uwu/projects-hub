// boogie-favicon.js
// I had chatgpt do this cuz I still dont know JS

// Create an array of frame file paths
const frames = [];
for (let i = 1; i <= 11; i++) {
    frames.push(`../../images/frame${i}.png`);
}

// Ensure a favicon link exists in the <head>
function ensureFaviconLink() {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    document.head.appendChild(link);
  }
  link.id = "favicon";
  return link;
}

// Initialize favicon animation
(function animateFavicon() {
  const favicon = ensureFaviconLink();
  let frameIndex = 0;

  setInterval(() => {
    favicon.href = frames[frameIndex];
    frameIndex = (frameIndex + 1) % frames.length;
  }, 100); // Adjust frame speed (ms)
})();
