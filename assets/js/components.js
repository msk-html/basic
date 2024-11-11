document.addEventListener('DOMContentLoaded', function () {
    fetch('../assets/components/curriculum.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('curriculum').innerHTML = data;
        });
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('../assets/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
});

const curriculum = document.getElementById('curriculum');

function curriculum_open_btn() {
    curriculum.style.width = '300px';
    curriculum.style.display = 'block';
}

function curriculum_close_aside() {
    curriculum.style.width = '0';
    curriculum.style.display = 'none';    
}
