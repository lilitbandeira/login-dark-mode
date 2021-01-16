const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
window
.getComputedStyle(element)
.getPropertyValue(style)

const initialColors = {
    bkDark: getStyle(html, "--bk-dark"),
    bkLight: getStyle (html, "--bk-light"),
    transLight: getStyle(html, "--trans-light"),
    bkImg: getStyle(html, "--bk-img"),
    luz: getStyle(html, "--luz"),
    sombra: getStyle(html, "--sombra"),
    link: getStyle(html, "--link"),
}

const lightMode = {
    bkDark: "rgba(223, 224, 224, 1)",
    bkLight: "rgba(69, 71, 71, 1)",
    transLight: "rgba(69, 71, 71, .6)",
    bkImg: "url(/estudando-css/bg-wave2.png)",
    /*luz: "#F567DD",
    sombra: "#A8008C",
    link: "#F567DD",*/
}

const transformKey = (key) => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )}

checkbox.addEventListener('change', ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})