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
        alert("The entered phrase was not found");
        return;
    }
    if (textToFind == "") {
        alert("You didn't enter anything");
        return;
    }

    if (document.body.innerHTML.indexOf(textToFind) == "-1")
        alert("Nothing was found, check the correctness of the input!");

    if (copy_page.length > 0)
        document.body.innerHTML = copy_page;
    else copy_page = document.body.innerHTML;


    document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");
    document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style='background:grey'>" + textToFind + "</a>");
    lastResFind = textToFind;
    window.location = '#' + textToFind;
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