import React from 'react'
import { useWeb3 } from '../../../hooks'
import Button from './index'
import { ButtonSize } from '../../../types/types'

interface PublicProps {
  mint: (() => Promise<void>) | null
}
const PublicMintButton = ({ mint }: PublicProps) => {
  return mint ? (
    <Button
      size={ButtonSize.PRIMARY}
      className="mx-auto mt-[30px] tablet:mt-7 xl:mt-[34px]"
      onClick={mint}>
      Mint
    </Button>
  ) : (
    <button>Loading...</button>
  )
}
interface PublicProps {
  mint: (() => Promise<void>) | null
}
const WhiteListMintButton = ({ mint }: PublicProps) => {
  return mint ? (
    <Button
      size={ButtonSize.PRIMARY}
      className="mx-auto mt-[30px] tablet:mt-7 xl:mt-[34px]"
      onClick={mint}>
      Mint
    </Button>
  ) : (
    <button>Loading...</button>
  )
}

export function MintButton() {
  const { web3Provider, publicMint,whiteListMint } = useWeb3()
  let isPublicMint=false
  return isPublicMint ? 
    ( <PublicMintButton mint={publicMint} />) :
    ( <WhiteListMintButton mint={publicMint} />) 
}