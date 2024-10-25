const body = document.body;
const container = document.createElement("div");
container.classList.add("container");

if (window.innerHeight > window.innerWidth) {
  container.style.width = "90vw";
  container.style.height = "90vw";
} else {
  container.style.width = "90vh";
  container.style.height = "90vh";
}
body.appendChild(container);
console.log("Container generated");

const createGrid = (size) => {
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    const pixelSize = 100 / size;
    pixel.style.minWidth = `${pixelSize}%`;
    pixel.style.minHeight = `${pixelSize}%`;
    container.appendChild(pixel);
  }
};

const random = (number) => {
  return Math.floor(Math.random() * number);
};

const fillPixel = (selection) => {
  if (selection.classList.contains("filled")) {
    selection.style.opacity = `${
      Number.parseFloat(selection.style.opacity) + 0.1
    }`;
  } else {
    selection.classList.add("filled");
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    selection.style.backgroundColor = `${randomColor}`;
    selection.style.opacity = "0.1";
  }
};

createGrid(16);
const pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", (event) => {
    console.log(event.currentTarget);
    fillPixel(event.currentTarget);
  });
});
