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
        <div>
            <label htmlFor={name}>{label}</label>
            <div className={classDiv}>
                <input
                    type={showPassword ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={onChange}
                    id={idInput}
                    placeholder="mot de passe"
                    required
                />
                <img
                    src={showPassword ? openEye : closedEye}
                    alt="eye"
                    onClick={togglePasswordVisibility}
                    className="eyeIcon" />
            </div>
        </div>
    );
}

export default InputPassword;