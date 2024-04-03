

import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";
import { Badge } from 'primereact/badge';
import { InputTextarea } from 'primereact/inputtextarea';

const Form2 = ({ myData, formData, handleChange, goToPrevious }) => {

    const role_Name = localStorage.getItem('role_Name')

    let schemaFields = {
        value9: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        value10: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,
        value11: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        value12: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,
        value13: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        value14: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,
        value15: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        value16: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,
        value17: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        value18: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,

        dupvalue9: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        dupvalue10: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        dupvalue11: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        dupvalue12: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        dupvalue13: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        dupvalue14: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        dupvalue15: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        dupvalue16: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        dupvalue17: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        dupvalue18: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
    };

    if (formData?.form1Data.value8 === '10') {
        schemaFields = {
            ...schemaFields,
            value19: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            value20: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,
            value21: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            value22: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,
            value23: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            value24: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,
            value25: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            value26: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,
            value27: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            value28: role_Name === 'Admin' ? Yup.mixed().required("This field is required.") : null,

            dupvalue19: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            dupvalue20: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            dupvalue21: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            dupvalue22: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            dupvalue23: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            dupvalue24: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            dupvalue25: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            dupvalue26: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            dupvalue27: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
            dupvalue28: role_Name === 'Individual' ? Yup.mixed().required("This field is required.") : null,
        };
    }

    const validationSchema = Yup.object().shape(schemaFields);
    const formik = useFormik({

        validationSchema: validationSchema,
        initialValues: {
            value9: "",
            value10: "",
            value11: "",
            value12: "",
            value13: "",
            value14: "",
            value15: "",
            value16: "",
            value17: "",
            value18: "",
            value19: "",
            value20: "",
            value21: "",
            value22: "",
            value23: "",
            value24: "",
            value25: "",
            value26: "",
            value27: "",
            value28: "",

            dupvalue9: "",
            dupvalue10: "",
            dupvalue11: "",
            dupvalue12: "",
            dupvalue13: "",
            dupvalue14: "",
            dupvalue15: "",
            dupvalue16: "",
            dupvalue17: "",
            dupvalue18: "",
            dupvalue19: "",
            dupvalue20: "",
            dupvalue21: "",
            dupvalue22: "",
            dupvalue23: "",
            dupvalue24: "",
            dupvalue25: "",
            dupvalue26: "",
            dupvalue27: "",
            dupvalue28: "",
        },

        onSubmit: async (data) => {

            const obj = {
                key9: myData?.key9,
                value9: formik.values.value9,
                dupvalue9: formik.values.dupvalue9,
                key10: myData?.key10,
                value10: formik.values.value10,
                dupvalue10: formik.values.dupvalue10,
                key11: myData?.key11,
                value11: formik.values.value11,
                dupvalue11: formik.values.dupvalue11,
                key12: myData?.key12,
                value12: formik.values.value12,
                dupvalue12: formik.values.dupvalue12,
                key13: myData?.key13,
                value13: formik.values.value13,
                dupvalue13: formik.values.dupvalue13,
                key14: myData?.key14,
                value14: formik.values.value14,
                dupvalue14: formik.values.dupvalue14,
                key15: myData?.key15,
                value15: formik.values.value15,
                dupvalue15: formik.values.dupvalue15,
                key16: myData?.key16,
                value16: formik.values.value16,
                dupvalue16: formik.values.dupvalue16,
                key17: myData?.key17,
                value17: formik.values.value17,
                dupvalue17: formik.values.dupvalue17,
                key18: myData?.key18,
                value18: formik.values.value18,
                dupvalue18: formik.values.dupvalue18,
            }

            const obj2 = {
                key9: myData?.key9,
                value9: formik.values.value9,
                dupvalue9: formik.values.dupvalue9,
                key10: myData?.key10,
                value10: formik.values.value10,
                dupvalue10: formik.values.dupvalue10,
                key11: myData?.key11,
                value11: formik.values.value11,
                dupvalue11: formik.values.dupvalue11,
                key12: myData?.key12,
                value12: formik.values.value12,
                dupvalue12: formik.values.dupvalue12,
                key13: myData?.key13,
                value13: formik.values.value13,
                dupvalue13: formik.values.dupvalue13,
                key14: myData?.key14,
                value14: formik.values.value14,
                dupvalue14: formik.values.dupvalue14,
                key15: myData?.key15,
                value15: formik.values.value15,
                dupvalue15: formik.values.dupvalue15,
                key16: myData?.key16,
                value16: formik.values.value16,
                dupvalue16: formik.values.dupvalue16,
                key17: myData?.key17,
                value17: formik.values.value17,
                dupvalue17: formik.values.dupvalue17,
                key18: myData?.key18,
                value18: formik.values.value18,
                dupvalue18: formik.values.dupvalue18,
                key19: myData?.key19,
                value19: formik.values.value19,
                dupvalue19: formik.values.dupvalue19,
                key20: myData?.key20,
                value20: formik.values.value20,
                dupvalue20: formik.values.dupvalue20,
                key21: myData?.key21,
                value21: formik.values.value21,
                dupvalue21: formik.values.dupvalue21,
                key22: myData?.key22,
                value22: formik.values.value22,
                dupvalue22: formik.values.dupvalue22,
                key23: myData?.key23,
                value23: formik.values.value23,
                dupvalue23: formik.values.dupvalue23,
                key24: myData?.key24,
                value24: formik.values.value24,
                dupvalue24: formik.values.dupvalue24,
                key25: myData?.key25,
                value25: formik.values.value25,
                dupvalue25: formik.values.dupvalue25,
                key26: myData?.key26,
                value26: formik.values.value26,
                dupvalue26: formik.values.dupvalue26,
                key27: myData?.key27,
                value27: formik.values.value27,
                dupvalue27: formik.values.dupvalue27,
                key28: myData?.key28,
                value28: formik.values.value28,
                dupvalue28: formik.values.dupvalue28,

                header1: myData?.header1,
                header2: myData?.header2,
                header3: myData?.header3,
                header4: myData?.header4,
                header5: myData?.header5,
            }

            handleChange({
                ...formData,
                form2Data: formData?.form1Data.value8 == '10' ? obj2 : obj
            })

        },
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    useEffect(() => {
        if (role_Name === "Manager" || role_Name === "Admin" || role_Name === "Individual") {

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
    }, [role_Name]);


    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid formgrid grid pl-5 pr-5">

                    {/* 1 */}
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }}>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key9} className="p-inputtext-sm" id="dupvalue9" name="dupvalue9" value={formik.values.dupvalue9} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue9")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' ? true : false} id='value9' name='value9' value={formik.values.value9} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("value9")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key10} className="p-inputtext-sm" id="dupvalue10" name="dupvalue10" value={formik.values.dupvalue10} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue10")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='value10' name='value10' value={formik.values.value10} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("value10")}
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key11} className="p-inputtext-sm" id="dupvalue11" name="dupvalue11" value={formik.values.dupvalue11} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue11")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name == 'Manager' ? true : false} id='value11' name='value11' value={formik.values.value11} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("value11")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key12} className="p-inputtext-sm" id="dupvalue12" name="dupvalue12" value={formik.values.dupvalue12} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue12")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value12' name='value12' value={formik.values.value12} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("value12")}
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key13} className="p-inputtext-sm" id="dupvalue13" name="dupvalue13" value={formik.values.dupvalue13} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue13")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name == 'Manager' ? true : false} id='value13' name='value13' value={formik.values.value13} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("value13")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key14} className="p-inputtext-sm" id="dupvalue14" name="dupvalue14" value={formik.values.dupvalue14} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue14")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value14' name='value14' value={formik.values.value14} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("value14")}
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key15} className="p-inputtext-sm" id="dupvalue15" name="dupvalue15" value={formik.values.dupvalue15} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue15")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name == 'Manager' ? true : false} id='value15' name='value15' value={formik.values.value15} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("value15")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key16} className="p-inputtext-sm" id="dupvalue16" name="dupvalue16" value={formik.values.dupvalue16} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue16")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value16' name='value16' value={formik.values.value16} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("value16")}
                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
                        <div className='col-12 flex flex-row mt-4'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key17} className="p-inputtext-sm" id="dupvalue17" name="dupvalue17" value={formik.values.dupvalue17} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue17")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name == 'Manager' ? true : false} id='value17' name='value17' value={formik.values.value17} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                </span>
                                {getFormErrorMessage("value17")}
                            </div>
                        </div>

                        <div className='col-12 flex flex-row'>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key18} className="p-inputtext-sm" id="dupvalue18" name="dupvalue18" value={formik.values.dupvalue18} onChange={formik.handleChange} type="text" />
                                {getFormErrorMessage("dupvalue18")}
                            </div>
                            <div className="field col-12 md:col-6 pl-6 pr-6">
                                <span className='flex flex-row'>
                                    <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value18' name='value18' value={formik.values.value18} onChange={formik.handleChange} cancel={false} />
                                    <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                </span>
                                {getFormErrorMessage("value18")}
                            </div>
                        </div>
                    </div>

                    {formData?.form1Data.value8 == '10'
                        ?
                        <>
                            {/* 6 */}
                            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
                                <div className='col-12 flex flex-row mt-4'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key19} className="p-inputtext-sm" id="dupvalue19" name="dupvalue19" value={formik.values.dupvalue19} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue19")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' ? true : false} id='value19' name='value19' value={formik.values.value19} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                        </span>
                                        {getFormErrorMessage("value19")}
                                    </div>
                                </div>

                                <div className='col-12 flex flex-row'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key20} className="p-inputtext-sm" id="dupvalue20" name="dupvalue20" value={formik.values.dupvalue20} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue20")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value20' name='value20' value={formik.values.value20} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                        </span>
                                        {getFormErrorMessage("value20")}
                                    </div>
                                </div>
                            </div>

                            {/* 7 */}
                            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
                                <div className='col-12 flex flex-row mt-4'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key21} className="p-inputtext-sm" id="dupvalue21" name="dupvalue21" value={formik.values.dupvalue21} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue21")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' ? true : false} id='value21' name='value21' value={formik.values.value21} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                        </span>
                                        {getFormErrorMessage("value21")}
                                    </div>
                                </div>

                                <div className='col-12 flex flex-row'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key22} className="p-inputtext-sm" id="dupvalue22" name="dupvalue22" value={formik.values.dupvalue22} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue22")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value22' name='value22' value={formik.values.value22} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                        </span>
                                        {getFormErrorMessage("value22")}
                                    </div>
                                </div>
                            </div>

                            {/* 8 */}
                            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
                                <div className='col-12 flex flex-row mt-4'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key23} className="p-inputtext-sm" id="dupvalue23" name="dupvalue23" value={formik.values.dupvalue23} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue23")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' ? true : false} id='value23' name='value23' value={formik.values.value23} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                        </span>
                                        {getFormErrorMessage("value23")}
                                    </div>
                                </div>

                                <div className='col-12 flex flex-row'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key24} className="p-inputtext-sm" id="dupvalue24" name="dupvalue24" value={formik.values.dupvalue24} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue24")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value24' name='value24' value={formik.values.value24} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                        </span>
                                        {getFormErrorMessage("value24")}
                                    </div>
                                </div>
                            </div>

                            {/* 9 */}
                            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
                                <div className='col-12 flex flex-row mt-4'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key25} className="p-inputtext-sm" id="dupvalue25" name="dupvalue25" value={formik.values.dupvalue25} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue25")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' ? true : false} id='value25' name='value25' value={formik.values.value25} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                        </span>
                                        {getFormErrorMessage("value25")}
                                    </div>
                                </div>

                                <div className='col-12 flex flex-row'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key26} className="p-inputtext-sm" id="dupvalue26" name="dupvalue26" value={formik.values.dupvalue26} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue26")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value26' name='value26' value={formik.values.value26} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                        </span>
                                        {getFormErrorMessage("value26")}
                                    </div>
                                </div>
                            </div>

                            {/* 10 */}
                            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
                                <div className='col-12 flex flex-row mt-4'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key27} className="p-inputtext-sm" id="dupvalue27" name="dupvalue27" value={formik.values.dupvalue27} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue27")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' ? true : false} id='value27' name='value27' value={formik.values.value27} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                                        </span>
                                        {getFormErrorMessage("value27")}
                                    </div>
                                </div>

                                <div className='col-12 flex flex-row'>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <InputTextarea rows={3} disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key28} className="p-inputtext-sm" id="dupvalue28" name="dupvalue28" value={formik.values.dupvalue28} onChange={formik.handleChange} type="text" />
                                        {getFormErrorMessage("dupvalue28")}
                                    </div>
                                    <div className="field col-12 md:col-6 pl-6 pr-6">
                                        <span className='flex flex-row'>
                                            <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value28' name='value28' value={formik.values.value28} onChange={formik.handleChange} cancel={false} />
                                            <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                                        </span>
                                        {getFormErrorMessage("value28")}
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        null}

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

export default Form2
