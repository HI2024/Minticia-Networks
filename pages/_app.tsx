import '@/styles/globals.css'
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, safeWallet } from "@thirdweb-dev/react";
import type { AppProps } from 'next/app'

// const activeChain = "polygon-zkevm-testnet";
const activeChain = {
  chainId: 1442,
  rpc: ["https://rpc.public.zkevm-test.net"],
  nativeCurrency: {
    decimals: 18,
    name: "polygon-zkevm-testnet",
    symbol: "ETH",
  },
  shortName: "polygon-zkevm-testnet",
  slug: "polygon-zkevm-testnet",
  testnet: true,
  chain: "polygon-zkevm-testnet",
  name: "Polygon zkEVM",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(), safeWallet()]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
