import { LoginForm } from "@/features/auth/ui/login-form";
import { AuthLayout } from "./ui/auth-layout";

function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>

  );
}

export const Component = LoginPage;
