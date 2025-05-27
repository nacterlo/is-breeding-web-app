import { useState } from "react";


type Session = {
    user: string
    token: string
}

const TOKEN_KEY = "token";

export const useSession = () => {

    const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

    return {
        user: '',
        token: ''
    } as Session
}