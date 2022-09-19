import {
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
  faGears,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './index.scss'
import {
  faGithub,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src="logos" alt="logo" />
          <img className="sub-logo" src="logosub" alt="subtitle" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="projects-link"
            to="/projects"
          >
            <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="">
              <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
