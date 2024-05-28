import { FaFileDownload, FaDatabase, FaCss3, FaHtml5, FaReact, FaGitAlt } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { IoLogoJavascript } from "react-icons/io"

import '@fontsource/tilt-neon';

const image = './src/image/unnamed.png'
const cv_document = './src/document/CV-Ricardo-López-Pérez.pdf'
const linkedinPage = 'https://www.linkedin.com/in/ricardo-lópez-pérez-301609269'
const my_email = 'mailto:ricardo.lp.dgs@gmail.com'

export function Portafolio({texto}) {

    return(
        <div className="conteiner">
            <div className="item-name">
                <span>{texto.spanTitle}</span>
                <h1 className="name">Ricardo</h1>
                <span className="web-text">{texto.spanArea}</span>
                <section className="item-icons">
                    <a href={`${linkedinPage}`} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="linkedin"/>
                    </a>
                    <a href={`${my_email}`} target="_blank" rel="noopener noreferrer">
                        <MdEmail className="email"/>
                    </a>
                    <a href={`${cv_document}`} target="_blank" rel="noopener noreferrer">
                        <FaFileDownload className="document-cv"/>
                    </a>
                </section>
            </div>
            
            <div className="item-image">
                <img className="my-image" src={`${image}`} />
            </div>

            <div className="item-text">
                <span>
                    <p> {texto.textoP} </p>
                </span>
                
                <h3> {texto.textSkill} </h3>
                <div className="skills">
                    <FaReact className="reactIcon" />
                    <FaDatabase  className="databaseIcon" />
                    <FaCss3 className="cssIcon" />
                    <FaHtml5 className="htmlIcon"/>
                    <IoLogoJavascript className="jsIcon"/>
                    <FaGitAlt className="gitIcon"/>
                </div>
            </div>
        </div>
    )
}