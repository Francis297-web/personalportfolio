window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return; // prevents crashes if loader doesn't exist

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "opacity 0.8s ease";
    }, 3000);

});
