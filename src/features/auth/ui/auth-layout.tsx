import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/ui/kit/card"
import { PawPrintIcon } from "lucide-react"
import type React from "react"


export function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                
                <div className="flex items-center gap-2 self-center font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <PawPrintIcon className="size-4" />
                    </div>
                    ИС Племдело КРС
                </div>
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Добро пожаловать</CardTitle>
                        <CardDescription>
                            Войдите в систему c помощью учетной записи
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
                <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                    © УП ГИВЦ Минсельхозпрода {new Date().getFullYear()}
                </div>
            </div>
        </div>
    )
}