import React from 'react';
import { Link } from 'react-router-dom';
import './choice.css'

function Choice() {
	const triggerstat = (index :any) => {
		(document as any).getElementById('stat1').style.display = "none";
		(document as any).getElementById('stat2').style.display = 'none';
		(document as any).getElementById('stat3').style.display = 'none';
		(document as any).getElementById('stat4').style.display = 'none';
		(document as any).getElementById(`stat${index}`).style.display = 'flex';
	}
  return (
    <div>
      <div className="bg-black pr-2 md:pr-0">
		<div className="flex justify-between items-center px-2 pb-2 md:pb-4 pt-3 md:pt-6 max-w-4xl mx-auto">
			<a href="https://www.x-ender.com/">
			<img loading="lazy" src="./header.png" className="w-40" alt="" />
			</a>
			<a href="https://www.x-ender.com/">
			<h5 className="text-[#8447ff] text-lg sm:text-2xl cursor-pointer">ABOUT</h5>
			</a>
			<Link to="/">
				<h5 className="text-[#8447ff] text-lg sm:text-2xl cursor-pointer">Back</h5>
			</Link>
		</div>
	</div>

	<div className="bg-[#393257]">
		<div className="max-w-4xl pb-20 mx-auto pt-4 md:pt-0 px-3 md:px-6">
			<div className="md:flex md:justify-between md:items-center py-6 px-10">
				<a href="/dashboard">
					<button
						className="rounded-xl mb-4 md:mb-0 md:rounded-3xl text-3xl md:h-24 bg-[#8447ff] py-4 md:py-0 flex items-center justify-center w-full md:w-52 text-white hover:opacity-90">
						Manage
					</button>
				</a>
				<Link className="hidden md:block" to="/selectdrone">
					<button
						className="rounded-3xl text-4xl h-32 bg-[#8447ff] flex items-center justify-center w-56 text-white hover:opacity-90">
						Request <br /> Drone
					</button>
				</Link>
				<Link className="block md:hidden" to="/selectdrone">
				<button
					className="rounded-xl mb-4 md:mb-0 md:rounded-3xl text-3xl md:h-24 bg-[#8447ff] py-4 md:py-0 flex items-center justify-center w-full md:w-52 text-white hover:opacity-90">
					Request Drone
				</button>
				</Link>
				<a href="#">
				<button
					className="rounded-xl mb-4 md:mb-0 md:rounded-3xl text-3xl md:h-24 bg-[#8447ff] py-4 md:py-0 flex items-center justify-center w-full md:w-52 text-white hover:opacity-90">
					Ecosystem
				</button>
				</a>
			</div>

			<div className="bg-[#27262c] rounded-custom px-6 py-6">
				<h1 className="text-[#23bdcd] text-center text-3xl md:text-4xl">
					Manage Fleet
				</h1>

				<div className="md:grid md:grid-cols-3 gap-4">
					<div>
						<div className="mb-4 md:mb-4 mt-4">
							<img loading="lazy" className="rounded-3xl sm:h-36 w-full" src="./manage_fleet_one.jpeg" alt="" />
							<div className="flex justify-end">
								<button className="bg-white rounded-full p-4 mr-4 -mt-4 md:-mt-5"></button>
							</div>
						</div>
					<div className="bg-[#2d2d3f] rounded-3xl pt-7 pb-4 px-6 mb-4 md:mb-0 border-black border">
						<div className="flex justify-between">
							<span className="text-3xl font-normal text-white">L</span>
							<span className="text-3xl font-normal text-white">O</span>
							<span className="text-3xl font-normal text-white">C</span>
							<span className="text-3xl font-normal text-white">K</span>
							<span className="text-3xl font-normal text-white">E</span>
							<span className="text-3xl font-normal text-white">D</span>
						</div>
						<p className="text-2xl text-normal mt-4 text-white">8000 SOL</p>
						<p className="text-2xl text-normal text-white">Rewards: &nbsp; 1%</p>
						<button
							className="hidden border border-black rounded-lg leading-7 text-2xl h-20 bg-[#595959] mt-4 md:flex items-center justify-center w-full text-white hover:opacity-90">
							Unstake <br /> Collateral
						</button>
						<button
							className=" md:hidden border border-black rounded-lg leading-7 text-2xl h-16 mt-6 bg-[#595959] flex items-center justify-center w-full text-white hover:opacity-90">
							Unstake Collateral
						</button>
						<img loading="lazy" src="./ox vector.png" className="sm:w-full w-52 mx-auto mt-2 md:mt-5" alt="" />
					</div>
					</div>
					<div>
						<div className="mb-4 md:mb-4 mt-4">
							<img loading="lazy" className="rounded-3xl sm:h-36 w-full" src="./manage_fleet_two.jpeg" alt="" />
							<div className="flex justify-end">
								<button className="bg-white rounded-full p-4 mr-4 -mt-4 md:-mt-5"></button>
							</div>
						</div>
					<div className="bg-[#2d2d3f] rounded-3xl pt-7 pb-4 px-6 mb-4 md:mb-0 border-black border">
						<div className="flex justify-between">
							<span className="text-3xl font-normal text-white">L</span>
							<span className="text-3xl font-normal text-white">O</span>
							<span className="text-3xl font-normal text-white">C</span>
							<span className="text-3xl font-normal text-white">K</span>
							<span className="text-3xl font-normal text-white">E</span>
							<span className="text-3xl font-normal text-white">D</span>
						</div>
						<p className="text-2xl text-normal mt-4 text-white">100k USDT</p>
						<p className="text-2xl text-normal text-white">Rewards:0.5%</p>
						<button
							className="hidden border border-black rounded-lg leading-7 text-2xl h-20 bg-[#595959] mt-4 md:flex items-center justify-center w-full text-white hover:opacity-90">
							Unstake <br /> Collateral
						</button>
						<button
							className=" md:hidden border border-black rounded-lg leading-7 text-2xl h-16 mt-6 bg-[#595959] flex items-center justify-center w-full text-white hover:opacity-90">
							Unstake Collateral
						</button>
						<img loading="lazy" src="./manta vector.png" className="sm:w-full w-52 mx-auto mt-2 md:mt-5" alt="" />
					</div>
					</div>
					<div>
						<div className="mb-4 md:mb-4 mt-4">
							<img loading="lazy" className="rounded-3xl sm:h-36 w-full" src="./manage_fleet_three.JPG" alt="" />
							<div className="flex justify-end">
								<button className="bg-white rounded-full p-4 mr-4 -mt-4 md:-mt-5"></button>
							</div>
						</div>
					<div className="bg-[#2d2d3f] rounded-3xl pt-7 pb-4 px-6 mb-4 md:mb-0 border-black border">
						<div className="flex justify-between">
							<span className="text-3xl font-normal text-white">L</span>
							<span className="text-3xl font-normal text-white">O</span>
							<span className="text-3xl font-normal text-white">C</span>
							<span className="text-3xl font-normal text-white">K</span>
							<span className="text-3xl font-normal text-white">E</span>
							<span className="text-3xl font-normal text-white">D</span>
						</div>
						<p className="text-2xl text-normal mt-4 text-white">50k USD</p>
						<p className="text-2xl text-normal text-white">Rewards: &nbsp; 1%</p>
						<button
							className="hidden border border-black rounded-lg leading-7 text-2xl h-20 bg-[#595959] mt-4 md:flex items-center justify-center w-full text-white hover:opacity-90">
							Unstake <br /> Collateral
						</button>
						<button
							className=" md:hidden border border-black rounded-lg leading-7 text-2xl h-16 mt-6 bg-[#595959] flex items-center justify-center w-full text-white hover:opacity-90">
							Unstake Collateral
						</button>
						<img loading="lazy" src="./ox vector.png" className="sm:w-full w-52 mx-auto mt-2 md:mt-5" alt="" />
					</div>
					</div>
				</div>
				<Link to="/">
					<div className="flex justify-center">
							<button
								className="rounded-lg md:rounded-xl text-xl md:text-3xl h-12 md:h-16 bg-[#8447ff] flex items-center justify-center md:w-[38%] px-12 md:px-0 mt-3 text-white hover:opacity-90">
								Manage All
							</button>
					</div>
				</Link>
				<div className="bg-[#3c2c55] md:mx-32 border mt-5 relative pb-10 border-black dashboard-control-radius">
					<a href="https://www.x-ender.com/decentralized-control-system-ai">
					<div className="flex justify-center">
						<img loading="lazy" src="./dcs vector.png" className="w-40 md:w-48 mt-2" alt="" />
					</div>
					</a>
					<div className="flex justify-end">
						<img loading="lazy" src="./chainlink-link-logo.png" className="absolute md:right-[40px] right-4 md:top-[60px] top-[40px] w-8 md:w-10"
							alt="" />
					</div>
					<h1 className="text-[#23bdcd] md:text-3xl text-xl px-2 md:px-0 text-center mt-3">
						Decentralized Control System <br /> Dashboard
					</h1>

					<div className="bg-[#767171] md:mx-14 mx-4 rounded md:rounded-none px-1 pt-1 mt-8 flex">
						<div className="w-[55%] md:w-[50%]">
							<h3 className="text-sm md:text-2xl text-white mb-2">Status</h3>
							<h3 className="text-sm md:text-2xl text-white mb-2">Nodes</h3>
							<h3 className="text-sm md:text-2xl text-white mb-2">Connections</h3>
							<h3 className="text-sm md:text-2xl text-white">Optimizations*</h3>
						</div>
						<div className="w-[45%] md:w-[50%]">
							<h3 className="text-sm md:text-2xl text-[#e0b8ee] mb-2">Active</h3>
							<h3 className="text-sm md:text-2xl text-[#e0b8ee] mb-2">10</h3>
							<h3 className="text-sm md:text-2xl text-[#e0b8ee] mb-2">1092837 - 15h</h3>
							<h3 className="text-sm md:text-2xl text-[#e0b8ee]">92%</h3>
						</div>
					</div>
				</div>
			</div>

			<div id="chart" className="bg-[#27262c] rounded-custom py-4 md:py-8 px-4 md:px-10 mt-6 relative">
				<div className="bg-[#2e2e42] border border-[#2f528f] dashboard-control-radius py-6 md:px-8 px-0">
					<h1 className="text-white px-2 md:px-4 font-medium text-lg pb-2 md:pb-0 md:text-4xl">
						Amount Locked/Staked, Services
					</h1>
					<div className="flex px-2 pb-2 md:pb-0 md:px-4 justify-between">
						<div className="flex items-end">
							<img loading="lazy" src="./block vector.png" className="cursor-pointer hover:will-change-transform w-8 md:w-28 h-8 md:h-24 mr-1 md:mr-3" alt="" />
							<img loading="lazy" src="./manta vector.png" className="cursor-pointer hover:will-change-transform w-8 md:w-14 h-8 md:h-10 md:mb-2 mr-1" alt="" />
							<img loading="lazy" src="./ox vector.png" className="cursor-pointer hover:will-change-transform w-8 md:w-14 h-8 md:h-10 md:mb-2 mr-1" alt="" />
							<img loading="lazy" src="./skyshield vector.png" className="cursor-pointer hover:will-change-transform w-8 md:w-14 h-8 md:h-10 md:mb-2 mr-1" alt="" />
							<img loading="lazy" src="./dcs vector.png" className="cursor-pointer hover:will-change-transform w-8 md:w-14 h-8 md:h-10 md:mb-2 mr-1" alt="" />
						</div>
						<div className="flex items-end justify-end">
							<img loading="lazy" src="./expand.png" className="mb-1 md:mb-3" alt="" />
						</div>
					</div>
					<div className="md:flex px-2 md:px-4 md:justify-between">
						<div className="flex items-end pb-2 md:pb-0">
							<p className="text-xl md:text-4xl mt-1 text-white">10000 SOL</p>
							<p className="text-[#36c4a2] font-bold ml-4 text-sm md:text-lg ">+44.31 (946%)</p>
						</div>
						<div id="stat1" className="bg-[#343444] flex rounded-full h-[35px] mb-2 md:mb-0 border border-[#454053]">
							<p onClick={ () => triggerstat('1')} className="text-white font-extrabold cursor-pointer w-16 flex justify-center bg-[#9863fe] rounded-full leading-[2]">24H</p>
							<p onClick={ () => triggerstat('2')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">1W</p>
							<p onClick={ () => triggerstat('3')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">1M</p>
							<p onClick={ () => triggerstat('4')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">1Y</p>
						</div>
						<div id="stat2" className="bg-[#343444] hidden rounded-full h-[35px] mb-2 md:mb-0 border border-[#454053]">
							<p onClick={ () => triggerstat('1')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">24H</p>
							<p onClick={ () => triggerstat('2')} className="text-white font-extrabold cursor-pointer w-16 flex justify-center bg-[#9863fe] rounded-full leading-[2]">1W</p>
							<p onClick={ () => triggerstat('3')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">1M</p>
							<p onClick={ () => triggerstat('4')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">1Y</p>
						</div>
						<div id="stat3" className="bg-[#343444] hidden rounded-full h-[35px] mb-2 md:mb-0 border border-[#454053]">
							<p onClick={ () => triggerstat('1')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">24H</p>
							<p onClick={ () => triggerstat('2')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">1W</p>
							<p onClick={ () => triggerstat('3')} className="text-white font-extrabold cursor-pointer w-16 flex justify-center bg-[#9863fe] rounded-full leading-[2]">1M</p>
							<p onClick={ () => triggerstat('4')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">1Y</p>
						</div>
						<div id="stat4" className="bg-[#343444] hidden rounded-full h-[35px] mb-2 md:mb-0 border border-[#454053]">
							<p onClick={ () => triggerstat('1')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">24H</p>
							<p onClick={ () => triggerstat('2')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">1W</p>
							<p onClick={ () => triggerstat('3')} className="text-[#986ef3] font-extrabold cursor-pointer w-16 flex justify-center leading-[2]">1M</p>
							<p onClick={ () => triggerstat('4')} className="text-white font-extrabold cursor-pointer w-16 flex justify-center bg-[#9863fe] rounded-full leading-[2]">1Y</p>
						</div>
					</div>
					<p className="text-[#9166e4] font-bold text-xs mt-1 ml-1 px-2 pb-4 md:pb-0 md:px-4">
						<script>(document as any).write((new Date).toLocaleString());</script>
					</p>
					<img loading="lazy" src="./chart.png" className="w-full" alt="" />
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
export default Choice;