const menuJSON = require('./menu.json');
console.log(menuJSON);

class MenuItem {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    createHtml() {
        let item = document.createElement("div");
        let itemName = document.createElement("h2");
        itemName.innerText = this.name;
        
        let itemDescription = document.createElement("p");
        itemDescription.innerText = this.description
        
        let itemPrice = document.createElement("div");
        itemPrice.innerText = `$${this.price}`;

        item.appendChild(itemName);
        item.appendChild(itemDescription);
        item.appendChild(itemPrice);

        return item;
    }
}

const parseMenu = function() {
    let items = [];
    menuJSON["menu"].forEach((i) => {
        console.log(i);
        let item = new MenuItem(i["name"], i["description"], i["price"]);
        items.push(item);
    });
    console.log(items);
    return items;
}

const menuItems = parseMenu();

const createMenu = function() {
    const menu = document.createElement("div");
    const header = document.createElement("h1");
    header.innerText = "Menu";
    menu.appendChild(header);

    const items = document.createElement("div");
    menuItems.forEach(item => {
        let itemHTML = item.createHtml();
        items.appendChild(itemHTML);
    });
    menu.appendChild(items);

    const contentArea = document.querySelector("#content");
    contentArea.appendChild(menu);
};

export { createMenu };
