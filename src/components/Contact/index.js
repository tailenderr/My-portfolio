import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_w73ztua',
        'contact_form',
        refForm.current,
        '-Qv4UuyLwGGaLhBHY'
      )
      .then(
        () => {
          alert('Message Sent Successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page" id="map">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a fresher and looking for job opportunity in a company where I
            can learn and grow,I'm looking for a kickstart in my coding carrer
            and enhance my professional skills.Don't hesitate to contact me for
            queries or job opportunity using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input className="submit-button" type="submit" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Gourav Sharma,
          <br />
          India,
          <br />
          35 Road-E Sector-40
          <br />
          Rajsamand
          <br />
          <span>gouravsharma99285@gmail.com</span>
        </div>
      </div>
      <div className="map-wrap">
        <MapContainer center={[25.0586, 73.886]} zoom={16}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[25.0586, 73.886]}>
            <Popup>Gourav lives here, come over for a cup of coffee :)</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
