
import React, { createContext, useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import api from '../axios';
const AuthContext = createContext({});
import Login from '../components/Login'
export const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = window.localStorage.getItem('token')
            console.log(token)
            if(!token){
                router.push('/main')
            } 
            else {
                api.defaults.headers.Authorization = `Bearer ${token}`
                api.get('/api/users/account').then((res)=>{
                    setUser(res.data.data);
                   console.log(res)
                }).catch((err)=>{
                    console.log(err)
                    router.push('/main')
                })
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])
    console.log(user)
    const login = async (email, password) => {
        const { data: token } = await api.post('auth/login', { email, password })
        if (token) {
            console.log("Got token")
            window.localStorage.setItem('token', token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user } = await api.get('users/me')
            setUser(user)
            console.log("Got user", user)
        }
    }

    const logout = (email, password) => {
        window.localStorage.removeItem('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        window.location.pathname = '/login'
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter()
    if (isLoading || (!isAuthenticated && router.pathname !== '/main' && router.pathname !== '/login')){
      return <></>; 
    }
    return children;
  };


export const useAuth = () => useContext(AuthContext)