document.getElementById('displayButton').addEventListener('click', function () {
    const input = document.getElementById('innerText').value;
    const output = document.getElementById('outputText');
    if (input.trim() === '') {
        output.textContent = '入力が空です。';
    } else {
        output.textContent = `入力されたテキスト: ${input}`;
    }
});
