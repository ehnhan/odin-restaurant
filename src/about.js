const createAbout = function() {
    const about = document.createElement("div");

    const header = document.createElement("div");
    header.className = "home_header";
    const title = document.createElement("h1");
    title.innerText = "About";
    header.appendChild(title);

    about.appendChild(header);

    const about_info_area = document.createElement("div");
    about_info_area.className = "about_info_area"
    const about_description = document.createElement("div");
    about_description.className = "description_container"
    about_description.innerText = "We opened in 2025. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, ipsum iure. Deleniti laboriosam expedita sequi mollitia! Tempora corporis temporibus non iure ab ipsum, recusandae animi nostrum quidem dolores libero quaerat! ";
    about_info_area.appendChild(about_description);

    const contact_container = document.createElement("div");
    contact_container.className = "contact_container"
    const contact_header = document.createElement('h2');
    const contact_info = document.createElement('p');
    contact_header.innerText = "Contact Us";
    contact_info.innerText = "555-555-5555 \n perfectlyRealEmail@notFake.com";
    contact_container.appendChild(contact_header);
    contact_container.appendChild(contact_info);
    about_info_area.appendChild(contact_container);   

    about.appendChild(about_info_area)

    const contentArea = document.querySelector("#content");
    contentArea.appendChild(about);
};

export { createAbout };
