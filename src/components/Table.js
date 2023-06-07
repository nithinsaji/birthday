import React, { useState } from 'react'
import Form from './Form'
import './table.css'

const Table = ({data, Class, classChangeHandler, loading, updateUser}) => {

    const [formOpened, setFormOpened] = useState(false);
    const [formData, setFormData] = useState({})

    const update = (value) => {
        setFormData(value);
        setFormOpened(!formOpened);
    }
    
    return (
    <>
        <div>
            <div>
                <h3>Birthday List</h3>
                Class 
                <select name="" id="" onChange={classChangeHandler}>
                    {Class.map((value)=> (
                        <option value={value} className='option'>{value}</option>
                    ))}
                </select>
            </div>
            {!loading && data.teacher.name && <div className='table-container'>
                <h3>Teacher</h3>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>House Name</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.teacher.name}</td>
                        <td>{data.teacher.housename}</td>
                        <td>{data.teacher.dob}</td>
                        <td><i className='edit' onClick={() => update(data.teacher)}>&#9998;</i></td>
                    </tr>
                </tbody></table>
                </div>}
                {!loading && data.students[0] && <div className='table-container'>
                <h3>Students</h3>
            
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>House Name</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.students.map((s)=>(
                        <tr>
                        <td>{s.name}</td>
                        <td>{s.housename}</td>
                        <td>{s.dob}</td>
                        <td><i className='edit'>&#9998;</i></td>
                    </tr>
                    ))}
                    
                    
                </tbody>
            </table>
            </div>}
            {!loading && data.hm.name && <div className='table-container'>
                <h3>Head Master</h3>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>House Name</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.hm.name}</td>
                        <td>{data.hm.housename}</td>
                        <td>{data.hm.dob}</td>
                        <td><i className='edit'>&#9998;</i></td>
                    </tr>
                </tbody></table>
                </div>}
            {!loading && data.sustitutes[0] &&<div className='table-container'>
                <h3>substitutes</h3>
            
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>House Name</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.sustitutes.map((s)=>(
                        <tr>
                        <td>{s.name}</td>
                        <td>{s.housename}</td>
                        <td>{s.dob}</td>
                        <td><i className='edit'>&#9998;</i></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>}
        </div>
        {formOpened && <Form update={update} formData={formData} updateUser={updateUser}/>}
    </>
    )
}

export default Table