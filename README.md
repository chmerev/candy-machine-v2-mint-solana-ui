# About

If you want to quickly run an NFT mint page on Solana using Candy Machine V2.

For instructions on how to set up a Candy Machine V2, please refer to Metaplex's documentation [here](https://docs.metaplex.com/candy-machine-v2/Introduction)

### Watch this video to see how it works

Click on the picture to see a video of how it works
[![how it works](https://i.ibb.co/Xz4PG6B/2022-05-02-01-53-26.png)](https://youtu.be/kfab_pcW34A)

## If this helped you, I would be happy to donate to Solana wallet.

`6TUFirgxGnijusqo3K3b4BUdkqz3HXFJC8527LJofbU9`

# How to install?

## One-Click Vercel Deployment

One-click solution to clone this project to your GitHub and deploy the prod package on a Vercel.
Your only task will be to customize your GitHub fork of this project and commit updates.
Vercel will automatically deploy new prod packages for each new commit.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchmerev%2Fcandy-machine-v2-mint-solana-ui.git&env=NEXT_PUBLIC_PAGE_TITLE,NEXT_PUBLIC_COLLECTION_NAME,NEXT_PUBLIC_COLLECTION_DESCRIPTION,NEXT_PUBLIC_COLLECTION_IMAGE,NEXT_PUBLIC_CANDY_MACHINE_ID,NEXT_PUBLIC_SOLANA_NETWORK,NEXT_PUBLIC_RPC_URL,NEXT_PUBLIC_BACKGROUND_COLOR&project-name=candy-machine-v2-mint-solana-ui)

### Installation

#### 1. Fork the project & clone it. Example:

```
git clone https://github.com/chmerev/candy-machine-v2-mint-solana-ui.git
```

#### 2. Define your environment variables (.env file)

NEXT_PUBLIC_PAGE_TITLE — Page header in the browser

NEXT_PUBLIC_COLLECTION_NAME — The name of your collection

NEXT_PUBLIC_COLLECTION_DESCRIPTION — Description of your collection

NEXT_PUBLIC_COLLECTION_IMAGE — Example of an NFT image uploaded to public/toEdit

NEXT_PUBLIC_CANDY_MACHINE_ID — The address of your Candy Machine V2

NEXT_PUBLIC_SOLANA_NETWORK — In which network to run the mint

NEXT_PUBLIC_RPC_URL — RPC URL, the default is https://metaplex.devnet.rpcpool.com/, I recommend buying NODE to run it. I recommend [this](https://hackmd.io/@levicook/HJcDneEWF).

NEXT_PUBLIC_BACKGROUND_COLOR — Background Color

#### 3. Setting up wallets

In the wallets/wallets.ts folder, uncomment the wallets you need.

#### 4. Project Launch

Set the dependencies
```
npm install
```

Start building the project
```
npm run build
```

Start the project and testing
```
npm run start
```

# Need help?
Message me on [Telegram](https://t.me/a_chmerev)