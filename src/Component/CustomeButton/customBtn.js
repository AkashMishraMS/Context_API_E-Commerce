import React from "react";
import "./customBtn.scss";

const CustomBtn = ({ children, isGoogleSignIn, inverted, ...props  }) => (
    <button 
    className={`${inverted ? 'inverted':''} isGoogleSignIn custom-button`} {...props}>
        {children}
    </button>
)

export default CustomBtn