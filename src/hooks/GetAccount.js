import { useAccount } from 'wagmi'

function GetAccount() {
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isConnecting) return <div>Connecting…</div>
  if (isDisconnected) return <div>Disconnected</div>
  return address
}

export default GetAccount