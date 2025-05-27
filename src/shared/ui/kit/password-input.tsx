import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"
import { Input } from "./input"
import { Button } from "./button"



export function PasswordInput() {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="relative">
            <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="transition-all duration-300 ease-in-out"
            />
            <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:text-gray-700"
                onClick={togglePasswordVisibility}
            >
                {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </Button>
        </div>
    )
}