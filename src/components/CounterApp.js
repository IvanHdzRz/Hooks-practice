import React, { useState } from 'react'
import Styles from './counterApp.module.css'
import useCounter from '../Hooks/useCounter'

const CounterApp = () => {
    const initialCount=5
    const {count,handleAdd,handleReset,handleSub}= useCounter(initialCount)
   
    return (
        <div className={Styles.counterApp}>
           
            <h2 className={Styles.firstCounter}>{count}</h2>
            <h2 className={Styles.secondCounter}>{count}</h2>

            <button
                className={Styles.btnAdd+' btn btn-primary'}
                onClick={()=>{handleAdd()}}
            >
                +1
            </button>
            <button
                className={Styles.btnReset +' btn btn-light'}
                onClick={()=>{handleReset()}}
            >
                reset
            </button>
            <button
                className={Styles.btnDec +' btn btn-danger'}
                onClick={()=>{handleSub()}}
            >
                -1
            </button>
            
        </div>
    )
}

export default CounterApp;
