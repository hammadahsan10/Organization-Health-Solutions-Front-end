

import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';

const Form1 = ({ myData, formData, handleChange, goToPrevious  }) => {

    const role_Name = localStorage.getItem('role_Name')

    const validationSchema = Yup.object().shape({
        value1: myData?.key1 !== "" ? Yup.mixed().required("This field is required.") : null,
        value2: myData?.key2 !== "" ? Yup.mixed().required("This field is required.") : null,
        value3: myData?.key3 !== "" ? Yup.mixed().required("This field is required.") : null,
        value4: myData?.key4 !== "" ? Yup.mixed().required("This field is required.") : null,
        value5: myData?.key5 !== "" ? Yup.mixed().required("This field is required.") : null,
        value6: myData?.key6 !== "" ? Yup.mixed().required("This field is required.") : null,
        value7: myData?.key7 !== "" ? Yup.mixed().required("This field is required.") : null,
        value8: myData?.key8 !== "" ? Yup.mixed().required("This field is required.") : null,
    });

    const formik = useFormik({

        validationSchema: validationSchema,
        initialValues: {
            value1: "",
            value2: "",
            value3: "",
            value4: "",
            value5: "",
            value6: "",
            value7: "",
            value8: "",
        },

        onSubmit: async (data) => {

            const obj = {
                key1: myData?.key1,
                value1: formik.values.value1,
                key2: myData?.key2,
                value2: formik.values.value2,
                key3: myData?.key3,
                value3: formik.values.value3,
                key4: myData?.key4,
                value4: formik.values.value4,
                key5: myData?.key5,
                value5: formik.values.value5,
                key6: myData?.key6,
                value6: formik.values.value6,
                key7: myData?.key7,
                value7: formik.values.value7,
                key8: myData?.key8,
                value8: formik.values.value8,
            }

            handleChange({
                ...formData,
                form1Data: obj
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

    const strengths = [
        { name: '5' },
        { name: '10' },
    ]

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid formgrid grid pl-5 pr-5">

                    {myData?.key1 !== "" ?
                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <label>{myData?.key1}</label>
                            <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key1} className="p-inputtext-sm" id="value1" name="value1" value={formik.values.value1} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("value1")}
                        </div>
                        :
                        null}

                    {myData?.key2 !== "" ?
                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <label>{myData?.key2}</label>
                            <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key2} className="p-inputtext-sm" id="value2" name="value2" value={formik.values.value2} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("value2")}
                        </div>
                        :
                        null}


                    {myData?.key3 !== "" ?
                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <label>{myData?.key3}</label>
                            <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key3} id="value3" name="value3" value={formik.values.value3} onChange={formik.handleChange} type="text" className="p-inputtext-sm"></InputText>
                            {getFormErrorMessage("value3")}
                        </div>
                        :
                        null}

                    {myData?.key4 !== "" ?
                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <label>{myData?.key4}</label>
                            <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key4} id="value4" name="value4" value={formik.values.value4} onChange={formik.handleChange} className="p-inputtext-sm"></InputText>
                            {getFormErrorMessage("value4")}
                        </div>
                        :
                        null}

                    {myData?.key5 !== "" ?
                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <label>{myData?.key5}</label>
                            <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key5} className="p-inputtext-sm" id="value5" name="value5" value={formik.values.value5} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("value5")}
                        </div>
                        :
                        null}

                    {myData?.key6 !== "" ?
                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <label>{myData?.key6}</label>
                            <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key6} className="p-inputtext-sm" id="value6" name="value6" value={formik.values.value6} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("value6")}
                        </div>
                        :
                        null}

                    {myData?.key7 !== "" ?
                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <label>{myData?.key7}</label>
                            <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key7} id="value7" name="value7" value={formik.values.value7} onChange={formik.handleChange} type="text" className="p-inputtext-sm"></InputText>
                            {getFormErrorMessage("value7")}
                        </div>
                        :
                        null}

                    {myData?.key8 !== "" ?
                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <label>{myData?.key8}</label>
                            <Dropdown options={strengths} optionLabel='name' optionValue='name' disabled={role_Name == 'Manager' ? true : false} placeholder='--Select--' id="value8" name="value8" value={formik.values.value8} onChange={formik.handleChange} className="p-inputtext-sm"></Dropdown>
                            {getFormErrorMessage("value8")}
                        </div>
                        :
                        null}

                    <div className='col-12 text-center mt-2 pb-2'>
                        <Button
                            className="Save-Button w-3 ml-2"
                            label="Next"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form1
