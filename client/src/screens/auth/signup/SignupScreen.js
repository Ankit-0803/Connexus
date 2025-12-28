// import React, { useRef } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import ApiConnector from "../../../api/apiConnector";
// import ApiEndpoints from "../../../api/apiEndpoints";
// import AppPaths from "../../../lib/appPaths";
// import "../authStyle.css";

// const SignupScreen = ({ history }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm();
  
//   const password = useRef({});
//   password.current = watch("password");
//   const image = watch("image");

//   const onSubmit = async (signupData) => {
//     const formData = new FormData();
//     formData.append("image", signupData.image[0]);
//     delete signupData["image"];
//     Object.keys(signupData).forEach((key) => {
//       formData.append(key, signupData[key]);
//     });
//     const successSignupData = await ApiConnector.sendPostRequest(
//       ApiEndpoints.SIGN_UP_URL,
//       formData,
//       false,
//       true
//     );
//     if (successSignupData) {
//       history.push({
//         pathname: AppPaths.LOGIN,
//         state: { redirectFrom: AppPaths.SIGN_UP },
//       });
//     }
//   };

//   return (
//     <div id="authFormContainer">
//       <div id="authForm">
//         <h2 id="authTitle">Sign Up</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="authFieldContainer">
//             <input
//               className="authField"
//               type="text"
//               placeholder="First Name"
//               {...register("first_name", { required: true })}
//             />
//             {errors.first_name && (
//               <p className="requiredFieldError">This field is required</p>
//             )}
//           </div>
//           <div className="authFieldContainer">
//             <input
//               className="authField"
//               type="text"
//               placeholder="Last Name"
//               {...register("last_name", { required: true })}
//             />
//             {errors.last_name && (
//               <p className="requiredFieldError">This field is required</p>
//             )}
//           </div>
//           <div className="authFieldContainer">
//             <input
//               className="authField"
//               type="text"
//               placeholder="Username"
//               {...register("username", { required: true })}
//             />
//             {errors.last_name && (
//               <p className="requiredFieldError">This field is required</p>
//             )}
//           </div>
//           <div className="authFieldContainer">
//             <input
//               className="authField"
//               type="email"
//               placeholder="Email"
//               {...register("email", { required: true })}
//             />
//             {errors.email && (
//               <p className="requiredFieldError">This field is required</p>
//             )}
//           </div>
//           <div className="custom-file">
//             <input
//               type="file"
//               name="image"
//               id="validatedCustomFile"
//               {...register("image", {
//                 required: true,
//               })}
//             />
//             <label className="custom-file-label" htmlFor="validatedCustomFile">
//               {image ? image[0]?.name : "Choose Image..."}
//             </label>
//             {errors.image && (
//               <p className="requiredFieldError mt-2">This field is required</p>
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
//           <div className="authFieldContainer">
//             <input
//               className="authField"
//               type="password"
//               name="passwordTwo"
//               placeholder="Confirm Password"
//               {...register("passwordTwo", {
//                 required: "This field is required",
//                 validate: (value) =>
//                   value === password.current || "The passwords doesn't match",
//               })}
//             />
//             {errors.passwordTwo && (
//               <p className="requiredFieldError">
//                 {errors.passwordTwo?.message}
//               </p>
//             )}
//           </div>
//           <br />
//           <button className="btn btn-outline-warning btn-block" type="submit">
//             Sign Up
//           </button>
//         </form>
//         <p id="authFormFooter">
//           Already have an account. <Link to="/login">Click here</Link> to login.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupScreen;



import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ApiConnector from "../../../api/apiConnector";
import ApiEndpoints from "../../../api/apiEndpoints";
import AppPaths from "../../../lib/appPaths";
import "../authStyle.css";

