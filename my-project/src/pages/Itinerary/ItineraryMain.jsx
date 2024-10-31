import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faFontAwesome, faPersonWalking, faChevronRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default class ItineraryMain extends Component {
  render() {
    return (
        // == 每日行程頁 start ==
        <>
        <div className="container h-screen fixed">
            <div className="h-12 py-2 pl-5 bg-orange-bright flex items-center">
            <div className="text-black"><FontAwesomeIcon icon={faChevronLeft} /></div>
            </div>
            <div className="h-12 w-96 bg-white flex flex-row overflow-x-auto no-scrollbar">
            <div className='h-12 px-3 text-13px py-2 border-b-4 border-b-orange flex items-center justify-center text-nowrap'>第1天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第2天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第3天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第4天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第5天</div>
            <div className='h-11 px-3 text-12px py-2 flex items-center justify-center text-nowrap'>第6天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第7天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第8天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第9天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第10天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第11天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第12天</div>
            <div className='h-11 px-3 text-13px py-2 flex items-center justify-center text-nowrap'>第13天</div>
            </div>
            <div className='h-[calc(100vh-96px)] pb-6 relative'>
            <div className="text-20px font-bold py-2 px-8 ">04/13 週六</div>
                <div className='px-5 flex flex-col h-[calc(100vh-168px)] overflow-y-auto no-scrollbar'>
                {/* first */}
                <div>
                    <div className="bg-pink-light rounded-md flex flex-row py-2 px-8 relative">
                    <div>
                        <div className='absolute -top-1 -left-1 fa-2x text-green-bright'><FontAwesomeIcon icon={faFontAwesome} /></div>
                        <div className='text-white text-12px absolute top-2.5 left-1'>12</div>
                    </div>
                    <div className='w-24 rounded-md border-2 border-black'></div>
                    <div className='ml-2.5'>
                        <div className='text-12 py-1'>08:00</div>
                        <div className='text-16 font-bold py-1'>四四南村</div>
                        <div className='text-12 py-1'>停留時間01時00分</div>
                    </div>
                    </div>
                    <div>
                    <div className='ml-6 py-2.5 border-orange-bright border-l-2 border-dotted w-full float-start'>
                        <div className='flex flex-row space-x-4 items-center ml-2'>
                        <div className='text-16px'><FontAwesomeIcon icon={faPersonWalking} /></div>
                        <div className='text-14px w-fit'>00時08分</div>
                        <div className='text-16px text-center'><FontAwesomeIcon icon={faChevronRight} /></div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* second */}
                <div>
                    <div className="bg-pink-light rounded-md flex flex-row py-2 px-8 relative">
                    <div>
                        <div className='absolute -top-1 -left-1 fa-2x text-green-bright'><FontAwesomeIcon icon={faFontAwesome} /></div>
                        <div className='text-white text-12px absolute top-2.5 left-1'>12</div>
                    </div>
                    <div className='w-24 rounded-md border-2 border-black'></div>
                    <div className='ml-2.5'>
                        <div className='text-12 py-1'>08:00</div>
                        <div className='text-16 font-bold py-1'>四四南村</div>
                        <div className='text-12 py-1'>停留時間01時00分</div>
                    </div>
                    </div>
                    <div>
                    <div className='ml-6 py-2.5 border-orange-bright border-l-2 border-dotted w-full float-start'>
                        <div className='flex flex-row space-x-4 items-center ml-2'>
                        <div className='text-16px'><FontAwesomeIcon icon={faPersonWalking} /></div>
                        <div className='text-14px w-fit'>00時08分</div>
                        <div className='text-16px text-center'><FontAwesomeIcon icon={faChevronRight} /></div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* third */}
                <div>
                    <div className="bg-pink-light rounded-md flex flex-row py-2 px-8 relative">
                    <div>
                        <div className='absolute -top-1 -left-1 fa-2x text-green-bright'><FontAwesomeIcon icon={faFontAwesome} /></div>
                        <div className='text-white text-12px absolute top-2.5 left-1'>12</div>
                    </div>
                    <div className='w-24 rounded-md border-2 border-black'></div>
                    <div className='ml-2.5'>
                        <div className='text-12 py-1'>08:00</div>
                        <div className='text-16 font-bold py-1'>四四南村</div>
                        <div className='text-12 py-1'>停留時間01時00分</div>
                    </div>
                    </div>
                    <div>
                    <div className='ml-6 py-2.5 border-orange-bright border-l-2 border-dotted w-full float-start'>
                        <div className='flex flex-row space-x-4 items-center ml-2'>
                        <div className='text-16px'><FontAwesomeIcon icon={faPersonWalking} /></div>
                        <div className='text-14px w-fit'>00時08分</div>
                        <div className='text-16px text-center'><FontAwesomeIcon icon={faChevronRight} /></div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* fourth */}
                <div>
                    <div className="bg-pink-light rounded-md flex flex-row py-2 px-8 relative">
                    <div>
                        <div className='absolute -top-1 -left-1 fa-2x text-green-bright'><FontAwesomeIcon icon={faFontAwesome} /></div>
                        <div className='text-white text-12px absolute top-2.5 left-1'>12</div>
                    </div>
                    <div className='w-24 rounded-md border-2 border-black'></div>
                    <div className='ml-2.5'>
                        <div className='text-12 py-1'>08:00</div>
                        <div className='text-16 font-bold py-1'>四四南村</div>
                        <div className='text-12 py-1'>停留時間01時00分</div>
                    </div>
                    </div>
                    <div>
                    <div className='ml-6 py-2.5 border-orange-bright border-l-2 border-dotted w-full float-start'>
                        <div className='flex flex-row space-x-4 items-center ml-2'>
                        <div className='text-16px'><FontAwesomeIcon icon={faPersonWalking} /></div>
                        <div className='text-14px w-fit'>00時08分</div>
                        <div className='text-16px text-center'><FontAwesomeIcon icon={faChevronRight} /></div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* fifth */}
                <div>
                    <div className="bg-pink-light rounded-md flex flex-row py-2 px-8 relative">
                    <div>
                        <div className='absolute -top-1 -left-1 fa-2x text-green-bright'><FontAwesomeIcon icon={faFontAwesome} /></div>
                        <div className='text-white text-12px absolute top-2.5 left-1'>12</div>
                    </div>
                    <div className='w-24 rounded-md border-2 border-black'></div>
                    <div className='ml-2.5'>
                        <div className='text-12 py-1'>08:00</div>
                        <div className='text-16 font-bold py-1'>四四南村</div>
                        <div className='text-12 py-1'>停留時間01時00分</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='absolute bottom-1 right-4 fa-3x text-orange'><FontAwesomeIcon icon={faCirclePlus} /></div>
        </div>
        </>
        // == 每日行程頁 end ==
    )
  }
}
