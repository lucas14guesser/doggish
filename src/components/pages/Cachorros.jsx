import React from 'react'

import './Cachorros.css'

import labrador from '../img/dogs/labrador.png'
import cocker from '../img/dogs/cocker.png'
import dalmata from '../img/dogs/dalmata.png'
import husky from '../img/dogs/husky.png'
import pitbull from '../img/dogs/pitbull.png'
import schnauzer from '../img/dogs/schnauzer.jpg'

const Cachorros = () => {
  return (
    <div className="principal_dog">
      <h1><span>Cãeszinhos</span> para adoção:</h1>
      <div className="dog_card">
        <img src={labrador} alt="labrador" />
        <img src={husky} alt="husky" />
        <img src={cocker} alt="cocker" />
        <img src={pitbull} alt="pitbull" />
        <img src={dalmata} alt="dalmata" />
        <img src={schnauzer} alt="schnauzer" />
      </div>
    </div>

  )
}

export default Cachorros