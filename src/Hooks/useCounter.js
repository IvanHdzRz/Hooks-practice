import {useState} from 'react'

const useCounter = (initialCount=0) => {
    const [count, setcount] = useState(initialCount)
    const handleAdd=(factor=1)=>{
        setcount(count+factor);
    }
    
    const handleSub=(factor=1)=>{
        setcount(count-factor);
    }
    const handleReset=()=>{
        setcount(initialCount);
   }
   return {count, handleAdd,handleReset,handleSub}
}
export default useCounter