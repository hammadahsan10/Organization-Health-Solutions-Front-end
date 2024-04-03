import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { handleGetRequest } from '../../services/GetTemplate';
import { CustomerSpinner } from '../../components/CustomerSpinner';
import { handlePutRequest } from '../../services/PutTemplate';

const StartYearFields = () => {

    const location = useLocation();
    const myData = location.state?.additionalProp;

    const dispatch = useDispatch()
    const [saveBtnLoading, setSaveBtnLoading] = useState(false)
    const [viewPersonalFields1, setViewPersonalFields1] = useState(false);
    const [viewPersonalFields2, setViewPersonalFields2] = useState(false);
    const [viewPersonalFields3, setViewPersonalFields3] = useState(false);
    const [viewPersonalFields4, setViewPersonalFields4] = useState(false);
    const [viewPersonalFields5, setViewPersonalFields5] = useState(false);

    const validationSchema = Yup.object().shape({
        key1: Yup.mixed().required("This field is required."),
        key2: Yup.mixed().required("This field is required."),
        key3: Yup.mixed().required("This field is required."),
        key4: Yup.mixed().required("This field is required."),
        key5: Yup.mixed().required("This field is required."),
        key6: Yup.mixed().required("This field is required."),
        key7: Yup.mixed().required("This field is required."),
        key8: Yup.mixed().required("This field is required."),
        key9: Yup.mixed().required("This field is required."),
        key10: Yup.mixed().required("This field is required."),
        key11: Yup.mixed().required("This field is required."),
        key12: Yup.mixed().required("This field is required."),
        key13: Yup.mixed().required("This field is required."),
        key14: Yup.mixed().required("This field is required."),
        key15: Yup.mixed().required("This field is required."),
        key16: Yup.mixed().required("This field is required."),
        key17: Yup.mixed().required("This field is required."),
        key18: Yup.mixed().required("This field is required."),
        key19: Yup.mixed().required("This field is required."),
        key20: Yup.mixed().required("This field is required."),
        key21: Yup.mixed().required("This field is required."),
        key22: Yup.mixed().required("This field is required."),
        key23: Yup.mixed().required("This field is required."),
        key24: Yup.mixed().required("This field is required."),
        key25: Yup.mixed().required("This field is required."),
        key26: Yup.mixed().required("This field is required."),
        key27: Yup.mixed().required("This field is required."),
        key28: Yup.mixed().required("This field is required."),
    });

    const formik = useFormik({

        //validationSchema: validationSchema,
        initialValues: {

            //Headers
            header1: "Personal Information",
            header2: "Top Clifton Strengths",
            header3: "Goals for Growth",
            header4: "Opportunities for Growth",
            header5: "Holistic Life Goals",

            //Personal Information
            key1: "Full Name",
            key2: "Role",
            key3: "Coaches Name",
            key4: "Managers Name",
            key5: "Employment Date",
            key6: "Current AUM",
            key7: "Number of Clients",
            key8: "Top Strengths",

            // Top Strengths
            key9: "Strength 1",
            key10: "Mismanagement 1",
            key11: "Strength 2",
            key12: "Mismanagement 2",
            key13: "Strength 3",
            key14: "Mismanagement 3",
            key15: "Strength 4",
            key16: "Mismanagement 4",
            key17: "Strength 5",
            key18: "Mismanagement 5",
            key19: "Strength 6",
            key20: "Mismanagement 6",
            key21: "Strength 7",
            key22: "Mismanagement 7",
            key23: "Strength 8",
            key24: "Mismanagement 8",
            key25: "Strength 9",
            key26: "Mismanagement 9",
            key27: "Strength 10",
            key28: "Mismanagement 10",

            //Goals
            key29: "Goal 1",
            key30: "Goal 2",
            key31: "Goal 3",
            key32: "Goal 4",
            key33: "Goal 5",

            //Opportunities
            key34: "Oppo 1",
            key35: "Oppo 2",
            key36: "Oppo 3",
            key37: "Oppo 4",
            key38: "Oppo 5",

            //last 8
            key39: "Spiritual",
            key40: "Intellectual",
            key41: "Physical Health",
            key42: "Family Relationship",
            key43: "Financial Wealth",
            key44: "Social Investment",
            key45: "Rest and Restoration",
            key46: "Long Term Goals/ Career Paths",
        },

        onSubmit: async (data) => {

            setSaveBtnLoading(true);

            data["Name"] = myData?.Name;
            data["company"] = myData?.company?._id;

            const response = await dispatch(handlePutRequest(data, `/api/survey/update/${myData?._id}`, true, true));
            if (response) {
                setViewPersonalFields1(false)
                setViewPersonalFields2(false)
                setViewPersonalFields3(false)
                setViewPersonalFields4(false)
                setViewPersonalFields5(false)
                getKeysBySurveryId()
            }
            setSaveBtnLoading(false)
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const handleChevron1 = () => {
        if (viewPersonalFields1 == false) {
            setViewPersonalFields1(true)
        }
        else {

            setViewPersonalFields1(false)
        }
    }

    const handleChevron2 = () => {
        if (viewPersonalFields2 == false) {
            setViewPersonalFields2(true)
        }
        else {

            setViewPersonalFields2(false)
        }
    }

    const handleChevron3 = () => {
        if (viewPersonalFields3 == false) {
            setViewPersonalFields3(true)
        }
        else {

            setViewPersonalFields3(false)
        }
    }

    const handleChevron4 = () => {
        if (viewPersonalFields4 == false) {
            setViewPersonalFields4(true)
        }
        else {

            setViewPersonalFields4(false)
        }
    }

    const handleChevron5 = () => {
        if (viewPersonalFields5 == false) {
            setViewPersonalFields5(true)
        }
        else {

            setViewPersonalFields5(false)
        }
    }

    const getKeysBySurveryId = async () => {

        const response = await dispatch(handleGetRequest(`/api/survey/getById/${myData?._id}`, true));
        const keyData = response?.data;

        if (keyData) {
            const keysToMap = Object.keys(keyData).filter(key => key !== 'Name' && key !== "_id" && key !== '__v');
            keysToMap.forEach(key => {
                formik.setFieldValue(key, keyData[key]);
            });

            formik.setFieldValue("header1", keyData?.header1)
            formik.setFieldValue("header2", keyData?.header2)
            formik.setFieldValue("header3", keyData?.header3)
            formik.setFieldValue("header4", keyData?.header4)
            formik.setFieldValue("header5", keyData?.header5)
        }

    }
    useEffect(() => {
        if (myData) {
            getKeysBySurveryId()
        }
    }, [myData])

    return (

        <>
            {saveBtnLoading ? (
                <CustomerSpinner />
            ) : (
                null
            )}

            <div className="card flex justify-content-between">
                <h2 style={{ fontWeight: "700", color: 'black', letterSpacing: "1px" }}>{myData?.Name} - 2024</h2>
            </div>

            <br />
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div className="scroll-container card flex justify-content-between">
                        <div className="flex flex-row ml-4">
                            <InputText className="p-inputtext-sm label-style2" id="header1" name="header1" value={formik.values.header1} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("header1")}
                        </div>
                        <div className='flex justify-content-between' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="ml-4">
                                <Button
                                    style={{ border: "none", background: "transparent", color: 'gray' }}
                                    type="button"
                                    label={
                                        <>
                                            <i className={viewPersonalFields1 ? "pi pi-chevron-up" : "pi pi-chevron-down"} style={{ marginLeft: '4px' }} />
                                        </>
                                    }
                                    onClick={() => {
                                        handleChevron1();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {viewPersonalFields1 ?
                        <div className='' style={{ color: "black" }}>
                            <div className="p-fluid formgrid grid pl-5 pr-5">

                                <div className="field col-12 md:col-4 pl-6 pr-4">
                                    <div className='flex flex-row'>
                                        <InputText className="p-inputtext-sm label-style" id="key1" name="key1" value={formik.values.key1} onChange={formik.handleChange} type="text" />
                                        <i className="pi pi-pencil mt-3 mr-5" />
                                    </div>
                                    {getFormErrorMessage("key1")}
                                </div>

                                <div className="field col-12 md:col-4 pl-6 pr-4">
                                    <div className='flex flex-row'>
                                        <InputText className="p-inputtext-sm label-style" id="key2" name="key2" value={formik.values.key2} onChange={formik.handleChange} type="text" />
                                        <i className="pi pi-pencil mt-3 mr-5" />
                                    </div>
                                    {getFormErrorMessage("key2")}
                                </div>
                                <div className="field col-12 md:col-4 pl-6 pr-4">
                                    <div className='flex flex-row'>
                                        <InputText className="p-inputtext-sm label-style" id="key3" name="key3" value={formik.values.key3} onChange={formik.handleChange} type="text" />
                                        <i className="pi pi-pencil mt-3 mr-5" />
                                    </div>
                                    {getFormErrorMessage("key3")}
                                </div>
                                <div className="field col-12 md:col-4 pl-6 pr-4">
                                    <div className='flex flex-row'>
                                        <InputText className="p-inputtext-sm label-style" id="key4" name="key4" value={formik.values.key4} onChange={formik.handleChange} type="text" />
                                        <i className="pi pi-pencil mt-3 mr-5" />
                                    </div>
                                    {getFormErrorMessage("key4")}
                                </div>
                                <div className="field col-12 md:col-4 pl-6 pr-4">
                                    <div className='flex flex-row'>
                                        <InputText className="p-inputtext-sm label-style" id="key5" name="key5" value={formik.values.key5} onChange={formik.handleChange} type="text" />
                                        <i className="pi pi-pencil mt-3 mr-5" />
                                    </div>
                                    {getFormErrorMessage("key5")}
                                </div>
                                <div className="field col-12 md:col-4 pl-6 pr-4">
                                    <div className='flex flex-row'>
                                        <InputText className="p-inputtext-sm label-style" id="key6" name="key6" value={formik.values.key6} onChange={formik.handleChange} type="text" />
                                        <i className="pi pi-pencil mt-3 mr-5" />
                                    </div>
                                    {getFormErrorMessage("key6")}
                                </div>
                                <div className="field col-12 md:col-4 pl-6 pr-4">
                                    <div className='flex flex-row'>
                                        <InputText className="p-inputtext-sm label-style" id="key7" name="key7" value={formik.values.key7} onChange={formik.handleChange} type="text" />
                                        <i className="pi pi-pencil mt-3 mr-5" />
                                    </div>
                                    {getFormErrorMessage("key7")}
                                </div>
                                <div className="field col-12 md:col-4 pl-6 pr-4">
                                    <div className='flex flex-row'>
                                        <InputText className="p-inputtext-sm label-style" id="key8" name="key8" value={formik.values.key8} onChange={formik.handleChange} type="text" />
                                        <i className="pi pi-pencil mt-3 mr-5" />
                                    </div>
                                    {getFormErrorMessage("key8")}
                                </div>
                            </div>
                        </div>
                        : null}

                </div>

                <div>
                    <div className="scroll-container card flex justify-content-between mt-4">
                        <div className="flex flex-row ml-4">
                            <InputText className="p-inputtext-sm label-style2" id="header2" name="header2" value={formik.values.header2} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("header2")}
                        </div>
                        <div className='flex justify-content-between' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="ml-4">
                                <Button
                                    style={{ border: "none", background: "transparent", color: 'gray' }}
                                    type="button"
                                    label={
                                        <>
                                            <i className={viewPersonalFields2 ? "pi pi-chevron-up" : "pi pi-chevron-down"} style={{ marginLeft: '4px' }} />
                                        </>
                                    }
                                    onClick={() => {
                                        handleChevron2();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {viewPersonalFields2 ?
                        <div className="p-fluid formgrid grid pl-5 pr-5">

                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key9" name="key9" value={formik.values.key9} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key9")}
                            </div>

                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key10" name="key10" value={formik.values.key10} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key10")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key11" name="key11" value={formik.values.key11} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key11")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key12" name="key12" value={formik.values.key12} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key12")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key13" name="key13" value={formik.values.key13} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key13")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key14" name="key14" value={formik.values.key14} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key14")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key15" name="key15" value={formik.values.key15} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key15")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key16" name="key16" value={formik.values.key16} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key16")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key17" name="key17" value={formik.values.key17} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key17")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key18" name="key18" value={formik.values.key18} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key18")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key19" name="key19" value={formik.values.key19} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key19")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key20" name="key20" value={formik.values.key20} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key20")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key21" name="key21" value={formik.values.key21} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key21")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key22" name="key22" value={formik.values.key22} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key22")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key23" name="key23" value={formik.values.key23} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key23")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key24" name="key24" value={formik.values.key24} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key24")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key25" name="key25" value={formik.values.key25} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key25")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key26" name="key26" value={formik.values.key26} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key26")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key27" name="key27" value={formik.values.key27} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key27")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key28" name="key28" value={formik.values.key28} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key28")}
                            </div>

                        </div>
                        : null}

                </div>

                <div>
                    <div className="scroll-container card flex justify-content-between mt-4">
                        <div className="flex flex-row ml-4">
                            <InputText className="p-inputtext-sm label-style2" id="header3" name="header3" value={formik.values.header3} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("header3")}
                        </div>
                        <div className='flex justify-content-between' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="ml-4">
                                <Button
                                    style={{ border: "none", background: "transparent", color: 'gray' }}
                                    type="button"
                                    label={
                                        <>
                                            <i className={viewPersonalFields3 ? "pi pi-chevron-up" : "pi pi-chevron-down"} style={{ marginLeft: '4px' }} />
                                        </>
                                    }
                                    onClick={() => {
                                        handleChevron3();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {viewPersonalFields3 ?
                        <div className="p-fluid formgrid grid pl-5 pr-5">

                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key29" name="key29" value={formik.values.key29} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key29")}
                            </div>

                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key30" name="key30" value={formik.values.key30} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key30")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key31" name="key31" value={formik.values.key31} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key31")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key32" name="key32" value={formik.values.key32} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key32")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key33" name="key33" value={formik.values.key33} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key33")}
                            </div>
                        </div>
                        : null}

                </div>

                <div>
                    <div className="scroll-container card flex justify-content-between mt-4">
                        <div className="flex flex-row ml-4">
                            <InputText className="p-inputtext-sm label-style2" id="header4" name="header4" value={formik.values.header4} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("header4")}
                        </div>
                        <div className='flex justify-content-between' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="ml-4">
                                <Button
                                    style={{ border: "none", background: "transparent", color: 'gray' }}
                                    type="button"
                                    label={
                                        <>
                                            <i className={viewPersonalFields4 ? "pi pi-chevron-up" : "pi pi-chevron-down"} style={{ marginLeft: '4px' }} />
                                        </>
                                    }
                                    onClick={() => {
                                        handleChevron4();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {viewPersonalFields4 ?
                        <div className="p-fluid formgrid grid pl-5 pr-5">

                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key34" name="key34" value={formik.values.key34} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key34")}
                            </div>

                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key35" name="key35" value={formik.values.key35} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key35")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key36" name="key36" value={formik.values.key36} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key36")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key37" name="key37" value={formik.values.key37} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key37")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key38" name="key38" value={formik.values.key38} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key38")}
                            </div>
                        </div>
                        : null}

                </div>

                <div>
                    <div className="scroll-container card flex justify-content-between mt-4">
                        <div className="flex flex-row ml-4">
                            <InputText className="p-inputtext-sm label-style2" id="header5" name="header5" value={formik.values.header5} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("header5")}
                        </div>
                        <div className='flex justify-content-between' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="ml-4">
                                <Button
                                    style={{ border: "none", background: "transparent", color: 'gray' }}
                                    type="button"
                                    label={
                                        <>
                                            <i className={viewPersonalFields5 ? "pi pi-chevron-up" : "pi pi-chevron-down"} style={{ marginLeft: '4px' }} />
                                        </>
                                    }
                                    onClick={() => {
                                        handleChevron5();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {viewPersonalFields5 ?
                        <div className="p-fluid formgrid grid pl-5 pr-5">

                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key39" name="key39" value={formik.values.key39} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key39")}
                            </div>

                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key40" name="key40" value={formik.values.key40} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key40")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key41" name="key41" value={formik.values.key41} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key41")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key42" name="key42" value={formik.values.key42} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key42")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key43" name="key43" value={formik.values.key43} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key43")}
                            </div>

                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key44" name="key44" value={formik.values.key44} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key44")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key45" name="key45" value={formik.values.key45} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key45")}
                            </div>
                            <div className="field col-12 md:col-4 pl-6 pr-4">
                                <div className='flex flex-row'>
                                    <InputText className="p-inputtext-sm label-style" id="key46" name="key46" value={formik.values.key46} onChange={formik.handleChange} type="text" />
                                    <i className="pi pi-pencil mt-3 mr-5" />
                                </div>
                                {getFormErrorMessage("key46")}
                            </div>

                        </div>
                        : null}

                </div>
                <div className='col-12 text-center mt-4 pb-2'>
                    <Button className="Save-Button w-3 ml-2" label="Update Fields" type="submit" />
                </div>
            </form>



        </>
    );
};

export default StartYearFields