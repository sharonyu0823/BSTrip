// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faCircleCheck, faCircle, faChevronDown, faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import "./App.css";

function App() {
  return (
    // == 問券頁 start ==
    // <>
    //   <div className="container h-screen">
    //     <div className="h-12 flex flex-row-reverse items-center">
    //       <p className="w-fit mr-4 text-12px font-bold">略過</p>
    //     </div>
    //     <div className="h-[calc(100vh-112px)] p-5 flex flex-col space-y-4">
    //       <div className="flex flex-col">
    //         <div className="text-20px font-bold pr-1.5">歡迎使用BSTrip</div>
    //         <div className="text-14px text-coffee">寫基本設定，推薦內容更精準!</div>
    //       </div>
    //       <div className="flex flex-col">
    //         <div>
    //           <div className="text-16px mb-4">生日</div>
    //           <div className="border-coffee border-2 mb-4 rounded-md flex flex-row justify-between">
    //             <div className="text-14px p-2.5 text-coffee">選擇生日</div>
    //             <div className="text-coffee p-2.5"><FontAwesomeIcon icon={faAngleDown} /></div>
    //           </div>
    //         </div>
    //         <div>
    //           <div className="text-16px mb-4">性別</div>
    //           <div className="flex justify-between mb-4">
    //             <div className="text-14px text-center border-coffee flex-1 mr-3 border-2 p-2.5 rounded-md text-coffee">男</div>
    //             <div className="text-14px text-center border-coffee flex-1 mr-3 border-2 p-2.5 rounded-md text-coffee">女</div>
    //             <div className="text-14px text-center border-coffee flex-1 border-2 p-2.5 rounded-md text-coffee">秘密</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="h-16 flex justify-center px-5 pb-5">
    //     <div className="text-18px text-center rounded-full text-white bg-orange py-3.5 w-full h-12">下一步</div>
    //     </div>
    //   </div>
    // </>
    // == 問券頁 end ==

    // == 每天行程頁 start ==
    // <>
    //   <div className="container h-screen">
    //     <div className="h-12 py-2 pl-5 bg-orange-bright flex items-center">
    //       <div className="text-black"><FontAwesomeIcon icon={faChevronLeft} /></div>
    //       <div className='w-full text-18px font-bold text-white text-center -translate-x-2.5'>
    //         編輯
    //       </div>
    //     </div>
    //     <div className='h-28 p-5 bg-green-bright flex flex-col space-y-4'>
    //       <div className="text-20px font-bold text-white">四四南村</div>
    //       <div className="text-20px font-bold text-white flex flex-row items-center">
    //         <div className="text-black pr-4 text-[#F62C2C]"><FontAwesomeIcon icon={faLocationDot} /></div>
    //         <div className="w-full text-16px truncate">110台灣台北市信義區信義路五段七八九時一一我</div>
    //       </div>
    //     </div>
    //     <div className="h-[calc(100vh-224px)] p-5 flex flex-col space-y-4">
    //       <div>
    //         <div className="text-16px mb-4">抵達時間</div>
    //         <div className="bg-pink-light rounded-md flex flex-col">
    //           <div className='flex justify-between justify-center p-5 border-b-2 border-coffee border-dotted'>
    //             <div className='text-14px w-20 text-center'>系統規劃</div>
    //             <div className='text-14px w-2/4 text-center -translate-x-2.5'>08:00</div>
    //             <div className='text-14px w-1/4 text-center'><FontAwesomeIcon icon={faCircleCheck} /></div>
    //           </div>
    //           <div className='flex justify-between justify-center p-5'>
    //             <div className='text-14px w-20 text-center text-coffee pt-1'>手動設定</div>
    //             <div className='text-14px w-1/3 text-center border-2 border-coffee flex flex-row justify-center justify-around rounded-full py-1 px-4'>
    //               <div className='w-2/3'>18:00</div>
    //               <div className='w-1/3'><FontAwesomeIcon icon={faChevronDown} /></div>
    //             </div>
    //             <div className='text-14px w-1/4 text-center text-white pt-1'><FontAwesomeIcon icon={faCircle} /></div>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="text-16px mb-4">此景點</div>
    //         <div className="bg-pink-light rounded-md flex flex-col">
    //           <div className='flex justify-between justify-center p-5 border-b-2 border-coffee border-dotted'>
    //             <div className='text-14px w-20 text-center translate-y-4'>停留時間</div>
    //             <div className='text-14px w-1/3 text-center border-2 border-coffee flex flex-row justify-center justify-around rounded-full py-1 px-4'>
    //               <div className='w-2/3'>00時00分</div>
    //               <div className='w-1/3 translate-y-2.5'><FontAwesomeIcon icon={faChevronDown} /></div>
    //             </div>
    //             <div className='text-14px w-1/4 text-center translate-y-4'><FontAwesomeIcon icon={faCircleCheck} /></div>
    //           </div>
    //           <div className='flex justify-between justify-center p-5'>
    //             <div className='text-14px w-20 text-center text-coffee pt-1'>離開時間</div>
    //             <div className='text-14px w-1/3 text-center border-2 border-coffee flex flex-row justify-center justify-around rounded-full py-1 px-4'>
    //               <div className='w-2/3'>18:00</div>
    //               <div className='w-1/3'><FontAwesomeIcon icon={faChevronDown} /></div>
    //             </div>
    //             <div className='text-14px w-1/4 text-center text-white pt-1'><FontAwesomeIcon icon={faCircle} /></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="h-16 flex justify-center px-5 pb-5">
    //       <div className="text-18px text-center rounded-full text-white bg-orange py-3.5 w-full h-12">儲存</div>
    //     </div>
    //   </div>
    // </>
    // == 每天行程頁 end ==

    // == 新增行程頁 start ==
    // <>
    //   <div className="container h-screen">
    //     <div className="h-12 py-2 pl-5 bg-orange-bright flex items-center">
    //       <div className="text-black"><FontAwesomeIcon icon={faChevronLeft} /></div>
    //       <div className='w-full text-18px font-bold text-white text-center -translate-x-2.5'>
    //         新增
    //       </div>
    //     </div>
    //     <div className="h-[calc(100vh-112px)] p-5 flex flex-col space-y-4">
    //      <div>
    //         <div className="text-16px mb-4">地點名稱</div>
    //         <div className="bg-pink-light rounded-md">
    //           <div className='flex justify-between justify-center p-5'>
    //             <div className='text-14px text-center'>請輸入地點名稱</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="text-16px mb-4">抵達時間</div>
    //         <div className="bg-pink-light rounded-md flex flex-col">
    //           <div className='flex justify-between justify-center p-5 border-b-2 border-coffee border-dotted'>
    //             <div className='text-14px w-20 text-center'>系統規劃</div>
    //             <div className='text-14px w-2/4 text-center -translate-x-2.5'>08:00</div>
    //             <div className='text-14px w-1/4 text-center'><FontAwesomeIcon icon={faCircleCheck} /></div>
    //           </div>
    //           <div className='flex justify-between justify-center p-5'>
    //             <div className='text-14px w-20 text-center text-coffee pt-1'>手動設定</div>
    //             <div className='text-14px w-1/3 text-center border-2 border-coffee flex flex-row justify-center justify-around rounded-full py-1 px-4'>
    //               <div className='w-2/3'>18:00</div>
    //               <div className='w-1/3'><FontAwesomeIcon icon={faChevronDown} /></div>
    //             </div>
    //             <div className='text-14px w-1/4 text-center text-white pt-1'><FontAwesomeIcon icon={faCircle} /></div>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="text-16px mb-4">此景點</div>
    //         <div className="bg-pink-light rounded-md flex flex-col">
    //           <div className='flex justify-between justify-center p-5 border-b-2 border-coffee border-dotted'>
    //             <div className='text-14px w-20 text-center translate-y-4'>停留時間</div>
    //             <div className='text-14px w-1/3 text-center border-2 border-coffee flex flex-row justify-center justify-around rounded-full py-1 px-4'>
    //               <div className='w-2/3'>00時00分</div>
    //               <div className='w-1/3 translate-y-2.5'><FontAwesomeIcon icon={faChevronDown} /></div>
    //             </div>
    //             <div className='text-14px w-1/4 text-center translate-y-4'><FontAwesomeIcon icon={faCircleCheck} /></div>
    //           </div>
    //           <div className='flex justify-between justify-center p-5'>
    //             <div className='text-14px w-20 text-center text-coffee pt-1'>離開時間</div>
    //             <div className='text-14px w-1/3 text-center border-2 border-coffee flex flex-row justify-center justify-around rounded-full py-1 px-4'>
    //               <div className='w-2/3'>18:00</div>
    //               <div className='w-1/3'><FontAwesomeIcon icon={faChevronDown} /></div>
    //             </div>
    //             <div className='text-14px w-1/4 text-center text-white pt-1'><FontAwesomeIcon icon={faCircle} /></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="h-16 flex justify-center px-5 pb-5">
    //       <div className="text-18px text-center rounded-full text-white bg-orange py-3.5 w-full h-12">儲存</div>
    //     </div>
    //   </div>
    // </>
    // == 新增行程頁 end ==

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
        <div className='h-[calc(100vh-96px)] border-2 border-black'>
        <div className="text-20px font-bold py-2 px-8">04/13 週六</div>
          <div className='px-5 border-2 border-orange flex flex-col space-y-16'>
            <div>
              <div className="bg-pink-light rounded-md flex flex-row px-8 relative">
                <div>
                  <div className='absolute -top-1 -left-1 fa-2x text-green-bright'><FontAwesomeIcon icon={faFontAwesome} /></div>
                  <div className='text-white text-12px absolute top-2.5 left-1'>12</div>
                </div>
                <div className='w-24 rounded-md border-2 border-black'></div>
                <div className='ml-2.5 border-2 border-black'>
                  <div className='text-12 py-1'>08:00</div>
                  <div className='text-16 font-bold py-1'>四四南村</div>
                  <div className='text-12 py-1'>停留時間01時00分</div>
                </div>
              </div>
              <div>
                <div className='border-black border-l-4 w-12'></div>

              </div>
            </div>
            
            <div>
              <div className="bg-pink-light rounded-md flex flex-row py-2 px-8 relative">
                <div>
                  <div className='absolute -top-1 -left-1 fa-2x text-green-bright'><FontAwesomeIcon icon={faFontAwesome} /></div>
                  <div className='text-white text-12px absolute top-2.5 left-1'>12</div>
                </div>
                <div className='w-24 rounded-md border-2 border-black'></div>
                <div className='ml-2.5 border-2 border-black'>
                  <div className='text-12 py-1'>08:00</div>
                  <div className='text-16 font-bold py-1'>四四南村</div>
                  <div className='text-12 py-1'>停留時間01時00分</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-pink-light rounded-md flex flex-row py-2 px-8 relative">
                <div>
                  <div className='absolute -top-1 -left-1 fa-2x text-green-bright'><FontAwesomeIcon icon={faFontAwesome} /></div>
                  <div className='text-white text-12px absolute top-2.5 left-1'>12</div>
                </div>
                <div className='w-24 rounded-md border-2 border-black'></div>
                <div className='ml-2.5 border-2 border-black'>
                  <div className='text-12 py-1'>08:00</div>
                  <div className='text-16 font-bold py-1'>四四南村</div>
                  <div className='text-12 py-1'>停留時間01時00分</div>
                </div>
              </div>
            </div>
            
          </div>

        

        </div>
        {/* <div className="h-[calc(100vh-160px)] p-5 flex flex-col space-y-4">
          <div>
            <div className="text-16px mb-4">地點名稱</div>
            <div className="bg-pink-light rounded-md">
              <div className='flex justify-between justify-center p-5'>
                <div className='text-14px text-center'>請輸入地點名稱</div>
              </div>
            </div>
          </div>
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
        </div> */}
      </div>
    </>
    // == 每日行程頁 end ==
  );
}

export default App;
