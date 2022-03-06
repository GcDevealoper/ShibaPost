
//MenuOpenonClick

	
	var inicio = document.getElementById('Inicio');
	var comida = document.getElementById('Comida');
	var features = document.getElementById('Caracteristicas');
	var histori = document.getElementById('Historia');

	var showStatus = "Inicio";
	var comidaBtn = document.querySelector('.Food');
	var indexBtn = document.querySelector('.Index');
	var featuresBtn = document.querySelector('.Carac');
	var historiBtn = document.querySelector('.Histori');

	function showIndex(){

		if(showStatus == "Comida"){

			comida.classList.add('hidden');
			indexBtn.classList.add('hidden');

			featuresBtn.classList.remove('hidden');
			comidaBtn.classList.remove('hidden');
			historiBtn.classList.remove('hidden');
			inicio.classList.remove('hidden');
			showStatus = "Inicio";

		} else if (showStatus == "Features"){

			indexBtn.classList.add('hidden');
			features.classList.add('hidden');

			inicio.classList.remove('hidden');
			comidaBtn.classList.remove('hidden');
			historiBtn.classList.remove('hidden');
			featuresBtn.classList.remove('hidden');
			showStatus = "Inicio";
			
		} else if (showStatus == "History") {

			indexBtn.classList.add('hidden');
			histori.classList.add('hidden');

			historiBtn.classList.remove('hidden');
			comidaBtn.classList.remove('hidden');
			featuresBtn.classList.remove('hidden');
			inicio.classList.remove('hidden');
			showStatus = "Inicio";

		}
	}

	function showComida(){
		if (showStatus == "Inicio"){

			inicio.classList.add('hidden');
			historiBtn.classList.add('hidden');
			comidaBtn.classList.add('hidden');
			featuresBtn.classList.add('hidden');

			comida.classList.remove('hidden');
			indexBtn.classList.remove('hidden');
			showStatus = "Comida";

		} 
	}

	function showFeatures(){

		if(showStatus == "Inicio"){

			historiBtn.classList.add('hidden');
			comidaBtn.classList.add('hidden');
			featuresBtn.classList.add('hidden');
			inicio.classList.add('hidden');

			features.classList.remove('hidden');
			indexBtn.classList.remove('hidden');
			showStatus = "Features";

		}
	}

	function showHistory(){

		if (showStatus == "Inicio") {

			historiBtn.classList.add('hidden');
			comidaBtn.classList.add('hidden');
			featuresBtn.classList.add('hidden');
			inicio.classList.add('hidden');

			indexBtn.classList.remove('hidden');
			histori.classList.remove('hidden');
			showStatus = "History";

		}
	}

	comidaBtn.addEventListener("click", () => {
		showComida();
	});

	indexBtn.addEventListener("click", () =>{

		showIndex();
	})


	featuresBtn.addEventListener("click", () =>{

		showFeatures();
	})

	historiBtn.addEventListener("click", () =>{

		showHistory();
	})