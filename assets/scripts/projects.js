// Paths for the Galleries
const galleries = {
    gallery1: ['assets/img/project-imgs/curve-expenses-project/dashboard.png', 'assets/img/project-imgs/curve-expenses-project/form.png', 'assets/img/project-imgs/curve-expenses-project/profile.png'],
    gallery2: ['assets/img/project-imgs/ow-music-player/img1.png', 'assets/img/project-imgs/ow-music-player/img2.png'],
};

let currentGallery = [];
let currentIndex = 0;
let isVideo = false;

// When clicking open button, grab the specific gallery you want, start at the beginning, check if video, show the content.
document.querySelectorAll('.openGallery').forEach(button => {
    button.addEventListener('click', function() {
        const galleryKey = this.getAttribute('data-gallery');
        currentGallery = galleries[galleryKey];
        currentIndex = 0;
        isVideo = false;
        showContent(currentIndex);
        document.getElementById('galleryOverlay').style.display = 'block';
        toggleArrows(true);
    });
});

// Displays the video, same as above but a bit streamlined.
document.getElementById('demo-button').addEventListener('click', function() {
    currentGallery = [];
    isVideo = true;
    document.getElementById('galleryOverlay').style.display = 'block';
    showContent();
    toggleArrows(false);
});

// Closes the gallery and pauses the video.
document.getElementById('closeGallery').addEventListener('click', function() {
    document.getElementById('galleryOverlay').style.display = 'none';
    const videoElement = document.getElementById('galleryVideo');
    videoElement.pause();
    videoElement.currentTime = 0;
});

// Scrolls left on the gallery
document.getElementById('prev').addEventListener('click', function() {
    if (!isVideo) {
        currentIndex = (currentIndex === 0) ? currentGallery.length - 1 : currentIndex - 1;
        showContent(currentIndex);
    }
});

// Scrolls right on the gallery
document.getElementById('next').addEventListener('click', function() {
    if (!isVideo) {
        currentIndex = (currentIndex === currentGallery.length - 1) ? 0 : currentIndex + 1;
        showContent(currentIndex);
    }
});

// Function to display the correct content
function showContent(index = 0) {
    const galleryImage = document.getElementById('galleryImage');
    const galleryVideo = document.getElementById('galleryVideo');
    const videoSource = document.getElementById('videoSource');

    if (isVideo) {
        galleryImage.style.display = 'none';
        galleryVideo.style.display = 'block';
        videoSource.src = 'assets/img/project-imgs/ow-remote-autopilot/remote-autopilot-demo.mp4';
        galleryVideo.load();
    } else {
        galleryImage.style.display = 'block';
        galleryVideo.style.display = 'none';
        galleryImage.src = currentGallery[index];
    }
}

// Function to toggle the visibility of arrows based on content type
function toggleArrows(show) {
    const prevArrow = document.getElementById('prev');
    const nextArrow = document.getElementById('next');
    
    if (show) {
        prevArrow.style.display = 'block';
        nextArrow.style.display = 'block';
    } else {
        prevArrow.style.display = 'none';
        nextArrow.style.display = 'none';
    }
}
