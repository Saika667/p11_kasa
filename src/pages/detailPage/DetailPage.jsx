import { useParams } from "react-router-dom";
import CollapseBar from "../../components/collapseBar/CollapseBar";
import { useContext, useEffect, useState } from "react";
import logements from "../../data/logements.json"
import star from "../../assets/star.svg"
import grayStar from "../../assets/grayStar.svg"
import "./DetailPageStyle.scss"
import "../../utils/Atoms.scss"
import Carousel from "../../components/carousel/Carousel";
import { GlobalContext } from "../../utils/Context";

function DetailPage ({}) {
    const { adId }= useParams()
    const [ logement, setLogement ] = useState({})
    const [ starsArray, setStarsArray ] = useState([])
    const { device } = useContext(GlobalContext)

    useEffect(() => {
        const ad = logements.find(ad => ad.id === adId)
        setLogement(ad)
        setStarsArray(Array.from({ length: 5 }, (_, index) => index < parseInt(ad.rating)))
    }, [])

    return (
        <div className="page detail">
            <div className="detail-container">
                <div className="detail-container-carousel">
                    <Carousel pictures={ logement.pictures ?? [] } />
                </div>

                <div className="detail-container-information">
                    <div className="detail-container-information-wrapper">
                        <div className="detail-container-information-wrapper-title">
                            <h1>{ logement.title }</h1>
                            <span>{ logement.location }</span>
                        </div>

                        { device !== 'mobile' &&
                            <div className="detail-container-information-wrapper-profil">
                                <div className="detail-container-information-wrapper-profil-name">
                                    <span>{ logement.host?.name.split(' ')[0] }</span>
                                    <span>{ logement.host?.name.split(' ')[1] }</span>
                                </div>

                                <div className="detail-container-information-wrapper-profil-image">
                                    <img src={ logement.host?.picture } alt={ `photo de profil de ${ logement.host?.name }` } />
                                </div>
                            </div>
                        }
                    </div>

                    <div className="detail-container-information-wrapper">
                        <div className="detail-container-information-wrapper-content start">
                            { logement.tags?.map((tag, index) => (
                                <span className="detail-container-information-wrapper-content-tag" key={ index }>{ tag }</span>
                            ))}
                        </div>

                        {device !== 'mobile' &&
                            <div className="detail-container-information-wrapper-content end">
                                { starsArray.map((activated, index) => (
                                    activated ? 
                                    <img 
                                        key={ index } 
                                        src={ star }
                                        alt='étoile pleine'
                                        className="detail-container-information-wrapper-content-img"
                                    />
                                    :
                                    <img 
                                        key={ index }
                                        src={ grayStar }
                                        alt='étoile vide'
                                        className="detail-container-information-wrapper-content-img"
                                    />
                                ))}
                            </div>
                        }
                    </div>

                    { device === 'mobile' &&
                        <div className="detail-container-information-wrapper">
                            <div className="detail-container-information-wrapper-content start">
                                { starsArray.map((activated, index) => (
                                    activated ? 
                                    <img 
                                        key={ index } 
                                        src={ star }
                                        alt='étoile pleine'
                                        className="detail-container-information-wrapper-content-img"
                                    />
                                    :
                                    <img 
                                        key={ index }
                                        src={ grayStar }
                                        alt='étoile vide'
                                        className="detail-container-information-wrapper-content-img"
                                    />
                                ))}
                            </div>

                            <div className="detail-container-information-wrapper-profil">
                                <div className="detail-container-information-wrapper-profil-name">
                                    <span>{ logement.host?.name.split(' ')[0] }</span>
                                    <span>{ logement.host?.name.split(' ')[1] }</span>
                                </div>

                                <div className="detail-container-information-wrapper-profil-image">
                                    <img src={ logement.host?.picture } alt={ `photo de profil de ${ logement.host?.name }` } />
                                </div>
                            </div>
                        </div>
                    }

                    <div className="detail-container-information-wrapper bar">
                        <div className="detail-container-information-wrapper-content">
                            <CollapseBar
                                collapseTitle="Description"
                                collapseContent={ logement.description }
                            />
                        </div>
                        <div className="detail-container-information-wrapper-content">
                            <CollapseBar
                                collapseTitle="Equipements"
                                collapseContent={ logement.equipments }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage