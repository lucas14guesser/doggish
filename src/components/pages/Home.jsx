import './Home.css'

import damaVagabundo from '../img/icons/damaVagabundo.png'

import LinkButtom from '../layout/LinkButtom'

const Home = () => {
  return (
    <section className="home_layout">
      <h1>Seja bem-vindo ao Doggish</h1>
      <LinkButtom to='/dogs' text='Adote um cãozinho' />
      <img src={damaVagabundo} alt="Doggish" />
    </section>
  )
}

export default Home