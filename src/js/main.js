const printButton = document.querySelector('.print-btn');
const downloadButton = document.querySelector('.download-btn');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            downloadButton.style.display = 'none';
        } else {
            downloadButton.style.display = 'block';
        }
    });
}, {
    threshold: 0.1
});

if (printButton) {
    observer.observe(printButton);
} else {
    console.error('Element .print-btn tidak ditemukan');
}