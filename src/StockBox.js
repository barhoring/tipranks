// import React from 'react';

const StockBox = ({ label, value, category, uid }) => { 
  return (
    <div onClick={() => alert(value)}className="stock-box" style={{ border: "1px solid black"}}>
      <div>label: {label}</div>
      <div>value: {value}</div>
      <div>category: {category}</div>
      <div onClick={(e) => {alert(uid); e.stopPropagation();}}>uid: {uid}</div>
    </div>
  )
}

export default StockBox