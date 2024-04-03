

import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';

const Form5 = ({ myData, formData, handleChange, goToPrevious }) => {

    const role_Name = localStorage.getItem('role_Name')

    const validationSchema = Yup.object().shape({

        u_value1: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_value2: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_value3: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_value4: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_value5: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_value6: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_value7: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_value8: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_value9: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_value10: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,

        u_secondvalue1: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
        u_secondvalue2: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
        u_secondvalue3: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
        u_secondvalue4: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
        u_secondvalue5: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
        u_secondvalue6: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
        u_secondvalue7: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
        u_secondvalue8: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
        u_secondvalue9: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
        u_secondvalue10: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,

        u_thirdvalue1: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_thirdvalue2: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_thirdvalue3: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_thirdvalue4: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_thirdvalue5: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_thirdvalue6: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_thirdvalue7: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_thirdvalue8: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_thirdvalue9: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
        u_thirdvalue10: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,


    });

    const formik = useFormik({

        validationSchema: validationSchema,
        initialValues: {
            u_value1: "",
            u_value2: "",
            u_value3: "",
            u_value4: "",
            u_value5: "",
            u_value6: "",
            u_value7: "",
            u_value8: "",
            u_value9: "",
            u_value10: "",

            u_secondvalue1: "",
            u_secondvalue2: "",
            u_secondvalue3: "",
            u_secondvalue4: "",
            u_secondvalue5: "",
            u_secondvalue6: "",
            u_secondvalue7: "",
            u_secondvalue8: "",
            u_secondvalue9: "",
            u_secondvalue10: "",

            u_thirdvalue1: "",
            u_thirdvalue2: "",
            u_thirdvalue3: "",
            u_thirdvalue4: "",
            u_thirdvalue5: "",
            u_thirdvalue6: "",
            u_thirdvalue7: "",
            u_thirdvalue8: "",
            u_thirdvalue9: "",
            u_thirdvalue10: "",

        },

        onSubmit: async () => {

            const obj = {

                key1: myData?.key1,
                u_value1: formik.values.u_value1,
                u_secondvalue1: formik.values.u_secondvalue1,
                u_thirdvalue1: formik.values.u_thirdvalue1,

                key2: myData?.key2,
                u_value2: formik.values.u_value2,
                u_secondvalue2: formik.values.u_secondvalue2,
                u_thirdvalue2: formik.values.u_thirdvalue2,

                key3: myData?.key3,
                u_value3: formik.values.u_value3,
                u_secondvalue3: formik.values.u_secondvalue3,
                u_thirdvalue3: formik.values.u_thirdvalue3,

                key4: myData?.key4,
                u_value4: formik.values.u_value4,
                u_secondvalue4: formik.values.u_secondvalue4,
                u_thirdvalue4: formik.values.u_thirdvalue4,

                key5: myData?.key5,
                u_value5: formik.values.u_value5,
                u_secondvalue5: formik.values.u_secondvalue5,
                u_thirdvalue5: formik.values.u_thirdvalue5,

                key6: myData?.key6,
                u_value6: formik.values.u_value6,
                u_secondvalue6: formik.values.u_secondvalue6,
                u_thirdvalue6: formik.values.u_thirdvalue6,

                key7: myData?.key7,
                u_value7: formik.values.u_value7,
                u_secondvalue7: formik.values.u_secondvalue7,
                u_thirdvalue7: formik.values.u_thirdvalue7,

                key8: myData?.key8,
                u_value8: formik.values.u_value8,
                u_secondvalue8: formik.values.u_secondvalue8,
                u_thirdvalue8: formik.values.u_thirdvalue8,

                key9: myData?.key9,
                u_value9: formik.values.u_value9,
                u_secondvalue9: formik.values.u_secondvalue9,
                u_thirdvalue9: formik.values.u_thirdvalue9,

                key10: myData?.key10,
                u_value10: formik.values.u_value10,
                u_secondvalue10: formik.values.u_secondvalue10,
                u_thirdvalue10: formik.values.u_thirdvalue10,

            }

            handleChange({
                ...formData,
                form7Data: obj
            })

        },
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    useEffect(() => {
        if (role_Name === "Manager" || role_Name === "Admin" || role_Name === "Individual") {
            const formikKeys = Object.keys(formik.values);
            const propertyNames = Object.keys(myData)
                .filter(key => formikKeys.includes(key));

            if (propertyNames) {
                propertyNames.forEach(key => {
                    formik.setFieldValue(key, myData[key]);
                });
            }
        }
    }, [role_Name]);

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid formgrid grid pl-5 pr-5">

                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }}>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key1}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key1} className="p-inputtext-sm" id="u_thirdvalue1" name="u_thirdvalue1" value={formik.values.u_thirdvalue1} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue1")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value1' name='u_value1' value={formik.values.u_value1} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value1")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue1' name='u_secondvalue1' value={formik.values.u_secondvalue1} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue1")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row mt-6'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key2}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key2} className="p-inputtext-sm" id="u_thirdvalue2" name="u_thirdvalue2" value={formik.values.u_thirdvalue2} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue2")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value2' name='u_value2' value={formik.values.u_value2} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value2")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue2' name='u_secondvalue2' value={formik.values.u_secondvalue2} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue2")}
                            </div>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-6'>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key3}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key3} className="p-inputtext-sm" id="u_thirdvalue3" name="u_thirdvalue3" value={formik.values.u_thirdvalue3} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue3")}
                            </div>
                            <div className="field col-22 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value3' name='u_value3' value={formik.values.u_value3} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value3")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue3' name='u_secondvalue3' value={formik.values.u_secondvalue3} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue3")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row mt-6'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key4}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key4} className="p-inputtext-sm" id="u_thirdvalue4" name="u_thirdvalue4" value={formik.values.u_thirdvalue4} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue4")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value4' name='u_value4' value={formik.values.u_value4} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value4")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue4' name='u_secondvalue4' value={formik.values.u_secondvalue4} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue4")}
                            </div>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-6'>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key5}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key5} className="p-inputtext-sm" id="u_thirdvalue5" name="u_thirdvalue5" value={formik.values.u_thirdvalue5} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue5")}
                            </div>
                            <div className="field col-22 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value5' name='u_value5' value={formik.values.u_value5} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value5")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue5' name='u_secondvalue5' value={formik.values.u_secondvalue5} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue5")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row mt-6'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key6}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key6} className="p-inputtext-sm" id="u_thirdvalue6" name="u_thirdvalue6" value={formik.values.u_thirdvalue6} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue6")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value6' name='u_value6' value={formik.values.u_value6} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value6")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue6' name='u_secondvalue6' value={formik.values.u_secondvalue6} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue6")}
                            </div>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-6'>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key7}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key7} className="p-inputtext-sm" id="u_thirdvalue7" name="u_thirdvalue7" value={formik.values.u_thirdvalue7} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue7")}
                            </div>
                            <div className="field col-22 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value7' name='u_value7' value={formik.values.u_value7} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value3")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue7' name='u_secondvalue7' value={formik.values.u_secondvalue7} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue7")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row mt-6'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key8}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key8} className="p-inputtext-sm" id="u_thirdvalue8" name="u_thirdvalue8" value={formik.values.u_thirdvalue8} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue8")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value8' name='u_value8' value={formik.values.u_value8} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value8")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue8' name='u_secondvalue8' value={formik.values.u_secondvalue8} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue8")}
                            </div>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-6'>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key9}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key9} className="p-inputtext-sm" id="u_thirdvalue9" name="u_thirdvalue9" value={formik.values.u_thirdvalue9} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue9")}
                            </div>
                            <div className="field col-22 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value9' name='u_value9' value={formik.values.u_value9} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value9")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue9' name='u_secondvalue9' value={formik.values.u_secondvalue9} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue9")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row mt-6'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <label style={{ fontWeight: "bold" }}>{myData?.u_key10}</label>
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.u_key10} className="p-inputtext-sm" id="u_thirdvalue10" name="u_thirdvalue10" value={formik.values.u_thirdvalue10} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("u_thirdvalue10")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='u_value10' name='u_value10' value={formik.values.u_value10} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("u_value10")}
                                <span className='flex flex-row mt-3'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='u_secondvalue10' name='u_secondvalue10' value={formik.values.u_secondvalue10} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("u_secondvalue10")}
                            </div>
                        </div>
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

export default Form5
