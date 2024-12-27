import kasaLogo from "../../assets/kasa_logo.svg"
import { Link } from "react-router-dom"
import './NavigationStyle.scss'

function Navigation () {
    return (
        <div className="navigation">
            <Link to="/">
                <img src={ kasaLogo } alt="logo kasa" />
            </Link>
           

            <nav>
                <Link to="/" className="navigation-link">Accueil</Link>
                <Link to="/about" className="navigation-link">A propos</Link>
            </nav>
        </div>
    )
}

export default Navigation