import Banner from "../../components/banner/Banner"
import about from "../../data/about.json"
import CollapseBar from "../../components/collapseBar/CollapseBar"
import "../../utils/Atoms.scss"
import "./AboutPageStyle.scss"

function AboutPage() {
    return (
        <div className="page">
            <Banner imageBanner="about" />

            <div className="page-about">
                { about.map((el, index) => (
                    <CollapseBar
                        key={ index }
                        collapseTitle={ el.title }
                        collapseContent={ el.content }
                    />
                ))}
            </div>
        </div>
    )
}

export default AboutPage