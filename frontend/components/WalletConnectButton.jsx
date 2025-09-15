import { useAccount, useConnect, useDisconnect } from 'wagmi';

export default function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    const short = address.substring(0, 6) + '...' + address.substring(address.length - 4);
    return (
      <button type="button" onClick={() => disconnect()}>
        DISCONNECT {short}
      </button>
    );
  }

  return (
    <>
      {connectors.map((connector) => (
        <button
          type="button"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          CONNECT {connector.name.toUpperCase()}
        </button>
      ))}
    </>
  );
}
