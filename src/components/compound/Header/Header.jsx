import React from 'react'
import TopBarLeft from '@atom/TopBarleft/TopBarLeft'
import SearchBar from '@atom/SearchBar/SearchBar'
import HeaderOption from '@atom/HeaderOption/HeaderOption'
import style from './header.module.scss'
import chat from '@assets/chat/Dashboard/Icons/Group.svg'
import dropDown from '@assets/dropdown/Dashboard/Icons/Polygon 2.svg'
function Header() {
  return (
    <div className={style.header}>
        <div className={style.topbarleft}>
         <TopBarLeft/>
        </div>
        
        <div className={style.searchbar}>
           <SearchBar/>
        </div>        
        <div className={style.headeroption}>
            <div> <HeaderOption image={chat}/></div>
            <div> <HeaderOption image={dropDown}/></div>
        </div>
    </div>
  )
}

export default Header;