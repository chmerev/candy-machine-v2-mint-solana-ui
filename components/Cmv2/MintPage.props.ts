import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MintPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  cmId: string;
  setNetwork: 'devnet' | 'mainnet';
  rpcUrl?: string;
}