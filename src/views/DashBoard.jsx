import React from 'react'
import Table from '../components/atoms/Table/Table'
import TimeFilter from '../components/atoms/TimeFilter/TimeFilter'
import style from './DashBoard.module.scss'
import PriceCard from '../components/atoms/PriceCard/PriceCard'
import data from './TableContent/data.js'
export default function DashBoard() {
  return (
    <div className={style.dashboard}>
        
        <div className={style.upperContainer}>
           <div className={style.desctiption}>
             <div className={style.overview}>Overview</div>
             <div className={style.timefilter}><TimeFilter/></div>
           </div>
           <div className={style.CardContainer}>
               {
                data.map((data,i)=>{
                    return (<PriceCard data={data} key={i}/>)
                })
               }
           </div>
        </div>
        <div className={style.lowerContiner}>
            <div className={style.lowerHeader}>
                transactions this month
            </div>
            <div style={style.tableContainer}>
               <div className={style.TableHeader}>
                Table headers sort
               </div>
               <div className={style.Tablediv}>
                <Table data={data}/>
               </div>
            </div>
        </div>
    
    </div>
  )
}
