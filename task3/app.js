'use strict'

document.getElementById('showTextBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showText();
});

function showText() {
    const resultText = document.getElementById('resultText');
    const inputText = document.getElementById('inputText').value;
    
    const styleBold = document.getElementById('bold').checked ? 'bold ' : '';
    const styleUnderline = document.getElementById('underline').checked ? 'underline ' : '';
    const styleItalic = document.getElementById('italic').checked ? 'italic ' : '';
    
    const alignValue = document.querySelector('input[name="align"]:checked');
    let textAlign = alignValue ? alignValue.id : '';

    resultText.style.fontWeight = styleBold;
    resultText.style.textDecoration = styleUnderline;
    resultText.style.fontStyle = styleItalic;
    resultText.style.textAlign = textAlign;

    resultText.textContent = inputText;
 
}
