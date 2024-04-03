import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { handleGetRequest } from "../../services/GetTemplate";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { handlePutRequest } from "../../services/PutTemplate";
import { CustomerSpinner } from "../../components/CustomerSpinner";
import LoadingOverlay from "react-loading-overlay";
import { Triangle } from "react-loader-spinner";
import { Badge } from "primereact/badge";
import { InputText } from "primereact/inputtext";
import { baseURL } from "../../Config";
import dummy from '../../assets/ohs-assets/dp2.jpeg'

const Notifications = () => {

    const dispatch = useDispatch()

    const [isActive, setIsActive] = useState(false)
    const [myStatus, setMyStatus] = useState('');
    const [myPassword, setMyPassword] = useState('');
    const [myData, setMyData] = useState([]);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [saveBtnLoading, setSaveBtnLoading] = useState(false)
    const [userObject, setUserObject] = useState('')
    const [stop, setStop] = useState(false)

    const updatePasswordHandler = async () => {

        setSaveBtnLoading(true);
        const obj = {
            password: myPassword,
        }

        const response = await dispatch(handlePutRequest(obj, `/api/user/update/${userObject?.userId}`, true, true));
        if (response) {
            onHide()
            getAllNotifications()

        }
        setSaveBtnLoading(false)
    }

    const handleUpdateStatus = async (item) => {

        setDisplayDialog(true)
        setUserObject(item)
    }

    const onHide = () => {
        setDisplayDialog(false)
    }

    //Get All Notifications
    const getAllNotifications = async () => {

        setIsActive(true);

        const response = await dispatch(handleGetRequest("/api/managerReset/getAll", true));
        if (response) {
            setMyData(response);
        }
        setIsActive(false);
    };

    useEffect(() => {
        getAllNotifications()
    }, [])

    const statusOptions = [
        { name: 'Approved' },
    ]

    const getAutoReadNotifications = async () => {

        const obj = {
            status: 'Read',
        };

        try {
            await Promise.all(myData.map(async (item, index) => {
                const isLastItem = index === myData.length - 1;
                if (item?.status == 'UnRead') {
                    const response = await dispatch(handlePutRequest(obj, `/api/managerReset/update/${item._id}`, true, true));
                    if (!response) {
                        throw new Error("Error updating notification with _id: " + item._id);
                    }
                    if (isLastItem) {
                        getAllNotifications();
                        setStop(true);
                    }
                } else {
                    return null;
                }
            }));
        } catch (error) {
            console.error("Error updating notifications:", error);
        }
    };

    const getApprovedStatusApi = async () => {
        const obj = {
            status: 'Approved'
        }
        const response = await dispatch(handlePutRequest(obj, `/api/managerReset/update/${userObject?._id}`, true, true));
    }

    useEffect(() => {
        if (myData && stop === false) {
            getAutoReadNotifications();
        }
    }, [myData, stop]);

    useEffect(() => {
        if (myStatus == 'Approved') {
            getApprovedStatusApi()
        }
    }, [myStatus])

    return (

        <>
            {saveBtnLoading ? (
                <CustomerSpinner />
            ) : (
                null
            )}

            <Dialog header="Set Password" visible={displayDialog} style={{ width: '40vw' }} onHide={onHide}>
                <form >
                    <div className="p-fluid formgrid grid pl-2 pr-2">
                        <div className="field col-12 md:col-7">
                            <label> Update Status </label>
                            <span className="Label__Required">*</span>
                            <div className="field col-12 md:col-12 pl-3 pr-3 mt-1">
                                <Dropdown options={statusOptions} optionLabel='name' optionValue='name' placeholder='Update Status' className="p-inputtext-sm" id="myStatus" name="myStatus" value={myStatus} onChange={(e) => setMyStatus(e.target.value)} />
                            </div>
                        </div>
                        {myStatus == 'Approved' ?

                            <>
                                <div className='flex flex-column col-12'>
                                    <label className='ml-3' style={{ fontWeight: "bold", color: "black" }}> Set Passowrd for Manager</label>
                                    <div className="field col-12 md:col-7 pl-3 pr-3 mt-1">
                                        <InputText placeholder='Set New Passowrd for Manager' className="p-inputtext-sm" id="password" name="password" value={myPassword} onChange={(e) => setMyPassword(e.target.value)} type="email" />
                                    </div>
                                </div>
                                <div className='col-12 text-center mt-4 pb-2'>
                                    <Button disabled={myPassword === '' ? true : false} className="Save-Button w-3 ml-2" label="Update" type="button" onClick={updatePasswordHandler} />
                                </div>
                            </>
                            :
                            null}

                    </div>
                </form>
            </Dialog>

            <div className="card">
                <h2 style={{ fontWeight: "700", letterSpacing: "-1px", color: 'black' }}>Notifications</h2>
            </div>

            <br />

            <div className="card" >
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
                    {myData?.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="scroll-container card flex justify-content-between">
                                    <div className="flex flex-row mb-2" style={{ alignItems: "center" }}>
                                        <img src={item.Image ? `${baseURL}/${item.Image}` : dummy} width="70px" height="70px" style={{ border: "1px solid gray", borderRadius: "50%" }} />
                                        <p style={{ color: 'black' }} className="ml-6">{item?.description}</p>

                                        <div className="flex flex-row ml-5" style={{ alignItems: "center" }}>
                                            <h5 style={{ color: 'black' }} className="ml-6"><Badge value={item?.status} className={item?.status == 'UnRead' ? 'badge-red mt-2' : item?.status == 'Read' ? 'badge-pending mt-2' : 'badge-success mt-2'} ></Badge> </h5>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <Button
                                            type="button"
                                            label="Update Status"
                                            className="Save-Button"
                                            onClick={() => {
                                                handleUpdateStatus(item);
                                            }}
                                        />
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </LoadingOverlay>
            </div>

        </>
    );
};

export default Notifications