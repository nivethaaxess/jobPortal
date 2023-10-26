import React from 'react'


const Employer_profile = () => {
  return (
    <div>
        <div className="container">
        <p className="text-center justify-content-center display-6">Employer Profile</p>
        <div className="container my-5 justify-content-center">
            <div className="card">
                <div className="card-body text-center">
                    <div className="row justify-content-center">
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Candidate Name</label>
                            <input type="text" name="fname" className="form-control" placeholder="Rahul" id=""/>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Role</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Testing</option>
                                <option value="1">2year</option>
                                <option value="2">3year</option>
                                <option value="3">5+year</option>
                            </select>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Date</label>
                            <input type="datetime-local" name="date" className="form-control" placeholder="Budget" id=""/>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Status</label>
                            <input type="text" name="text" placeholder="waiting for HR round" className="form-control" id=""/>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">command</label>
                            <input type="text" className="form-control" placeholder="Review" name="Experiance"/>
                        </div>
                        
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Candidate Name</label>
                            <input type="text" name="fname" className="form-control" placeholder="krishna" id=""/>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Role</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Testing</option>
                                <option value="1">2year</option>
                                <option value="2">3year</option>
                                <option value="3">5+year</option>
                            </select>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Date</label>
                            <input type="datetime-local" name="date" className="form-control" placeholder="Budget" id=""/>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Status</label>
                            <input type="text" name="closed" placeholder="L1 Completed" id=""/>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">command</label>
                            <input type="text" className="form-control" placeholder="Review" name="Experiance"/>
                        </div>
                        <div>
                            <button className="btn btn-primary mt-3">Submit</button>
                        </div>
                    </div>

                     <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Availability</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>immediate</option>
                                <option value="1">Banglore</option>
                                <option value="2">Hyderabad</option>
                                <option value="3">Triuvandaran</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Location</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>chennai</option>
                                <option value="1">Banglore</option>
                                <option value="2">Hyderabad</option>
                                <option value="3">Triuvandaran</option>
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Name of roles</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Devops</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">Devops</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">No of openings </label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>3 </option>
                                <option value="1">2year</option>
                                <option value="2">3year</option>
                                <option value="3">5+year</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Budget</label>
                            <input type="number" name="number" className="form-control" placeholder="Budget" id=""/>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Experiance</label>
                            <input type="number" className="form-control" placeholder="3+" name="Experiance"/>
                        </div>

                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Availability</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>immediate</option>
                                <option value="1">Banglore</option>
                                <option value="2">Hyderabad</option>
                                <option value="3">Triuvandaran</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Location</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>chennai</option>
                                <option value="1">Banglore</option>
                                <option value="2">Hyderabad</option>
                                <option value="3">Triuvandaran</option>
                            </select>
                        </div> 
                </div>
            </div>
        </div>
    </div> 
    </div>
  )
}

export default Employer_profile