import { PinataSDK } from "pinata";
import "server-only";

import { env } from "@/env/server";

export const pinata = new PinataSDK({
  pinataJwt: `${env.PINATA_JWT}`,
  pinataGateway: `${env.NEXT_PUBLIC_GATEWAY_URL}`,
});
