import kasaBlackLogo from "../../assets/dark_kasa_logo.svg"
import "./FooterStyle.scss"

function Footer() {
    return (
        <div className="footer">
            <img src={ kasaBlackLogo } alt="logo kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer