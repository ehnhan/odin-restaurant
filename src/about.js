const createAbout = function() {
    const about = document.createElement("div");
    const item = document.createElement("div");
    item.innerText = "About";
    about.appendChild(item);

    const contentArea = document.querySelector("#content");
    contentArea.appendChild(about);
};

export { createAbout };
