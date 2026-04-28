import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { SLIDE3 } from "../../../constants/images";
import "./Register.css";
import useRegister from "./useRegister";
import { Controller } from "react-hook-form";

const Register = () => {
  const {
    onRegister,
    control,
    errors,
    usernameRef,
    passwordRef,
    confirmPasswordRef,
  } = useRegister();

  return (
    <Container fluid className="register-page">
      <div className="register-card shadow">
        <Row className="g-0">
          {/* Cột hình ảnh: Chiếm 50% trên máy tính, ẩn trên điện thoại nếu cần */}
          <Col md={6} className="d-none d-md-block">
            <div className="image-wrapper">
              <Image src={SLIDE3} alt="register-image" className="side-image" />
            </div>
          </Col>

          {/* Cột Form */}
          <Col xs={12} md={6} className="form-column p-4 p-sm-5 p-md-5">
            <div className="form-container">
              <h5 id="logo">Vegefoods</h5>
              <h2 className="welcome-text">Hello, Welcome to us</h2>
              <p className="sub-text text-start">Create a new account to us</p>

              {/* Username Input */}
              <div className="input-field-group">
                <Controller
                  control={control}
                  name="username"
                  render={({ field: { onBlur, onChange, value } }) => (
                    <div className="input-wrapper">
                      <input
                        ref={usernameRef}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={`input-register ${errors.username ? "is-invalid" : ""}`}
                        type="text"
                        placeholder="Please enter your email"
                      />
                      {errors.username && <span className="error-icon">!</span>}
                    </div>
                  )}
                />
                <p className="error-message">{errors.username?.message}</p>
              </div>

              {/* Password Input */}
              <div className="input-field-group">
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onBlur, onChange, value } }) => (
                    <div className="input-wrapper">
                      <input
                        ref={passwordRef}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={`input-register ${errors.password ? "is-invalid" : ""}`}
                        type="password"
                        placeholder="Please enter your password"
                      />
                      {errors.password && <span className="error-icon">!</span>}
                    </div>
                  )}
                />
                <p className="error-message">{errors.password?.message}</p>
              </div>

              {/* Confirm Password Input */}
              <div className="input-field-group">
                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({ field: { onBlur, onChange, value } }) => (
                    <div className="input-wrapper">
                      <input
                        ref={confirmPasswordRef}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={`input-register ${errors.confirmPassword ? "is-invalid" : ""}`}
                        type="password"
                        placeholder="Please enter confirm your password"
                      />
                      {errors.confirmPassword && (
                        <span className="error-icon">!</span>
                      )}
                    </div>
                  )}
                />
                <p className="error-message">
                  {errors.confirmPassword?.message}
                </p>
              </div>

              <Button id="btn-register" onClick={onRegister} className="w-100">
                Register
              </Button>

              <p className="signin-text">
                Already have an account? <a href="/login">Sign In</a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
