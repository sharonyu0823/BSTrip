// Header
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header(props) {
  // 回上一頁
  function handleGoBack() {
    const hasPreviousPage = history.length > 1;
    if (hasPreviousPage) {
      history.back();
      return;
    }
  }

  return (
    <>
      <div className="h-12 py-2 pl-5 bg-orange-bright flex items-center">
        <Link className="text-black z-10" onClick={handleGoBack}><FontAwesomeIcon icon={faChevronLeft} /></Link>
        <div className='w-full text-18px font-bold text-white text-center -translate-x-2.5'>{props.children}</div>
      </div>  
    </>
  )
}

export default Header;