// Image error handling
const handleImageError = (img) => {
    img.src = 'https://via.placeholder.com/250x250?text=Image+Error';
    img.classList.add('error');
};

// Add error handling to all service images
document.addEventListener('DOMContentLoaded', () => {
    const serviceImages = document.querySelectorAll('.service-img');
    serviceImages.forEach(img => {
        img.onerror = () => handleImageError(img);
        
        // Check if image is loaded
        if (!img.complete || img.naturalWidth === 0) {
            handleImageError(img);
        }
    });
});
