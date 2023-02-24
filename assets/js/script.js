const close = document.getElementsByClassName("close");
const ul = document.getElementById("myUL");
const trash = document.querySelector(".trash");
const sum = document.querySelector(".count");
var list = document.querySelector('ul');
let count = 0;
window.onload = function () {
    document.getElementById("myInput").focus();
}
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});

function newElement() {
    var li = document.createElement("li");
    var input = document.getElementById("myInput");
    var t = document.createTextNode(input.value);
    li.appendChild(t);
    if (input.value === "" || input.value === "  ") {
        alert("You must write something!");
        input.focus();
    } else {
        ul.appendChild(li);
        count++;
    }
    input.value = "";
    sum.innerHTML = count;
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            count--;
            sum.innerHTML = count;
        }
    }
}
trash.addEventListener("click", function () {
    ch = ul.childNodes;

    if (ch.length < 1) {
        alert("list is empty");
    } else {
        ul.innerHTML = ""
    }
    count = 0;
    sum.innerHTML = count;
});
