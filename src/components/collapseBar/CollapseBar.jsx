import chevron from "../../assets/chevron.svg"
import { useState } from "react"
import "./CollapseBarStyle.scss"

function CollapseBar ({ collapseTitle, collapseContent }) {
    const [ isVisible, setIsVisible ] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-head">
                <h2 className="collapse-head-title">{ collapseTitle }</h2>

                <div 
                    className={ isVisible ? " collapse-head-icon display" : "collapse-head-icon" }
                    onClick={ () => setIsVisible(!isVisible) }
                >
                    <img src={ chevron } alt="chevron" />
                </div>
            </div>

            <div className={ isVisible ? "collapse-content display" : "collapse-content" }>
                { Array.isArray(collapseContent) ?
                    collapseContent.map((el, index) => (
                        <span key={ index } className={ collapseContent.length > 1 ? "array" : "" }>{ el }</span>
                    ))
                    :
                    <span>{ collapseContent }</span>
                }
            </div>
        </div>
    )
}

export default CollapseBar