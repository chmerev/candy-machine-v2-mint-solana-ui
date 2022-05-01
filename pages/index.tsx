import Head from 'next/head';
import React from "react";
import { MintPage } from "../components";


export default function Home(): JSX.Element{
  
  return (
    <>
			<Head>
				<title>{process.env.NEXT_PUBLIC_PAGE_TITLE}</title>
			</Head> 
			<MintPage 
				cmId={`${process.env.NEXT_PUBLIC_CANDY_MACHINE_ID}`}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				setNetwork={`${process.env.NEXT_PUBLIC_SOLANA_NETWORK}`}
				rpcUrl={`${process.env.NEXT_PUBLIC_RPC_URL}`}
			>
    	</MintPage>
    </>
  );
}
