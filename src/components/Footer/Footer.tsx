
import { Component } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import style from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className={style.social_list}>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
          <li><FaLinkedin/></li>
        </ul>

        <p className={style.direitos}>
          Todos os direitos reservados
        </p>
      </footer>
    )
  }
}
