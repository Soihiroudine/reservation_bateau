import React from "react";
import { useState } from "react";
import "../css/inputPassword.css";
import openEye from "../assets/eye_open.png";
import closedEye from "../assets/eye_close.png";

const InputPassword = ({ classDiv, label, name, value, idInput, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={classDiv}>
            <label htmlFor={name}>{label}</label>
            <div className="inputPassword">
                <input
                    type={showPassword ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={onChange}
                    id={idInput}
                    placeholder="mot de passe"
                    required
                />
                <img src={showPassword ? openEye : closedEye} alt="eye" onClick={togglePasswordVisibility} className="eyeIcon" />

                {/* <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? "Hide" : "Show"}
      </button> */}
            </div>
        </div>
    );
}

export default InputPassword;