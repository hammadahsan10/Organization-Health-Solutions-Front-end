

import { InputText } from 'primereact/inputtext'
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';

const Form3 = ({myData, formData, handleChange, goToPrevious }) => {

    const role_Name = localStorage.getItem('role_Name')

    const validationSchema = Yup.object().shape({
        value29: Yup.mixed().required("This field is required."),
        value30: Yup.mixed().required("This field is required."),
        value31: Yup.mixed().required("This field is required."),
        value32: Yup.mixed().required("This field is required."),
        value33: Yup.mixed().required("This field is required."),
    });

    const formik = useFormik({

       // validationSchema: validationSchema,
        initialValues: {
            value29: "",
            value30: "",
            value31: "",
            value32: "",
            value33: "",
        },

        onSubmit: async (data) => {

            const obj = {
                key29: myData?.key29,
                value29: formik.values.value29,
                key30: myData?.key30,
                value30: formik.values.value30,
                key31: myData?.key31,
                value31: formik.values.value31,
                key32: myData?.key32,
                value32: formik.values.value32,
                key33: myData?.key33,
                value33: formik.values.value33,
            }

            handleChange({
                ...formData,
                form3Data: obj
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
                <h6 style={{color:"black", fontWeight:"bold"}} className='ml-6'> Add Your Growth Goals</h6>
                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false}  placeholder={myData?.key29} className="p-inputtext-sm" id="value29" name="value29" value={formik.values.value29} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value29")}
                    </div>
                    
                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key30} className="p-inputtext-sm" id="value30" name="value30" value={formik.values.value30} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value30")}
                    </div>
                    
                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key31} className="p-inputtext-sm" id="value31" name="value31" value={formik.values.value31} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value31")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key32} className="p-inputtext-sm" id="value32" name="value32" value={formik.values.value32} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value32")}
                    </div>
                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key33} className="p-inputtext-sm" id="value33" name="value33" value={formik.values.value33} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value33")}
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

export default Form3
