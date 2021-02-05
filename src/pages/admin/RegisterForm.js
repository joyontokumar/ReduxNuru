import React, { Component } from 'react'

class RegisterForm extends Component {
    render() {
        return (
            <section className="register-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="login-form login-register-inner">
                                <h3 className="pb-3">Register Form</h3>
                                <form action="">

                                    <div className="form-group">
                                        <input type="text" name="firstname" id="" className="form-control" placeholder="First Name" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="lastname" id="" className="form-control" placeholder="Last Name" />
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="email" id="" className="form-control" placeholder="Email" />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" name="password" id="" className="form-control" placeholder="Password" />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" name="confirmpassword" id="" className="form-control" placeholder="Confirm Password" />
                                    </div>

                                    <div className="form-group">
                                        <input type="submit" value="Register" className="btn btn-primary" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default RegisterForm