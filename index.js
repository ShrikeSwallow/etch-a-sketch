const container = document.querySelector(".container");
console.log("Container assigned.");

const containerWidth = Number.parseInt(
  window.getComputedStyle(container).width
);

const createGrid = (size) => {
  console.log(containerWidth);

  for (let i = 0; i < Math.pow(size, 2); i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    const pixelSize = containerWidth / size;
    pixel.style.minWidth = `${pixelSize}px`;
    pixel.style.minHeight = `${pixelSize}px`;
    container.appendChild(pixel);
  }
};
createGrid(5);
