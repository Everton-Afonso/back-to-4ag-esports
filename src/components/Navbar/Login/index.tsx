import SingUp from "../../../assets/svg/sing_up.svg";

import "./index.scss";

const Login = () => {
  return (
    <section className="login_container">
      <div className="login">
        <button>Log In</button>
      </div>

      <div className="sing_up">
        <button>
          <img src={SingUp} alt="Sing Up" /> Sing Up
        </button>
      </div>
    </section>
  );
};

export default Login;
