let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;

    let printStr = setInterval(function () {
        document.querySelector(".span-title").innerHTML += arrFromStr[i];
        i++;
        if (i === arrFromStr.length - 1) {
            clearInterval(printStr);
            setTimeout(() => {
                document.querySelector(".span-title").innerHTML = "";
                writing(str);
            }, 2000);



        }
    }, 100);
}


writing("Web developer Junior ");

let cont = 0, cond = false;

let menu_short = document.querySelector(".menu_short");
let all = document.querySelector(".cont_all");
function menu() {
    if (cont == 0 && cond == false) {
        document.querySelector(".menu_open").classList.replace("notOpac", 'opac');
        document.querySelector(".menu_close").classList.replace("opac", 'notOpac');
        cont++;
    } else if (cont == 1 && cond == true) {
        document.querySelector(".menu_open").classList.replace('opac', "notOpac");
        document.querySelector(".menu_close").classList.replace('notOpac', "opac");
        cont++;
    }

    menu_short.classList.toggle("hidden");
    all.classList.toggle("hidden");
    document.body.classList.toggle("hide_all");
    document.querySelector(".title").classList.toggle("show-border");
    cond = true;
    if (cont == 2) {
        cont = 0;
        cond = false;
    }
}