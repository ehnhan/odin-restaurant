import "./styles.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";

const navFunctions = {"home": createHome, "menu": createMenu, "about": createAbout};

createHome();

const nav = document.querySelector("nav");
nav.addEventListener("click", function(e) {
    const source = e.target.dataset.name;
    if (source != undefined) {
        const contentArea = document.querySelector("#content");
        contentArea.innerHTML = "";

        navFunctions[source]();
    }

    // createMenu();
});