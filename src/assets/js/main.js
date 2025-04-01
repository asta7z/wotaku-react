document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    var trans = 'transparent';
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#1a1a1a';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)'
    }
    else {
        header.style.backgroundColor = `${trans}`;
        header.style.borderBottomColor = `${trans}`;
    }
});