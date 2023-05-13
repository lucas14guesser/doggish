import './PagDetail.css'

import dalmata from '../img/dogs/dalmata.png'

const Dalmata = () => {
  return (
    <div className="pag_layout">
        <h1>Dalmata</h1>
        <div className='dog_info'>
        <h3>Raça: </h3>
        <p>Dalmata</p>
        <h3>Idade: </h3>
        <p>20 Meses</p>
        <h3>Sobre: </h3>
        <p>O Dálmata é um dos mais famosos do mundo! E não falamos
           isso pelo clássico filme que destaca todo o charme das suas
           manchinhas, mas pelo seu jeito dócil, sensível e amigável!
           Muito esperto, ele adora praticar exercícios físicos, principalmente ao lado
           do seu tutor.
           Durante muito tempo a raça Dálmata foi utilizada na condução de carruagens,
           devido ao seu porte musculoso e robusto. Mesmo sendo muito amigável,
           ele será um ótimo guardião e latirá bastante até avisar sua família de que algo diferente
           está acontecendo, afinal, ele sempre fará o possível para ver todos ao seu redor muito felizes.</p>
        <div >
        <img src={dalmata} alt="dalmata" className='dog_img'/>
        </div>
        </div>
    </div>
  )
}

export default Dalmata