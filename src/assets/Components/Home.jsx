import React from 'react'
import Nv from './Nv'
import Footer from './Footer'

export default function Home() {
  return (
    <>
     <Nv/>
     <div className='container d-flex justify-content-center align-items-center min-vh-100'>
           <div className="card" style={{width:'22rem'}} >
           <img src='src\assets\Components\Vehicleimg.jpg' className='card-img-top ' alt='Service Image' height={'190rem'} />
              <div className="card-body">
                 <form className='login-form '>
                    <div className="row mb-4 ">
                       <label for="Userid3" className="col-sm-4 col-form-label">User Id</label>
                       <div className="col-sm-12">
      <                  input type="text" className="form-control" id="Userid3"/>
                       </div>
                    </div>
                    <div className="row mb-4">
                       <label for="inputPassword3" className="col-sm-4 col-form-label">Password</label>
                       <div className="col-sm-12">
                            <input type="password" className="form-control" id="inputPassword3"/>
                       </div>
                    </div>
                    <button type="submit" className=" btn btn-light  container mb-4 " style={{border:'2px solid grey'}}>Sign in</button>
                    <ul className='d-flex justify-content-between container ' > 
                      <dt><a href='#'style={{textDecoration:'none',color:'red'}}>New Registration</a></dt>
                      <dt><a href='#'style={{textDecoration:'none',color:'red'}}>Forgot Password</a></dt>
                    </ul>
                 </form>
               </div>
             </div>
     </div>
     <Footer/>
   </>
  )
}
