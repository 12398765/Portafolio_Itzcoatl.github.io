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


/**
new Glider(document.querySelector(".carousel__listaProyects"), {
    slidesToShow: 1,    //número de elementos a mostrar
    slidesToScroll: 1,  //Número de elementos al hacer scroll
    draggable: true,
    rewind: true,
    dots: '.carousel__indicadoresProyecto',
    arrows: {
        prev: '.carousel__anteriorProject',
        next: '.carousel__siguienteProject'
    },
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 4,
                itemWidth: 150,
                duration: 0.25
            }
        }
    ]
});
 */

window.addEventListener("load", () => {
    let opciones = {
        slidesToShow: 1,    //número de elementos a mostrar
        slidesToScroll: 1,  //Número de elementos al hacer scroll
        draggable: false,
        rewind: true,
        dots: '.carousel__indicadoresProyecto',
        arrows: {
            prev: '.carousel__anteriorProject',
            next: '.carousel__siguienteProject'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ]
    };
    slider = new Glider(document.querySelector(".carousel__listaProyects"), opciones);
    //carrousel infinito automático
    let actual = 0;
    const conteo = slider.track.childElementCount;
    let two = 775, three = 1000;
    if (screen.width < two) {
        max_bars = conteo
    }

    else if (screen.width >= two && screen.width < three) {
        if (conteo % 2 > 0) {
            max_bars = Math.trunc(conteo / 2) + 1;
        } else max_bars = (conteo / 2);
    } else if (screen.width > three) {
        if (conteo % 3 > 0) {
            max_bars = Math.trunc(conteo / 3) + 1;
        } else max_bars = (conteo / 3);
    }

    let timeout = null;
    slider.scrollItem(actual);
    console.log(screen.width);

    function deslizar(milisegs) {
        timeout = setTimeout(() => {
            if (actual < conteo - 1) {
                actual++;
            }
            else {
                actual = 0;
            }

            slider.scrollItem(actual);

            if (screen.width >= two && actual == max_bars) {
                slider.scrollItem(conteo);
                setTimeout(() => {
                    slider.scrollItem(0);
                }, 2500);
            }





        }, milisegs);
    }
    slider.ele.addEventListener("glider-animated", function () {
        actual = slider.slide;
        window.clearInterval(timeout);
        deslizar(2500);
    });

});

