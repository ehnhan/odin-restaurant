import odinImage from "./odin.svg";

const createHome = function() {
    const home = document.createElement("div");
    const image = document.createElement("img");
    image.src = odinImage;
    home.appendChild(image);

    const contentArea = document.querySelector("#content");
    contentArea.appendChild(home);
};

export { createHome };
