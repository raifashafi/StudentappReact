import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {
      const [data,changeData]= useState(
[
    {"name": "raifa","age": 21,"admno": 112},
    {"name": "rose","age": 21,"admno": 102},
    {"name": "jisna","age":21,"admno":199},
    {"name":"swathy","age":21,"admno":12},
]
     

      )

  return (
    <div>
        <Navbar/>
         <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                          
                          {data.map(
                            (value,index)=>{
                                return   <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div className="card">
                                    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">age:{value.age}</p>
                                        <p class="card-text">admno:{value.admno}</p>
                                        <a href="#" class="btn btn-primary">click here to see details</a>
                                    </div>
                                </div>
                            </div>
                            }
                          )}
                           
                          
                          
                         
                           
                          
                           
                          
                           
                           
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewStudent