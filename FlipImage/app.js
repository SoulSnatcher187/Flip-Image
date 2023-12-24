function displayImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    const errorMessage = document.getElementById('errorMessage');
    const images = document.querySelectorAll('.image img');

    if (imageUrl) {
        images.forEach(image => {
            image.src = imageUrl;
            image.style.transform = ''; 
        });
        errorMessage.textContent = ''; 
    } else {
        errorMessage.textContent = 'Please enter a valid image URL.';
    }
}

function resetImages() {
    const images = document.querySelectorAll('.image img');
    const errorMessage = document.getElementById('errorMessage');
    const imageUrlInput = document.getElementById('imageUrl');

    images.forEach(image => {
        image.src = 'watermelon.jpg'; 
    });

    errorMessage.textContent = '';
    imageUrlInput.value = '';
}