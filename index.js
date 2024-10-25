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

const clearGrid = () => {
  container.innerHTML = "";
};

const createGrid = (size) => {
  clearGrid();
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

const bwButton = document.querySelector(".bwToggle");
let bwToggle = false;

bwButton.addEventListener("click", (event) => {
  bwToggle = !bwToggle;
});

const fillPixel = (selection) => {
  if (selection.classList.contains("filled")) {
    selection.style.opacity = `${
      Number.parseFloat(selection.style.opacity) + 0.1
    }`;
  } else {
    selection.classList.add("filled");
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    if (bwToggle) {
      selection.style.backgroundColor = "black";
      bwButton.textContent = "Black fill";
    } else {
      selection.style.backgroundColor = `${randomColor}`;
      bwButton.textContent = "Colour fill";
    }
    selection.style.opacity = "0.1";
  }
};
const resetButton = document.querySelector(".reset-grid");
const resetGrid = (size) => {
  createGrid(size);
};

const render = (size) => {
  clearGrid();
  createGrid(size);
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (event) => {
      console.log(event.currentTarget);
      fillPixel(event.currentTarget);
    });
  });
};
render(16);

resetButton.addEventListener("click", (event) => {
  let newSize = prompt(
    "Please enter new size for your grid:",
    "Min 1, Max 100"
  );
  if (0 < Number.parseInt(newSize) && Number.parseInt(newSize) <= 100) {
    render(newSize);
  } else if (newSize === null) {
  } else {
    alert("Wrong input! Please try again");
  }
});
