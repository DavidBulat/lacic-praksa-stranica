document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".navtekst");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const page = item.getAttribute("data-page");
            window.location.href = page;
        });
    });
});
