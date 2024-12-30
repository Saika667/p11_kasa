import { useNavigate, useParams } from "react-router-dom";
import CollapseBar from "../../components/collapseBar/CollapseBar";
import { useContext, useEffect, useState } from "react";
import logements from "../../data/logements.json"
import "./DetailPageStyle.scss"
import "../../utils/Atoms.scss"
import Carousel from "../../components/carousel/Carousel";
import { GlobalContext } from "../../utils/Context";
import StarNote from "../../components/starNote/starNote";
import UserProfile from "../../components/userProfile/UserProfile";
import Tag from "../../components/tag/Tag";

function DetailPage ({}) {
    const { adId }= useParams()
    const [ logement, setLogement ] = useState({})
    const { device } = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {
        const ad = logements.find(ad => ad.id === adId)
        if (ad === undefined) {
            navigate('/error')
            return
        }
        setLogement(ad)
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
                            <UserProfile logement={logement} />
                        }
                    </div>

                    <div className="detail-container-information-wrapper">
                        <div className="detail-container-information-wrapper-content start">
                            { logement.tags?.map((tag, index) => (
                                <Tag key={index} tag={tag} />
                            ))}
                        </div>

                        {device !== 'mobile' &&
                            <StarNote note={logement.rating} />
                        }
                    </div>

                    { device === 'mobile' &&
                        <div className="detail-container-information-wrapper">
                            <StarNote note={logement.rating} />
                            <UserProfile logement={logement} />
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