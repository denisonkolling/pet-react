import React from 'react';
import img1 from '../assets/depoimentos_1.jpg';
import img2 from '../assets/depoimentos_2.jpg';
import img3 from '../assets/depoimentos_3.jpg';
import CardDepoimento from './CardDepoimento';

const Depoimentos = () => {
	return (
		<>
			<div>
				<h1 className="text-center py-5">Depoimentos</h1>
			</div>
			<div className="d-flex">
				<div>
					<CardDepoimento
						imgSrc={img1}
						texto="Estava gordinha e cansadinha, mas com Ajude meu pet pet, eu fiquei
            malhada e gostosa!"
					/>
				</div>
				<div>
					<CardDepoimento
						imgSrc={img2}
						texto="Meu dono não me levava para passear, mas com Ajude meu Pet, estou caminhando 10km por dia, e treinando para a São Silvestre."
					/>
				</div>
				<div>
					<CardDepoimento
						imgSrc={img3}
						texto="Eu era um viad loka, não estava nem aí para as leis e muros, fugia
        de casa voltava a hora que queria, estava despediçando meu tempo,
        mas com o Ajude meu pet, dei a volta por cima, e esse ano, me
        formo em direito."
					/>
				</div>
			</div>
		</>
	);
};

export default Depoimentos;
