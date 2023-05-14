import './PagDetail.css'

import pitbull from '../img/dogs/pitbull.png'

import LinkButton from '../layout/LinkButton'

const Pitbull = () => {
  return (
    <div className="pag_layout">
        <h1>Pitbull</h1>
        <div className='dog_info'>
        <h3>Raça: </h3>
        <p>Pitbull</p>
        <h3>Sobre: </h3>
        <p>O Pitbull, ou verdadeiramente conhecido
           como American Pit Bull Terrier (APBT), é um pet extremamente
           carinhoso, leal e inteligente. No entanto, por muito tempo teve
           sua imagem atrelada a um comportamento rude e agressivo. Ao
           contrário do que muitos pensam, esse cãozinho é muito dócil,
           principalmente quando falamos das crianças.</p>
        <div >
        <img src={pitbull} alt="pitbull" className='dog_img'/>
        </div>
        <div className="forms">
          <LinkButton to='/forms' text='Adote agora'/>
      </div>
        </div>
    </div>
  )
}

export default Pitbull