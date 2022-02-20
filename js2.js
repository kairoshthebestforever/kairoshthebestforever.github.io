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
//click to sign up(for register)
document.getElementById('check').onclick = function () {
    let login = document.getElementById('register').value;
    let pass = document.getElementById('pass').value;
    let pass2 = document.getElementById('pass2').value;

    if (pass != pass2 && login == "") {
        alert("Password mismatch, you did not write anithing")
    }
    else if (pass == pass2 && login == "") {
        alert("empty login")
    }
    else if (pass != pass2 && login != "") {
        alert("Password mismatch!")
    }
    else alert("Registration succesfull")
}
function login() {
    let usern = document.getElementById('usern').value;
    let passw = document.getElementById('passw').value;

    if (passw == "" && usern == "") {
        alert(" you did not write anithing")
    }
    else if (passw != "" && usern == "") {
        alert("empty login")
    }
    else if (passw == "" && usern != "") {
        alert("empty password")
    }
    else alert("succesfull login")
}
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
    document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style='background:grey'>" + textToFind + "</a>"); //Заменяем найденный текст ссылками с якорем;
    lastResFind = textToFind;
    window.location = '#' + textToFind;
}