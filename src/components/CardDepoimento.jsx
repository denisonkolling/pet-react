import React from 'react';

const CardDepoimento = (props) => {

  const { imgSrc, texto } = props;

  return (
    <div className="card m-4" style={{ width: '25rem', height: '35rem' }}>
      <img src={imgSrc} className="card-img-top" alt="Imagem do Pet" />
      <div className="card-body">
        <div className="card-text">
          {texto}
        </div>
      </div>
    </div>
  );
}

export default CardDepoimento;
