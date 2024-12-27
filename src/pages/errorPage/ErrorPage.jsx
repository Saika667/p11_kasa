import { Link } from "react-router-dom"
import "../../utils/Atoms.scss"
import "./ErrorPageStyle.scss"

function ErrorPage() {
    return (
        <div className="page error">
            <h1 className="error-title">404</h1>
            <span className="error-span">Oups! La page que vous demandez n'existe pas.</span>
            <Link to={"/"} className="error-link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default ErrorPage