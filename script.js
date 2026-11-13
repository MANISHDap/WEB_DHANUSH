function showPage(pageId, button) {

    let pages = document.querySelectorAll("section");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    document.querySelectorAll("nav button").forEach(function(btn) {
        btn.classList.remove("selected");
    });

    if(button) {
        button.classList.add("selected");
    } else {
        document.querySelectorAll("nav button").forEach(function(btn) {
            if(btn.textContent.trim() ===
                pageId.charAt(0).toUpperCase() + pageId.slice(1)) {
                btn.classList.add("selected");
            }
        });
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onload = function() {
    alert("Welcome to Dhanush C H's Personal Website!");
};
