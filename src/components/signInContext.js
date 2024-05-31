import { createContext, useState } from "react";
const SignInContext = createContext();

const SignInContextProvider = ({ children }) => {

    const [userDb, setUserDb] = useState([]);
    const [userDetails, setUserDetails] = useState([])
    const info = {
        userDetails,
        setUserDetails,
    }
    return (
        <SignInContext.Provider value={{ info }}>{children}</SignInContext.Provider>
    )
}
export { SignInContextProvider }
export default SignInContext
