const createMenu = function() {
    const menu = document.createElement("div");
    const item = document.createElement("div");
    item.innerText = "Menu";
    menu.appendChild(item);

    const contentArea = document.querySelector("#content");
    contentArea.appendChild(menu);
};

export { createMenu };
