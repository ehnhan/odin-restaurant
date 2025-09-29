import "./styles.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";

const navFunctions = {"home": createHome, "menu": createMenu};

createHome();

const nav = document.querySelector("nav");
nav.addEventListener("click", function(e) {
    const contentArea = document.querySelector("#content");
    contentArea.innerHTML = "";

    const source = e.target.dataset.name;
    navFunctions[source]();

    // createMenu();
});