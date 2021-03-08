window.addEventListener('load', function(event) {
    fetch('../data/projects-page.json')
    .then(response => response.json())
    .then(data => {
        const projects = data.projects;
        const projectsElement = document.getElementById("projects");
        projects.forEach((project) => {
            const projectFigure = document.createElement("figure");
            const projectImage = document.createElement("img");
            projectImage.setAttribute("src", project.image);
            projectImage.setAttribute("alt", project.name);
            projectFigure.append(projectImage);
            const projectFigcaption = document.createElement("figcaption");
            const projectHeader = document.createElement("h2");
            const projectHeaderText = document.createTextNode(project.name);
            projectHeader.appendChild(projectHeaderText);
            projectFigcaption.append(projectHeader);
            projectFigure.append(projectFigcaption);
            const projectLink = document.createElement("a");
            projectLink.setAttribute("href", "./project.html");
            projectFigure.append(projectLink);
            projectFigcaption.append(projectLink);
            const projectElement = document.createElement("div");
            projectElement.setAttribute("class", "project");
            projectElement.append(projectFigure);
            projectsElement.append(projectElement);
        });
    });
});