import React from 'react'
import { useWeb3 } from '../../../hooks'
import Button from './index'
import { ButtonSize } from '../../../types/types'

interface ConnectProps {
  connect: (() => Promise<void>) | null
}
const ConnectButton = ({ connect }: ConnectProps) => {
  return connect ? (
    <Button size={ButtonSize.SMALL} className="" onClick={connect}>

      Connect
  </Button>

    // <button onClick={connect}>Connect</button>
  ) : (
    <button>Loading...</button>
  )
}

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null
}

const DisconnectButton = ({ disconnect }: DisconnectProps) => {
  return disconnect ? (
    <Button size={ButtonSize.SMALL} className="" onClick={disconnect}>
      Disconnect
    </Button>
  ) : (
    <button>Loading...</button>
  )
}

export function Web3Button() {
  const { web3Provider, connect, disconnect } = useWeb3()

  return web3Provider ? (
    <DisconnectButton disconnect={disconnect} />
  ) : (
    <ConnectButton connect={connect} />
  )
}