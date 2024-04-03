

import { InputText } from 'primereact/inputtext'
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';

const Form6 = ({ myData, formData, handleChange, goToPrevious }) => {

    const role_Name = localStorage.getItem('role_Name')

    const validationSchema = Yup.object().shape({
        value54: Yup.mixed().required("This field is required."),
        value55: Yup.mixed().required("This field is required."),
        value56: Yup.mixed().required("This field is required."),
        value57: Yup.mixed().required("This field is required."),
        value58: Yup.mixed().required("This field is required."),
    });

    const formik = useFormik({

        //  validationSchema: validationSchema,
        initialValues: {
            value54: "",
            value55: "",
            value56: "",
            value57: "",
            value58: "",
        },

        onSubmit: async (data) => {

            const obj = {
                key54: myData?.key54,
                value54: formik.values.value54,
                key55: myData?.key55,
                value55: formik.values.value55,
                key56: myData?.key56,
                value56: formik.values.value56,
                key57: myData?.key57,
                value57: formik.values.value57,
                key58: myData?.key58,
                value58: formik.values.value58,
            }

            handleChange({
                ...formData,
                form6Data: obj
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
                    <h6 style={{ color: "black", fontWeight: "bold" }} className='ml-6'> Practical Opportunities For Growth</h6>
                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key54} className="p-inputtext-sm" id="value54" name="value54" value={formik.values.value54} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value54")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key55} className="p-inputtext-sm" id="value55" name="value55" value={formik.values.value55} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value55")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key56} className="p-inputtext-sm" id="value56" name="value56" value={formik.values.value56} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value56")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key57} className="p-inputtext-sm" id="value57" name="value57" value={formik.values.value57} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value57")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key58} className="p-inputtext-sm" id="value58" name="value58" value={formik.values.value58} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value58")}
                    </div>

                    <div className='col-12 flex flex-row text-center mt-4 pb-2' style={{ justifyContent: "center" }}>
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

export default Form6
