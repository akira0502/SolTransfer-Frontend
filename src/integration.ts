import { IDL as idl, Transfer } from './transfer'
import * as anchor from '@project-serum/anchor'

let program: anchor.Program<Transfer> = null as any
let currentWallet: anchor.web3.PublicKey = null as any

export interface IResult {
    success: boolean
    data: any
    msg: string
}

export const initProgram = (
  wallet: any
): IResult => {
  let result: IResult = { success: true, data: null, msg: '' }
  try {
    const connection  = new anchor.web3.Connection("https://api.devnet.solana.com")
    const pid = new anchor.web3.PublicKey('8HynFwVQVorLKEhfU2dF3HLTWcvRtXJ7Poafa9MrC6Nf')
    const provider = new anchor.AnchorProvider(connection, wallet, anchor.AnchorProvider.defaultOptions())
    currentWallet = wallet.publicKey
    program = new (anchor as any).Program(idl, pid, provider) as anchor.Program<Transfer>
  } catch (e: any) {
    result.success = false
    result.msg = e.message
  } finally {
    return result
  }
}

export const sendSol = async (
    toAddress: anchor.web3.PublicKey = new anchor.web3.PublicKey("82WnddQpVrM97z9vEZoqWD5jcB2sqxZg9QRFkBpQ9aMs"),
    signer: anchor.web3.PublicKey = currentWallet,
    signers: anchor.web3.Keypair [] = []
) => {
    let result: IResult = { success: true, data: null, msg: '' }
    const amount = 0.01 * 10 ** 9
    try {
        const tx = await program.methods.sendSolToAddr(new anchor.BN(amount))
        .accounts({
            toAddress: toAddress,
            authority: signer,
            systemProgram: anchor.web3.SystemProgram.programId,
        }).signers(signers).rpc();
        result.msg = "success"
    } catch(e: any) {
        result.msg = e.message
        result.success = false
    } finally {
        console.log(result)
        return result
    }
}
