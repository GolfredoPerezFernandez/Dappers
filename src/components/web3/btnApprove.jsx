import { usePrepareContractWrite, useContractWrite } from 'wagmi'
 
export function  BtnMint() {
  const { data, isError, isLoading } = useContractRead({
    address: '0xe990eAA4D078f3F3018F692A5880423cF9536f92',
    abi: erc20,
    args: ['0x212728f5aBb60465dd2fb5a09F3db42A06E48efc','0x754a08cA73CB14264ACCd1E88c3D17f655405861'],
    functionName: 'allowance',
  })

  const { config, error } = usePrepareContractWrite({
    address: '0xe990eAA4D078f3F3018F692A5880423cF9536f92',
    abi: erc20,
    args: ['0x754a08cA73CB14264ACCd1E88c3D17f655405861','10000000000000000000'],
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