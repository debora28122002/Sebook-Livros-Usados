const imageInput = document.getElementById('file-input');
const myImage = document.getElementById('imgCamera');
const background = document.getElementById('background');
imageInput.addEventListener('change', function() {
const selectedImage = imageInput.files[0];
if (selectedImage) {
    const reader = new FileReader();
    reader.onload = function(event) {
        myImage.src = event.target.result;
        background.style.backgroundColor = 'white';
        background.style.border = '0px';
        background.style.borderRadius = '0px';
        background.style.padding = '0px';
        myImage.style.borderRadius='25px';
        myImage.style.width='126px'
        myImage.style.height='141px'
        myImage.style.border = '2px solid #4B311C';
    };
    reader.readAsDataURL(selectedImage);
}
});