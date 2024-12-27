import { useContext, useEffect, useRef, useState } from "react"
import chevron from "../../assets/chevron.svg"
import './CarouselStyle.scss'

function Carousel ({ pictures }) {
    const containerRef = useRef()
    const [ currentIndex, setCurrentIndex ] = useState(1)
    const [ isClone, setIsClone ] = useState(false)
    const [ isInitialized, setIsInitialized ] = useState(false)
    const [ counter, setCounter ] = useState(1)

    const moveToIndex = (index) => {
        setCurrentIndex(index)
        if (containerRef.current) {
            const container = containerRef.current
            const width = container.firstElementChild.clientWidth
            containerRef.current.style.transition = 'transform 0.5s ease-in-out'
            containerRef.current.style.transform = `translateX(${-index * width}px)`
        }
    }

    const handleTransitionEnd = () => {
        if (isClone) {
            const newIndex = currentIndex === 0 ? pictures.length : 1
            console.log(newIndex)
            setCurrentIndex(newIndex)
            if (containerRef.current) {
                const container = containerRef.current
                const width = container.firstElementChild.clientWidth
                containerRef.current.style.transition = 'none'
                containerRef.current.style.transform = `translateX(${-newIndex * width}px)`
            }
        }
    }

    useEffect(() => {
        if (containerRef.current && containerRef.current.firstElementChild && !isInitialized) {
            if (pictures.length > 1) {
                const container = containerRef.current
                const width = container.firstElementChild.clientWidth
                containerRef.current.style.transition = "none";
                containerRef.current.style.transform = `translateX(${-1 * width}px)`;
            }
            setIsInitialized(true);
        }
    }, [containerRef.current?.firstElementChild, isInitialized]);

    useEffect(() => {
        if (currentIndex > pictures.length) {
            setCounter(1)
        } else if (currentIndex < 1) {
            setCounter(pictures.length)
        } else {
            setCounter(currentIndex)
        }

        if (containerRef.current) {
            const currentElement = containerRef.current.children[currentIndex];
            if (containerRef.current.children.length > 0) {
                setIsClone(currentElement.classList.contains("clone"));
            }
        }
    }, [currentIndex])

    return (
        <div className="carousel">
            <div
                className="carousel-container"
                ref={ containerRef }
                onTransitionEnd={ handleTransitionEnd }
            >
                { pictures.length > 1 &&
                    <div className="carousel-container-image clone">
                        <img src={pictures[pictures.length - 1]} alt="photo du logement" />
                    </div>
                }

                { pictures.map((picture, index) => (
                    <div key={ index } className="carousel-container-image">
                        <img src={ picture } alt="photo du logement" />
                    </div>
                )) }

                { pictures.length > 1 &&
                    <div className="carousel-container-image clone">
                        <img src={ pictures[0] } alt="photo du logement" />
                    </div>
                }
            </div>

            { pictures.length > 1 &&
                <>
                    <div className="button carousel-left" onClick={ () => moveToIndex(currentIndex - 1) }>
                        <img src={ chevron } alt="image précédente" />
                    </div>

                    <div className="button carousel-right" onClick={ () => moveToIndex(currentIndex + 1) }>
                        <img src={ chevron } alt="image suivante" />
                    </div>

                    <div className="carousel-counter">{ counter + '/' + pictures.length }</div>
                </>
            }
        </div>
    )
}

export default Carousel