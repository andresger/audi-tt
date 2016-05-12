/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


sliderInt = 1;
sliderNext = 2;
descargar = 1;

$(document).ready(function () {
    $("#slider > img#1").fadeIn(900);
    $("#p" + sliderInt).css("background-color", "#535353");

    startSlider();

//el slide se detiene cuando el cursor esta encima de las descargas
    $("#boton_descarga").hover(
            function () {
                stopSlider();
            },
            function () {
                startSlider();
            }
    );
    $("#boton_descarga > img#d1").fadeIn(900);

});

function startSlider() {
    count = $("#slider > img").size();
        cambiar_url();

    loop = setInterval(function () {
        if (sliderNext > count) {
            sliderNext = 1;
        }
        $("#slider > img").fadeOut(0);
        $(".botonpag").css("background-color", "#313131");
        $("#slider > img#" + sliderNext).fadeIn(900);
        $("#p" + sliderNext).css("background-color", "#535353");
        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    }, 3000);
}

function stopSlider() {
    window.clearInterval(loop);
}

function prev() {
    if (sliderInt > 1) {
        newSlide = sliderInt - 1;
    }
    else {
        newSlide = count;
    }
    showSlide(newSlide);
}

function next() {
    if (sliderInt < count) {
        newSlide = sliderInt + 1;
    }
    else {
        newSlide = 1;
    }
    showSlide(newSlide);
}

function showSlide(id) {
    stopSlider();
    if (id > count) {
        id = 1;
    }
    else if (id < 1) {
        id = count;
    }

    $("#slider > img").fadeOut(0);
    $(".botonpag").css("background-color", "#313131");
    $("#slider > img#" + id).fadeIn(900);
    $("#p" + id).css("background-color", "#535353");
    sliderInt = id;
    sliderNext = id + 1;
    cambiar_url();

    startSlider();
}

function nav(id) {
    stopSlider();
    $("#slider > img").fadeOut(0);
    $(".botonpag").css("background-color", "#313131");
    $("#slider > img#" + id).fadeIn(900);
    $("#p" + id).css("background-color", "#535353");
    sliderInt = id;
    sliderNext = id + 1;
    cambiar_url();

    startSlider();
}


function cambiar_url(){
    for(i = 1; i < 6; i++){
    url = "imagenes/slider/wallpapers/op"+i+"/slide"+sliderInt+".jpg";
    document.getElementById("sm"+i).href = url;
    }
}