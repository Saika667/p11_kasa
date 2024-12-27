import { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext({ device: null, windowSize: {} })

export const GlobalProvider = ({ children }) => {
    const [ windowSize, setWindowSize ] = useState(getWindowSize())
    const [ device, setDevice ] = useState()
  
    function getWindowSize() {
        const { innerWidth, innerHeight } = window
        return { innerWidth, innerHeight }
    }

    useEffect(() => {
      function handleWindowResize() {
        const sizes = getWindowSize()
        setWindowSize(sizes)
        if (sizes.innerWidth <= 768) {
            setDevice('mobile')
        } else if(sizes.innerWidth <= 992 ) {
            setDevice('tablet')
        } else {
            setDevice('desktop')
        }
      }

      handleWindowResize()
  
      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
 
    return (
        <GlobalContext.Provider value={{ device, windowSize }}>
            { children }
        </GlobalContext.Provider>
    )
}
