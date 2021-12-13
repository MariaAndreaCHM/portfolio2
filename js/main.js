let ubicacionPrincipal = window.pageYOffset; //0

AOS.init();

window.addEventListener("scroll", function(){
  let desplazamientoActual = window.pageYOffset; //180
  if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
      document.getElementsByTagName("nav")[0].style.top = "0px"
  }else{
      document.getElementsByTagName("nav")[0].style.top = "-100px"
  }
  ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
  if(semaforo){
      document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
      semaforo= false;
  }else{
      document.querySelectorAll(".hamburguer")[0].style.color ="#000";
      semaforo= true;
  }

  enlacesHeader.classList.toggle("menudos")
})

const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});