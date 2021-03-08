window.addEventListener('load', function(event) {
    fetch('../data/about-us-page.json')
    .then(response => response.json())
    .then(data => {
        const pageData = data.pageData;
        const whoWeAreElement = document.getElementById("who-we-are-text");
        const whoWeAreTextNode = document.createTextNode(pageData.whoWeAre);
        whoWeAreElement.appendChild(whoWeAreTextNode);
        const aboutUsElement = document.getElementById("about-us-text");
        const aboutUsTextNode = document.createTextNode(pageData.aboutUs);
        aboutUsElement.appendChild(aboutUsTextNode);
        const aboutUsImageElement = document.getElementById("about-use-image");
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", pageData.aboutUsImage);
        imageElement.setAttribute("alt", "About Us");
        aboutUsImageElement.append(imageElement);
        const team = data.team;
        const uiTeam = team.filter((member) => member.teamId === "ui");
        const uxTeam = team.filter((member) => member.teamId === "ux");
        const feTeam = team.filter((member) => member.teamId === "fe");
        const beTeam = team.filter((member) => member.teamId === "be");
        addTeamSection("UI Team", uiTeam, "ui");
        addTeamSection("UX Team", uxTeam, "ux");
        addTeamSection("Frontend Team", feTeam, "fe");
        addTeamSection("Backend Team", beTeam, "be");
        const mosaicImages = data.mosaicImages;
        const mosaicElement = document.getElementById("about-us-mosaic");
        mosaicImages.forEach((image, index) => {
            const tileElement = document.createElement("div");
            tileElement.setAttribute("class", "our-office-grid-tile");
            const tileImageElement = document.createElement("img");
            tileImageElement.setAttribute("src", image);
            tileImageElement.setAttribute("alt", "Tile " + (index + 1));
            tileElement.append(tileImageElement);
            mosaicElement.append(tileElement);
        });
    });
});




function addTeamSection(title, team, teamId) {
    const teamSectionElement = document.createElement("div");
    teamSectionElement.setAttribute("id", teamId + "-team");
    teamSectionElement.setAttribute("class", "our-team-section");
    const teamSectionHeaderElement = document.createElement("H3");
    teamSectionHeaderElement.setAttribute("class", "our-team-section-header");
    const teamSectionHeaderTextElement = document.createTextNode(title);
    teamSectionHeaderElement.appendChild(teamSectionHeaderTextElement);
    teamSectionElement.append(teamSectionHeaderElement);
    const teamSectionMembersElement = document.createElement("div");
    teamSectionMembersElement.setAttribute("class", "our-team-section-blocks");
    teamSectionElement.append(teamSectionMembersElement);
    team.forEach((teamMember) => {
        const teamMemberFigure = document.createElement("figure");
        const teamMemberImage = document.createElement("img");
        teamMemberImage.setAttribute("src", teamMember.logo);
        teamMemberImage.setAttribute("alt", teamMember.name);
        teamMemberFigure.append(teamMemberImage);
        const teamMemberFigcaption = document.createElement("figcaption");
        const teamMemberHeader = document.createElement("h2");
        const teamMemberHeaderText = document.createTextNode(teamMember.name);
        teamMemberHeader.appendChild(teamMemberHeaderText);
        teamMemberFigcaption.append(teamMemberHeader);
        teamMemberFigure.append(teamMemberFigcaption);
        const teamMemberElement = document.createElement("div");
        teamMemberElement.setAttribute("class", "our-team-section-block member");
        teamMemberElement.append(teamMemberFigure);
        teamSectionMembersElement.append(teamMemberElement);
    });
    const teamElement = document.getElementById("our-team");
    teamElement.append(teamSectionElement);
}