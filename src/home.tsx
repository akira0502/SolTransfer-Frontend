import { useEffect, useState } from "react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useAuth } from "./useWalletContext";
import {
	initProgram,
	sendSol
} from './integration'
import './home.css'
import { Link, useNavigate } from "react-router-dom";

interface Wallet {
	signTransaction(tx: Transaction): Promise<Transaction>;
	signAllTransactions(txs: Transaction[]): Promise<Transaction[]>;
	publicKey: PublicKey;
}

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

function Home() {
	const { value, setValue } = useAuth();
	const navigate = useNavigate();

	const [provider, setProvider] = useState<PhantomProvider | undefined>(
		undefined
	  );

	const getProvider = (): PhantomProvider | undefined => {
		if ("solana" in window) {
		  // @ts-ignore
		  const provider = window.solana as any;
		  if (provider.isPhantom) return provider as PhantomProvider;
		}
	  };
	  const connectWallet = async () => {
		// @ts-ignore
		const { solana } = window;
		if (solana) {
		  try {
			const response = await solana.connect();
			if(provider?.publicKey) {
				const wallet: Wallet = {
					signTransaction: provider.signTransaction,
					signAllTransactions: provider.signAllTransactions,
					publicKey: provider?.publicKey
				}
				setValue({
					wallet: wallet
				});
				navigate('/choice', { replace: true });
			}
		  } catch (err) {
			// { code: 4001, message: 'User rejected the request.' }
		  }
		}
	  };
	  const disconnectWallet = async () => {
		// @ts-ignore
		const { solana } = window;
		if (value && solana) {
		  await (solana as PhantomProvider).disconnect();
		  setValue(null);
		}
	  };
	
	  // detect phantom provider exists
	  useEffect(() => {
		const provider = getProvider();
	
		if (provider) setProvider(provider);
		else setProvider(undefined);
	  }, []);

	const connectWalletModalTrigger = () => {
		(document as any).getElementById('modal').classList.toggle('display-flex')
	}
	return (
		<div>
			<div id="modal" className="fixed hidden items-center justify-center w-[100vw] h-[100vh] bg-gray-50 bg-opacity-50">
				<div className="pt-4 sm:pt-3 overflow-x-hidden w-[94%] sm:w-[35%] bg-[#222128] rounded-3xl">
					<div className="h-[569px] max-h-[94vh] overflow-y-scroll">
						<div className="flex justify-between items-center px-4 pb-1">
							<h3 className="text-xl text-[#b8add2] pl-1 font-semibold">Connect Wallet</h3>
							<svg xmlns="http://www.w3.org/2000/svg" onClick={connectWalletModalTrigger}
								className="text-[#21c2d3] w-5 h-5 cursor-pointer hover:text-opacity-80" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd" />
							</svg>
						</div>
						<div className="overflow-y- h-auto pt-6 sm:pt-2">
							<div className="grid grid-cols-2">
								<div className="pb-2">
								{provider && ! value && (
									<a  onClick={connectWallet}>
										<div className="flex justify-center">
											<img src="./phantomlogo-freelogovectors.net_.png" className="w-10" alt="" />
										</div>
										<h3 className="text-base text-[#c9bfd9] mt-2 font-semibold text-center">Phantom</h3>
									</a>
								)}

								{provider && value && (
									<a  onClick={disconnectWallet}>
										<div className="flex justify-center">
											<img src="./phantomlogo-freelogovectors.net_.png" className="w-10" alt="" />
										</div>
										<h3 className="text-base text-[#c9bfd9] mt-2 font-semibold text-center">DisConnect</h3>
									</a>
								)}

								{!provider && (
									<a  href="https://phantom.app/">
										<div className="flex justify-center">
											<img src="./phantomlogo-freelogovectors.net_.png" className="w-10" alt="" />
										</div>
										<h3 className="text-base text-[#c9bfd9] mt-2 font-semibold text-center">Get Phantom Extension</h3>
									</a>
								)}
								</div>
								<div className="pb-2">
									<Link to="/choice">
										<div className="flex justify-center">
											<img src="./transparent-1.png" className="w-10" alt="" />
										</div>
										<h3 className="text-base text-[#c9bfd9] mt-2 font-semibold text-center">Coinbase Wallet</h3>
									</Link>
								</div>
								<div className="pb-2">
									<Link to="/choice">
										<div className="flex justify-center">
											<img src="./MetaMask_Fox.svg.png" className="w-10" alt="" />
										</div>
										<h3 className="text-base text-[#c9bfd9] mt-2 font-semibold text-center">Meta Mask</h3>
									</Link>
								</div>
								<div className="pb-2">
									<Link to="/choice">
										<div className="flex justify-center">
											<img src="./icon.png" className="w-10" alt="" />
										</div>
										<h3 className="text-base text-[#c9bfd9] mt-2 font-semibold text-center">WalletConnect</h3>
									</Link>
								</div>
							</div>
							<div className="flex justify-center">
								<img src="./dot.png" alt="" />
							</div>
							<h3 className="text-base text-[#c9bfd9] font-semibold text-center">More</h3>

							<h3 className="text-lg text-[#c9bfd9] mt-2 font-semibold text-center">Havenot crypto wallet yet?</h3>
							<a href="#">
								<div className="flex justify-center mt-2">
									<button
										className="rounded-lg sm:rounded-xl text-lg sm:text-lg mx-8 sm:mx-0 w-full sm:w-auto sm:px-12 py-2 bg-[#c9bfd9] text-black font-semibold hover:opacity-90">
										Learn How to Connect
									</button>
								</div>
							</a>
							<img src="./chains1.png" className="w-52 mx-auto" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black pr-2 sm:pr-0">
				<div className="flex justify-between items-center px-2 pb-2 sm:pb-4 pt-3 sm:pt-6 max-w-4xl mx-auto">
					<a href="https://www.x-ender.com/">
						<img loading="lazy" src="./header.png" className="w-40" alt="" />
					</a>
					<div className="flex items-center">
						<a href="https://www.x-ender.com/">
							<h5 className="text-[#8447ff] hover:text-opacity-90 text-lg sm:text-2xl cursor-pointer pr-4 sm:pr-16">ABOUT
							</h5>
						</a>
						<Link to="/dashboard">
							<h5 className="text-[#8447ff] hover:text-opacity-90 text-lg sm:text-2xl cursor-pointer">Fleet</h5>
						</Link>
					</div>
				</div>
			</div>

			<div className="py-12 sm:py-8 bg-[#383157]">
				<div className="flex justify-center">
					<button onClick={connectWalletModalTrigger}
						className="bg-[#732dff] text-white text-3xl px-10 sm:px-16 py-4 sm:py-6 hover:opacity-90 rounded-xl">Connect Wallet</button>
				</div>
				<div className="flex justify-center">
					<img src="./chains.png" className="w-64 rounded-2xl my-12 sm:my-6" alt="" />
				</div>
				<div className="flex justify-center">
					<a href="#">
						<button
							className="bg-[#732dff] text-white text-3xl px-10 sm:px-16 py-4 sm:py-6 hover:opacity-90 rounded-xl">How it works</button>
					</a>
				</div>
			</div>
			<div className="bg-[#27262c] pt-4 pb-4 ">
				<div className="flex justify-center">
					<a href="https://www.x-ender.com/">
						<img loading="lazy" src="./footer_top_icon.png" className="w-10 sm:w-10" alt="" />
					</a>
				</div>
				<div className="flex max-w-[250px] sm:max-w-sm mt-2 sm:mt-1 mx-auto justify-between">
					<a href="https://twitter.com/X_ENDER_future" className="-mt-[3px]">
						<img loading="lazy" src="./first_icon.png" alt="" className="w-8 sm:w-10" />
					</a>
					<a href="#">
						<img loading="lazy" src="./second_icon.png" alt="" className="w-8 sm:w-10" />
					</a>
					<a href="https://www.linkedin.com/company/x-ender/">
						<img loading="lazy" src="./third_icon.png" alt="" className="w-8 sm:w-10" />
					</a>
					<a href="https://www.instagram.com/x_ender_decentralized_ai/">
						<img loading="lazy" src="./forth_icon.png" alt="" className="w-8 sm:w-10" />
					</a>
					<a href="http://www.tiktok.com/@x_ender_ai">
						<img loading="lazy" src="./fifth_icon.png" alt="" className="w-8 sm:w-10" />
					</a>
					<a href="https://medium.com/@on.chain.x">
						<img loading="lazy" src="./sisth_icon.png" alt="" className="w-8 sm:w-10" />
					</a>
				</div>
				<h4 className="text-[#23bdcd] mt-6 pb-3 text-center text-sm md:text-lg sm:text-2xl">
					X - ENDER S.R.L. 2022 &copy; All Rights Reserved
				</h4>
			</div>
		</div>
	)
}
export default Home;