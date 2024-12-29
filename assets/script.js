document.getElementById('innerText').addEventListener('input', function () {
    const inputText = this.value;
    const outerBox = this.parentElement;

    // 外側の箱内にリアルタイムで表示
    outerBox.textContent = inputText;

    // テキストボックスを再度追加
    outerBox.appendChild(this);
});
