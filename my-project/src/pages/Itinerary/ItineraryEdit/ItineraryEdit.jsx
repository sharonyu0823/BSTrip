// 編輯行程頁
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleCheck, faCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Header from '../../../components/Header';

function ItineraryEdit() {
	return (
		<>
			<div className="container h-screen">
					<Header>編輯</Header>
					<div className='h-28 p-5 bg-green-bright flex flex-col space-y-4'>
					<div className="text-20px font-bold text-white">四四南村</div>
					<div className="text-20px font-bold text-white flex flex-row items-center">
							<div className="text-black pr-4 text-[#F62C2C]"><FontAwesomeIcon icon={faLocationDot} /></div>
							<div className="w-full text-16px truncate">110台灣台北市信義區信義路五段七八九時一一我</div>
					</div>
					</div>
					<div className="h-[calc(100vh-224px)] p-5 flex flex-col space-y-4">
					<div>
							<div className="text-16px mb-4">抵達時間</div>
							<div className="bg-pink-light rounded-md flex flex-col">
							<div className='flex justify-between justify-center p-5 border-b-2 border-coffee border-dotted'>
									<div className='text-14px w-20 text-center'>系統規劃</div>
									<div className='text-14px w-2/4 text-center -translate-x-2.5'>08:00</div>
									<div className='text-14px w-1/4 text-center'><FontAwesomeIcon icon={faCircleCheck} /></div>
							</div>
							<div className='flex justify-between justify-center p-5'>
									<div className='text-14px w-20 text-center text-coffee pt-1'>手動設定</div>
									<div className='text-14px w-1/3 text-center border-2 border-coffee flex flex-row justify-center justify-around rounded-full py-1 px-4'>
									<div className='w-2/3'>18:00</div>
									<div className='w-1/3'><FontAwesomeIcon icon={faChevronDown} /></div>
									</div>
									<div className='text-14px w-1/4 text-center text-white pt-1'><FontAwesomeIcon icon={faCircle} /></div>
							</div>
							</div>
					</div>
					<div>
							<div className="text-16px mb-4">此景點</div>
							<div className="bg-pink-light rounded-md flex flex-col">
							<div className='flex justify-between justify-center p-5 border-b-2 border-coffee border-dotted'>
									<div className='text-14px w-20 text-center translate-y-4'>停留時間</div>
									<div className='text-14px w-1/3 text-center border-2 border-coffee flex flex-row justify-center justify-around rounded-full py-1 px-4'>
									<div className='w-2/3'>00時00分</div>
									<div className='w-1/3 translate-y-2.5'><FontAwesomeIcon icon={faChevronDown} /></div>
									</div>
									<div className='text-14px w-1/4 text-center translate-y-4'><FontAwesomeIcon icon={faCircleCheck} /></div>
							</div>
							<div className='flex justify-between justify-center p-5'>
									<div className='text-14px w-20 text-center text-coffee pt-1'>離開時間</div>
									<div className='text-14px w-1/3 text-center border-2 border-coffee flex flex-row justify-center justify-around rounded-full py-1 px-4'>
									<div className='w-2/3'>18:00</div>
									<div className='w-1/3'><FontAwesomeIcon icon={faChevronDown} /></div>
									</div>
									<div className='text-14px w-1/4 text-center text-white pt-1'><FontAwesomeIcon icon={faCircle} /></div>
							</div>
							</div>
					</div>
					</div>
					<div className="h-16 flex justify-center px-5 pb-5">
					<div className="text-18px text-center rounded-full text-white bg-orange py-3.5 w-full h-12">儲存</div>
					</div>
			</div>
		</>
	)
}

export default ItineraryEdit;
