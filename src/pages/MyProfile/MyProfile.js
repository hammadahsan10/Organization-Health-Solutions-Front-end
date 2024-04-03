import React, { useState, useEffect } from "react";
import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog";
import { handleGetRequest } from "../../services/GetTemplate";
import { useDispatch } from "react-redux";
import { baseURL } from "../../Config";
import UpdateProfile from "./UpdateProfile";
import LoadingOverlay from "react-loading-overlay";
import { Triangle } from "react-loader-spinner";

const MyProfile = () => {

    const dispatch = useDispatch()
    const userId = localStorage.getItem("userId")
    const role_Name = localStorage.getItem("role_Name")

    const [allUsers, setAllUsers] = useState([])
    const [isActive, setIsActive] = useState(false)
    const [displayDialog, setDisplayDialog] = useState(false)

    //Get All Users
    const getProfileById = async () => {

        setIsActive(true);
        const response = await dispatch(handleGetRequest(`/api/user/getById/${userId}`, true));
        if (response) {
            setAllUsers(response?.data);
        }
        setIsActive(false);
    };

    const handleChange = () => {
        setDisplayDialog(true)
    }

    const onHide = () => {
        setDisplayDialog(false)
    }

    const Header = () => {
        
        return (
            <>
                <h3 className="text-center" style={{ fontWeight: "700" }}>Edit Profile</h3>
                <p className="text-center" style={{ fontWeight: "500", color: "gray", fontSize: "14px" }}>Enter the following details</p>
                <div className="mt-2">
                    <hr />
                </div>
            </>
        )
    }

    useEffect(() => {
        if (userId) {
            getProfileById()
        }
    }, [userId])

    return (
        <>

            <Dialog header={Header} visible={displayDialog} style={{ width: '55vw' }} onHide={onHide}>
                <UpdateProfile
                    allUsers={allUsers[0]}
                    onHide={onHide}
                    getProfileById={getProfileById}
                />
            </Dialog>
            <div className="card">
                <h2 style={{ fontWeight: "700", letterSpacing: "-1px", color: 'black' }}>My Profile</h2>
            </div>

            <br />

            <div className="card" >
                <div className="flex flex-row justify-content-between">
                    <h3 style={{ color: "gray" }} className="p-4"> Personal information</h3>
                    <div className="p-4">
                        <Button
                            label="Edit"
                            className="View-Button"
                            icon="pi pi-pencil"
                            onClick={handleChange}
                        />
                    </div>
                </div>
                <LoadingOverlay
                    active={isActive}
                    spinner={<Triangle
                        height="120"
                        width="120"
                        color="#009bcb"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />}

                    // text='Loading your content...'
                    styles={{
                        overlay: (base) => ({
                            ...base,
                            background: 'rgb(38 41 51 / 78%)',
                        })
                    }}
                >
                    <div className="scroll-container flex justify-content-between pt-3 pb-2 pr-8 pl-8">
                        <div className="flex flex-row mb-2" style={{ alignItems: "center" }}>
                            <img src={`${baseURL}/${allUsers[0]?.image}`} width="130px" height="130px" style={{ border: "1px solid gray", borderRadius: "6px" }} />
                            <div className="flex flex-column">
                                <span style={{ color: 'gray', fontSize: "16px", fontWeight: "500" }} className="ml-6">Name:  <span className="ml-4">{allUsers[0]?.username} </span></span>
                                <span style={{ color: 'gray', fontSize: "16px", fontWeight: "500" }} className="ml-6 mt-2">Email:  <span className="ml-4">{allUsers[0]?.email}</span></span>
                                <span style={{ color: 'gray', fontSize: "16px", fontWeight: "500" }} className="ml-6 mt-2">Role:  <span className="ml-4">{allUsers[0]?.role?.role_Name}</span></span>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="flex flex-column mt-5 mb-4" style={{ color: "black", marginLeft: "48px", fontWeight: "500" }}>
                        {role_Name == 'Admin'
                            ?
                            <>
                                <span className="ml-4" style={{ fontSize: "19px" }}> Name:  <span className="ml-4"> {allUsers[0]?.username} </span></span>
                                <span className="ml-4 mt-5" style={{ fontSize: "19px" }}> Email: <span className="ml-4">  {allUsers[0]?.email} </span></span>
                            </>
                            :
                            null}
                        {role_Name == 'Manager'
                            ?
                            <>
                                <span className="ml-4 mt-5" style={{ fontSize: "19px" }}> Job Title: <span className="ml-4">  {allUsers[0]?.jobTitle} </span> </span>
                                <span className="ml-4 mt-5" style={{ fontSize: "19px" }}> Department: <span className="ml-4">  {allUsers[0]?.department}</span> </span>
                            </>
                            :
                            null}
                    </div>

                    {role_Name == 'Individual' ?
                        <>
                            <div className="col-12 flex flex-row mb-3">
                                <div className="flex flex-column col-6" style={{ color: "black", marginLeft: "48px", fontWeight: "500" }}>
                                    <span className="ml-4 mt-5" style={{ fontSize: "19px" }}> Training requirements: <span className="ml-4" style={{color:"gray"}}>  {allUsers[0]?.trainingRequirements}</span>  </span>
                                    <span className="ml-4 mt-5" style={{ fontSize: "19px" }}> Fica Training requirements: <span className="ml-4" style={{color:"gray"}}>  {allUsers[0]?.ficaTrainingRequirements}</span>  </span>
                                    <span className="ml-4 mt-5" style={{ fontSize: "19px" }}> Legislative minimum requirements: <span className="ml-4" style={{color:"gray"}}>  {allUsers[0]?.legislativeMinimumRequirements}</span>  </span>
                                    <span className="ml-4 mt-5" style={{ fontSize: "19px" }}> License Categories: <span className="ml-4" style={{color:"gray"}}>  {allUsers[0]?.licenseCategories}</span>  </span>
                                </div>
                                <div className="flex flex-column col-6" style={{ color: "black", marginLeft: "0px", fontWeight: "500" }}>
                                    <span className=" mt-5" style={{ fontSize: "19px" }}> CPD hours: <span className="ml-4" style={{color:"gray"}}>  {allUsers[0]?.cpdHours}</span>  </span>
                                    <span className=" mt-5" style={{ fontSize: "19px" }}> Current AUM: <span className="ml-4" style={{color:"gray"}}>  {allUsers[0]?.currentAum}</span>  </span>
                                    <span className=" mt-5" style={{ fontSize: "19px" }}> Number of Clients: <span className="ml-4" style={{color:"gray"}}>  {allUsers[0]?.numberOfClients}</span>  </span>
                                    <span className=" mt-5" style={{ fontSize: "19px" }}> Class of business requirements: <span className="ml-4" style={{color:"gray"}}>  {allUsers[0]?.classOfBuisnessRequirements}</span>  </span>
                                </div>
                            </div>
                        </>
                        :
                        null
                    }
                </LoadingOverlay>
            </div>
        </>
    );
};

export default MyProfile