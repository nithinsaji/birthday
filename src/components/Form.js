import React, { useState } from 'react';
import './form.css'

const Form = ({update, formData, updateUser}) => {

    const [change, setChange] = useState(false)

    const [day, month, year] = formData.dob.split("/");
    const date = year+"-"+month+"-"+day;
    
  return (
    <div className='form-container'>
        <div className='form'>
            <div className='close-btn' onClick={update}>X</div>
            <h2>Update Details</h2>
            <form action="" onSubmit={updateUser}>
                <input type="hidden" value={formData.id} />
            <div className='elements'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter your Name' defaultValue={formData.name} onChange={()=> setChange(true)}/>
            </div>
            <div className='elements'>
                <label htmlFor="" >House Name</label>
                <input type="text" placeholder='Enter your Housename' defaultValue={formData.housename} onChange={()=> setChange(true)}/>
            </div>
            <div className='elements'>
                <label htmlFor="">Date of Birth</label>
                <input type="date" defaultValue={date} onChange={()=> setChange(true)}/>
            </div>
            <div className='button'>
                <input type="submit" value="Save" style={{backgroundColor: !change ?'grey':''}} disabled={!change} />
            </div>
            </form>
        </div>
    </div>
  )
}

export default Form