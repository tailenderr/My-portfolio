import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'

const Projects = () => {
  const [letterCLass, setLetterClass] = useState('text-animate')

  useEffect(() => {}, [])
  return (
    <div className="container project-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterCLass}
            strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
            idx={15}
          />
        </h1>
      </div>
    </div>
  )
}
export default Projects
