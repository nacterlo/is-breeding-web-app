import { Button } from "@/shared/ui/kit/button"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/shared/ui/kit/form"
import { Input } from "@/shared/ui/kit/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOffIcon, Loader } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { z } from 'zod'

const loginSchema = z.object({
  login: z.string().min(3, { message: "Логин должен содержать не менее 3 символов" }),
  password: z.string().min(6, { message: "Пароль должен содержать не менее 6 символов" }),
})

export function LoginForm() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const form = useForm({
    resolver: zodResolver(loginSchema),
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onSubmit = form.handleSubmit((data) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate("/gpp-elever")
    }, 4000)
    console.log(data)
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-6">
            <FormField
              control={form.control}
              name="login"
              render={({ field }) => (
                <FormItem className="grid gap-1">
                  <FormLabel>Логин</FormLabel>
                  <FormControl>
                    <Input
                      id="login"
                      placeholder="user"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="grid gap-1">
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        // placeholder="••••••••"
                        required
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:text-gray-900"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  <span className="animate-out">Вход...</span>
                </>
              ) : (
                <>
                  Войти
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
