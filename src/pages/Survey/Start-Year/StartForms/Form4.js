

import { InputText } from 'primereact/inputtext'
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';

const Form4 = ({ myData, formData, handleChange, goToPrevious }) => {

    const role_Name = localStorage.getItem('role_Name')

    const validationSchema = Yup.object().shape({
        value34: Yup.mixed().required("This field is required."),
        value35: Yup.mixed().required("This field is required."),
        value36: Yup.mixed().required("This field is required."),
        value37: Yup.mixed().required("This field is required."),
        value38: Yup.mixed().required("This field is required."),
    });

    const formik = useFormik({

        //validationSchema: validationSchema,
        initialValues: {
            value34: "",
            value35: "",
            value36: "",
            value37: "",
            value38: "",
        },

        onSubmit: async (data) => {

            const obj = {
                key34: myData?.key34,
                value34: formik.values.value34,
                key35: myData?.key35,
                value35: formik.values.value35,
                key36: myData?.key36,
                value36: formik.values.value36,
                key37: myData?.key37,
                value37: formik.values.value37,
                key38: myData?.key38,
                value38: formik.values.value38,
            }

            handleChange({
                ...formData,
                form4Data: obj
            })

        },
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    useEffect(() => {
        if (role_Name == "Manager" || role_Name == "Admin" || role_Name == "Individual") {

            const propertyNames = Object.keys(myData)
                .filter(key => key.startsWith("value"));

            if (propertyNames) {
                propertyNames.forEach(key => {
                    formik.setFieldValue(key, myData[key]);
                });
            }
        }

    }, [role_Name])

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid formgrid grid pl-5 pr-5">
                <h6 style={{color:"black", fontWeight:"bold"}} className='ml-6'> Practical Opportunities For Growth</h6>
                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key34} className="p-inputtext-sm" id="value34" name="value34" value={formik.values.value34} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value34")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key35} className="p-inputtext-sm" id="value35" name="value35" value={formik.values.value35} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value35")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key36} className="p-inputtext-sm" id="value36" name="value36" value={formik.values.value36} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value36")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key37} className="p-inputtext-sm" id="value37" name="value37" value={formik.values.value37} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value37")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key38} className="p-inputtext-sm" id="value38" name="value38" value={formik.values.value38} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value38")}
                    </div>

                    <div className='col-12 flex flex-row text-center mt-4 pb-2' style={{justifyContent: "center"}}>
                        <Button
                            className="View-Button w-2"
                            label="Back"
                            onClick={goToPrevious}
                            type='button'
                        />
                        <Button
                            className="Save-Button w-2 ml-2"
                            label="Next"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form4
