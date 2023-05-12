import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
  return (
    (<footer className='footer'>
        <ul className='social_list'>
            <li>
                <a className='facebook' href='https://www.facebook.com/pernalongasuavao'>
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a className='instagram' href='https://www.instagram.com/pernalongasexta/'>
                    <FaInstagram />
                </a>
            </li>
        </ul>
        <p className='copy_right'>
            <span>Doggish</span> &copy; 2023
        </p>
    </footer>)
  )
}

export default Footer