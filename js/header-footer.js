document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            const links = document.querySelectorAll('.flex-item a');
            const currentURL = window.location.href.split(/[?#]/)[0];
            links.forEach(link => {
                if (link.href === currentURL) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading header:', error));

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});