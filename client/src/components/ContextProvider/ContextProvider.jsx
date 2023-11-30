import React, { createContext, useState } from 'react'

export const LoginContext = createContext("");
const ContextProvider = ({ children }) => {
    const [logindata, setLoginData] = useState(false);
    return (
        <div>
        <LoginContext.Provider value={{ logindata, setLoginData }}>
            {children}
        </LoginContext.Provider>
        </div>
    )
}

export default ContextProvider