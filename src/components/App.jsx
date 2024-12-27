import Footer from "./footer/Footer"
import Navigation from "./navigation/Navigation"

function App({ children }) {

    return (
        <>
            <Navigation />
            { children }
            <Footer />
        </>
    )
}

export default App
