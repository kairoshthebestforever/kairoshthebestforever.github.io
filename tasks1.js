//sound bark
var pocik = document.getElementById('pocik'),
    pocikAudio = document.getElementById('pocikAudo');
pocik.addEventListener('click', fPlay, false);
function fPlay() {
    pocikAudio.play();
}
function Run() {
    var margin_left = 0;

    setInterval(function () {
        if (margin_left < window.screen.width - 200) {
            document.getElementById('text').style = "margin-left: " + margin_left + "px";
            margin_left = margin_left + 1;
        }
    }, 1)
}
// toTop click
window.onload = function () {
    var scrolled;
    var timer;
    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 100;
            timer = setTimeout(scrollToTop, 100);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}
//text open
var text = "You wandered into the fan page of Kairat Nurtas. Enjoy good content while we work on it ^^ ";
var delay = 100; // cкорость
var elem = document.getElementById("result");

var print_text = function (text, elem, delay) {
    if (text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function () {
                print_text(text.slice(1), elem, delay);
            }, delay
        );
    }
}
print_text(text, elem, delay);
var text = "thanks for getting to know me a little better, shawty. I am very happy about this event.";
var delay = 100; // cкорость
var elem = document.getElementById("result1");

var print_text = function (text, elem, delay) {
    if (text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function () {
                print_text(text.slice(1), elem, delay);
            }, delay
        );
    }
}
print_text(text, elem, delay);
//search
var lastResFind = "";
var copy_page = "";
function TrimStr(s) {
    s = s.replace(/^\s+/g, '');
    return s.replace(/\s+$/g, '');
}
function FindOnPage(inputId) {
    var obj = window.document.getElementById(inputId);
    var textToFind;

    if (obj) {
        textToFind = TrimStr(obj.value);
    } else {
        alert("Введенная фраза не найдена");
        return;
    }
    if (textToFind == "") {
        alert("Вы ничего не ввели");
        return;
    }

    if (document.body.innerHTML.indexOf(textToFind) == "-1")
        alert("Ничего не найдено, проверьте правильность ввода!");

    if (copy_page.length > 0)
        document.body.innerHTML = copy_page;
    else copy_page = document.body.innerHTML;


    document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");
    document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style='background:grey'>" + textToFind + "</a>");
    lastResFind = textToFind;
    window.location = '#' + textToFind;
}