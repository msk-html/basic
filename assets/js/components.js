document.addEventListener('DOMContentLoaded', function () {
    fetch('../assets/components/curriculum.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('curriculum').innerHTML = data;
        });
    
});