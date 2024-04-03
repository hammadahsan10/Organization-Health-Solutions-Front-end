

import { InputText } from 'primereact/inputtext'
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';

const Form4 = ({ myData, formData, handleChange, goToPrevious }) => {

    const role_Name = localStorage.getItem('role_Name')

    const validationSchema = Yup.object().shape({
        value39: Yup.mixed().required("This field is required."),
        value40: Yup.mixed().required("This field is required."),
        value41: Yup.mixed().required("This field is required."),
        value42: Yup.mixed().required("This field is required."),
        value43: Yup.mixed().required("This field is required."),
    });

    const formik = useFormik({

        // validationSchema: validationSchema,
        initialValues: {
            value39: "",
            value40: "",
            value41: "",
            value42: "",
            value43: "",
        },

        onSubmit: async (data) => {

            const obj = {
                key39: myData?.key39,
                value39: formik.values.value39,
                key40: myData?.key40,
                value40: formik.values.value40,
                key41: myData?.key41,
                value41: formik.values.value41,
                key42: myData?.key42,
                value42: formik.values.value42,
                key43: myData?.key43,
                value43: formik.values.value43,
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
            const valuePropertyNames = Object.keys(myData)
                .filter(key => key.startsWith("value"));

            valuePropertyNames.forEach(key => {
                formik.setFieldValue(key, myData[key]);
            });

            const dupValuePropertyNames = valuePropertyNames.map(key => `dup${key}`);
            dupValuePropertyNames.forEach(key => {
                formik.setFieldValue(key, myData[key]);
            });
        }

    }, [role_Name])

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid formgrid grid pl-5 pr-5">
                    <h6 style={{ color: "black", fontWeight: "bold" }} className='ml-6'> Add Your Growth Goals</h6>
                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key39} className="p-inputtext-sm" id="value39" name="value39" value={formik.values.value39} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value39")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key40} className="p-inputtext-sm" id="value40" name="value40" value={formik.values.value40} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value40")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key41} className="p-inputtext-sm" id="value41" name="value41" value={formik.values.value41} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value41")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key42} className="p-inputtext-sm" id="value42" name="value42" value={formik.values.value42} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value42")}
                    </div>

                    <div className="field col-12 md:col-12 pl-6 pr-6">
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key43} className="p-inputtext-sm" id="value43" name="value43" value={formik.values.value43} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value43")}
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

export default Form4
