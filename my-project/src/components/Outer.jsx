// 行程頁的最外框
import React from 'react';
import Header from './Header';

function Outer(props) {
  return (
    <>
      <div className="container h-screen fixed">
          <Header>{props.title}</Header>
          {props.children}
      </div>
    </>
  )
}

export default Outer;
