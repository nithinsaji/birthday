import React, { useEffect, useState } from 'react'
import './table.css'
import '../App.css';
import { month } from '../service/data'
import axios from 'axios';

const getAPI = "https://script.google.com/macros/s/AKfycbw9wBgbq2UJOJxhu_t9M0QhPguRoT7lz4WXm4G5Uv5QPOfkC_mNW184jONo_1WbofcTOA/exec";

const Filter = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const monthChangeHandler = (e) =>{
        setLoading(true);
          axios.get(getAPI+`?month=${e.target.value}`).then(
            (res)=>{
              setData(res.data.data);
              setLoading(false);
            }
          )
      }

    useEffect(() => {
        axios.get(getAPI+`?month=1`).then(
          (res)=>{
            setData(res.data.data);
            setLoading(false);
          }
        )
      }, [])
    
    return (
    <>
        <div style={{textAlign: 'center'}}>
            <div>
                <h3>Birthday List</h3>
                Class 
                <select name="" id="" onChange={monthChangeHandler}>
                    {month.map((value)=> (
                        <option value={value.digit} className='option'>{value.text}</option>
                    ))}
                </select>
            </div>
            {!loading && data.teacher[0] && <div className='table-container'>
                <h3>Teacher</h3>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>House Name</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.teacher.map((t)=>(
                            <tr>
                        <td>{t.name}</td>
                        <td>{t.housename}</td>
                        <td>{t.dob}</td>
                    </tr>
                        ))
                    }
                </tbody></table>
                </div>}
                {!loading && data.students[0] && <div className='table-container'>
                <h3>Students</h3>
            
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>House Name</th>
                        <th>Class</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {data.students.map((s)=>(
                        <tr>
                        <td>{s.name}</td>
                        <td>{s.housename}</td>
                        <td>{s.class}</td>
                        <td>{s.dob}</td>
                    </tr>
                    ))}
                    
                    
                </tbody>
            </table>
            </div>}
        </div>
    </>
    )
}

export default Filter