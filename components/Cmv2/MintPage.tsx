import { useMemo } from 'react';
import * as anchor from '@project-serum/anchor';
import Home from './Home';

import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import { MintPageProps } from './MintPage.props';
import { activeWallets } from '../../wallets/wallets';

const getCandyMachineId = (cmId : string): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      cmId,
    );

    return candyMachineId;
  } catch (e) {
    console.log('Failed to construct CandyMachineId', e);
    return undefined;
  }
};




export const MintPage = ({cmId, setNetwork, rpcUrl = 'https://metaplex.devnet.rpcpool.com/'} : MintPageProps): JSX.Element => {

  const candyMachineId = getCandyMachineId(cmId);
  const network = setNetwork as WalletAdapterNetwork;
  const rpcHost = rpcUrl;
  const connection = new anchor.web3.Connection(
    rpcHost ? rpcHost : anchor.web3.clusterApiUrl('devnet'),
  );

  const txTimeoutInMilliseconds = 30000;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      ...activeWallets(network)
    ],
    [network],
  );

  return (

      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <Home
              candyMachineId={candyMachineId}
              connection={connection}
              txTimeout={txTimeoutInMilliseconds}
              rpcHost={rpcHost}
            />
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>

  );
};

export default MintPage;
