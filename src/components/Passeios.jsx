import React from 'react';
import img1 from '../assets/passeio_1.jpg';

const Passeios = () => {
	return (
		<>
			<div>
				<h1 className="text-center py-5">Passeios</h1>
			</div>
			<div className="d-flex">
				<div className="card w-50">
					<div className="card-body">
						<div className="card-text">
							Você acha que o seu animalzinho de estimação está fora de forma?
							Nossos passeios são a alternativa certa para você. Nossos
							profissionais fazem caminhadas ou corridas com os pets nas mais
							variadas distâncias, para que seu pet tenha a medida certa de
							exercícios.
						</div>
					</div>
				</div>
				<div>
					<img className='w-100 p-5' src={img1} alt="..."/>
				</div>
			</div>
		</>
	);
};

export default Passeios;
