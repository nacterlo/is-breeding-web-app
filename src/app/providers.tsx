import { ThemeProvider } from "@/shared/ui/theme-provider";



export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {children}
        </ThemeProvider>
    );
}