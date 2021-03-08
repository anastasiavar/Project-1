window.addEventListener('load', function(event) {
    fetch('../data/home-page.json')
    .then(response => response.json())
    .then(data => {
        const sliderImages = data.sliderImages;
        const sliderElement = document.getElementById("slider");
        sliderImages.forEach((image, index) => {
            const slideElement = document.createElement("div");
            slideElement.setAttribute("class", "slide");
            const slideImageElement = document.createElement("img");
            slideImageElement.setAttribute("src", image);
            slideImageElement.setAttribute("alt", "Slide " + (index + 1));
            slideElement.append(slideImageElement);
            sliderElement.append(slideElement);
        });
        const sliderOptions = { autoPlay: true, autoPlayInterval: 5000 };
        initSlider(sliderOptions);
        const mosaicImages = data.mosaicImages;
        const mosaicElement = document.getElementById("home-page-mosaic");
        mosaicImages.forEach((image, index) => {
            const tileElement = document.createElement("div");
            tileElement.setAttribute("class", "home-page-grid-tile");
            const tileImageElement = document.createElement("img");
            tileImageElement.setAttribute("src", image);
            tileImageElement.setAttribute("alt", "Tile " + (index + 1));
            tileElement.append(tileImageElement);
            mosaicElement.append(tileElement);
        });
    });
});