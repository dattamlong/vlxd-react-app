import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { Eye } from "react-bootstrap-icons";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="wrapper">
      <Container>
        <div className="row justify-content-around">
          <form className="col-md-5 bg-light p-3 my-3">
            <h1 className="text-center h3 py-3 text-uppercase font-weight-bold">
              Register
            </h1>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                required
                placeholder="firstname"
              />
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                required
                placeholder="lastname"
              />
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                required
                placeholder="username"
              />
            </div>
            <div className="form-group my-3">
              <input
                type="tel"
                className="form-control"
                required
                placeholder="phone number"
              />
            </div>
            <div className="form-group has-feedback my-3">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                required
                placeholder="password"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control"
                required
                placeholder="retypepassword"
              />
            </div>
            <input
              type="button"
              value="upload avatar"
              className="btn-secondary btn btn-block my-3"
            />
            <input
              type="submit"
              value="SUBMIT"
              className="btn-primary btn d-block mt-3 w-100"
            />
            <input
              type="submit"
              value="SIGN IN"
              className="btn-primary btn d-block mt-3 w-100"
            />
          </form>
        </div>
      </Container>
    </div>
  );
}
export default Register;
