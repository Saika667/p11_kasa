import Banner from "../../components/banner/Banner"
import logements from "../../data/logements.json"
import { useNavigate } from "react-router-dom"
import "../../utils/Atoms.scss"
import "./HomePageStyle.scss"

function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="page home">
            <Banner imageBanner="home" textBanner="Chez vous, et partout ailleurs" />

            <div className="home-container">
                { logements.map((logement, index) => (
                    <article 
                        className="home-container-ad" 
                        key={ index }
                        onClick={ () => navigate(`/detail/${ logement.id }`) }
                    >
                        <img src={ logement.cover } alt={ logement.title } />
                        <h2>{ logement.title }</h2>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default HomePage