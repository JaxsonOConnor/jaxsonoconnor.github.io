const urls = {
    "Youtube": "https://www.youtube.com/channel/UCQTU3FwHwScKeO22L1rI8xQ",
    "TikTok": "https://www.tiktok.com/@jaxsyntax",
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