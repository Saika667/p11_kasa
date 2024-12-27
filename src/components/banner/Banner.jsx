import "./BannerStyle.scss"

function Banner ({ imageBanner, textBanner = "" }) {
    return (
        <div className={ `banner banner-${imageBanner === "home" ? "home" : "about"}`}>
            <h1 className="title">{ textBanner }</h1>
        </div>
    )
}

export default Banner 