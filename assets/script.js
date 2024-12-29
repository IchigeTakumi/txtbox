document.getElementById('displayButton').addEventListener('click', function () {
    const input = document.getElementById('innerText').value;
    const displayArea = document.getElementById('displayArea');
    if (input.trim() !== '') {
        const newElement = document.createElement('p');
        newElement.textContent = input;
        newElement.classList.add('draggable');
        newElement.style.position = 'absolute';
        newElement.style.left = '10px';
        newElement.style.top = '10px';
        displayArea.appendChild(newElement);
        makeDraggable(newElement);
    }
});
