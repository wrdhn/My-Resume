const actionButtons = document.querySelector(".action-buttons");
const floatingDownload = document.querySelector(".floating-btn.download");
const floatingPrint = document.querySelector(".floating-btn.print");

function toggleFloatingButtons(isVisible) {
  if (floatingDownload) floatingDownload.style.display = isVisible ? "none" : "flex";
  if (floatingPrint) floatingPrint.style.display = isVisible ? "none" : "flex";
}

function setupObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        toggleFloatingButtons(entry.isIntersecting);
      });
    },
    {
      threshold: 0.1,
    }
  );

  if (actionButtons) {
    observer.observe(actionButtons);
  } else {
    console.error("Element .action-buttons tidak ditemukan");
  }
}

setupObserver();
