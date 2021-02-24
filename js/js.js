var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.list-container');
var containerMenu = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', () =>{



	if(activador){
		menu.style.left = '0';
		menu.style.transition = "0.5s";

	activador=false;

	}else{
		activador=false;

		menu.style.left = '-100%';
		menu.style.transition = "0.5s";

		activador=true;
	}

});

var enlaces = document.querySelectorAll('.lists li a')

enlaces.forEach( (element) => {

	element.addEventListener('click', (event) => {

		enlaces.forEach((link) => {

			link.classList.remove('activo');
		});

		event.target.classList.add('activo');

	});

});

var prevScrollPos = window.pageYOffset;
var goTop = document.querySelector(".go-Top");

window.onscroll = () =>{

	var currenScrollPos = window.pageYOffset;

	if (prevScrollPos > currenScrollPos){

		containerMenu.style.top = "0";
		containerMenu.style.transition = "0.5s";

	}else{
		containerMenu.style.top = "-60px";
		containerMenu.style.transition = "0.5s";
	}

	prevScrollPos = currenScrollPos;




	var arriba = window.pageYOffset;

	if (arriba <= 600){

		containerMenu.style.borderBottom = "none";
		
		goTop.style.right = "-100%";


	}else{
		containerMenu.style.borderBottom = "5px solid #ff2e63";
		
		goTop.style.right = "0";
		goTop.style.transition = "0.5s";
		
	}

}

goTop.addEventListener('click', () =>{

	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

});


var verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () =>{

	document.body.scrollTop = 600;
	document.documentElement.scrollTop = 600;
});
