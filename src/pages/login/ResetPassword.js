import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../assets/ohs-assets/OHS.png"
import { handlePutRequest } from "../../services/PutTemplate";

const ResetPassword = () => {

    const [saveBtnLoading, setSaveBtnLoading] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const validationSchema = Yup.object().shape({
        email: Yup.mixed().required("This field is required."),
        password: Yup.string().required("This field is required."),
        reEnterPassword: Yup.string()
            .required("This field is required.")
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    const formik = useFormik({

        validationSchema: validationSchema,
        initialValues: {
            email: "",
            password: "",
            reEnterPassword: "",
        },

        onSubmit: async (data) => {

            setSaveBtnLoading(true);
            const response = await dispatch(handlePutRequest(data, "/api/user/ForgotPassword", false, true));
            if (response?.status == 200) {

                history.push("/");
            }
            else {
                setSaveBtnLoading(false)
            }
        },
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (

        <>
            <div className="login-page-container">
                <div className="left-section">
                    <div className="imgMainLogo" />
                    <img src={logo} className="imgAppLogo" width="400px" height="400px" />
                    <div className="text-center textAppLogo" >
                        <h3 style={{ color: "white", fontWeight: "350", fontSize: "24px" }}>Maximizing your human resource potential through the science of behavior.</h3>
                    </div>
                </div>

                <div className="right-section">
                    <form onSubmit={formik.handleSubmit} className="login-form">
                        <h1 className="mb-2 text-center" style={{ color: "black", letterSpacing: "1px", fontWeight: "500" }}> Reset Password ? </h1>
                        <h5 className="mb-2 text-center" style={{ color: "gray", letterSpacing: "1px", fontWeight: "400", }}> Please enter your password and confirm password, and we'll initiate a password reset process for you. </h5>
                        <div className="login-div text-center mt-6">

                            <div className="col-12 md:col-12 pl-2 pr-2">
                                <InputText
                                    placeholder="Enter your Email"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    type="email"
                                    className="p-inputtext-sm md:col-10"
                                />
                                <span className="flex pl-7">{getFormErrorMessage("email")}</span>
                            </div>
                            <div className="col-12 md:col-12 pl-2 pr-2">
                                <InputText
                                    placeholder="Enter your Password"
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    type="password"
                                    className="p-inputtext-sm md:col-10"
                                />
                                <span className="flex pl-7"> {getFormErrorMessage("password")} </span>
                            </div>

                            <div className="col-12 md:col-12 pl-2 pr-2">
                                <InputText
                                    placeholder="Enter your Re Enter Password"
                                    id="reEnterPassword"
                                    name="reEnterPassword"
                                    value={formik.values.reEnterPassword}
                                    onChange={formik.handleChange}
                                    toggleMask
                                    type="password"
                                    className="p-inputtext-sm md:col-10"
                                />
                                <span className="flex pl-7"> {getFormErrorMessage("reEnterPassword")} </span>
                            </div>

                            <div className='col-12 text-center'>
                                <Button className="Save-Button w-6 mt-5" label="Continue" loading={saveBtnLoading} type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default ResetPassword;
