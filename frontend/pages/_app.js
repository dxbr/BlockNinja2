import '../styles/globals.css';
import { WagmiConfig, createConfig } from 'wagmi';
import { http } from 'viem';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { defineChain } from 'viem';

const abstract = defineChain({
  id: 2741,
  name: 'Abstract',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.mainnet.abs.xyz'] },
    public: { http: ['https://api.mainnet.abs.xyz'] }
  },
  blockExplorers: {
    default: { name: 'ABScan', url: 'https://abscan.org' }
  }
});

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains: [abstract] }),
    new InjectedConnector({
      chains: [abstract],
      options: {
        name: 'OKX Wallet',
        getProvider: () => typeof window !== 'undefined' ? window.okxwallet?.ethereum : undefined
      }
    })
  ],
  transports: {
    [abstract.id]: http('https://api.mainnet.abs.xyz')
  }
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
