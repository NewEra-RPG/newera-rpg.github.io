const CLOSED_CLASS = "closed"

const navigationToggle = document.getElementsByClassName("navigation-toggle").item(0)
const main = document.getElementsByTagName("main").item(0)
const navigation = document.getElementsByTagName("nav").item(0)


navigationToggle.addEventListener("click", (_) => navigation.classList.toggle(CLOSED_CLASS))

const closeNavigation = (_) => navigation.classList.add(CLOSED_CLASS)

const observer = new ResizeObserver((_) => {
    if(main.clientWidth < 1200) {
        navigation.classList.add(CLOSED_CLASS)
        main.addEventListener("click", closeNavigation)
        main.addEventListener("touchmove", closeNavigation)
    } else {
        navigation.classList.remove(CLOSED_CLASS)
        main.removeEventListener("click", closeNavigation)
        main.removeEventListener("touchmove", closeNavigation)
    }
});

observer.observe(main)
