// 每日行程頁
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import Outer from '../../../components/Outer'
import ItineraryMainDetail from './ItineraryMainDetail/ItineraryMainDetail'

const dayTripArr = [
  {id: '01', title: 'trip 1'},
  {id: '02', title: 'trip 2'},
  {id: '03', title: 'trip 2'},
];

function ItineraryMain() {
  return (
    <>
      <Outer title="行程">
        <div className="h-12 w-96 bg-white flex flex-row overflow-x-auto no-scrollbar">
          {
            dayTripArr.map((item) => {
              return (
                <NavLink key={item.id} className='h-12 px-3 text-13px py-2 flex items-center justify-center text-nowrap' to={`/itinerary/day/${item.id}`}>第{item.id}天</NavLink>
              )
            })
          }
        </div>
        <ItineraryMainDetail />
        <Link className='absolute bottom-1 right-4 fa-3x text-orange' to="/itinerary/add"><FontAwesomeIcon icon={faCirclePlus} /></Link>
      </Outer>
    </>
  )
}

export default ItineraryMain;
