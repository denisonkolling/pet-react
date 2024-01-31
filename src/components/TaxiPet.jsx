import React from 'react';
import img1 from '../assets/taxipet_1.jpg';

const TaxiPet = () => {
	return (
		<>
			<div>
				<h1 className="text-center py-5">TAXI-PET</h1>
			</div>
			<div className="d-flex">
				<div className="card w-50">
					<div className="card-body">
						<div className="card-text">
							Se seu pet está com a agenda cheia de compromissos e você não tem
							tempo de levá-lo, nós fazemos isso para você. Com o taxi-pet seu
							animalzinho sempre estará no lugar certo e na hora certa.
						</div>
					</div>
				</div>
				<div>
					<img className="w-100 p-5" src={img1} alt="..." />
				</div>
			</div>
		</>
	);
};

export default TaxiPet;
