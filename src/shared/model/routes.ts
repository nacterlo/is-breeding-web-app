import "react-router";

export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  GPPELEVER: "/gpp-elever",
  DAIRYCOW: "/dairycow",
  BEEFCOW: "/beefcow",
  TRIBALCARDS: "/tribalcard",
  TRIBALCARD: "/tribalcard/:indNumber",
  MOVING: "/moving",
  GPPELEVER_TRIBALCARD: "/gpp-elever/tribalcard",
  GPPELEVER_TRIBALCARD_INDN: "/gpp-elever/tribalcard/:indNumber",
} as const;

export type PathParams = {
  [ROUTES.TRIBALCARD]: {
    indNumber: string;
  };
  [ROUTES.GPPELEVER]: {
    id: string;
  }
};

declare module "react-router" {
  interface Register {
    params: PathParams;
  }
}
