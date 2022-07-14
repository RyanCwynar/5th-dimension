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
      WhiteList Mint
    </Button>
  ) : (
    <button>Loading...</button>
  )
}

export async function  MintButton()  {
  const { web3Provider, publicMint,whiteListMint,isPublicActive } = useWeb3()
  const isActive = true
  return isActive ? ( <PublicMintButton mint={publicMint} />) : ( <WhiteListMintButton mint={whiteListMint} />) 
}