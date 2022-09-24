//arrays con palabras 
const animales=["zorro","leopardo","aguila","abeja","avestruz","lemur","gorila","avispa","bufalo","calamar","camaleon","cangrejo","canguro","castor","ciervo","colibri","conejo","cuervo","chimpance","escorpion","golondrina","hamster","hiena","halcon","hormiga","flamenco","jabali","koala","mapache","murcielago","nutria","paloma","rinoceronte","tiburon","tucan"]
const frutas=["manzana","pera","sandia","naranja","uva","papaya","mandarina","mango","guanabana","fresa","cereza","frambuesa","zarzamora","maracuya","melon","durazno","toronja","arandano","kiwi","litchi"]
const verduras=["apio","berenjena","betabel","brocoli","calabaza","cebolla","chicharo","maiz","frijol","espinaca","esparrago","zanahoria","tomate","lechuga","jitomate","pepino","patata","pimiento","guisantes","alcachofa"];
const programacion=["variable","alura","array","canvas","html","oracle","github","css","input","java","figma","codigo","python"]
const palabrasPersonalizadas=[];
//varibles globales
let palabraSecreta="";
let categoria=""
let errores=0;
let aciertos=0;
const palabraAgregada = document.getElementById('palabraAgregada');
const textoIngresado =document.querySelector(".ingresarTexto")
const imagen =id('muneco');
const listaBotones=document.querySelectorAll("bottonLetras input")
let letrasUtilizadas=[""]

//activacion de paneles
document.getElementById("aparece").style.display = "none";
document.getElementById("inicioJuego").style.display ="block";
document.getElementById("ganar").style.display ="none";
document.getElementById("perder").style.display ="none";
document.getElementById("nuevaPalabra").style.display ="none";


//funcion mostrar panel de agregar palabra
function llamarPanelagrgarPalabra(){
    document.getElementById("aparece").style.display = "none";
    document.getElementById("inicioJuego").style.display ="none";
    document.getElementById("nuevaPalabra").style.display ="block";
}

//verificar palabras agregadas
palabraAgregada.addEventListener('keydown', (evt) => {
    //permite borrar la pantalla
    
    if(evt.key == 'Backspace') return;
    //valida que no se utilizen caracteres especiales
    if(!/^[a-zA-Z]$/.test(evt.key)){
        evt.preventDefault();
        return;
    }
   

    //verifica que la pabra contenga menos de 10 letras
    if(palabraAgregada.value.length == 10){
        evt.preventDefault();
        palabraAgregada.value = palabraAgregada.value.substring(0, 10);
        
    }
  

});
function agregarPalabra(){
    if(palabraAgregada.value.length<=3){
        alert("Ingrese una palabra con minimo 3 letras ")
    }else{
    palabrasPersonalizadas.push(textoIngresado.value);
    textoIngresado.value=""
    }
    
}

//funciones botones categorias
function seleccionAnimales(){
    document.getElementById("inicioJuego").style.display = "none";
    document.getElementById("aparece").style.display = "block";
    escojerPalabraSecreta(animales)
    categoria=animales;

    botenesActivos()
}
function seleccionFrutas(){
    document.getElementById("inicioJuego").style.display = "none";
    document.getElementById("aparece").style.display = "block";
    escojerPalabraSecreta(frutas)
    categoria=frutas;
   
    botenesActivos()
}
function seleccionVerduras(){
    document.getElementById("inicioJuego").style.display = "none";
    document.getElementById("aparece").style.display = "block";
    escojerPalabraSecreta(verduras)
    categoria=verduras;
    botenesActivos()

}
function seleccionProgramacion(){
    document.getElementById("inicioJuego").style.display = "none";
    document.getElementById("aparece").style.display = "block";
    escojerPalabraSecreta(programacion)
    categoria=programacion;
    botenesActivos()
   
}
function seleccionpersonalizada(){
    document.getElementById("inicioJuego").style.display = "none";
    document.getElementById("aparece").style.display = "block";
    document.getElementById("nuevaPalabra").style.display = "none";
    escojerPalabraSecreta(palabrasPersonalizadas)
    categoria=palabrasPersonalizadas;
    botenesActivos()
}
// funcion volver al inicio
function home(){
    document.getElementById("inicioJuego").style.display = "block";
    document.getElementById("ganar").style.display = "none";
    document.getElementById("perder").style.display ="none";
    botenesActivos()
}

//funcion para escoger las palabras
function id(str){
    return document.getElementById(str);
}

function escojerPalabraSecreta(opcion){
    errores=0;
    aciertos=0;
    letrasUtilizadas=[]
    imagen.src='imagenes/muneco0.png';
    const parrafo =id ("palabraAdivinar");
    parrafo.innerHTML='';
    let palabra = opcion[Math.floor(Math.random() * opcion.length)]
    palabraSecreta = palabra
    const cantidadLetras = palabraSecreta.length
    console.log(palabraSecreta)
    for (let i=0;i<cantidadLetras;i++){
        const span =document.createElement('span');
        parrafo.appendChild(span);
    }
    
}
function escojerPalabraSecretaNueva(){
    errores=0;
    aciertos=0;
    botenesActivos()
 
    imagen.src='imagenes/muneco0.png';
    const parrafo =id ("palabraAdivinar");
    parrafo.innerHTML='';
    let palabra = categoria[Math.floor(Math.random() * categoria.length)]
    palabraSecreta = palabra
    const cantidadLetras = palabraSecreta.length
    console.log(palabraSecreta)
    for (let i=0;i<cantidadLetras;i++){
        const span =document.createElement('span');
        parrafo.appendChild(span);
    }
    
}

function deNuevo(){
    document.getElementById("perder").style.display ="none";
    document.getElementById("ganar").style.display ="none";
    document.getElementById("aparece").style.display ="block";
    botenesActivos()
    escojerPalabraSecretaNueva()

}

function vamosDeNuevo(){
    document.getElementById("inicioJuego").style.display = "block";
    document.getElementById("aparece").style.display = "none";
    botenesActivos()
}
function botenesActivos(){
    

    for(let i=0;i<letrasUtilizadas.length; i++){
        let a=letrasUtilizadas[i]
        console.log(a)
        const cambio=`imagenes/${a}.png`
        const imagenb =id(a);
        imagenb.src=cambio;
    }
    letrasUtilizadas=[]


}

function clickBotones(letra){
let usada=letrasUtilizadas.includes(letra)
    if(usada==true){
       alert
        }else{
            const cambio=`imagenes/opaco-${letra}.png`
            const imagenb =id(letra);
            imagenb.src=cambio;
            
            letrasUtilizadas.push(letra) 
            const guiones=document.querySelectorAll('#palabraAdivinar span')
            const letraSeleccionada=letra
            const palabraJugada=palabraSecreta
            let acerto =false;
            for (let i=0;i<palabraJugada.length;i++){
                 if(letraSeleccionada==palabraJugada[i]){
                    guiones[i].innerHTML=letraSeleccionada
                    aciertos++;
                    acerto=true;
                    
                 } 
               }
           if(acerto==false){
               errores++
               const source=`imagenes/muneco${errores}.png`
               const imagen =id('muneco');
               imagen.src=source;
           }
           if (errores==7){
             
               document.getElementById("aparece").style.display ="none";
               document.getElementById("perder").style.display ="block";
               alert("la palabra era "+palabraSecreta)
       
       
           }
           if ( aciertos==palabraJugada.length){
          
               document.getElementById("aparece").style.display ="none";
               document.getElementById("ganar").style.display ="block";
       
           }
       
       
       
          
       
            
        

        }
    
    

}



