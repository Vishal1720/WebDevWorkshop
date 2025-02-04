import React from 'react'

const Header = () => {
  return (
    <div style={{width:100+"%",textAlign:"center",height:50+"px",backgroundColor:"blue"}}>
       < a href='/'>Home</a>
        <a href='/profile'>Profile</a>
        <a href='/table'>Table</a>
        <a href='/account'>Account</a>
    </div>
  )
}

export default Header