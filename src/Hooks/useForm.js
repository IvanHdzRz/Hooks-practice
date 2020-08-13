import {useState} from 'react'

const useForm = (data={}) => {
   const [formData, setformData] = useState(data)
   
   const handleChange=({target})=>{
        setformData((prevData)=>{
            return{
                ...prevData,
                [target.name]:target.value
        }})
    }
    return {formData:formData,handleChange:handleChange,setformData:setformData}
}
export default useForm

