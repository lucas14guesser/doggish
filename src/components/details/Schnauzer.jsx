import './PagDetail.css'

import schnauzer from '../img/dogs/schnauzer.jpg'

const Schnauzer = () => {
  return (
    <div className="pag_layout">
        <h1>Schnauzer</h1>
        <div className='dog_info'>
        <h3>Raça: </h3>
        <p>Schnauzer</p>
        <h3>Idade: </h3>
        <p>5 Meses</p>
        <h3>Sobre: </h3>
        <p>Sua aparência e tamanho chamam a atenção logo de cara,
           isso porque, o Schnauzer miniatura é um compacto cãozinho
           que adora brincar, além de ser um excelente cão de guarda
           e ótimo companheiro para todos a sua volta.
           Por isso mesmo, o pet dessa raça vem sendo reconhecido
           como um dos terriers domésticos que mais tem conquistado
           o coração dos tutores. E não à toa, esse cachorro,
           também é muito popular entre as outras versões do Schnauzer.</p>
        <div >
        <img src={schnauzer} alt="schnauzer" className='dog_img'/>
        </div>
        </div>
    </div>
  )
}

export default Schnauzer