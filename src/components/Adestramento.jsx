import React from 'react';
import img1 from '../assets/adestramento_1.jpg';
import img2 from '../assets/adestramento_2.jpg';

const Adestramento = () => {
	return (
		<>
			<div>
				<h1 className="text-center py-5">Adestramento</h1>
			</div>
			<div className="d-flex">
				<div>
					<img className="w-100 p-5" src={img1} alt="..." />
				</div>
				<div className="card w-50">
					<div className="card-body">
						<div className="card-text">
							Adestramento básico: Como o próprio nome já diz, o adestramento
							básico ensina ao pet conceitos de obediência simples. Alguns
							exemplos são: senta, deita, fica, junto, dar a pata, entender o
							não, aqui e meia volta. 
							
							Adestramento avançado: treinamento
							oferecido para cães de trabalho e para esportes. Dentro do
							adestramento no pet shop, há algumas atividades, como saltar e
							buscar objetos, por exemplo. 
							
							Adestramento grupal: Para os donos
							que veem a necessidade de seu animal ter contato com outros pets,
							essa é a opção ideal. Nele, são ensinados comandos de obediência
							que podem ser usados fora de casa, assim como adequar o
							comportamento em passeios e em momentos de socialização com
							pessoas ou outros animais.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Adestramento;