const SignupScreen = ({ history }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  
  const password = useRef({});
  password.current = watch("password");
  const image = watch("image");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (signupData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("image", signupData.image[0]);
      delete signupData["image"];
      Object.keys(signupData).forEach((key) => {
        formData.append(key, signupData[key]);
      });
      const successSignupData = await ApiConnector.sendPostRequest(
        ApiEndpoints.SIGN_UP_URL,
        formData,
        false,
        true
      );
      if (successSignupData) {
        history.push({
          pathname: AppPaths.LOGIN,
          state: { redirectFrom: AppPaths.SIGN_UP },
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cx-auth-page">
      {/* Animated background blurs */}
      <div className="cx-auth-bg-blur cx-auth-bg-blur-left"></div>
      <div className="cx-auth-bg-blur cx-auth-bg-blur-right"></div>

      <div className="cx-auth-card">
        {/* Brand Header */}
        <div className="cx-auth-header">
          <div className="cx-logo-circle">
            <span className="cx-logo-dot cx-logo-dot-1"></span>
            <span className="cx-logo-dot cx-logo-dot-2"></span>
            <span className="cx-logo-dot cx-logo-dot-3"></span>
          </div>
          <h1 className="cx-brand-title">Connexus</h1>
          <p className="cx-brand-subtitle">Social Discovery Platform</p>
        </div>

        {/* Form Title */}
        <h2 className="cx-auth-title">Create Account</h2>
        <p className="cx-auth-subtitle">Join our community today</p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="cx-field-group">
            <label className="cx-input-label">First Name</label>
            <div className="cx-input-wrapper">
              <svg
                className="cx-input-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                className="cx-input"
                type="text"
                placeholder="Enter your first name"
                {...register("first_name", { required: true })}
              />
            </div>
            {errors.first_name && (
              <p className="requiredFieldError">This field is required</p>
            )}
          </div>

          {/* Last Name */}
          <div className="cx-field-group">
            <label className="cx-input-label">Last Name</label>
            <div className="cx-input-wrapper">
              <svg
                className="cx-input-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                className="cx-input"
                type="text"
                placeholder="Enter your last name"
                {...register("last_name", { required: true })}
              />
            </div>
            {errors.last_name && (
              <p className="requiredFieldError">This field is required</p>
            )}
          </div>

          {/* Username */}
          <div className="cx-field-group">
            <label className="cx-input-label">Username</label>
            <div className="cx-input-wrapper">
              <svg
                className="cx-input-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
              <input
                className="cx-input"
                type="text"
                placeholder="Choose a username"
                {...register("username", { required: true })}
              />
            </div>
            {errors.username && (
              <p className="requiredFieldError">This field is required</p>
            )}
          </div>

          {/* Email */}
          <div className="cx-field-group">
            <label className="cx-input-label">Email Address</label>
            <div className="cx-input-wrapper">
              <svg
                className="cx-input-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input
                className="cx-input"
                type="email"
                placeholder="your.email@example.com"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <p className="requiredFieldError">This field is required</p>
            )}
          </div>

          {/* Profile Image Upload */}
          <div className="cx-field-group">
            <label className="cx-input-label">Profile Image</label>
            <div className="cx-file-upload-wrapper">
              <input
                type="file"
                id="profileImage"
                className="cx-file-input"
                accept="image/*"
                {...register("image", { required: true })}
              />
              <label htmlFor="profileImage" className="cx-file-label">
                <svg
                  className="cx-file-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <span className="cx-file-text">
                  {image && image[0]?.name ? image[0].name : "Choose profile image"}
                </span>
              </label>
            </div>
            {errors.image && (
              <p className="requiredFieldError">Profile image is required</p>
            )}
          </div>

          {/* Password */}
          <div className="cx-field-group">
            <label className="cx-input-label">Password</label>
            <div className="cx-input-wrapper">
              <svg
                className="cx-input-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                className="cx-input"
                type="password"
                placeholder="Create a strong password"
                {...register("password", { required: true })}
              />
            </div>
            {errors.password && (
              <p className="requiredFieldError">This field is required</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="cx-field-group">
            <label className="cx-input-label">Confirm Password</label>
            <div className="cx-input-wrapper">
              <svg
                className="cx-input-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                className="cx-input"
                type="password"
                placeholder="Confirm your password"
                {...register("passwordTwo", {
                  required: "This field is required",
                  validate: (value) =>
                    value === password.current || "The passwords don't match",
                })}
              />
            </div>
            {errors.passwordTwo && (
              <p className="requiredFieldError">
                {errors.passwordTwo?.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            className="cx-primary-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="cx-auth-footer-text">
          Already have an account?{" "}
          <Link to="/login" className="cx-auth-link">
            Sign in
          </Link>
        </p>
        <p className="cx-auth-footer-caption">
          By signing up, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;