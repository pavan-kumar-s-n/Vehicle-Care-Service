import React from 'react'

function ForgotPassword() {
  return (
    <>
    <div className='container d-flex justify-content-center align-items-center min-vh-100 '>
      <div className="card" style={{width:'22rem'}} >
           <img src='src\assets\Components\Vehicleimg.jpg' className='card-img-top img-thumbnail' alt='Service Image' />
              <div className="card-body">
                 <h2 className='text-center'>Reset Your Password</h2>
                 <hr/>
                 <form className='forgot-password-form'>
                    <div className="row mb-4 ">
                      <label htmlFor="username" className="col-sm-4 col-form-label">Username</label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="username" />
                         </div>
                      <label htmlFor="userid" className="col-sm-4 col-form-label">Userid</label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="userid"/>
                        </div>
                       <label htmlFor="password" className="col-sm-7 col-form-label">Enter new password</label>
                        <div className="col-sm-12">
                          <input type="password" className="form-control" id="password"/>
                        </div>
                    </div>
                    <button type="submit" className=" btn btn-light  container mb-4 " style={{border:'2px solid grey'}}>Reset Your Password</button>
                  </form>
              </div>
      </div>
    </div>
    </>
  )
}

export default ForgotPassword
