import { createContext, useState, useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [employeesData, setEmployeesData] = useState();
    const [adminData, setAdminData] = useState();

    useEffect(() => {
        setLocalStorage();
        const data = getLocalStorage();
        const { employees, admin } = data
        setEmployeesData(employees);
        setAdminData(admin);
    }, [])



    return (
        <AuthContext.Provider value={{ employeesData, setEmployeesData, adminData, setAdminData }}>
            {children}
        </AuthContext.Provider>
    )
};