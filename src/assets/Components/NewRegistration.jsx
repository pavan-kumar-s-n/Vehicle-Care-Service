import React from 'react'

function NewRegistration() {
  return (
    <>
        <div className='container d-flex justify-content-center align-items-center min-vh-100 '>
      <div className="card" style={{width:'22rem'}} >
           <img src='src\assets\Components\Vehicleimg.jpg' className='card-img-top img-thumbnail' alt='Service Image' />
              <div className="card-body">
                 <h2 className='text-center'>Register Here</h2>
                 <hr/>
                 <form className='forgot-password-form'>
                    <div className="row mb-4 ">
                      <label htmlFor="username" className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="username" req/>
                         </div>
                      <label htmlFor="userid" className="col-sm-4 col-form-label">Id</label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="userid" required/>
                        </div>
                       <label htmlFor="password" className="col-sm-7 col-form-label">Enter password</label>
                        <div className="col-sm-12">
                          <input type="password" className="form-control" id="password" required/>
                        </div>
                         <label htmlFor="email" className="col-sm-7 col-form-label">Email</label>
                        <div className="col-sm-12">
                          <input type="email" className="form-control" id="email" required/>
                        </div>
                         <label htmlFor="dateofbirth" className="col-sm-7 col-form-label">Date of birth</label>
                        <div className="col-sm-12">
                          <input type='date' className="form-control" id="date of birth" required/>
                        </div>
                    </div>
                    <button type="submit" className=" btn btn-light  container mb-4 " style={{border:'2px solid grey'}}>Submit</button>
                  </form>
              </div>
      </div>
    </div>
    </>
  )
}

export default NewRegistration
