let articles = document.querySelectorAll('article');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    articles.forEach(article => {
        let offset = article.offsetTop - 100;  // Zmniejszamy offset do 100
        let height = article.offsetHeight;
        let id = article.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
};
