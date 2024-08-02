import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token,setToken] = useState(null);

    return (
        <>
            <div>AuthContext</div>
        </>
    )
}

export const useAuth = () => useContext(AuthContext);
