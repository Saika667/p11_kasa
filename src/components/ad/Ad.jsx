import { useNavigate } from "react-router-dom"

function Ad({ logement}) {
    const navigate = useNavigate()

    return (
        <article 
            className="home-container-ad"
            onClick={ () => navigate(`/detail/${ logement.id }`) }
        >
            <img src={ logement.cover } alt={ logement.title } />
            <h2>{ logement.title }</h2>
        </article>
    )
}

export default Ad