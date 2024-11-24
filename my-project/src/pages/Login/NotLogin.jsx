import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from "../../store/userSlice";

function NotLogin() {
  const dispatch = useDispatch();
  console.log('lala NotLogin dispatch', dispatch);
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  
  const handleLogin = () => {
    const nameValue = nameRef.current.value;
    const ageValue = ageRef.current.value;
    const emailValue = emailRef.current.value;
    dispatch(setLogin({
      name: nameValue,
      age: ageValue,
      email: emailValue
    }));
  };

  return (
    <>
      <div className="container h-screen">
        <div className="h-12 flex flex-row-reverse items-center"></div>
        <div className="h-[calc(100vh-112px)] p-5 flex flex-col space-y-4">
          <div className="flex flex-col">
            <div className="text-20px font-bold pr-1.5">登入BSTrip</div>
            <div className="text-14px text-coffee">立即登入，即可安排個人化行程規劃!</div>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="text-16px mb-4">姓名</div>
              <div className="border-coffee border-2 mb-4 rounded-md">
                <input className="w-full rounded-md text-14px p-2.5 text-coffee" type="text" placeholder="請輸入姓名" name="name" id="name" ref={nameRef}/>
              </div>
            </div>
            <div>
              <div className="text-16px mb-4">年齡</div>
              <div className="border-coffee border-2 mb-4 rounded-md">
                <input className="w-full rounded-md text-14px p-2.5 text-coffee" type="text" placeholder="請輸入年齡" name="age" id="age" ref={ageRef}/>
              </div>
            </div>
            <div>
              <div className="text-16px mb-4">Email</div>
              <div className="border-coffee border-2 mb-4 rounded-md">
                <input className="w-full rounded-md text-14px p-2.5 text-coffee" type="text" placeholder="請輸入Email" name="email" id="email" ref={emailRef}/>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 flex justify-center px-5 pb-5">
        <Link className="text-18px text-center rounded-full text-white bg-orange py-3.5 w-full h-12" onClick={handleLogin} to="/questionnaire">登入</Link>
        </div>
      </div>
    </>
  );
}

export default NotLogin;