// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "./App.css";

function App() {
  return (
    // == 問券頁 start ==
    <>
      <div className="container h-screen">
        <div className="h-12 flex flex-row-reverse items-center">
          <p className="w-fit mr-4 text-12px font-bold">略過</p>
        </div>
        <div className="h-[calc(100vh-112px)] p-5 flex flex-col space-y-4">
          <div className="flex flex-col">
            <div className="text-20px font-bold pr-1.5">歡迎使用BSTrip</div>
            <div className="text-14px text-coffee">寫基本設定，推薦內容更精準!</div>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="text-16px mb-4">生日</div>
              <div className="border-coffee border-2 mb-4 rounded-md flex flex-row justify-between">
                <div className="text-14px p-2.5 text-coffee">選擇生日</div>
                <div className="text-coffee p-2.5"><FontAwesomeIcon icon={faAngleDown} /></div>
              </div>
            </div>
            <div>
              <div className="text-16px mb-4">性別</div>
              <div className="flex justify-between mb-4">
                <div className="text-14px text-center border-coffee flex-1 mr-3 border-2 p-2.5 rounded-md text-coffee">男</div>
                <div className="text-14px text-center border-coffee flex-1 mr-3 border-2 p-2.5 rounded-md text-coffee">女</div>
                <div className="text-14px text-center border-coffee flex-1 border-2 p-2.5 rounded-md text-coffee">秘密</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 flex justify-center px-5 pb-5">
        <div className="text-18px text-center rounded-full text-white bg-orange py-3.5 w-full h-12">下一步</div>
        </div>
      </div>
    </>
    // == 問券頁 end ==

    // == 每天行程頁 start ==
    // == 每天行程頁 end ==
  );
}

export default App;
