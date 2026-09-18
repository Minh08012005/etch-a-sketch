const container = document.getElementById('container');
const buttons = document.getElementById('btn-size');


function createGrid(size) {
    // 1. Xóa sạch nội dung cũ của container
    container.innerHTML = '';

    // 2. Tính kích thước 1 ô dựa trên biến 'size' truyền vào
    const squareSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
        square.addEventListener('mouseenter', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const colorCode = `rgb(${r}, ${g}, ${b})`;
            square.style.backgroundColor = colorCode;
        });
    }
}
createGrid(16);

buttons.addEventListener("click", () => {
    let newSize = Number(prompt("Enter the number of cells per side (maximum 100): "));
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter the number from 0 to 100!");
    }
});