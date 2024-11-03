import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome, faPersonWalking, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ItineraryMainDetail() {
  return (
    <>
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
    </>
  )
}

export default ItineraryMainDetail;