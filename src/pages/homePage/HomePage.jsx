import Banner from "../../components/banner/Banner"
import logements from "../../data/logements.json"
import { useNavigate } from "react-router-dom"
import "../../utils/Atoms.scss"
import "./HomePageStyle.scss"
import Ad from "../../components/ad/Ad"

function HomePage() {

    return (
        <div className="page home">
            <Banner imageBanner="home" textBanner="Chez vous, et partout ailleurs" />

            <div className="home-container">
                { logements.map((logement, index) => (
                    <Ad key={index} logement={logement} />
                ))}
            </div>
        </div>
    )
}

export default HomePage