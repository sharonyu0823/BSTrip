// 每日行程頁
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Outer from '../../../components/Outer'
import ItineraryMainDayBar from './ItineraryMainDayBar/ItineraryMainDayBar'
import ItineraryMainDetail from './ItineraryMainDetail/ItineraryMainDetail'

function ItineraryMain() {
  return (
    <>
      <Outer title="行程">
        <ItineraryMainDayBar />
        <ItineraryMainDetail />
        <Link className='absolute bottom-1 right-4 fa-3x text-orange' to="/itinerary/add"><FontAwesomeIcon icon={faCirclePlus} /></Link>
      </Outer>
    </>
  )
}

export default ItineraryMain;
