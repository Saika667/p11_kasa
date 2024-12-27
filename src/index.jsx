import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage.jsx'
import GlobalStyle from './utils/GlobalStyle.jsx'
import AboutPage from './pages/aboutPage/AboutPage.jsx'
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import DetailPage from './pages/detailPage/DetailPage.jsx'
import { GlobalProvider } from './utils/Context.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <GlobalProvider>
                <App>
                    <GlobalStyle />

                    <Routes>
                        <Route path="/" element={ <HomePage /> } />
                        <Route path="/about" element={ <AboutPage /> } />
                        <Route path="/detail/:adId" element={ <DetailPage /> } />
                        <Route path="*" element={ <ErrorPage/> } />
                    </Routes>
                </App>
            </GlobalProvider>
        </HashRouter>
    </StrictMode>
)
