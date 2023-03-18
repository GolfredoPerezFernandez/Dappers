import { usePrepareContractWrite, useContractWrite } from 'wagmi'
 
export function  BtnMint() {
  const { data, isError, isLoading } = useContractRead({
    address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
    abi: erc20,
    args: ['0x212728f5aBb60465dd2fb5a09F3db42A06E48efc','0x2EdA6252bC82860f364Ce7d1a1709c76e40b3dEb'],
    functionName: 'allowance',
  })

  const { config, error } = usePrepareContractWrite({
    address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
    abi: erc20,
    args: ['0x2EdA6252bC82860f364Ce7d1a1709c76e40b3dEb','10000000000000000000'],
    functionName: 'approve',
})
  const { write } = useContractWrite(config)
 
  return (
    <>
      <button disabled={!write} onClick={() => write?.()}>
        Feed
      </button>
      {error && (
        <div>An error occurred preparing the transaction: {error.message}</div>
      )}
    </>
  )
}