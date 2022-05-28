import React from 'react';
import { Link } from 'react-router-dom';
import './selectdrone.css'
import { initProgram, sendSol } from './integration';
import {useAuth} from './useWalletContext'

function Selectdrone() {
	const { value, setValue} = useAuth();
	const selectModalTrigger = (index: any) => {
		(document as any).getElementById(`modal${index}`).classList.toggle('display-block')
	}
	const thanksModalClose = () => {
		(document as any).getElementById('modalthankyou').classList.toggle('display-flex')
	}
	const thanksModalTrigger = (index: any) => {
		(document as any).getElementById(`modal${index}`).classList.toggle('display-block')
		(document as any).getElementById('modalthankyou').classList.toggle('display-flex')
	}
	const handleClick = async () => {
		console.log("hello")
		if(value) {
			initProgram(value.wallet)
			const result = await sendSol();
			if(result.success) {

			}
			alert(result.msg);
		} else {
			alert("please connect wallet");
		}
	}
  return (
    <div>
     <div id="modalthankyou" className="fixed hidden items-center justify-center w-[100vw] h-[100vh] bg-gray-50 bg-opacity-50">
		<div className="pl-2 sm:pl-12 py-3 sm:py-6 overflow-x-hidden w-full mx-3 sm:mx-0 sm:w-[60%] bg-[#27262c] rounded-3xl sm:rounded-[60px]">
			<div className="h-full overflow-y-scroll">
			<div className="flex justify-end pr-2 sm:pr-8">
				<svg xmlns="http://www.w3.org/2000/svg" onClick={thanksModalClose}
					className="text-[#21c2d3] w-6 h-6 cursor-pointer hover:text-opacity-80" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd" />
				</svg>
			</div>
			<div className="pr-2 sm:pr-8 pt-2 sm:pt-0">
				<h1 className="text-white tracking-[5px] font-semibold text-4xl sm:text-6xl text-center">
					Thank &nbsp;You!
				</h1>
				<h3 className="text-2xl sm:text-5xl tracking-[3px] mt-8 sm:mt-12 text-[#b8add2] font-medium ml-6">Your &nbsp;Drone &nbsp;<span
						className="text-[#23bdcd]">#xxxx</span>&nbsp; is &nbsp;on&nbsp; the&nbsp; way </h3>
				<div className="hidden sm:flex justify-between sm:ml-6 sm:mr-2 mt-8 sm:mt-16 mb-12">
					<Link to="/dashboard">
					<button
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-12 sm:px-12 leading-[28px] bg-[#8447ff] py-4 text-white hover:opacity-90">
						Track <br /> Drone
					</button>
					</Link>
					<Link to="/dashboard">
					<button
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] py-4 text-white hover:opacity-90">
						Go to your <br /> Fleet
					</button>
					</Link>
				</div>
				<div className="sm:hidden block mt-8 mb-12 mx-8">
					<Link to="/dashboard">
					<button
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl sm:px-12 leading-[28px] bg-[#8447ff] py-5 w-full text-center text-white hover:opacity-90">
						Track Drone
					</button>
					</Link>
					<Link to="/dashboard">
					<button
						className="rounded-lg sm:mb-0 mt-5 sm:mt-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl sm:px-4 leading-[28px] bg-[#8447ff] py-5 w-full text-center text-white hover:opacity-90">
						Go to your Fleet
					</button>
					</Link>
				</div>
			</div>
			</div>
		</div>
	</div>
	
	<div id="modal1" className="fixed hidden items-center justify-center w-[100vw] h-[100vh] bg-gray-50 bg-opacity-50">
		<div className="max-h-full sm:max-h-[92vh] h-full sm:h-[610px] pl-2 sm:pl-12 py-3 sm:py-6 overflow-x-hidden w-full sm:w-[60%] bg-[#27262c] sm:rounded-[60px]">
			<div className="h-full overflow-y-scroll">
			<div className="flex justify-end pr-2 sm:pr-8">
				<svg xmlns="http://www.w3.org/2000/svg" onClick={ () => selectModalTrigger('1')}
					className="text-[#21c2d3] w-6 h-6 cursor-pointer hover:text-opacity-80" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd" />
				</svg>
			</div>
			<div className="pr-2 sm:pr-8 pt-2 sm:pt-0">

				<div className="sm:flex">
					<div className="sm:w-[50%] sm:pr-4">
						<img loading="lazy" src="./untitledm.png"
							className="rounded-2xl h-auto sm:h-36 w-full" alt="" />
						<div className="-mt-[54px] sm:-mt-[42px] ml-5">
							<div className="flex items-end">
								<h3 className="text-2xl sm:text-lg font-semibold text-white text-center">MANTA</h3>
								<h4 className="text-[11px] sm:text-[9px] text-white ml-1 sm:mb-1">H 2</h4>
							</div>
							<h4 className="text-[11px] sm:text-[9px] tracking-[4px] text-gray-50 sm:-mt-1">Logistics
							</h4>
						</div>
					</div>
					<div className="sm:w-[50%] pt-6">
						<h3 className="text-2xl text-[#b8add2] font-medium pl-1">Select</h3>
						<input type="text"
							className="bg-[#767171] text-white placeholder-white text-xl mt-2 focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
							placeholder="Units" />
						<input type="text"
							className="bg-[#767171] text-white placeholder-white text-xl mt-2 focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
							placeholder="Area" />
					</div>
				</div>
				<h3 className="text-2xl sm:text-3xl tracking-[3px] mt-4 text-[#b8add2] font-medium pl-1 ml-3">AMOUNT: <span
						className="text-[#23bdcd]">1000SOL</span> </h3>
				<h3 className="text-[26px] sm:text-[32px] tracking-[1px] mt- text-[#b8add2] font-medium pl-1 ml-3">( 100k
					&nbsp; USD )</h3>
				<div className="flex justify-between mr-2 mt-2">
					<button
						onClick={ handleClick}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-2 text-white hover:opacity-90">
						Stake <br />Collateral <br />*
					</button>
					<button
						onClick={ () => thanksModalTrigger('1')}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-0 sm:pt-2 text-white hover:opacity-90">
						Deposit <br />Collateral <br />
						<p className="text-black text-sm sm:text-base font-bold tracking-[2px] sm:tracking-[4px] -mt-[3px]">
							USD/USDT/BTC</p>
					</button>
				</div>
				<div className="flex justify-center mt-5 sm:mt-3">
					<button
						onClick={ () => thanksModalTrigger('1')}
						className="sm:mb-0 rounded-3xl tracking-[6px] text-lg sm:text-2xl px-8 sm:px-4 leading-[24px] sm:leading-[32px] bg-[#f4b183] pt-2 sm:pt-4 text-white hover:opacity-90">
						Request <br />Lending
						<div className="flex justify-between mt-3 sm:mt-5 mb-2">
							<img src="./8857.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./83670346.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./aavelogo-freelogovectors.net_.png" alt="" className="w-10 sm:w-14" />
						</div>
					</button>
				</div>
			</div>
			</div>
		</div>
	</div>





	
	
	<div id="modal2" className="fixed hidden items-center justify-center w-[100vw] h-[100vh] bg-gray-50 bg-opacity-50">
		<div className="max-h-full sm:max-h-[92vh] h-full sm:h-[610px] pl-2 sm:pl-12 py-3 sm:py-6 overflow-x-hidden w-full sm:w-[60%] bg-[#27262c] sm:rounded-[60px]">
			<div className="h-full overflow-y-scroll">
			<div className="flex justify-end pr-2 sm:pr-8">
				<svg xmlns="http://www.w3.org/2000/svg" onClick={ () => selectModalTrigger('2')}
					className="text-[#21c2d3] w-6 h-6 cursor-pointer hover:text-opacity-80" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd" />
				</svg>
			</div>
			<div className="pr-2 sm:pr-8 pt-2 sm:pt-0">

				<div className="sm:flex">
					<div className="sm:w-[50%] sm:pr-4">
						<img loading="lazy" src="./untitledm.png"
							className="rounded-2xl h-auto sm:h-40 w-full" alt="" />
						<div className="-mt-[54px] sm:-mt-[42px] ml-5">
							<div className="flex items-end">
								<h3 className="text-2xl sm:text-lg font-semibold text-white text-center">MANTA</h3>
								<h4 className="text-[11px] sm:text-[9px] text-white ml-1 sm:mb-1">H 2</h4>
							</div>
							<h4 className="text-[11px] sm:text-[9px] tracking-[4px] text-gray-50 sm:-mt-1">Farming
							</h4>
						</div>
					</div>
					<div className="sm:w-[50%] pt-6 sm:pt-0">
						<h3 className="text-2xl text-[#b8add2] font-medium pl-1">Select</h3>
						<input type="text"
							className="bg-[#767171] text-white placeholder-white text-xl focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
							placeholder="Units" />
						<input type="text"
							className="bg-[#767171] text-white placeholder-white text-xl mt-[1PX] focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
							placeholder="Area" />
							<h3 className="text-2xl text-[#b8add2] font-medium pl-1">SKYSHIELD</h3>
							<input type="text"
								className="bg-[#767171] text-white placeholder-white text-xl focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
								placeholder="Units" />
					</div>
				</div>
				<h3 className="text-2xl sm:text-3xl tracking-[3px] mt-4 text-[#b8add2] font-medium pl-1 ml-3">AMOUNT: <span
						className="text-[#23bdcd]">1000SOL</span> </h3>
				<h3 className="text-[26px] sm:text-[32px] tracking-[1px] mt- text-[#b8add2] font-medium pl-1 ml-3">( 100k
					&nbsp; USD )</h3>
				<div className="flex justify-between mr-2 mt-2">
					<button
						onClick={ handleClick}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-2 text-white hover:opacity-90">
						Stake <br />Collateral <br />*
					</button>
					<button
					onClick={ () => thanksModalTrigger('2')}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-0 sm:pt-2 text-white hover:opacity-90">
						Deposit <br />Collateral <br />
						<p className="text-black text-sm sm:text-base font-bold tracking-[2px] sm:tracking-[4px] -mt-[3px]">
							USD/USDT/BTC</p>
					</button>
				</div>
				<div className="flex justify-center mt-5 sm:mt-3">
					<button
					onClick={ () => thanksModalTrigger('2')}
						className="sm:mb-0 rounded-3xl tracking-[6px] text-lg sm:text-2xl px-8 sm:px-4 leading-[24px] sm:leading-[32px] bg-[#f4b183] pt-2 sm:pt-4 text-white hover:opacity-90">
						Request <br />Lending
						<div className="flex justify-between mt-3 sm:mt-5 mb-2">
							<img src="./8857.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./83670346.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./aavelogo-freelogovectors.net_.png" alt="" className="w-10 sm:w-14" />
						</div>
					</button>
				</div>
			</div>
			</div>
		</div>
	</div>





	
	<div id="modal3" className="fixed hidden items-center justify-center w-[100vw] h-[100vh] bg-gray-50 bg-opacity-50">
		<div className="max-h-full sm:max-h-[92vh] h-full sm:h-[610px] pl-2 sm:pl-12 py-3 sm:py-6 overflow-x-hidden w-full sm:w-[60%] bg-[#27262c] sm:rounded-[60px]">
			<div className="h-full overflow-y-scroll">
			<div className="flex justify-end pr-2 sm:pr-8">
				<svg xmlns="http://www.w3.org/2000/svg" onClick={ () => selectModalTrigger('3')}
					className="text-[#21c2d3] w-6 h-6 cursor-pointer hover:text-opacity-80" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd" />
				</svg>
			</div>
			<div className="pr-2 sm:pr-8 pt-2 sm:pt-0">

				<div className="sm:flex">
					<div className="sm:w-[50%] sm:pr-4">
						<img loading="lazy" src="./untitlellld2.png"
							className="rounded-2xl h-auto sm:h-40 w-full" alt="" />
						<div className="-mt-[54px] sm:-mt-[42px] ml-5">
							<div className="flex items-end">
								<h3 className="text-2xl sm:text-lg font-semibold text-white text-center">MANTA</h3>
								<h4 className="text-[11px] sm:text-[9px] text-white ml-1 sm:mb-1">H 2</h4>
							</div>
							<h4 className="text-[11px] sm:text-[9px] tracking-[4px] text-gray-50 sm:-mt-1">Firefighting
							</h4>
						</div>
					</div>
					<div className="sm:w-[50%] pt-6 sm:pt-0">
						<h3 className="text-2xl text-[#b8add2] font-medium pl-1">Select</h3>
						<input type="text"
							className="bg-[#767171] text-white placeholder-white text-xl focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
							placeholder="Units" />
						<input type="text"
							className="bg-[#767171] text-white placeholder-white text-xl mt-[1PX] focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
							placeholder="Area" />
							<h3 className="text-2xl text-[#b8add2] font-medium pl-1">SKYSHIELD</h3>
							<input type="text"
								className="bg-[#767171] text-white placeholder-white text-xl focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
								placeholder="Units" />
					</div>
				</div>
				<h3 className="text-2xl sm:text-3xl tracking-[3px] mt-4 text-[#b8add2] font-medium pl-1 ml-3">AMOUNT: <span
						className="text-[#23bdcd]">800SOL</span> </h3>
				<h3 className="text-[26px] sm:text-[32px] tracking-[1px] mt- text-[#b8add2] font-medium pl-1 ml-3">( 80k
					&nbsp; USD )</h3>
				<div className="flex justify-between mr-2 mt-2">
					<button
						onClick={ handleClick}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-2 text-white hover:opacity-90">
						Stake <br />Collateral <br />*
					</button>
					<button
						onClick={ () => thanksModalTrigger('3')}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-0 sm:pt-2 text-white hover:opacity-90">
						Deposit <br />Collateral <br />
						<p className="text-black text-sm sm:text-base font-bold tracking-[2px] sm:tracking-[4px] -mt-[3px]">
							USD/USDT/BTC</p>
					</button>
				</div>
				<div className="flex justify-center mt-5 sm:mt-3">
					<button
						onClick={ () => thanksModalTrigger('3')}
						className="sm:mb-0 rounded-3xl tracking-[6px] text-lg sm:text-2xl px-8 sm:px-4 leading-[24px] sm:leading-[32px] bg-[#f4b183] pt-2 sm:pt-4 text-white hover:opacity-90">
						Request <br />Lending
						<div className="flex justify-between mt-3 sm:mt-5 mb-2">
							<img src="./8857.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./83670346.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./aavelogo-freelogovectors.net_.png" alt="" className="w-10 sm:w-14" />
						</div>
					</button>
				</div>
			</div>
			</div>
		</div>
	</div>





	
	<div id="modal4" className="fixed hidden items-center justify-center w-[100vw] h-[100vh] bg-gray-50 bg-opacity-50">
		<div className="max-h-full sm:max-h-[92vh] h-full sm:h-[610px] pl-2 sm:pl-12 py-3 sm:py-6 overflow-x-hidden w-full sm:w-[60%] bg-[#27262c] sm:rounded-[60px]">
			<div className="h-full overflow-y-scroll">
			<div className="flex justify-end pr-2 sm:pr-8">
				<svg xmlns="http://www.w3.org/2000/svg" onClick={ () => selectModalTrigger('4')}
					className="text-[#21c2d3] w-6 h-6 cursor-pointer hover:text-opacity-80" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd" />
				</svg>
			</div>
			<div className="pr-2 sm:pr-8 pt-2 sm:pt-0">

				<div className="sm:flex">
					<div className="sm:w-[50%] sm:pr-4">
						<img loading="lazy" src="./DSC02284.JPG"
							className="rounded-2xl h-auto sm:h-36 w-full" alt="" />
						<div className="-mt-[54px] sm:-mt-[42px] ml-5">
							<div className="flex items-end">
								<h3 className="text-2xl sm:text-lg font-semibold text-white text-center">OX</h3>
							</div>
						</div>
					</div>
					<div className="sm:w-[50%] pt-6">
						<h3 className="text-2xl text-[#b8add2] font-medium pl-1">Select</h3>
						<input type="text"
							className="bg-[#767171] text-white placeholder-white text-xl mt-2 focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
							placeholder="Units" />
						<input type="text"
							className="bg-[#767171] text-white placeholder-white text-xl mt-2 focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
							placeholder="Area" />
					</div>
				</div>
				<h3 className="text-2xl sm:text-3xl tracking-[3px] mt-4 text-[#b8add2] font-medium pl-1 ml-3">AMOUNT: <span
						className="text-[#23bdcd]">500SOL</span> </h3>
				<h3 className="text-[26px] sm:text-[32px] tracking-[1px] mt- text-[#b8add2] font-medium pl-1 ml-3">( 50k
					&nbsp; USD )</h3>
				<div className="flex justify-between mr-2 mt-2">
					<button
						onClick={ handleClick}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-2 text-white hover:opacity-90">
						Stake <br />Collateral <br />*
					</button>
					<button
						onClick={ () => thanksModalTrigger('4')}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-0 sm:pt-2 text-white hover:opacity-90">
						Deposit <br />Collateral <br />
						<p className="text-black text-sm sm:text-base font-bold tracking-[2px] sm:tracking-[4px] -mt-[3px]">
							USD/USDT/BTC</p>
					</button>
				</div>
				<div className="flex justify-center mt-5 sm:mt-3">
					<button
						onClick={ () => thanksModalTrigger('4')}
						className="sm:mb-0 rounded-3xl tracking-[6px] text-lg sm:text-2xl px-8 sm:px-4 leading-[24px] sm:leading-[32px] bg-[#f4b183] pt-2 sm:pt-4 text-white hover:opacity-90">
						Request <br />Lending
						<div className="flex justify-between mt-3 sm:mt-5 mb-2">
							<img src="./8857.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./83670346.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./aavelogo-freelogovectors.net_.png" alt="" className="w-10 sm:w-14" />
						</div>
					</button>
				</div>
			</div>
			</div>
		</div>
	</div>





	
	<div id="modal5" className="fixed hidden items-center justify-center w-[100vw] h-[100vh] bg-gray-50 bg-opacity-50">
		<div className="max-h-full sm:max-h-[92vh] h-full sm:h-[610px] pl-2 sm:pl-12 py-3 sm:py-6 overflow-x-hidden w-full sm:w-[60%] bg-[#27262c] sm:rounded-[60px]">
			<div className="h-full overflow-y-scroll">
			<div className="flex justify-end pr-2 sm:pr-8">
				<svg xmlns="http://www.w3.org/2000/svg" onClick={ () => selectModalTrigger('5')}
					className="text-[#21c2d3] w-6 h-6 cursor-pointer hover:text-opacity-80" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd" />
				</svg>
			</div>
			<div className="pr-2 sm:pr-8 pt-2 sm:pt-0">

				<div className="sm:flex">
					<div className="sm:w-[50%] sm:pr-4">
						<img loading="lazy" src="./ghjkl.jpg"
							className="rounded-2xl h-auto sm:h-36 w-full" alt="" />
						<div className="-mt-[54px] sm:-mt-[42px] ml-5">
							<div className="flex items-end">
								<h3 className="text-2xl sm:text-lg font-semibold text-white text-center">LIL</h3>
							</div>
						</div>
					</div>
					<div className="sm:w-[50%] pt-6">
						<h3 className="text-2xl text-[#b8add2] font-medium pl-1">Select</h3>
						<input type="text"
							className="bg-[#767171] text-white placeholder-white text-xl mt-2 focus:ring-[#23bdcd] border-none h-[35px] pt-0 pb-0 w-full rounded"
							placeholder="Units" />
					</div>
				</div>
				<h3 className="text-2xl sm:text-3xl tracking-[3px] mt-4 text-[#b8add2] font-medium pl-1 ml-3">AMOUNT: <span
						className="text-[#23bdcd]">50SOL</span> </h3>
				<h3 className="text-[26px] sm:text-[32px] tracking-[1px] mt- text-[#b8add2] font-medium pl-1 ml-3">( 5k
					&nbsp; USD )</h3>
				<div className="flex justify-between mr-2 mt-2">
					<button
						onClick={ handleClick}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-2 text-white hover:opacity-90">
						Stake <br />Collateral <br />*
					</button>
					<button
						onClick={ () => thanksModalTrigger('5')}
						className="rounded-lg sm:mb-0 sm:rounded-xl tracking-[6px] text-lg sm:text-2xl px-3 sm:px-4 leading-[28px] bg-[#8447ff] pt-0 sm:pt-2 text-white hover:opacity-90">
						Deposit <br />Collateral <br />
						<p className="text-black text-sm sm:text-base font-bold tracking-[2px] sm:tracking-[4px] -mt-[3px]">
							USD/USDT/BTC</p>
					</button>
				</div>
				<div className="flex justify-center mt-5 sm:mt-3">
					<button
						onClick={ () => thanksModalTrigger('5')}
						className="sm:mb-0 rounded-3xl tracking-[6px] text-lg sm:text-2xl px-8 sm:px-4 leading-[24px] sm:leading-[32px] bg-[#f4b183] pt-2 sm:pt-4 text-white hover:opacity-90">
						Request <br />Lending
						<div className="flex justify-between mt-3 sm:mt-5 mb-2">
							<img src="./8857.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./83670346.png" alt="" className="w-10 sm:w-14 mr-3" />
							<img src="./aavelogo-freelogovectors.net_.png" alt="" className="w-10 sm:w-14" />
						</div>
					</button>
				</div>
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
					<h5 className="text-[#8447ff] hover:text-opacity-90 text-lg sm:text-2xl cursor-pointer pr-4 sm:pr-16">
						ABOUT</h5>
				</a>
				<Link to="/choice">
				<h5 className="text-[#8447ff] hover:text-opacity-90 text-lg sm:text-2xl cursor-pointer">BACK</h5>
				</Link>
			</div>
		</div>
	</div>

	<div className="bg-[#383157]">
		<div className="max-w-2xl pb-4 mx-auto pt-4 sm:pt-0 px-3 sm:px-6">


			<div className=" rounded-custom px-1 sm:px-6 py-1 sm:py-6">
				<h1 classNa-me="text-[#23bdcd] sm:text-4xl md:pt-2 pb-4 sm:pb-8 text-xl px-2 sm:px-0 text-center mt-3">
					Select &nbsp; your &nbsp; Drone
				</h1>
				<div className="sm:grid sm:grid-cols-2 gap-5">
					<div className="bg-[#27262c] rounded-3xl pt-4 pb-5 px-3 mb-2 sm:mb-0">
						<img loading="lazy" src="./untitledm.png" className="rounded-2xl sm:h-40 w-full" alt="" />
						<div className="flex justify-end">
							<a href="https://www.x-ender.com//heavy-autonomus-drones-manta-x-ender">
								<button
									className="bg-white rounded-full text-lg h-[25px] w-[25px] flex justify-center items-center mr-4 -mt-8 text-gray-900 hover:opacity-90">?</button>
							</a>
						</div>
						<div className="flex items-end justify-center mt-2">
							<h3 className="text-3xl font-semibold text-white text-center">MANTA</h3>
							<h4 className="text-xs text-white ml-1 mb-1">H 2</h4>
						</div>
						<h4 className="text-lg text-center text-gray-50">Logistics
						</h4>
						<div className="bg-[#767171] rounded sm:rounded-none px-1 pt-1 mt-5 flex">
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-white mb-0">Payload</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Autonomy full</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Availablity</h3>
								<h3 className="text-sm sm:text-sm text-white">Collateral*</h3>
							</div>
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">250kg</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">1 h +</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">100</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee]">1000 SOL/100K$</h3>
							</div>
						</div>
						<div className="flex justify-center">
							<button onClick={ () => selectModalTrigger('1')}
								className="rounded-lg mb-4 sm:mb-0 sm:rounded-xl mt-3 text-2xl sm:h-12 bg-[#8447ff] py-2 sm:py-0 flex items-center justify-center w-full sm:w-[85%] text-white hover:opacity-90">
								Select
							</button>
						</div>
					</div>
					<div className="bg-[#27262c] rounded-3xl pt-4 pb-5 px-3 mb-2 sm:mb-0">
						<img loading="lazy" src="./untitledm.png" className="rounded-2xl sm:h-40 w-full" alt="" />

						<div className="flex justify-end">
							<a href="https://www.x-ender.com//heavy-autonomus-drones-manta-x-ender">
								<button
									className="bg-white rounded-full text-lg h-[25px] w-[25px] flex justify-center items-center mr-4 -mt-8 text-gray-900 hover:opacity-90">?</button>
							</a>
						</div>
						<div className="flex items-end justify-center mt-2">
							<h3 className="text-3xl font-semibold text-white text-center">MANTA</h3>
							<h4 className="text-xs text-white ml-1 mb-1">H 2</h4>
						</div>
						<h4 className="text-lg text-center text-gray-50">Farming
						</h4>
						<div className="bg-[#767171] rounded sm:rounded-none px-1 pt-1 mt-5 flex">
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-white mb-0">Payload</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Autonomy full</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Availablity</h3>
								<h3 className="text-sm sm:text-sm text-white">Collateral*</h3>
							</div>
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">250kg</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">1.15 h +</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">100</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee]">1000 SOL/100K$</h3>
							</div>
						</div>
						<div className="flex justify-center">
							<button onClick={ () => selectModalTrigger('2')}
								className="rounded-lg mb-4 sm:mb-0 sm:rounded-xl mt-3 text-2xl sm:h-12 bg-[#8447ff] py-2 sm:py-0 flex items-center justify-center w-full sm:w-[85%] text-white hover:opacity-90">
								Select
							</button>
						</div>
					</div>
					<div className="bg-[#27262c] rounded-3xl pt-4 pb-5 px-3 mb-2 sm:mb-0">
						<img loading="lazy" src="./untitlellld2.png" className="rounded-2xl sm:h-40 w-full" alt="" />
						<div className="flex justify-end">
							<a href="https://www.x-ender.com//heavy-autonomus-drones-manta-x-ender">
								<button
									className="bg-white rounded-full text-lg h-[25px] w-[25px] flex justify-center items-center mr-4 -mt-8 text-gray-900 hover:opacity-90">?</button>
							</a>
						</div>
						<div className="flex items-end justify-center mt-2">
							<h3 className="text-3xl font-semibold text-white text-center">MANTA</h3>
							<h4 className="text-xs text-white ml-1 mb-1">H 2</h4>
						</div>
						<h4 className="text-lg text-center text-gray-50">Firefighting
						</h4>
						<div className="bg-[#767171] rounded sm:rounded-none px-1 pt-1 mt-5 flex">
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-white mb-0">Payload</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Autonomy full</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Availablity</h3>
								<h3 className="text-sm sm:text-sm text-white">Collateral*</h3>
							</div>
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">250kg</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">1.15 h +</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">100</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee]">800 SOL/80$</h3>
							</div>
						</div>
						<div className="flex justify-center">
							<button
							onClick={ () => selectModalTrigger('3')}
								className="rounded-lg mb-4 sm:mb-0 sm:rounded-xl mt-3 text-2xl sm:h-12 bg-[#8447ff] py-2 sm:py-0 flex items-center justify-center w-full sm:w-[85%] text-white hover:opacity-90">
								Select
							</button>
						</div>
					</div>
					<div className="bg-[#27262c] rounded-3xl pt-4 pb-5 px-3 mb-2 sm:mb-0">
						<img loading="lazy" src="./DSC02284.JPG" className="rounded-2xl sm:h-40 w-full" alt="" />
						<div className="flex justify-end">
							<a href="https://www.x-ender.com//heavy-autonomus-modular-truck">
								<button
									className="bg-white rounded-full text-lg h-[25px] w-[25px] flex justify-center items-center mr-4 -mt-8 text-gray-900 hover:opacity-90">?</button>
							</a>
						</div>
						<div className="flex items-end justify-center mt-2">
							<h3 className="text-3xl font-semibold text-white text-center">OX</h3>
						</div>
						<h4 className="text-lg text-center text-gray-50">Multi
							Purpose
						</h4>
						<div className="bg-[#767171] rounded sm:rounded-none px-1 pt-1 mt-5 flex">
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-white mb-0">Payload</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Autonomy full</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Availablity</h3>
								<h3 className="text-sm sm:text-sm text-white">Collateral*</h3>
							</div>
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">250kg</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">400Km</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">100</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee]">50 SOL/50K$</h3>
							</div>
						</div>
						<div className="flex justify-center">
							<button onClick={ () => selectModalTrigger('4')}
								className="rounded-lg mb-4 sm:mb-0 sm:rounded-xl mt-3 text-2xl sm:h-12 bg-[#8447ff] py-2 sm:py-0 flex items-center justify-center w-full sm:w-[85%] text-white hover:opacity-90">
								Select
							</button>
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-4">
					<div className="bg-[#27262c] w-full md:w-[50%] rounded-3xl pt-4 pb-5 px-3 mb-2 sm:mb-0">
						<img loading="lazy" src="./ghjkl.jpg" className="rounded-2xl sm:h-40 w-full" alt="" />
						<div className="flex justify-end">
							<a href="#">
								<button
									className="bg-white rounded-full text-lg h-[25px] w-[25px] flex justify-center items-center mr-4 -mt-8 text-gray-900 hover:opacity-90">?</button>
							</a>
						</div>
						<div className="flex items-end justify-center mt-2">
							<h3 className="text-3xl font-semibold text-white text-center">LIL</h3>

						</div>
					
						<div className="bg-[#767171] rounded sm:rounded-none px-1 pt-1 mt-5 flex">
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-white mb-0">Payload</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Autonomy full</h3>
								<h3 className="text-sm sm:text-sm text-white mb-0">Availablity</h3>
								<h3 className="text-sm sm:text-sm text-white">Collateral*</h3>
							</div>
							<div className="w-[50%]">
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">25kg</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">15 m</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee] mb-0">10</h3>
								<h3 className="text-sm sm:text-sm text-[#e0b8ee]">50 SOL/5K$</h3>
							</div>
						</div>
						<div className="flex justify-center">
							<button
							onClick={ () => selectModalTrigger('5')}
								className="rounded-lg mb-4 sm:mb-0 sm:rounded-xl mt-3 text-2xl sm:h-12 bg-[#8447ff] py-2 sm:py-0 flex items-center justify-center w-full sm:w-[85%] text-white hover:opacity-90">
								Select
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="bg-[#27262c] pt-4 pb-4">
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
      </div>
  )
}
export default Selectdrone;