document.getElementById('innerText').addEventListener('input', function () {
    const input = this.value;
    const displayArea = document.getElementById('displayArea');

    // 要素がすでに存在する場合は更新
    let textElement = displayArea.querySelector('.draggable');
    if (!textElement) {
        // 新しい要素を作成
        textElement = document.createElement('div');
        textElement.classList.add('draggable');
        textElement.style.position = 'absolute';
        textElement.style.left = '10px';
        textElement.style.top = '10px';
        displayArea.appendChild(textElement);

        // ドラッグ可能に設定
        makeDraggable(textElement);
    }

    // テキストを更新
    textElement.textContent = input;
});

function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            element.style.left = `${e.clientX - offsetX - element.parentElement.getBoundingClientRect().left}px`;
            element.style.top = `${e.clientY - offsetY - element.parentElement.getBoundingClientRect().top}px`;
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
}
