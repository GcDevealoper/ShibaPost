//Darkmode functions
let body = document.querySelector('body');

load();

function load(){
	const Darkmode = localStorage.getItem('Darkmode');

	if (!Darkmode) {
		store('false');
	}else if (Darkmode == 'true') {
		body.classList.add('Darkmode');
	}
}

function store(value){
	localStorage.setItem('Darkmode', value);
}


//Darkmode listener
let Theme = document.getElementById('ChangeMode');//el boton para activar el darkmode
Theme.addEventListener("click", ()=>{


});
