const urls = {
    "Youtube": "https://www.youtube.com/channel/UCQTU3FwHwScKeO22L1rI8xQ",
    "Discord": "jax.syntax",
    "Instagram": "https://www.instagram.com/jaxsyntax/"
};

document.querySelectorAll("#nav-buttons > button").forEach((button) => {
    const button_name = button.getAttribute("title");
    button.addEventListener("click", () => {
        if (urls[button_name].startsWith("https://")) {
            window.open(urls[button_name]);
        } else {
            window.alert(`My username for this platform is: ${urls[button_name]}`)
        }
        console.log(`${urls[button_name]}`)
    });
});

const theme_toggle = document.querySelector("#toggle-mode");

theme_toggle.addEventListener("click", () => {
    let theme = document.querySelector("html").getAttribute("data-theme");
    if (theme == "dark") { theme = "light"; }
    else if (theme == "light") { theme="dark"; }
    document.querySelector("html").setAttribute("data-theme", theme);
});

console.log("js done");