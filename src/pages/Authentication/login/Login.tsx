import { Alert, Button, Col, Container, Image, Row } from "react-bootstrap";
import { SLIDE3 } from "../../../constants/images";
import "./Login.css";
import useLogin from "./useLogin";
import { Controller } from "react-hook-form";

const Login = () => {
  const {
    isShow,
    setIsShow,
    onLogin,
    control,
    errors,
    usernameRef,
    passwordRef,
    contentAlert,
    variantAlert,
  } = useLogin();

  return (
    <Container fluid className="login-page">
      <div className="register-card shadow">
        <Row className="g-0">
          {/* Cột hình ảnh: Chiếm 50% trên máy tính, ẩn trên điện thoại nếu cần */}
          <Col md={6} className="d-none d-md-block">
            <div className="image-wrapper">
              <Image src={SLIDE3} alt="login-image" className="side-image" />
            </div>
          </Col>

          {/* Cột Form */}
          <Col xs={12} md={6} className="form-column p-4 p-sm-5 p-md-5">
            <div className="form-container">
              <h5 id="logo">Vegefoods</h5>
              <h2 className="welcome-text">Hello, Comeback!</h2>
              <p className="sub-text text-start">Login your account to us</p>

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
                        className={`input-login ${errors.username ? "is-invalid" : ""}`}
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
                        className={`input-login ${errors.password ? "is-invalid" : ""}`}
                        type="password"
                        placeholder="Please enter your password"
                      />
                      {errors.password && <span className="error-icon">!</span>}
                    </div>
                  )}
                />
                <p className="error-message">{errors.password?.message}</p>
              </div>

              <Button id="btn-login" onClick={onLogin} className="w-100">
                Login
              </Button>

              <p className="register-text">
                Create new account? <a href="/register">Register</a>
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <Alert
        variant={variantAlert}
        className="alert-fixed"
        show={isShow}
        onClose={() => setIsShow(false)}
        dismissible
      >
        {contentAlert}
      </Alert>
    </Container>
  );
};

export default Login;
