		let pregunta;
		let valorRespuesta;
		let numPregunta = 0;
		let aciertos = 0;
		let idNumPregunta = document.getElementById('numPregunta');
		let idPreguntasTot = document.getElementById('PreguntasTotales');
		let minutos = document.getElementById('minutos');
		let segundos = document.getElementById('segundos');
		let seg = 0;
		let EtiquetaVidas = document.getElementById('vidas');
		let vidas = 3;
		let num = 1; //contandorDePreguntas En la parte de Arriba

		let porcentaje = document.querySelector('.item');
		let textPorcentaje = document.getElementById('Porcentaje');
		let ancho = 0;

		//Etiquetas fin de juego
		let fin = document.querySelector('.fin');
		let juego = document.querySelector('.ventanaJuego')
		let body = document.querySelector('.body');
		let titFin = document.getElementById('titulo-fin');
		let titDes = document.getElementById('descripcion-fin');
		let btnRenaudar = document.querySelector('.btn-renaudar');


		EtiquetaVidas.textContent = vidas;

		const finJuego = (resultado)=>{
			if (resultado == "perdiste") {
				ancho = aciertos * 10;
				porcentaje.style.width = `${ancho}%`;
				textPorcentaje.textContent = `${ancho}%`;
				juego.style.display = "none";
				body.style.background= "#aa0000";
				fin.style.display = "block";
			}else{
				ancho = aciertos * 10;
				textPorcentaje.textContent = `${ancho}%`;
				titFin.textContent = "FELICITACIONES";
				titDes.textContent = "¡Eres Todo un Genio!";
				btnRenaudar.style.color = "#00aa00";
				porcentaje.style.width = `${ancho}%`;
				porcentaje.style.background = `#008800`;
				juego.style.display = "none";
				body.style.background= "#00aa00";
				fin.style.display = "block";				
			}
		}

		let time = setInterval(()=>{
			let operacion = 60;
			if (seg == 0) {
				seg++;
			}else if(seg > 0 && seg < 51){
				minutos.textContent = "00";
				segundos.textContent = operacion-seg;
				seg++;
			}else if(seg >= 51 && seg < 61){
				segundos.textContent = `0${operacion-seg}`;
				seg++;
			}else if(seg == 61){
				segundos.textContent == "00";
				clearInterval(time);
				finJuego("perdiste");
			}
		},1000)

		idNumPregunta.textContent = num;



		let btns = document.querySelectorAll('.btns');

		btns.forEach(btn=>{
			btn.classList.add('activo');
		});

		const arrCulturaGeneral1 = ['1803','1779','1783','1832'];
		const arrCulturaGeneral2 = ['Toronto','Buffalo','Otawa','Nueva Dely'];
		const arrCulturaGeneral3 = ['1830','1903','1799','1803'];
		const arrCulturaGeneral4 = ['La Jirafa','El Gigantosaurio','La Ballena','El tiburon blanco'];
		const arrCulturaGeneral5 = ['10','14','12','16'];
		const arrCulturaGeneral6 = ['30 semanas','50 semanas','20 semanas','40 semanas'];
		const arrCulturaGeneral7 = ['Sarah','Ruth','Eva','Rachel'];
		const arrCulturaGeneral8 = ['Rusia','Estados Unidos','Israel','Reino Unido'];
		const arrCulturaGeneral9 = ['España','Italia','Francia','Alemania'];
		const arrCulturaGeneral10 = ['Hiroshima','Tokio','Nara','Sendai'];

		const respuestas = [arrCulturaGeneral1,arrCulturaGeneral2,arrCulturaGeneral3,arrCulturaGeneral4,arrCulturaGeneral5,arrCulturaGeneral6,arrCulturaGeneral7,arrCulturaGeneral8,arrCulturaGeneral9,arrCulturaGeneral10];

		const PreguntasCulturaGeneral = ['Año de Nacimiento del Libertador Simón Bolivar','Capital de Cánada','Año de Independencia de Venezuela','¿Cuál es el mamifero más Grande del Planeta?','¿Cuántos peones hay en el tablero al comienzo de una partida de Ajedrez','¿Qué duración aproximada tiene un embarazo humano en semanas?','¿Quién fue la madre de Cain y Abel?','¿Qué país desarrolló el avión de combate F-16?','¿Dónde nació el jugador de tenis Rafael Nadal?','¿En qué ciudad de Japón fue lanzada una bomba atómica?'];

		let todosNumAleatorios = [];
		let cantidadTotalPreguntas = PreguntasCulturaGeneral.length;

		const Aleatorio = ()=> {
			numPregunta = Math.floor(Math.random()*(0,cantidadTotalPreguntas));

			if (todosNumAleatorios.includes(numPregunta)) {
				Aleatorio();
			}else{
				todosNumAleatorios.push(numPregunta);
			}
					
		};

		Aleatorio();

		idPreguntasTot.textContent = PreguntasCulturaGeneral.length;


		const ContenedorPregunta = document.querySelector('.pregunta');

		ContenedorPregunta.textContent = PreguntasCulturaGeneral[numPregunta];

		for (let i = 0; i < btns.length; i++) {
			btns[i].value = respuestas[numPregunta][i];
		};

		const comprobacion = (numPregunta,valorRespuesta,e)=>{

					switch(numPregunta){
				 	case 0:
				 	CulturaGeneral1.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 	case 1:
				 	CulturaGeneral2.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 	case 2:
				 	CulturaGeneral3.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 	case 3:
				 	CulturaGeneral4.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 	case 4:
				 	CulturaGeneral5.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 	case 5:
				 	CulturaGeneral6.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 	case 6:
				 	CulturaGeneral7.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 	case 7:
				 	CulturaGeneral8.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 	case 8:
				 	CulturaGeneral9.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 	case 9:
				 	CulturaGeneral10.ComprobarRespuesta(valorRespuesta,e);
				 	break;
				 }
			};

			const SiguientePregunta = (ultimaPregunta)=>{

				num++;
				idNumPregunta.textContent = num;
				let paso3 = false;

				const tiempo3 = setInterval(()=>{
					if (paso3 == false) {
						paso3 = true;
						btns.forEach(btn=>{
							btn.classList.remove('error','correcto');
							btn.classList.add('activo');
						});
					}else{


						clearInterval(tiempo3);

						Aleatorio();
						
						pregunta = numPregunta;
						ContenedorPregunta.textContent = PreguntasCulturaGeneral[numPregunta];
							for (i = 0; i < btns.length; i++) {
							btns[i].value = respuestas[numPregunta][i];
							};
					}
				},200);	
			};


		btns.forEach(btn=>{
			btn.addEventListener('click',(e)=>{
				valorRespuesta = e.target.value;
				pregunta = ContenedorPregunta.textContent;

				btns.forEach(btn=>{
							btn.classList.remove('activo');
						});

				comprobacion(numPregunta,valorRespuesta,e.target);
				
				});
		});

		class Preguntas {
			constructor(respCorrecta){
				this.respCorrecta = respCorrecta;
			}

				ComprobarRespuesta(valorRespuesta,e){

				if (valorRespuesta == this.respCorrecta){

					if (todosNumAleatorios.length == PreguntasCulturaGeneral.length){
						aciertos++;
						e.classList.add('correcto');
						clearInterval(time);
						finJuego("ganaste");
						return false;


					}else if (vidas <= 0) {
						return false;
					}else{
							aciertos++;
							e.classList.add('correcto');
							SiguientePregunta(this.respCorrecta);
						}

				}else{

						vidas--;

						if (vidas == 0) { 
								for(let i=0;i<btns.length;i++){
									if (btns[i].defaultValue == this.respCorrecta) {
										btns[i].classList.add("correcto");
									}else{}
								}

								if (aciertos >= 8) {
									finJuego("ganaste");
									return false;
								}else{
									EtiquetaVidas.textContent = vidas;
									clearInterval(time);
									e.classList.add('error');
									finJuego("perdiste");
									return false;
								}

						};

						if(vidas < 0){
							return false;
						}

						if(todosNumAleatorios.length == PreguntasCulturaGeneral.length && aciertos < 8){	
							e.classList.add('error');
							EtiquetaVidas.textContent = vidas;
							finJuego("perdiste");
							return false;
						}else if(todosNumAleatorios.length == PreguntasCulturaGeneral.length && aciertos >= 8){
							finJuego("ganaste");
							return false;
						}

						
						EtiquetaVidas.textContent = vidas;
						e.classList.add('error');

						for(let i=0;i<btns.length;i++){
							console.log(valorRespuesta,this.respCorrecta);
							if (btns[i].defaultValue == this.respCorrecta) {
								btns[i].classList.add("correcto");
								SiguientePregunta(this.respCorrecta);
							}else{}
						}	
						
					}
				}
			}

		
		const CulturaGeneral1 = new Preguntas('1783');
		const CulturaGeneral2 = new Preguntas('Otawa');
		const CulturaGeneral3 = new Preguntas('1830');
		const CulturaGeneral4 = new Preguntas('La Ballena');
		const CulturaGeneral5 = new Preguntas('16');
		const CulturaGeneral6 = new Preguntas('40 semanas');
		const CulturaGeneral7 = new Preguntas('Eva');
		const CulturaGeneral8 = new Preguntas('Estados Unidos');
		const CulturaGeneral9 = new Preguntas('España');
		const CulturaGeneral10 = new Preguntas('Hiroshima');