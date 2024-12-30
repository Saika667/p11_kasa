import { useContext } from "react"
import { GlobalContext } from "../../utils/Context"
import star from "../../assets/star.svg"
import grayStar from "../../assets/grayStar.svg"

function StarNote({ note }) {
    const starsArray = Array.from({ length: 5 }, (_, index) => index < parseInt(note))
    const { device } = useContext(GlobalContext)

    return (
        <div className={`detail-container-information-wrapper-content ${ device === 'mobile' ? 'start' : 'end'}`}>
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
    )
}

export default StarNote