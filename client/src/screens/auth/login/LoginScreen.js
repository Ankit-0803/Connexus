// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import ApiConnector from "../../../api/apiConnector";
// import ApiEndpoints from "../../../api/apiEndpoints";
// import AppPaths from "../../../lib/appPaths";
// import CookieUtil from "../../../util/cookieUtil";
// import "../authStyle.css";

// const LoginScreen = ({ location }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (loginData) => {
//     const successLoginData = await ApiConnector.sendPostRequest(
//       ApiEndpoints.LOGIN_URL,
//       JSON.stringify(loginData),
//       false,
//       false
//     );
//     if (successLoginData) {
//       Object.keys(successLoginData).forEach((key) => {
//         CookieUtil.setCookie(key, successLoginData[key]);
//       });
//       window.location.href = AppPaths.FEED;
//     }
//   };

//   const getLoginMessage = () => {
//     if (
//       location &&
//       location.state &&
//       location.state.redirectFrom === AppPaths.SIGN_UP
//     ) {
//       return (
//         <div id="loginMessage">
//           Your account has been created successfully. Please login.
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div id="authFormContainer">
//       <div id="authForm">
//         {getLoginMessage()}
//         <h2 id="authTitle">Login</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="authFieldContainer">
//             <input
//               className="authField"
//               type="text"
//               placeholder="username"
//               {...register("username", { required: true })}
//             />
//             {errors.username && (
//               <p className="requiredFieldError">This field is required</p>
//             )}
//           </div>
//           <div className="authFieldContainer">
//             <input
//               className="authField"
//               type="password"
//               placeholder="Password"
//               {...register("password", { required: true })}
//             />
//             {errors.password && (
//               <p className="requiredFieldError">This field is required</p>
//             )}
//           </div>
//           <br />
//           <button className="btn btn-outline-warning btn-block" type="submit">
//             Login
//           </button>
//         </form>
//         <p id="authFormFooter">
//           Don't have any account! <Link to="/signup">Click here</Link> to
//           singup.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginScreen;


import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ApiConnector from "../../../api/apiConnector";
import ApiEndpoints from "../../../api/apiEndpoints";
import AppPaths from "../../../lib/appPaths";
import CookieUtil from "../../../util/cookieUtil";
import "../authStyle.css";

const LoginScreen = ({ location }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (loginData) => {
    const successLoginData = await ApiConnector.sendPostRequest(
      ApiEndpoints.LOGIN_URL,
      JSON.stringify(loginData),
      false,
      false
    );
    if (successLoginData) {
      Object.keys(successLoginData).forEach((key) => {
        CookieUtil.setCookie(key, successLoginData[key]);
      });
      window.location.href = AppPaths.FEED;
    }
  };

  const getLoginMessage = () => {
    if (
      location &&
      location.state &&
      location.state.redirectFrom === AppPaths.SIGN_UP
    ) {
      return (
        <div className="login-message success">
          <span className="login-message-dot" />
          <span>Your account has been created successfully. Please login.</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="authFormContainer" className="cx-auth-page">
      {/* Background gradient / blobs */}
      <div className="cx-auth-bg-gradient" />
      <div className="cx-auth-bg-blur cx-auth-bg-blur-left" />
      <div className="cx-auth-bg-blur cx-auth-bg-blur-right" />

      <div id="authForm" className="cx-auth-card">
        {/* Brand header */}
        <div className="cx-auth-header">
          <div className="cx-logo-circle">
            <span className="cx-logo-dot cx-logo-dot-1" />
            <span className="cx-logo-dot cx-logo-dot-2" />
            <span className="cx-logo-dot cx-logo-dot-3" />
          </div>
          <div className="cx-brand-text">
            <h1 className="cx-brand-title">Connexus</h1>
            <p className="cx-brand-subtitle">
              Find your people. Build your space.
            </p>
          </div>
        </div>

        {getLoginMessage()}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="cx-auth-form">
          {/* <h2 className="cx-auth-title">Welcome back </h2> */}
          {/* <p className="cx-auth-subtitle">
            Sign in to continue your conversations.
          </p> */}

          <div className="authFieldContainer cx-field-group">
            <label className="cx-input-label" htmlFor="username">
              Username
            </label>
            <div className="cx-input-wrapper">
              <span className="cx-input-icon">
                <i className="bi bi-person" />
              </span>
              <input
                id="username"
                className="authField cx-input"
                type="text"
                placeholder="Enter your username"
                {...register("username", { required: true })}
              />
            </div>
            {errors.username && (
              <p className="requiredFieldError">Username is required</p>
            )}
          </div>

          <div className="authFieldContainer cx-field-group">
            <label className="cx-input-label" htmlFor="password">
              Password
            </label>
            <div className="cx-input-wrapper">
              <span className="cx-input-icon">
                <i className="bi bi-lock" />
              </span>
              <input
                id="password"
                className="authField cx-input"
                type="password"
                placeholder="••••••••"
                {...register("password", { required: true })}
              />
            </div>
            {errors.password && (
              <p className="requiredFieldError">Password is required</p>
            )}
          </div>

          <div className="cx-form-footer">
            <button
              className="btn btn-outline-warning btn-block cx-primary-btn"
              type="submit"
            >
              Continue to Connexus
            </button>
          </div>
        </form>

        {/* Bottom text */}
        <div className="cx-auth-footer">
          <p className="cx-auth-footer-text">
            New to Connexus?{" "}
            <Link to={AppPaths.SIGN_UP} className="cx-auth-link">
              Create an account
            </Link>
          </p>
          <p className="cx-auth-footer-caption">
            Built for real-time social discovery ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
