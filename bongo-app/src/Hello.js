document.getElementById("menuBtn").addEventListener("click", function () {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.classList.contains("hidden")) {
        menuItems.classList.remove("hidden");
    } else {
        menuItems.classList.add("hidden");
    }
});