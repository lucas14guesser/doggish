import './PagDetail.css'

import cocker from '../img/dogs/cocker.png'

const Cocker = () => {
  return (
    <div className="pag_layout">
        <h1>Cocker</h1>
        <div className='dog_info'>
        <h3>Raça: </h3>
        <p>Cocker</p>
        <h3>Idade: </h3>
        <p>4 Meses</p>
        <h3>Sobre: </h3>
        <p>Considerado o menor dos cãezinhos spaniels,
           o Cocker Spaniel Americano costuma ser muito
           fiel ao tutor e ama estar na companhia da sua
           família humana. A raça, aliás, também é conhecida
           por sua docilidade e por compartilhar diversos momentos de afetos.
           Esse pet carrega ainda uma personalidade cheia de resistência física
           e determinação, por isso, é excelente para aqueles que procuram por
           um verdadeiro amigão de quatro patas. Apesar de preservar seu instinto
           de caça, ele é extremamente amoroso e dedicado.</p>
        <div >
        <img src={cocker} alt="cocker" className='dog_img'/>
        </div>
        </div>
    </div>
  )
}

export default Cocker