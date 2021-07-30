$('.owl-carousel').owlCarousel({
    loop:true, /*infinito ou finito*/
    margin:10, /*espaço entre as imagens*/
    nav:false, /* setinha de navegacao*/
    responsive:{ /* se adequar ao tamanho da tela*/
        0:{
            items:1 /*abaixo de 600p apena uma imagem*/
        },
        600:{
            items:3 /*abaixo de 1000p apena 3 imagens*/
        },
        1000:{
            items:5 /* de 1000p ou mais 5 imagens*/
        }
    }
})