import '@/styles/globals.css'
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, safeWallet } from "@thirdweb-dev/react";
import type { AppProps } from 'next/app'

// const activeChain = "XDC-Apothem-Network";
const activeChain = {
  chainId: 51,
  rpc: ["https://rpc.apothem.network"],
  nativeCurrency: {
    decimals: 18,
    name: "XDC-Apothem-Network",
    symbol: "TXDC",
  },
  shortName: "XDC-Apothem-Network",
  slug: "XDC-Apothem-Network",
  testnet: true,
  chain: "XDC-Apothem-Network",
  name: "XDC-Apothem",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(), safeWallet()]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
