import { MdLanguage } from "react-icons/md";

export function Navbar ({button, idioma}) {
    
    return(
        <nav>
            <div>
                <MdLanguage className="languageIcon"/>
                <button onClick={button}
                        className="button-language">
                    <span className="language">
                        {idioma}
                    </span>
                </button>
            </div>
        </nav>
    )

}