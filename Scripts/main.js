
	
	let inicio = document.getElementById('Inicio');
	let comida = document.getElementById('Comida');
	let features = document.getElementById('Caracteristicas');
	let histori = document.getElementById('Historia');
	const MainCard = document.getElementById('MainCard')
	let Status = "Index";
	let comidaBtn = document.querySelector('.Food');
	let indexBtn = document.querySelector('.Index');
	let featuresBtn = document.querySelector('.Carac');
	let historiBtn = document.querySelector('.Histori');

	const IndexInfo = `<div id="Inicio">
		<img class="profile" src="img/perfil.jpg">
		<h2>Shiba Inu </h2>
		<p>El shiba inu (柴犬) es el más pequeño de las seis originales y diferentes razas de perro de Japón. Es un perro pequeño y ágil que soporta muy bien el terreno montañoso, ya que fue originalmente criado para la caza. Es similar en apariencia al Akita Inu, aunque es mucho más pequeño en estatura. Es una de las pocas razas de perro antiguas que todavía existen en el mundo.</p>
	</div>`

  const HistoryInfo =`<div id="Historia">
 	   <img class="HeadImg" src="img/render4.png">
	   <h3>Historia de el Shiba Inu</h3>
	   <p>El shiba inu es una raza muy antigua, aunque pese a su antigüedad no está clasificada por la FCI dentro del grupo "perros primitivos", sino como "perros spitzs". Sus orígenes surgen en el Asia Meridional, registrándose los primeros indicios de la llegada de este perro al Japón sobre el año 2000 a. C. y eran descendientes de perros salvajes del Sur de China.<br><br>
	   Como la mayoría de los perros japoneses, fue utilizado en sus orígenes para la caza en las montañas muy accidentadas y pobladas del centro del país. También se usaba en bosques donde habitaba el faisán de montaña (el yamadori) y más presas de pluma e incluso pequeños mamíferos. Se dice que cazaba también zorros y corzos. El hábitat del shiba eran las áreas montañosas de la vertiente del mar del Japón.<br><br>
	   A finales del siglo XIX estuvo a punto de desaparecer al convertirse la caza en un deporte, hecho que facilitó la introducción en el país de perros de otras razas europeas, especialmente Setters y Pointers, y el cruce entre las diferentes razas, llegando a ser difícil encontrar un shiba puro. Por fortuna y gracias a la colaboración entre intelectuales y cazadores, se unieron esfuerzos para salvaguardar la raza y mantener líneas puras. En plena II Guerra Mundial de nuevo estuvo a punto de desaparecer la raza, pudiendo salvarse tres líneas de sangre: las San In Shiba, Mino Shiba y Shin Shu Shiba, siendo la última la más popular. A partir de estas tres líneas se desarrolló el shiba actual.<br><br>	
	   En 1920 se le aplicó el nombre de "shiba" a la raza (inu solo significa "perro" en japonés) y en 1934 se confeccionó el estándar de la raza, declarándose "monumento natural del Japón" tres años más tarde, hecho que demostraría el interés del pueblo japonés por preservar y proteger sus razas autóctonas caninas.<br><br>
	   <span>Gracias Wikipedia ☕</span></p>
	 </div>`

  const CaracteristicasInfo = `<div id="Caracteristicas">
		<img class="HeadImg" src="img/render4.png">

		<h3>Características</h3>
		<p>Este perro es muy buena mascota. El shiba inu es muy afectuoso con su amo, se le considera un buen perro de compañía y perro de aviso o guardián. Se llevan bien con los niños de la casa, siempre y cuando el animal sea respetado. Se lleva bien con las demás mascotas. Se adapta bien a la vida de apartamento o casa. Como contrapartida, pese a ser muy inteligente, puede tender a ignorar órdenes con más facilidad que otros "perros de familia". Este perro requiere ejercicio a menudo y debe ser cepillado de vez en cuando.<br><br>

		-Su cola alta, espesa y enroscada al dorso es uno de sus rasgos más característicos.<br><br>
		-Tiene el dorso del hocico recto y stop bien marcado. <br><br>
		-Tiene la frente ancha y las mejillas bien formadas. <br><br>
		-La nariz es oscura casi negra.<br><br> 
		-Posee ojos pequeños, triangulares con iris de color pardo oscuro.<br><br>
		-Tiene una dentadura sólida y que debe formar una mordida de tijera.<br><br>
		-La esperanza de vida del shiba inu se sitúa entre los 12 y los 15 años. 
		</p>
	 </div>`

  const ComidaInfo = `<div id="Comida">		
		<img class="HeadImg" src="img/render4.png">

		<h3>¿Con que puedo alimentarlo?</h3>
		<p>
		Los perros pequeños como el shiba inu tienen mayores necesidades energéticas que los perros de raza grande, ya que su metabolismo funciona mucho más rápido. Aunque cada perro tiene unas características específicas, el mejor pienso para shiba inu debe cumplir con los siguientes requisitos: 
		<br><br>
		<span># Completo y equilibrado</span><br><br>
		La mejor comida para shiba inu es un alimento específico para razas pequeñas que se adapte a sus necesidades calóricas y nutricionales: un pienso a base de proteínas animales y que garantice un aporte óptimo de grasas, carbohidratos, vitaminas y minerales.
		<br><br>
		<span># Ingredientes naturales y de calidad</span><br><br>
		Para evitar el desarrollo de alergias y trastornos digestivos, es importante que el pienso del shiba inu esté compuesto por ingredientes naturales y no contenga conservantes, colorantes, ni aromas artificiales.  
		<br><br>
		<span># Croquetas frescas</span><br><br>
		La comida del shiba inu debe presentarse en croquetas adaptadas al tamaño de la boca de este pequeño peludo. Además, unas croquetas frescas y crujientes favorecen la masticación y estimulan la salivación.  
		<br><br>
		<span># Alta palatabilidad</span><br><br>
		Los perros pequeños son muy caprichosos con la comida y valoran mucho su olor y su sabor. Por eso, un pienso para shiba inu debe ser muy apetecible y tener una alta palatabilidad, es decir, ser muy agradable al paladar  
		<br><br>
		<span>¿Cuál es el mejor pienso para shiba inu?</span><br><br>
		El mejor pienso para shiba inu debe ser un pienso para perros de raza pequeña que aporte la cantidad de calorías y nutrientes que este pequeño peludo necesita. Eso sí, a la hora de escoger la mejor comida para un shiba inu, no solo debemos tener en cuenta la raza, sino también otras variables como la edad, el género y el estilo de vida. Por eso, el equipo de veterinarios de Happets estudia las características y necesidades específicas de cada perro y formula un pienso único y personalizado para cada ejemplar. 

		</p></div>`

  const Links = `
  <div class="Links">
		<a class="Abutton Carac" href="#Top">Caracteristicas del shiba inu</a>
		<a class="Abutton Histori" href="#Top">Historia</a>
		<a class="Abutton Food" href="#Top">¿Con que puedo alimentarlo?</a>
  </div>
  <img class="footimg" src="img/render4.png">`

  const Links2 = `<div class="Links"><a class="Abutton Index" id="ReturnIndex" href="#Top">Volver al Inicio</a></div>`

MainCard.insertAdjacentHTML("afterbegin", IndexInfo);
