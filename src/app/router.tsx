import { createBrowserRouter, redirect } from "react-router";
import App from "./app";
import { ROUTES } from "@/shared/model/routes";
import { Providers } from "./providers";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/login.page"),
        HydrateFallback: () => null,
      },
      {
        path: ROUTES.GPPELEVER,
        lazy: () => import("@/features/gpp-elever/gpp-elever.page"),
        HydrateFallback: () => null,
      },
      {
        path: ROUTES.ROOT,
        loader: () => redirect(ROUTES.TRIBALCARDS),
      },
    ],
  },
]);
