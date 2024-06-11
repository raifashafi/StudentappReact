import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {

    const [data,setData]=useState([
        {
            
                "name":"",
                "rollno":"",
                "admno":"",
                "college":""
            
        }
    ])
    const inputHandler=(event) => {
        setData({...data,[event.target.name]: event.target.value})
    }
    const readValue=() => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                   alert("success") 
                } else {
                    alert("error")
                }
        
                    
            }
    ).catch().finally()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label"> name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label">admno</label>
                        <input type="text" className="form-control" name='admno' value={data.admno} onChange={inputHandler}   />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label">roll no</label>
                        <input type="text" className="form-control" name='rollno' value={data.rollno} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                        <label htmlFor="" className="form-label">college</label>
                        <textarea name="college" id="" className="form-control" value={data.college}  onChange={inputHandler}/>
                    </div>
                    <br></br>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>register</button>
                    </div><br></br>
                  
                </div>

                </div>
            </div>
        </div>
        
        </div>
  )
}

export default AddStudent