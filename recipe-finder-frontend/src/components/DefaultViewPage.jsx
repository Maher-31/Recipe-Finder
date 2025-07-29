import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

import './DefaultViewPage.css'; 

function DefaultViewPage() {
  return (
    <div className="bg-container">
      <video autoPlay loop muted className="bg-vid">
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className="content">
        <div className="centered">
          <h2>Welcome!</h2>
          <div className="form-container">
            <div className="login-box">
              <LoginPage />
            </div>
            <div className="signup-box">
              <SignupPage />
            </div>
          </div>
          <p>If you already have an account, please login. Otherwise, sign up to get started.</p>
        </div>
      </div>
    </div>
  );
}

export default DefaultViewPage;
