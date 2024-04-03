import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import LoadingOverlay from 'react-loading-overlay';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { FileUpload } from 'primereact/fileupload';
import { handlePutRequest } from '../../services/PutTemplate';
import { CustomerSpinner } from '../../components/CustomerSpinner';
import { baseURL } from '../../Config';
import {UPDATE_PROFILE} from '../../redux/slices/authenticationSlice'

const UpdateProfile = ({ getProfileById, allUsers, onHide }) => {

    const [saveBtnLoading, setSaveBtnLoading] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState([]);
    const role_Name = localStorage.getItem("role_Name")
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("This field is required."),
        email: Yup.string().email("Invalid email format.").required("This field is required."),
        //password: role_Name == 'Admin' ? Yup.string().required("This field is required.") : null,
        department: role_Name == 'Manager' ? Yup.string().required("This field is required.") : null,
        jobTitle: role_Name == 'Manager' ? Yup.string().required("This field is required.") : null,
    });

    const formik = useFormik({

        validationSchema: validationSchema,
        initialValues: {
            username: "",
            email: "",
            password: "",
            department: "",
            jobTitle: "",

            trainingRequirements: "",
            cpdHours: "",
            ficaTrainingRequirements: "",
            currentAum: "",
            legislativeMinimumRequirements: "",
            numberOfClients: "",
            licenseCategories: "",
            classOfBuisnessRequirements: "",
        },

        onSubmit: async (data) => {

            setSaveBtnLoading(true);
            const obj = {
                username: formik.values.username,
                email: formik.values.email,
                password: formik.values.password,
                Image: selectedFiles[0]?.base64,
            }

            const obj2 = {
                username: formik.values.username,
                email: formik.values.email,
                department: formik.values.department,
                jobTitle: formik.values.jobTitle,
                Image: selectedFiles[0]?.base64,
            }

            const obj3 = {
                username: formik.values.username,
                email: formik.values.email,
                department: formik.values.department,
                jobTitle: formik.values.jobTitle,
                Image: selectedFiles[0]?.base64,

                trainingRequirements: formik.values.trainingRequirements,
                cpdHours: formik.values.cpdHours,
                ficaTrainingRequirements: formik.values.ficaTrainingRequirements,
                currentAum: formik.values.currentAum,
                legislativeMinimumRequirements: formik.values.legislativeMinimumRequirements,
                numberOfClients: formik.values.numberOfClients,
                licenseCategories: formik.values.licenseCategories,
                classOfBuisnessRequirements: formik.values.classOfBuisnessRequirements,
            }

            let response;
            if (role_Name == 'Admin') {
                response = await dispatch(handlePutRequest(obj, `/api/user/update/${allUsers?._id}`, true, true));
                dispatch(UPDATE_PROFILE(obj.username, obj.Image));
                localStorage.setItem('username', obj.username);
                localStorage.setItem('dp', obj.Image);
            }
            else if (role_Name == 'Individual') {
                response = await dispatch(handlePutRequest(obj3, `/api/user/update/${allUsers?._id}`, true, true));
                dispatch(UPDATE_PROFILE(obj));
                localStorage.setItem('username', obj.username);
                localStorage.setItem('dp', obj.Image);
            }
            else {
                response = await dispatch(handlePutRequest(obj2, `/api/user/update/${allUsers?._id}`, true, true));
                dispatch(UPDATE_PROFILE(obj.username, obj.Image));
                localStorage.setItem('username', obj.username);
                localStorage.setItem('dp', obj.Image);
            }

            if (response?.status == 200) {
                onHide()
                await getProfileById()
                getProfileById()
            }
            setSaveBtnLoading(false)
        },
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    //File Upload Function
    const handleFileUpload = (event) => {
        const files = Array.from(event.files);

        const updatedFiles = files.map((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setSelectedFiles(() => [

                    { file_extension: file.type, base64: base64String, name: file.name, objectURL: file.objectURL || null }
                ]);
            };
            reader.readAsDataURL(file);

            return file;
        });
    };

    useEffect(() => {

        if (allUsers) {
            formik.setFieldValue("username", allUsers?.username)
            formik.setFieldValue("email", allUsers?.email)
            formik.setFieldValue("department", allUsers?.department)
            formik.setFieldValue("jobTitle", allUsers?.jobTitle)

            formik.setFieldValue("trainingRequirements", allUsers?.trainingRequirements)
            formik.setFieldValue("cpdHours", allUsers?.cpdHours)
            formik.setFieldValue("ficaTrainingRequirements", allUsers?.ficaTrainingRequirements)
            formik.setFieldValue("currentAum", allUsers?.currentAum)
            formik.setFieldValue("legislativeMinimumRequirements", allUsers?.legislativeMinimumRequirements)
            formik.setFieldValue("numberOfClients", allUsers?.numberOfClients)
            formik.setFieldValue("licenseCategories", allUsers?.licenseCategories)
            formik.setFieldValue("classOfBuisnessRequirements", allUsers?.classOfBuisnessRequirements)


        }
    }, [allUsers])

    return (

        <>

            {saveBtnLoading ? (
                <CustomerSpinner />
            ) : (
                null
            )}

            <LoadingOverlay
                active={isActive}
                spinner
                text='Loading your content...'
                styles={{
                    overlay: (base) => ({
                        ...base,
                        background: 'rgb(38 41 51 / 78%)',
                        width: '107.9%',
                        height: '125%',
                        top: '-27px',
                        left: '-35px'
                    })
                }}
            >

                <form onSubmit={formik.handleSubmit}>
                    <div className="p-fluid formgrid grid pl-5 pr-5">

                        <div className="field col-12 text-center md:col-12 pl-6 pb-6 pr-6">
                            <img
                                src={selectedFiles?.length === 0 ? `${baseURL}/${allUsers?.image}` : selectedFiles?.length ? selectedFiles[0]?.base64 : `data:image/svg+xml,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 61" width="100px" height="100px">
      <path d="M48.2917 12.7083V48.2917H12.7083V12.7083H48.2917ZM48.2917 7.625H12.7083C9.9125 7.625 7.625 9.9125 7.625 12.7083V48.2917C7.625 51.0875 9.9125 53.375 12.7083 53.375H48.2917C51.0875 53.375 53.375 51.0875 53.375 48.2917V12.7083C53.375 9.9125 51.0875 7.625 48.2917 7.625ZM35.9392 30.1442L28.3142 39.9804L22.875 33.3975L15.25 43.2083H45.75L35.9392 30.1442Z" fill="black" fill-opacity="0.4"/>
    </svg>
  `}
                                width="100px" height="100px"
                                alt="Profile Image"
                                className=""
                            />
                            <FileUpload
                                auto
                                mode="basic"
                                chooseLabel="Choose File"
                                className="p-mt-2"
                                onSelect={handleFileUpload}
                                accept="image/*"
                            />
                        </div>
                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <InputText placeholder='Enter User Name' className="p-inputtext-sm" id="username" name="username" value={formik.values.username} onChange={formik.handleChange} type="text" />
                            {getFormErrorMessage("username")}
                        </div>

                        <div className="field col-12 md:col-6 pl-6 pr-6">
                            <InputText placeholder='Enter Email' className="p-inputtext-sm" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} type="email" />
                            {getFormErrorMessage("email")}
                        </div>

                        {role_Name == 'Admin' || role_Name == 'Individual' ?
                            <>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText type='password' toggleMask placeholder='Enter your new password i.e Admin@123' id='password' name="password" value={formik.values.password} onChange={formik.handleChange} className="p-inputtext-sm" autoComplete="off" />
                                </div>
                            </>
                            :
                            null
                        }

                        {role_Name == 'Manager' ?
                            <>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter Department' className="p-inputtext-sm" id="department" name="department" value={formik.values.department} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("department")}
                                </div>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter Job Title' className="p-inputtext-sm" id="jobTitle" name="jobTitle" value={formik.values.jobTitle} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("jobTitle")}
                                </div>
                            </>
                            :
                            null}

                        {role_Name == 'Individual' ?
                            <>
                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter Training Requirements' className="p-inputtext-sm" id="trainingRequirements" name="trainingRequirements" value={formik.values.trainingRequirements} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("trainingRequirements")}
                                </div>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter CPD Hours' className="p-inputtext-sm" id="cpdHours" name="cpdHours" value={formik.values.cpdHours} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("cpdHours")}
                                </div>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter Fica Training Requirements' className="p-inputtext-sm" id="ficaTrainingRequirements" name="ficaTrainingRequirements" value={formik.values.ficaTrainingRequirements} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("ficaTrainingRequirements")}
                                </div>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter Current AUM' className="p-inputtext-sm" id="currentAum" name="currentAum" value={formik.values.currentAum} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("currentAum")}
                                </div>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter Legislative Minimum Requirments' className="p-inputtext-sm" id="legislativeMinimumRequirements" name="legislativeMinimumRequirements" value={formik.values.legislativeMinimumRequirements} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("legislativeMinimumRequirements")}
                                </div>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter Number of Clients' className="p-inputtext-sm" id="numberOfClients" name="numberOfClients" value={formik.values.numberOfClients} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("numberOfClients")}
                                </div>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter License Catrgories' className="p-inputtext-sm" id="licenseCategories" name="licenseCategories" value={formik.values.licenseCategories} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("licenseCategories")}
                                </div>

                                <div className="field col-12 md:col-6 pl-6 pr-6">
                                    <InputText placeholder='Enter Class of Business Requirements' className="p-inputtext-sm" id="classOfBuisnessRequirements" name="classOfBuisnessRequirements" value={formik.values.classOfBuisnessRequirements} onChange={formik.handleChange} type="text" />
                                    {getFormErrorMessage("classOfBuisnessRequirements")}
                                </div>
                            </>
                            :
                            null
                        }

                        <div className='col-12 text-center mt-4 pb-2'>
                            <Button className="Save-Button w-3 ml-2" label="Edit Profile" type="submit" />
                        </div>

                    </div>
                </form>

            </LoadingOverlay>
        </>
    )
}

export default UpdateProfile