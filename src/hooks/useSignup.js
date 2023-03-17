import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext

    const signup = async (name, email, password, department, position) => {
        console.log(name, email, password, department, position)
        setIsLoading(true)
        setError(null)

        const response = await fetch("http://localhost:8000/api/users/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, password, department, position})
        })

        const json =  await response.json()
        console.log("JSON", json)

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: "LOGIN", playload: json})

            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}