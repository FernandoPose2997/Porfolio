let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("JavaScript");
        habilidades[1].classList.add("HTML-CSS");
        habilidades[2].classList.add("Wordpress");
        habilidades[3].classList.add("React");
        habilidades[4].classList.add("Comunicación");
        habilidades[5].classList.add("Trabajo-equipo");
        habilidades[6].classList.add("Liderazgo");
        habilidades[7].classList.add("Dedicación");
    }
}



window.onscroll = function(){
    efectoHabilidades();
}