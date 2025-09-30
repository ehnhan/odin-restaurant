import odinImage from "./odin.svg";

const createHome = function() {
    const home = document.createElement("div");
    home.className = "home_area";
    const header = document.createElement("div");
    header.className = "home_header";
    const image = document.createElement("img");
    image.src = odinImage;
    const name = document.createElement("h1");
    name.innerText = "Odin Bar and Grill"

    header.appendChild(image);
    header.appendChild(name)
    home.appendChild(header);

    const home_info_area = document.createElement("div");
    home_info_area.className = "home_info_area"
    const home_description = document.createElement("div");
    home_description.className = "description_container"
    home_description.innerText = "We serve good food and have indoor and outdoor seating. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, ipsum iure. Deleniti laboriosam expedita sequi mollitia! Tempora corporis temporibus non iure ab ipsum, recusandae animi nostrum quidem dolores libero quaerat! ";
    home_info_area.appendChild(home_description);

    const hours_container = document.createElement('div');
    hours_container.className = 'hours_container';
    const hoursHeader = document.createElement('h2');
    hoursHeader.innerText = 'Hours';
    const hoursList = document.createElement('ul');
    const sunday = document.createElement('li');
    sunday.textContent = 'Sunday: 8am - 9pm';
    const monday = document.createElement('li');
    monday.textContent = 'Monday: CLOSED';
    const tuesday = document.createElement('li');
    tuesday.textContent = 'Tuesday: 11am - 8pm';
    const wednesday = document.createElement('li');
    wednesday.textContent = 'Wednesday: 11am - 8pm';
    const thursday = document.createElement('li');
    thursday.textContent = 'Thursday: 11am - 8pm';
    const friday = document.createElement('li');
    friday.textContent = 'Friday: 11am - 11pm';
    const saturday = document.createElement('li');
    saturday.textContent = 'Saturday: 11am - 11pm';

    hoursList.append(sunday, monday, tuesday, wednesday, thursday, friday, saturday);
    hours_container.appendChild(hoursHeader);
    hours_container.appendChild(hoursList);
    home_info_area.append(hours_container);

    const location_container = document.createElement("div");
    location_container.className = "location_container"
    const location_header = document.createElement('h2');
    const location_info = document.createElement('p');
    location_header.innerText = "Location";
    location_info.innerText = "123 Thunder Drive, Cloud, Olympus";
    location_container.appendChild(location_header);
    location_container.appendChild(location_info);
    home_info_area.appendChild(location_container);    

    home.appendChild(home_info_area);

    const contentArea = document.querySelector("#content");
    contentArea.appendChild(home);
};

export { createHome };
