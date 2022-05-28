import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css'
import { initProgram, sendSol } from './integration';
import {useAuth} from './useWalletContext'

function Dashboard() {

  const { value, setValue} = useAuth();
  const toogleFirstSwitch = (action: any) => {
			if (action == 'on') {
				(document as any).getElementById('true').style.display = 'none';
				(document as any).getElementById('false').style.display = 'flex';
			} else {
				(document as any).getElementById('true').style.display = 'flex';
				(document as any).getElementById('false').style.display = 'none';	
			}
		}
		const toogleSecondSwitch = (action: any) => {
			if (action == 'on') {
				(document as any).getElementById('true2').style.display = 'none';
				(document as any).getElementById('false2').style.display = 'flex';	
			} else {
				(document as any).getElementById('true2').style.display = 'flex';
				(document as any).getElementById('false2').style.display = 'none';	
			}
		}
		const selectRadio = (index: any) => {
			(document as any).getElementById(`button-1`).style.display = 'none';
			(document as any).getElementById(`button-2`).style.display = 'none';
			(document as any).getElementById(`button-3`).style.display = 'none';
			(document as any).getElementById(`button-4`).style.display = 'none';
			(document as any).getElementById(`button-5`).style.display = 'none';
			(document as any).getElementById(`button-6`).style.display = 'none';
			(document as any).getElementById(`button-7`).style.display = 'none';
			(document as any).getElementById(`button-8`).style.display = 'none';
			(document as any).getElementById(`button-${index}`).style.display = 'block';
		}
		const dataTrigger = () => {
			(document as any).getElementById('data').classList.toggle('display-hidden')
		}

	const handleClick = async () => {
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
				<Link to="/">
				<h5 className="text-[#8447ff] hover:text-opacity-90 text-lg sm:text-2xl cursor-pointer pr-4 sm:pr-16">BACK</h5>
				</Link>
				<Link to="/choice">
				<h5 className="text-[#8447ff] hover:text-opacity-90 text-lg sm:text-2xl cursor-pointer">CHOICE</h5>
				</Link>
			</div>
		</div>
	</div>

	<div className="bg-[#383157]">
		<div className="max-w-3xl pb-10 mx-auto pt-0 sm:pt-0 px-2 sm:px-6">


			<div className=" rounded-custom px-1 sm:px-6 py-1 sm:py-6">
				<h1
					className="text-[#23bdcd] sm:text-4xl md:pt-2 sm:pb-5 text-3xl font-semibold mb-3 sm:mb-0 px-2 sm:px-0 text-center mt-3">
					Fleet
				</h1>

				<div className="sm:flex justify-between pb-6">

					<div className="flex justify-between sm:justify-start">
						<div className="flex">
							<div>
								<img loading="lazy" src="./dashboard_first_icon.png"
									className="ml-2 h-[40px] pt-[2px]" alt="" />
							</div>
							<div>
								<img loading="lazy" src="./dashboard_second_icon.png"
									className="ml-3 h-[45px]" alt="" />
							</div>
						</div>
						<div className="h-[33px] bg-[#2d2b33] rounded-md mt-1 ml-8">
							<button
								className="h-[33px] hover:opacity-95 bg-[#b8add2] text-[#2d2b33] text-lg font-semibold px-3 rounded-md">Live</button>
							<button
								className="h-[33px] hover:opacity-95 bg-[#2d2b33] text-[#b8add2] rounded-tr-md rounded-br-md text-lg font-semibold pr-3 pl-2">Finished</button>
						</div>
					</div>

					<div className="pt-[5px] flex justify-between sm:justify-end">
						<select
							className="bg-[#2d2b33] text-[#b8add2] focus:ring-[#23bdcd] border-none h-[30px] pt-0 pb-0 w-[130px] rounded">
							<option value="">name</option>
							<option value="">budget</option>
							<option value="">cheap</option>
						</select>
						<input type="text"
							className="ml-8 bg-[#2d2b33] text-[#b8add2] placeholder-[#b8add2] focus:ring-[#23bdcd] border-none h-[30px] pt-0 pb-0 w-[130px] rounded"
							placeholder="Search" />
					</div>

				</div>
				<div className="bg-[#2d2b33]">
					<div className="py-4 sm:flex justify-between border-b-2 border-[#afabab] px-2 sm:px-6">
						<div className="flex sm:justify-start justify-between">
							<div>
								<img loading="lazy" src="./manta vector.png" className="w-20" alt="" />
							</div>
							<div>
								<a href="https://www.x-ender.com/decentralized-control-system-ai">
								<img loading="lazy" src="./dcs vector.png" className="w-20" alt="" />
								<div className="flex justify-end">
									<button
										className="bg-white rounded-full text-xs h-[15px] w-[15px] -mt-4 sm:-mt-4 mr-2 text-gray-900">?</button>
								</div>
								</a>
							</div>
							<div>
								<a href="https://www.x-ender.com/skyshield-wildfire-prevention">
								<img loading="lazy" src="./skyshield vector.png" className="w-20" alt="" />
								<div className="flex justify-end">
									<button
										className="bg-white rounded-full text-xs h-[15px] w-[15px] -mt-4 sm:-mt-4 mr-2 text-gray-900">?</button>
								</div>
								</a>
							</div>
						</div>
						<div className="flex sm:justify-start justify-between mt-3 sm:mt-0">
							<div className="sm:mr-4 ml-2 sm:ml-0">
								<h5 className="text-[#d0cece] text-base font-semibold sm:ml-3">Locked</h5>
								<div className="flex items-end mt-1">
									<h5 className="text-[#23bdcd] text-base font-semibold">8000SOL</h5>
									<button
										className="bg-white rounded-full text-xs h-[14px] mb-1 ml-1 w-[14px] text-gray-900">?</button>
								</div>
								<h5 className="text-[#8447ff] text-xs mt-1 font-semibold sm:ml-4">UNLOCK</h5>
							</div>
							<div className="sm:mr-4">
								<h5 className="text-[#d0cece] text-base font-semibold sm:ml-3">Rewards</h5>
								<div className="flex items-end mt-1">
									<h5 className="text-[#23bdcd] text-base font-semibold">80SOL/Y</h5>
									<button
										className="bg-white rounded-full text-xs h-[14px] mb-1 ml-1 w-[14px] text-gray-900">?</button>
								</div>
								<h5 className="text-[#8447ff] text-xs mt-1 font-semibold sm:ml-4">CLAIM</h5>
							</div>
							<div className="sm:mr-2">
								<h5 className="text-[#d0cece] text-base font-semibold sm:ml-3">Services</h5>
								<div className="flex items-end mt-1">
									<h5 className="text-[#23bdcd] text-base font-semibold">8000SOL</h5>
									<button
										className="bg-white rounded-full text-xs h-[14px] mb-1 ml-1 w-[14px] text-gray-900">?</button>
								</div>
							</div>
							<div className="flex items-center">
								<img loading="lazy" onClick={dataTrigger} className="cursor-pointer" src="./top_arrow.png" alt="" />
							</div>
						</div>
					</div>
					<div id="data" className="bg-black px-2 sm:px-10 pt-5 pb-4">
						<h1
							className="text-[#23bdcd] justify-center sm:justify-start text-xl font-semibold flex cursor-pointer">
							View Contract &nbsp;<img loading="lazy" src="./view_contract.png" alt="" />
						</h1>
						<div className="sm:grid sm:grid-cols-2 gap-6 mt-2 sm:mt-0">
							<div className="relative">
								<h1 className="text-[#23bdcd] text-center sm:text-left text-xl font-semibold mt-2">
									Area of deployment
								</h1>
								<img loading="lazy" src="./first_map.png"
									className="mt-3 w-full h-48 rounded-3xl" alt="" />
								<div className="flex justify-end absolute right-4 -mt-12">
									<a href="#">
									<button
										className="bg-[#732dff] text-white text-xl px-6 py-2 hover:bg-[#7736f8] rounded-lg">Change</button>
									</a>
									</div>
							</div>
							<div>
								<h1 className="text-[#23bdcd] text-center sm:text-left text-xl font-semibold mt-6 sm:mt-2">
									Statistics
								</h1>
								<div className="bg-[#767171] overflow-hidden rounded md:rounded-none px-1 pt-1 mt-3 flex">
									<div className="w-[55%] md:w-[50%]">
										<h3 className="text-sm md:text-base font-semibold text-white mb-[3px]">Status</h3>
										<h3 className="text-sm md:text-base font-semibold text-white mb-[3px]">DCS</h3>
										<h3 className="text-sm md:text-base font-semibold text-white mb-[3px]">Flight Hours
										</h3>
										<h3 className="text-sm md:text-base font-semibold text-white mb-[3px]">Leasting Time
										</h3>
										<h3 className="text-sm md:text-base font-semibold text-white mb-[3px]">Distance/Unit
										</h3>
										<h3 className="text-sm md:text-base font-semibold text-white mb-[3px]">Fuel</h3>
										<h3 className="text-sm md:text-base font-semibold text-white mb-[3px]">Status</h3>
									</div>
									<div className="w-[45%] md:w-[50%]">
										<h3 className="text-sm md:text-base font-semibold text-[#e0b8ee] mb-[3px]">
											Active/Mission</h3>
										<h3 className="text-sm md:text-base font-semibold text-[#e0b8ee] mb-[3px]">Active
										</h3>
										<h3 className="text-sm md:text-base font-semibold text-[#e0b8ee] mb-[3px]">15h</h3>
										<h3 className="text-sm md:text-base font-semibold text-[#e0b8ee] mb-[3px]">3d</h3>
										<h3 className="text-sm md:text-base font-semibold text-[#e0b8ee] mb-[3px]">500km
										</h3>
										<h3 className="text-sm md:text-base font-semibold text-[#e0b8ee] mb-[3px]">3/4</h3>
										<h3 className="text-sm md:text-base font-semibold text-[#e0b8ee] mb-[3px]">90%</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-[#2d2b33] dashboard-control-radius mt-10 px-2 sm:px-10 py-6">
							<h1 className="text-[#23bdcd] text-center sm:text-left text-xl ml-2 font-semibold">
								Ongoing Mission
							</h1>
							<div className="sm:grid sm:grid-cols-2 mt-2 sm:mt-0 mb-2">
								<div className="">
									<div className="sm:mr-6">
										<img loading="lazy" src="./second_map.png"
											className="mt-3 w-full rounded-3xl" alt="" />
										<h3 className="text-center text-base mt-2 text-white">
											1.44"55'W90'S 58'39.9"W
										</h3>
									</div>

								</div>
								<div>
									<div className="bg-[#767171] rounded md:rounded-none px-1 pt-1 mt-6 sm:mt-3 flex">
										<div className="w-[55%] sm:w-[42%]">
											<h3 className="text-sm md:text-sm font-medium text-white mb-[3px]">Mission</h3>
											<h3 className="text-sm md:text-sm font-medium text-white mb-[3px]">DCS</h3>
											<h3 className="text-sm md:text-sm font-medium text-white mb-[3px]">Completion
											</h3>
											<h3 className="text-sm md:text-sm font-medium text-white mb-[3px]">Nozzles</h3>
											<h3 className="text-sm md:text-sm font-medium text-white mb-[3px]">Fuel</h3>
											<h3 className="text-sm md:text-sm font-medium text-white mb-[3px]">Material/Left
											</h3>
											<h3 className="text-sm md:text-sm font-medium text-white mb-[3px]">Heat</h3>
										</div>
										<div className="w-[45%] sm:w-[58%]">
											<h3 className="text-sm md:text-sm font-medium text-[#e0b8ee] mb-[3px]">
												Watering/Fire-shut</h3>
											<h3 className="text-sm md:text-sm font-medium text-[#e0b8ee] mb-[3px]">
												Active/1092837</h3>
											<h3 className="text-sm md:text-sm font-medium text-[#e0b8ee] mb-[3px]">65%</h3>
											<h3 className="text-sm md:text-sm font-medium text-[#e0b8ee] mb-[3px]">100% - L
											</h3>
											<h3 className="text-sm md:text-sm font-medium text-[#e0b8ee] mb-[3px]">H2 - 70%
											</h3>
											<h3 className="text-sm md:text-sm font-medium text-[#e0b8ee] mb-[3px]">
												Water/R4/10%</h3>
											<h3 className="text-sm md:text-sm font-medium text-[#e0b8ee] mb-[3px]">H7</h3>
										</div>
									</div>

								</div>
							</div>
							<div className="sm:grid sm:grid-cols-2">
								<div className="flex sm:justify-end justify-center mt-8 sm:mr-3">
									<a href="#">
									<button
										className="bg-[#732dff] text-white text-xl px-10 flex items-center justify-center py-3 sm:py-0 sm:w-auto sm:h-[60px] hover:opacity-90 rounded-lg">
										Recall
									</button>
									</a>
								</div>
								<div className="flex sm:justify-start justify-center">
									<a href="#">
									<button
										className="sm:flex hidden bg-[#732dff] text-white text-xl px-6 items-center h-[60px] hover:opacity-90 rounded-lg mt-[34px] sm:ml-10">
										Change <br /> Parameters
									</button>
									</a>
								</div>
								<div className="flex sm:justify-start justify-center">
									<a href="#">
									<button
										className="bg-[#732dff] text-white mt-4 text-xl px-6 flex sm:hidden items-center justify-center py-3 sm:py-0 sm:w-auto sm:h-[60px] hover:opacity-90 rounded-lg">
										Change Parameters
									</button>
									</a>
								</div>
							</div>
						</div>

						<div className="bg-[#2d2b33] dashboard-control-radius mt-6 sm:mt-10 px-2 py-6">
							<h1 className="text-[#23bdcd] text-xl sm:ml-2 font-semibold px-8">
								New Mission Request
							</h1>
							<div className="md:flex mt-3 px-8">
								<div className="sm:w-[55%]">
									<div className="flex items-center mt-2">
										<div onClick={() => selectRadio('1')} className="bg-[#b8add2] rounded-full w-6 h-6 flex justify-center items-center mr-3 cursor-pointer">
											<button id="button-1" className="h-3 w-3 hidden bg-[#383737] rounded-full"></button>
										</div>
										<h1 className="text-white sm:text-lg ml-2 font-semibold">
											Watering
										</h1>
									</div>
									<div className="flex items-center mt-2">
										<div onClick={() => selectRadio('2')} className="bg-[#b8add2] rounded-full w-6 h-6 flex justify-center items-center mr-3 cursor-pointer">
											<button id="button-2" className="h-3 w-3 hidden bg-[#383737] rounded-full"></button>
										</div>
										<h1 className="text-white sm:text-lg ml-2 font-semibold">
											Firefighting
										</h1>
									</div>
									<div className="flex items-center mt-2">
										<div onClick={() => selectRadio('3')} className="bg-[#b8add2] rounded-full w-6 h-6 flex justify-center items-center mr-3 cursor-pointer">
											<button id="button-3" className="h-3 w-3 hidden bg-[#383737] rounded-full"></button>
										</div>
										<h1 className="text-white sm:text-lg ml-2 font-semibold">
											Seeding
										</h1>
									</div>
									<div className="flex items-center mt-2">
										<div onClick={() => selectRadio('4')} className="bg-[#b8add2] rounded-full w-6 h-6 flex justify-center items-center mr-3 cursor-pointer">
											<button id="button-4" className="h-3 w-3 hidden bg-[#383737] rounded-full"></button>
										</div>
										<h1 className="text-white sm:text-lg ml-2 font-semibold">
											Material Displacement
										</h1>
									</div>
								</div>
								<div className="sm:w-[45%]">
									<div className="flex items-center mt-2">
										<div onClick={() => selectRadio('5')} className="bg-[#b8add2] rounded-full w-6 h-6 flex justify-center items-center mr-3 cursor-pointer">
											<button id="button-5" className="h-3 w-3 hidden bg-[#383737] rounded-full"></button>
										</div>
										<h1 className="text-white sm:text-lg ml-2 font-semibold">
											Drop-Dusting
										</h1>
									</div>
									<div className="flex items-center mt-2">
										<div onClick={() => selectRadio('6')} className="bg-[#b8add2] rounded-full w-6 h-6 flex justify-center items-center mr-3 cursor-pointer">
											<button id="button-6" className="h-3 w-3 hidden bg-[#383737] rounded-full"></button>
										</div>
										<h1 className="text-white sm:text-lg ml-2 font-semibold">
											Top-Dressing
										</h1>
									</div>
									<div className="flex items-center mt-2">
										<div onClick={() => selectRadio('7')} className="bg-[#b8add2] rounded-full w-6 h-6 flex justify-center items-center mr-3 cursor-pointer">
											<button id="button-7" className="h-3 w-3 hidden bg-[#383737] rounded-full"></button>
										</div>
										<h1 className="text-white sm:text-lg ml-2 font-semibold">
											Surveillance
										</h1>
									</div>
									<div className="flex items-center mt-2">
										<div onClick={() => selectRadio('8')} className="bg-[#b8add2] rounded-full w-6 h-6 flex justify-center items-center mr-3 cursor-pointer">
											<button id="button-8" className="h-3 w-3 hidden bg-[#383737] rounded-full"></button>
										</div>
										<h1 className="text-white sm:text-lg ml-2 font-semibold">
											Rescue
										</h1>
									</div>
								</div>
							</div>
							<div className="bg-[#767171] dashboard-control-radius mt-6 sm:mt-10 py-8">
								<div className="sm:flex px-2 sm:px-6">
									<div className="sm:w-[55%]">
										<img loading="lazy" src="./third_map.png"
											className="rounded-3xl w-full" alt="" />
										<div className="flex justify-center">
											<a href="#">
											<button
												className="bg-[#732dff] text-white text-xl px-6 py-3 mt-2 hover:opacity-80 rounded-lg">
												Select Area
											</button>
											</a>
										</div>
										<div className="flex justify-center mt-4 sm:pr-6">
											<a href="#">
											<img loading="lazy" src="./start_drone_btn.png"
												className="cursor-pointer hover:opacity-80  w-44" alt="" />
											</a>
										</div>
									</div>
									<div className="sm:w-[45%] sm:ml-6">
										<h1
											className="text-white text-center sm:text-left mt-4 sm:mt-0 text-lg mb-3 sm:mb-1">
											Parameters
										</h1>
										<div className="sm:grid sm:grid-cols-2 gap-1">
											<select
												className="bg-[#2d2b33] text-[#b8add2] focus:ring-[#23bdcd] border-none mb-2 sm:mb-0 h-[30px] pt-0 pb-0 w-full rounded-md">
												<option value="">Speed</option>
												<option value="">budget</option>
												<option value="">cheap</option>
											</select>
											<select
												className="bg-[#2d2b33] text-[#b8add2] focus:ring-[#23bdcd] border-none mb-2 sm:mb-0 h-[30px] pt-0 pb-0 w-full rounded-md">
												<option value="">Time</option>
												<option value="">budget</option>
												<option value="">cheap</option>
											</select>
											<select
												className="bg-[#2d2b33] text-[#b8add2] focus:ring-[#23bdcd] border-none mb-2 sm:mb-0 h-[30px] pt-0 pb-0 w-full rounded-md">
												<option value="">Payload</option>
												<option value="">budget</option>
												<option value="">cheap</option>
											</select>
											<select
												className="bg-[#2d2b33] text-[#b8add2] focus:ring-[#23bdcd] border-none mb-2 sm:mb-0 h-[30px] pt-0 pb-0 w-full rounded-md">
												<option value="">Type</option>
												<option value="">budget</option>
												<option value="">cheap</option>
											</select>
											<select
												className="bg-[#2d2b33] text-[#b8add2] focus:ring-[#23bdcd] border-none mb-2 sm:mb-0 h-[30px] pt-0 pb-0 w-full rounded-md">
												<option value="">Target</option>
												<option value="">budget</option>
												<option value="">cheap</option>
											</select>
										</div>
										<div id="true" onClick={ () => toogleFirstSwitch('on')} className="h-[55px] bg-[#2d2b33] flex rounded-md mt-3">
											<button
												className="h-[55px] w-[50%] sm:w-[45%] hover:opacity-90 bg-[#b8add2] text-[#2d2b33] text-lg font-semibold px-3 rounded-md">Auto</button>
											<button
												className="h-[55px] hover:opacity-90 w-[50%] sm:w-[55%] text-base sm:text-lg sm:text-[13px] bg-[#2d2b33] text-[#b8add2] rounded-tr-md rounded-br-md font-semibold pr-3 pl-2">
												Select Intensity
											</button>
										</div>
										<div id="false" onClick={ () => toogleFirstSwitch('off')} className="h-[55px] hidden bg-[#b8add2] 
										 rounded-md mt-3">
											<button
												className="h-[55px] w-[50%] sm:w-[45%] hover:opacity-90 bg-[#2d2b33] text-[#b8add2] text-lg font-semibold px-3 rounded-md">Auto</button>
											<button
												className="h-[55px] hover:opacity-90 w-[50%] sm:w-[55%] text-base sm:text-lg sm:text-[13px] bg-[#b8add2] text-[#2d2b33] rounded-tr-md rounded-br-md font-semibold pr-3 pl-2">
												Select Intensity
											</button>
										</div>
										<button
											className="hidden sm:block hover:opacity-90 rounded-lg w-full mt-7 bg-[#b8add2] text-base text-black font-semibold py-2">
											Calculated <br /> Cost: <br /> <span className="text-[#732dff]">XXXX SOL</span>
										</button>
										<button
											className="block sm:hidden hover:opacity-90 rounded-lg w-full mt-7 bg-[#b8add2] text-lg text-black font-semibold py-3">
											Calculated Cost: &nbsp; <span className="text-[#732dff]">XXXX SOL</span>
										</button>
									</div>
								</div>
								<div className="sm:flex mt-8 sm:mt-5 px-2 sm:px-6 pb-6 border-b-2 border-[#afabab]">
									<div className="sm:w-[55%]">
										<div className="w-full bg-[#2d2b33] rounded-lg py-1 px-1">
											<h1 className="text-[#b8add2] sm:text-sm font-medium">
												Do you need Airdrop or Bootlaunch for the mission?
											</h1>
										</div>
									</div>
									<div id="true2" onClick={ () => toogleSecondSwitch('on')} className="sm:w-[45%] flex justify-end mt-3 sm:mt-0">
										<div className="h-[44px] w-full sm:w-[80%] bg-[#2d2b33] flex rounded-md">
											<button
												className="h-[44px] w-[50%] hover:opacity-90 bg-[#b8add2] text-[#2d2b33] text-lg font-semibold px-3 rounded-md">Yes</button>
											<button
												className="h-[44px] hover:opacity-90 w-[50%] text-lg bg-[#2d2b33] text-[#b8add2] rounded-tr-md rounded-br-md font-semibold pr-3 pl-2">
												No
											</button>
										</div>
									</div>
									<div id="false2" onClick={ () => toogleSecondSwitch('off')} className="sm:w-[45%] hidden justify-end mt-3 sm:mt-0">
										<div className="h-[44px] w-full sm:w-[80%] bg-[#b8add2] flex rounded-md">
											<button
												className="h-[44px] w-[50%] hover:opacity-90 bg-[#2d2b33] text-[#b8add2] text-lg font-semibold px-3 rounded-md">Yes</button>
											<button
												className="h-[44px] hover:opacity-90 w-[50%] text-lg bg-[#b8add2] text-[#2d2b33] rounded-tr-md rounded-br-md font-semibold pr-3 pl-2">
												No
											</button>
										</div>
									</div>
								</div>
								<h1 className="text-white text-2xl sm:font-semibold text-center mt-4 mb-10">
									Pay
								</h1>
								<div className="md:flex mt-2 w-full px-6 mb-2 sm:mb-8">
									<div className="w-full sm:w-[47%] flex items-center justify-center" onClick={handleClick}>
										<img loading="lazy" src="./launch_smart_contract.png"
											className="w-full cursor-pointer hover:opacity-80" alt="" />
									</div>
									<div className="w-full sm:w-[6%] flex justify-center sm:justify-start items-center">
										<h4 className="text-black font-semibold text-lg">
											OR
										</h4>
									</div>
									<div className="w-full sm:w-[47%] flex justify-center items-center">
										<a href="#">
										<img loading="lazy" src="./pay_with_card.png"
											className="w-full cursor-pointer hover:opacity-80" alt="" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full">
							<select
								className="bg-[#2d2b33] text-[#b8add2] text-xl py-3 px-6 mt-5 focus:ring-[#23bdcd] border-none w-full rounded-lg">
								<option value="">Task Completed</option>
								<option value="">budget</option>
								<option value="">cheap</option>
							</select>
						</div>
					</div>



				</div>


				<div className="py-4 bg-[#2d2b33] flex sm:justify-between border-t-2 border-[#afabab] px-2 sm:px-6">
					<div className="hidden sm:flex items-center">
						<div className="pr-2 sm:pr-0">
							<img loading="lazy" src="./manta vector.png" className="sm:w-20 w-12" alt="" />
						</div>
					</div>
					<div className="flex w-full sm:w-auto sm:justify-start justify-between">
						<div className="flex sm:hidden items-center">
							<div className="pr-2 sm:pr-0">
								<img loading="lazy" src="./manta vector.png" className="sm:w-20 w-12" alt="" />
							</div>
						</div>
						<div className="mr-6">
							<h5 className="text-[#d0cece] text-xs sm:text-base font-semibold sm:ml-3">Locked</h5>
							<div className="flex items-end mt-1">
								<h5 className="text-[#23bdcd] text-xs sm:text-base font-semibold">8000SOL</h5>
								<button
									className="bg-white rounded-full text-xs h-[14px] sm:mb-1 ml-1 w-[14px] text-gray-900">?</button>
							</div>
							<h5 className="text-[#8447ff] text-xs mt-1 font-semibold sm:ml-4">UNLOCK</h5>
						</div>
						<div className="mr-6">
							<h5 className="text-[#d0cece] text-xs sm:text-base font-semibold sm:ml-3">Rewards</h5>
							<div className="flex items-end mt-1">
								<h5 className="text-[#23bdcd] text-xs sm:text-base font-semibold">80SOL/Y</h5>
								<button
									className="bg-white rounded-full text-xs h-[14px] sm:mb-1 ml-1 w-[14px] text-gray-900">?</button>
							</div>
							<h5 className="text-[#8447ff] text-xs mt-1 font-semibold sm:ml-4">CLAIM</h5>
						</div>
						<div className="mr-2">
							<h5 className="text-[#d0cece] text-xs sm:text-base font-semibold sm:ml-3">Services</h5>
							<div className="flex items-end mt-1">
								<h5 className="text-[#23bdcd] text-xs sm:text-base font-semibold">8000SOL</h5>
								<button
									className="bg-white rounded-full text-xs h-[14px] sm:mb-1 ml-1 w-[14px] text-gray-900">?</button>
							</div>
						</div>
						<div className="flex items-center">
							<img loading="lazy" src="./top_arrow.png" alt="" />
						</div>
					</div>
				</div>
				<div className="py-4 bg-[#2d2b33] flex sm:justify-between border-t-2 border-[#afabab] px-2 sm:px-6">
					<div className="hidden sm:flex items-center">
						<div className="pr-2 sm:pr-0">
							<img loading="lazy" src="./ox vector.png" className="sm:w-20 w-12" alt="" />
						</div>
					</div>
					<div className="flex w-full sm:w-auto sm:justify-start justify-between">
						<div className="flex sm:hidden items-center">
							<div className="pr-2 sm:pr-0">
								<img loading="lazy" src="./manta vector.png" className="sm:w-20 w-12" alt="" />
							</div>
						</div>
						<div className="mr-6">
							<h5 className="text-[#d0cece] text-xs sm:text-base font-semibold sm:ml-3">Locked</h5>
							<div className="flex items-end mt-1">
								<h5 className="text-[#23bdcd] text-xs sm:text-base font-semibold">8000SOL</h5>
								<button
									className="bg-white rounded-full text-xs h-[14px] sm:mb-1 ml-1 w-[14px] text-gray-900">?</button>
							</div>
							<h5 className="text-[#8447ff] text-xs mt-1 font-semibold sm:ml-4">UNLOCK</h5>
						</div>
						<div className="mr-6">
							<h5 className="text-[#d0cece] text-xs sm:text-base font-semibold sm:ml-3">Rewards</h5>
							<div className="flex items-end mt-1">
								<h5 className="text-[#23bdcd] text-xs sm:text-base font-semibold">80SOL/Y</h5>
								<button
									className="bg-white rounded-full text-xs h-[14px] sm:mb-1 ml-1 w-[14px] text-gray-900">?</button>
							</div>
							<h5 className="text-[#8447ff] text-xs mt-1 font-semibold sm:ml-4">CLAIM</h5>
						</div>
						<div className="mr-2">
							<h5 className="text-[#d0cece] text-xs sm:text-base font-semibold sm:ml-3">Services</h5>
							<div className="flex items-end mt-1">
								<h5 className="text-[#23bdcd] text-xs sm:text-base font-semibold">8000SOL</h5>
								<button
									className="bg-white rounded-full text-xs h-[14px] sm:mb-1 ml-1 w-[14px] text-gray-900">?</button>
							</div>
						</div>
						<div className="flex items-center">
							<img loading="lazy" src="./top_arrow.png" alt="" />
						</div>
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
			<a href="https://www.linkedin.com/company/x-ender/">
			<img loading="lazy" src="./second_icon.png" alt="" className="w-8 sm:w-10" />
			</a>
			<a href="https://www.linkedin.com/company/x-ender/">
			<img loading="lazy" src="./third_icon.png" alt="" className="w-8 sm:w-10" />
			</a>
			<a href="https://www.instagram.com/x_ender_decentralized_ai/">
			<img loading="lazy" src="./forth_icon.png" alt="" className="w-8 sm:w-10" />
			</a>
			<a href="https://www.tiktok.com/@x_ender_ai">
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
export default Dashboard;