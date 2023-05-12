import { Link } from 'react-router-dom'

import './LinkButtom.css'

const LinkButtom = ({to, text}) => {
  return (
    <Link className='btn' to={to}>
        {text}
    </Link>
  )
}

export default LinkButtom