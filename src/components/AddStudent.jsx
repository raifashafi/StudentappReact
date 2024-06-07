import React from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label"> name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label">adm no.</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label">roll no</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label">parent name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                        <label htmlFor="" className="form-label">college</label>
                        <textarea name="" id="" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label">date of birth</label>
                        <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label">email</label>
                        <input type="email" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label">password</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                        <label htmlFor="" className="form-label">confirm password</label>
                        <input type="text" className="form-control" />
                    </div><br></br>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                        <button className="btn btn-success">register</button>
                    </div><br></br>
                  
                </div>

                </div>
            </div>
        </div>
        
        </div>
  )
}

export default AddStudent