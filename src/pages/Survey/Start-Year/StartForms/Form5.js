

import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { handlePutRequest } from '../../../../services/PutTemplate';

const Form5 = ({ myData, headers, formData, handleChange, goToPrevious }) => {

    const role_Name = localStorage.getItem('role_Name')

    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        value39: Yup.mixed().required("This field is required."),
        value40: Yup.mixed().required("This field is required."),
        value41: Yup.mixed().required("This field is required."),
        value42: Yup.mixed().required("This field is required."),
        value43: Yup.mixed().required("This field is required."),
        value44: Yup.mixed().required("This field is required."),
        value45: Yup.mixed().required("This field is required."),
        value46: Yup.mixed().required("This field is required."),
    });

    const formik = useFormik({

        validationSchema: validationSchema,
        initialValues: {
            value39: "",
            value40: "",
            value41: "",
            value42: "",
            value43: "",
            value44: "",
            value45: "",
            value46: "",
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
                key44: myData?.key44,
                value44: formik.values.value44,
                key45: myData?.key45,
                value45: formik.values.value45,
                key46: myData?.key46,
                value46: formik.values.value46,
            }

            const updatedFormData = {
                ...formData,
                form5Data: obj
            };

            handleChange(updatedFormData);

            const flattenedData = Object.keys(updatedFormData).reduce((result, formKey) => {
                const formData = updatedFormData[formKey];

                Object.keys(formData).forEach((key) => {
                    result[key] = formData[key];
                });

                return result;
            }, {});

            const flattenedData2 =
            {
                ...flattenedData,
                header1: headers[0]?.name,
                header2: headers[1]?.name,
                header3: headers[2]?.name,
                header4: headers[3]?.name,
                header5: headers[4]?.name,
                company: myData?.company?._id
            }
            console.log("flattenedData2 start", flattenedData2);

            const response = await dispatch(handlePutRequest(flattenedData2, `/api/userSurvey/update/${myData?._id}`, true, true));
            if (response) {
                localStorage.setItem('getSurveyListForStart', true)
            }
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

                    <div className="field col-12 md:col-6 pl-6 pr-6">
                        <label>{myData?.key39}</label>
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key39} className="p-inputtext-sm" id="value39" name="value39" value={formik.values.value39} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value39")}
                    </div>

                    <div className="field col-12 md:col-6 pl-6 pr-6">
                        <label>{myData?.key40}</label>
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key40} className="p-inputtext-sm" id="value40" name="value40" value={formik.values.value40} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value40")}
                    </div>

                    <div className="field col-12 md:col-6 pl-6 pr-6">
                        <label>{myData?.key41}</label>
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key41} id="value41" name="value41" value={formik.values.value41} onChange={formik.handleChange} type="text" className="p-inputtext-sm"></InputText>
                        {getFormErrorMessage("value41")}
                    </div>

                    <div className="field col-12 md:col-6 pl-6 pr-6">
                        <label>{myData?.key42}</label>
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key42} id="value42" name="value42" value={formik.values.value42} onChange={formik.handleChange} className="p-inputtext-sm"></InputText>
                        {getFormErrorMessage("value42")}
                    </div>

                    <div className="field col-12 md:col-6 pl-6 pr-6">
                        <label>{myData?.key43}</label>
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key43} className="p-inputtext-sm" id="value43" name="value43" value={formik.values.value43} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value43")}
                    </div>

                    <div className="field col-12 md:col-6 pl-6 pr-6">
                        <label>{myData?.key44}</label>
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key44} className="p-inputtext-sm" id="value44" name="value44" value={formik.values.value44} onChange={formik.handleChange} type="text" />
                        {getFormErrorMessage("value44")}
                    </div>

                    <div className="field col-12 md:col-6 pl-6 pr-6">
                        <label>{myData?.key45}</label>
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key45} id="value45" name="value45" value={formik.values.value45} onChange={formik.handleChange} type="text" className="p-inputtext-sm"></InputText>
                        {getFormErrorMessage("value45")}
                    </div>

                    <div className="field col-12 md:col-6 pl-6 pr-6">
                        <label>{myData?.key46}</label>
                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key46} id="value46" name="value46" value={formik.values.value46} onChange={formik.handleChange} className="p-inputtext-sm"></InputText>
                        {getFormErrorMessage("value46")}
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

export default Form5
