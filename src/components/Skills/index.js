import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  const TagCloud = require('TagCloud')

  const container = '.sphere'
  const texts = [
    'HTML5',
    'NODEJS',
    'JAVASCRIPT',
    'CSS3',
    'ANIMATION',
    'BOOTSTRAP',
    'REACTJS',
    'SASS',
    'GSAP',
    'JAVA',
    'MYSQL',
    'MONGODB',
    'EXPRESSJS',
    'ANIMATE.CSS',
    'CANVAS',
    'XML',
  ]
  const options = {
    radius: '300',
    maxSpeed: 'fast',
    initSpeed: 'slow',
    direction: 135,
    keep: 'true',
  }

  TagCloud(container, texts, options)
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            Have decent knowledge in front-end development including
            technologies like <span className="tech-tag">HTML5</span>,
            <span className="tech-tag">CSS3</span>,
            <span className="tech-tag">Javascript</span>,
            <span className="tech-tag">React</span>,
            <span className="tech-tag">Bootstrap</span>,
            <span className="tech-tag">Sass</span>,
            <span className="tech-tag">Git</span>,etc.
          </p>
          <p>
            Have decent knowledge in back-end development including technologies
            like <span className="tech-tag">Nodejs</span>,
            <span className="tech-tag">Mysql</span>,
            <span className="tech-tag">Java</span>,
            <span className="tech-tag">Expressjs</span>,
            <span className="tech-tag">MongoDB</span>,etc.
          </p>
          <p>
            I put special efforts in optimizing code and go extra miles for
            better results.Visit my{' '}
            <a
              href=""
              style={{ textDecoration: 'underline' }}
              className="tech-tag"
            >
              LinkedIn
            </a>{' '}
            profile for more details.
          </p>
        </div>
        <div className="sphere"></div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Skills
