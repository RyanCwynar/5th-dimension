import { useEffect, useReducer, useCallback, useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { abi as FifthDimensionAbi } from '../utils/FifthDimension.json'

import {
  Web3ProviderState,
  Web3Action,
  web3InitialState,
  web3Reducer,
} from '../reducers'

import { toast } from 'react-toastify'
import { generateMerkleProof } from '../utils/merkleProofs'
import { WhiteListAddresses } from '../data/whitelist'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    },
  },
}

let web3Modal: Web3Modal | null
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: process.env.NEXT_PUBLIC_CHAIN_NETWORK, // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

export const useWeb3 = () => {
  const [state, dispatch] = useReducer(web3Reducer, web3InitialState)
  const { provider, web3Provider, address, network } = state

  const connect = useCallback(async () => {
    if (web3Modal) {
      try {
        const provider = await web3Modal.connect()
        const web3Provider = new ethers.providers.Web3Provider(provider)
        const signer = web3Provider.getSigner()
        const address = await signer.getAddress()
        const network = await web3Provider.getNetwork()
        
   
        dispatch({
          type: 'SET_WEB3_PROVIDER',
          provider,
          web3Provider,
          address,
          network,
        } as Web3Action)
      } catch (e) {
        console.log('connect error', e)
      }
    } else {
      console.error('No Web3Modal')
    }
  }, [])
  const isPublicActive = useCallback(async () => {
    if (web3Modal) {
      try {
        const provider = await web3Modal.connect()
        const web3Provider = new ethers.providers.Web3Provider(provider)
        const signer = web3Provider.getSigner()
        const nftContract = new ethers.Contract(
          String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
          FifthDimensionAbi,
          signer
        )
        return  await nftContract.isPublicSaleActive()
 
      } catch (error) {



      }
    } else {
      console.error('No Web3Modal')
    }
  }, [])
  const disconnect = useCallback(async () => {
    if (web3Modal) {
      web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      toast.error('Disconnected from Web3')
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      } as Web3Action)
    } else {
      console.error('No Web3Modal')
    }
  }, [provider])
  // Mint function
  const publicMint = useCallback(async () => {
    if (web3Modal && web3Modal.cachedProvider) {
      try {
        const provider = await web3Modal.connect()
        const web3Provider = new ethers.providers.Web3Provider(provider)
        const signer = web3Provider.getSigner()
        const nftContract = new ethers.Contract(
          String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
          FifthDimensionAbi,
          signer
        )
        const nftTx = await nftContract.mint()
        let tx = await nftTx.wait()
        // eslint-disable-next-line no-console
        toast.promise(nftTx, {
          pending: 'Minting Your Owlie',
          success: 'Yay, new Owlie minted',
          error: 'Error',
        })
      } catch (error) {
        let errorMessage = 'Something Wrong!'
        if (error instanceof Error) {
          errorMessage = (error as any).error.message
        }
        toast.error(errorMessage, {
          position: 'top-right',
          toastId: 'WL-MINT-ERR',
        })
      }
    }
  }, [])

  const whiteListMint = useCallback(async () => {
    if (web3Modal && web3Modal.cachedProvider) {
      try {
        const provider = await web3Modal.connect()
        const web3Provider = new ethers.providers.Web3Provider(provider)
        const signer = web3Provider.getSigner()
        const address = await signer.getAddress()
        const nftContract = new ethers.Contract(
          String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
          FifthDimensionAbi,
          signer
        )
        const merkleProof = generateMerkleProof(WhiteListAddresses, address)
        const nftTx = await nftContract.whitelistMint(merkleProof.proof)

        let tx = await nftTx.wait()
        // eslint-disable-next-line no-console
        toast.promise(nftTx, {
          pending: 'Minting Your Owli',
          success: 'Yay, new Owli minted',
          error: 'Error',
        })
      } catch (error) {
        let errorMessage = 'Something Wrong!'
        if (error instanceof Error) {
          errorMessage = (error as any).error?.message
        }
        toast.error(errorMessage, {
          position: 'bottom-right',
          toastId: 'WL-MINT-ERR',
        })
      }
    }
  }, [])
  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // EIP-1193 events
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        toast.info('Changed Web3 Account')
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        } as Web3Action)
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        if (typeof window !== 'undefined') {
          console.log('switched to chain...', _hexChainId)
          toast.info('Web3 Network Changed')
          window.location.reload()
        } else {
          console.log('window is undefined')
        }
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  return {
    provider,
    web3Provider,
    address,
    network,
    connect,
    disconnect,
    publicMint,
    whiteListMint,
    isPublicActive,
  } as Web3ProviderState
}
