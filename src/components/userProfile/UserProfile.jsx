function UserProfile({ logement }) {
    return (
        <div className="detail-container-information-wrapper-profil">
            <div className="detail-container-information-wrapper-profil-name">
                <span>{ logement.host?.name.split(' ')[0] }</span>
                <span>{ logement.host?.name.split(' ')[1] }</span>
            </div>

            <div className="detail-container-information-wrapper-profil-image">
                <img src={ logement.host?.picture } alt={ `photo de profil de ${ logement.host?.name }` } />
            </div>
        </div>
    )
}

export default UserProfile