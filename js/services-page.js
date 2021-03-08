window.addEventListener('load', function(event) {
    fetch('../data/services-page.json')
    .then(response => response.json())
    .then(data => {
        const services = data.services;
        const servicesElement = document.getElementById("services");
        services.forEach((service) => {
            const serviceFigure = document.createElement("figure");
            const serviceImage = document.createElement("img");
            serviceImage.setAttribute("src", service.image);
            serviceImage.setAttribute("alt", service.name);
            serviceFigure.append(serviceImage);
            const serviceFigcaption = document.createElement("figcaption");
            const serviceHeader = document.createElement("h2");
            const serviceHeaderText = document.createTextNode(service.name);
            serviceHeader.appendChild(serviceHeaderText);
            serviceFigcaption.append(serviceHeader);
            serviceFigure.append(serviceFigcaption);
            const serviceLink = document.createElement("a");
            serviceLink.setAttribute("href", "./service.html");
            serviceFigure.append(serviceLink);
            serviceFigcaption.append(serviceLink);
            const serviceElement = document.createElement("div");
            serviceElement.setAttribute("class", "service");
            serviceElement.append(serviceFigure);
            servicesElement.append(serviceElement);
        });
    });
});