var modal = document.getElementById("srcModal");
var btn = document.getElementById("srcBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById("srcBtnCopy").addEventListener("click", function () {
    var sourceCodeElement = document.getElementById("sourceCode");
    var range = document.createRange();
    range.selectNode(sourceCodeElement);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    alert("Source code copied to clipboard!");
});

const themeToggleBtn = document.getElementById("themeMode");
const root = document.documentElement;
themeToggleBtn.addEventListener("click", function () {
    root.classList.toggle("dark-mode");
});
