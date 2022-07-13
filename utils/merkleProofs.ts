import { MerkleTree } from "merkletreejs";

import { utils } from 'ethers'

export const generateMerkleProof = (addresses: string[], address: string) => {
  const leafNodes = addresses.map((addr: string) => utils.keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, utils.keccak256, { sortPairs: true });
  const hashedAddress = utils.keccak256(address);
  const proof = merkleTree.getHexProof(hashedAddress);
  const root = merkleTree.getHexRoot();
  const valid = merkleTree.verify(proof, hashedAddress, root);

  return {
    root: root,
    valid: valid,
    proof: proof,
  };
};