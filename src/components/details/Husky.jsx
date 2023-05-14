import './PagDetail.css'

import husky from '../img/dogs/husky.png'

import LinkButton from '../layout/LinkButton'

const Husky = () => {
  return (
    <div className="pag_layout">
        <h1>Husky Siberiano</h1>
        <div className='dog_info'>
        <h3>Raça: </h3>
        <p>Husky Siberiano</p>
        <h3>Sobre: </h3>
        <p>Criados para o trabalho, esses cachorros têm toda
           a aparência dos lobos selvagens, mas engana-se quem
           pensa que eles são agressivos. Extremamente amigáveis,
           os Huskys são fáceis de lidar e adoram companhia — do
           tutor, ou de outros cãezinhos.</p>
        <div >
        <img src={husky} alt="husky" className='dog_img'/>
        </div>
        <div className="forms">
          <LinkButton to='/forms' text='Adote agora'/>
      </div>
        </div>
    </div>
  )
}

export default Husky