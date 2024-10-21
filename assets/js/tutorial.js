
const all_editors_pre = document.querySelectorAll('.editor > pre');

all_editors_pre.forEach(preEl => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    copyButton.onclick = function () { copyToClipboard(this); };

    const previewButton = document.createElement('button');
    previewButton.className = 'preview-button';
    previewButton.textContent = 'Preview';
    previewButton.onclick = function () { preview_open(this); };

    preEl.appendChild(copyButton);
    preEl.appendChild(previewButton);
});

function copyToClipboard(button) {
    var preElement = button.closest('pre');
    var codeElement = preElement.querySelector('code');

    var textarea = document.createElement('textarea');
    textarea.value = codeElement.innerText
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');


    document.body.appendChild(textarea);
    textarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'Copied!' : 'Failed to copy!';
        button.textContent = msg;
    } catch (err) {
        console.error('Failed to copy:', err);
        alert("Failed to copy the text. Please try again.");
    } finally {
        document.body.removeChild(textarea);
        setTimeout(function () {
            button.textContent = 'Copy'; 
        }, 2000);
    }
}

function preview_open(button) {
    var preElement = button.closest('pre');
    var previewEl = preElement.nextElementSibling;

    preElement.classList.toggle('hide');
    previewEl.classList.toggle('show');

    if (previewEl.classList.contains('show')) {
        var codeElement = preElement.querySelector('code');
        var htmlCode = codeElement.innerText.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        previewEl.innerHTML = htmlCode; 
    } else { previewEl.innerHTML = ""; }
}