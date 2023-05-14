import './PagDetail.css'

import labrador from '../img/dogs/labrador.png'

import LinkButton from '../layout/LinkButton'

const Labrador = () => {
  return (
    <div className="pag_layout">
      <h1>Labrador</h1>
      <div className='dog_info'>
        <h3>Raça: </h3>
        <p>Labrador</p>
        <h3>Sobre: </h3>
        <p>O cachorro Labrador é irresistível para quem ama animais.
           Uma raça muito simpática, que ama agradar seus companheiros
           humanos e fazer a alegria. da casa. Além de fiel, se bem treinado,
           pode dar um excelente suporte a pessoas com necessidades especiais
           e deficientes físicos.</p>
        <div >
        <img src={labrador} alt="labrador" className='dog_img'/>
      </div>
      <div className="forms">
        <LinkButton to='/forms' text='Adote agora'/>
      </div>
      </div>
    </div>
  )
}

export default Labrador