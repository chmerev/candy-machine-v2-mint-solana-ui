/* eslint-disable @typescript-eslint/no-unused-vars */
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  SolletExtensionWalletAdapter,
	GlowWalletAdapter,
	BitKeepWalletAdapter,
	BitpieWalletAdapter,
	BloctoWalletAdapter,
	CloverWalletAdapter,
	Coin98WalletAdapter,
	CoinhubWalletAdapter,
	LedgerWalletAdapter,
	MathWalletAdapter,
	SafePalWalletAdapter,
	SolongWalletAdapter,
	TokenPocketWalletAdapter,
	TorusWalletAdapter,

} from '@solana/wallet-adapter-wallets';

export const activeWallets = (network: WalletAdapterNetwork) => [
	new PhantomWalletAdapter(),
	new GlowWalletAdapter(),
	new SlopeWalletAdapter(),
	new SolflareWalletAdapter(),
	new SolletWalletAdapter({ network }),
	new SolletExtensionWalletAdapter({ network }),

	// new BitKeepWalletAdapter(),
	// new BitpieWalletAdapter(),
	// new BloctoWalletAdapter(),
	// new CloverWalletAdapter(),
	// new Coin98WalletAdapter(),
	// new CoinhubWalletAdapter(),
	// new LedgerWalletAdapter(),
	// new MathWalletAdapter(),
	// new SafePalWalletAdapter(),
	// new SolongWalletAdapter(),
	// new TokenPocketWalletAdapter(),
	// new TorusWalletAdapter(),
];