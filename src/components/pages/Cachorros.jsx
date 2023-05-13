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
      <h1><span>Cães</span> para adoção:</h1>
      <p>Clique nos cachorros para saber mais detalhes</p>
      <div className="dog_card">
        <a href='/labrador_details' className='dog_card'><img src={labrador} alt="labrador" /></a>
        <a href="/husky_details" className='dog_card' ><img src={husky} alt="husky" /></a> 
        <a href="/cocker_details" className="dog_card"><img src={cocker} alt="cocker" /></a> 
        <a href="/pitbull_details" className="dog_card"><img src={pitbull} alt="pitbull" /></a> 
        <a href="/dalmata_details" className="dog_card"><img src={dalmata} alt="dalmata" /></a> 
        <a href="/schnauzer_details" className="dog_card"><img src={schnauzer} alt="schnauzer" /></a> 
      </div>
    </div>

  )
}

export default Cachorros