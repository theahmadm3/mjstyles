const searchIcon = document.querySelector('.search img');
const searchInput = document.querySelector('.search input');

searchIcon.addEventListener('click', function () {
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';
        document.body.style.filter = 'blur(5px)';
    } else {
        searchInput.style.display = 'none';
        document.body.style.filter = 'none';
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth <= 700) {
        searchIcon.style.display = 'block';
        searchInput.style.display = 'none';
    } else {
        searchIcon.style.display = 'block';
        searchInput.style.display = 'block';
        document.body.style.filter = 'none';
    }
});
