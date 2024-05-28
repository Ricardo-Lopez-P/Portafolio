import './App.css'
import './style/portafolio.css'
import './style/navbar.css'
import './style/more-styles.css'
import { Portafolio } from './components/Portafolio.jsx'
import { Navbar } from './components/Navbar.jsx'

import { useState } from 'react'

function App() {

  // Codigo para cambiar el idoma del texto de ES a EN
  // Code to change the language of the text from ES to EN

  const spanTitleEs = 'Hola, Soy'
  const spanTitleEn = "Hi, I'm"

  const spanAreaEs = 'Desarrollador Web'
  const spanAreaEn = 'Web Developer'

  const textPaEs = 'Apasionado por la creación de experiencias digitales intuitivas y atractivas. Con habilidades en diseño y programación, en constantemente superar desafíos técnicos y mejorar mis capacidades. Estoy siempre en busca de nuevas oportunidades para crecer y contribuir al mundo digital.'
  const textPaEn = 'Passionate about creating intuitive and appealing digital experiences. With skills in design and programming, I am constantly overcoming technical challenges and improving my abilities. I am always seeking new opportunities to grow and contribute to the digital world.'

  const idiomaEs = 'ES'
  const idiomaEn = 'EN'

  const skillEs = 'Habilidades'
  const skillEn = 'Skills'

  const [texto, setTexto] = useState({
    spanTitle: spanTitleEs,
    spanArea: spanAreaEs,
    textoP: textPaEs,
    idiomaButton: idiomaEn,
    textSkill: skillEs
  })

  const changeText = () => {
    setTexto(prevState => ({
      ...prevState,
      spanTitle: prevState.spanTitle === spanTitleEs ? spanTitleEn : spanTitleEs,
      spanArea: prevState.spanArea === spanAreaEs ? spanAreaEn : spanAreaEs,
      textoP: prevState.textoP === textPaEs ? textPaEn : textPaEs,
      idiomaButton: prevState.idiomaButton === idiomaEn ? idiomaEs : idiomaEn,
      textSkill: prevState.textSkill === skillEn ? skillEs : skillEn
    }))
  }

  return (
    <>
      <Navbar button={changeText} idioma={texto.idiomaButton} />
      <Portafolio texto={texto} />
    </>
  )
}

export default App
