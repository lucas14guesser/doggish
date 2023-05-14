import './Success.css'

import caoFeliz from '../img/dogs/caoFeliz.png'

const Success = () => {
  return (
    <div className='container'>
        <h1>Formulário enviado com sucesso!</h1>
        <p>Obrigado por adotar um cãozinho. Aguarde mais informações por e-mail.</p>
        <img src={caoFeliz} alt="adotado" />
    </div>
  )
}

export default Success