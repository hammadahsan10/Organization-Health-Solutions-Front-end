import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect, useState } from 'react'
import { Triangle } from 'react-loader-spinner'
import LoadingOverlay from 'react-loading-overlay'
import { handleGetRequest } from '../../../services/GetTemplate'
import { useDispatch } from 'react-redux'
import { baseURL } from '../../../Config'
import { Button } from 'primereact/button'
import { SplitButton } from 'primereact/splitbutton'
import { confirmDialog } from 'primereact/confirmdialog'
import { handleDeleteRequest } from '../../../services/DeleteTemplate'
import { Dialog } from 'primereact/dialog'
import AddEditIndividuals from './AddEditIndividuals'
import Anaylytics from '../../Analytics/Anaylytics'
import GetSurverysByIndividuals from './GetSurverysByIndividuals'
import dummy from '../../../assets/ohs-assets/dp2.jpeg' 

const ManageIndividuals = ({ companyId }) => {

    const [isActive, setIsActive] = useState(false)
    const [allUsers, setAllUsers] = useState([])
    const [displayDialog, setDisplayDialog] = useState(false)
    const [editable, setEditable] = useState(false)
    const [rowObject, setRowObject] = useState()
    const [analyticsDialog, setAnalyticsDialog] = useState(false)
    const [surveryByIndividals, setSurveryByIndividals] = useState(false)
    const [myId, setMyId] = useState('')
    const [myUserId, setMyUserId] = useState('')
    const [myName, setMyName] = useState('')

    const dispatch = useDispatch()

    //Get All Individuals
    const getIndividualsByCompany = async () => {

        setIsActive(true);

        const response = await dispatch(handleGetRequest(`/api/user/GetUserByCompany/${companyId}`, true));
        if (response) {
            setAllUsers(response?.data);
        }
        setIsActive(false);
    };

    useEffect(() => {
        if (companyId) {
            getIndividualsByCompany()
        }
    }, [companyId])

    const handleEditDialog = (rowData) => {
        setDisplayDialog(true)
        setEditable(true)
        setRowObject(rowData)
    };


    const handleDeleteDialog = (rowData) => {
        confirmDialog({
            message: 'Are you sure you want to Delete this Manager ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => handleDeleteIndividual(rowData?._id),
            reject: null
        });
    };

    const handleDeleteIndividual = async (id) => {

        setIsActive(true);
        const response = await dispatch(handleDeleteRequest(`/api/user/delete/${id}`, true, true));
        if (response) {
            await getIndividualsByCompany()
        }

        setIsActive(false);
    }

    const items = [
        {
            label: "Edit",
            command: handleEditDialog,
        },
        {
            label: "Delete",
            command: handleDeleteDialog,
        },
    ];

    const actionTemplate2 = (rowData) => {
        const dynamicItems = items.map((item) => ({
            ...item,
            command: () => item.command(rowData),
        }));

        return (
            <>
                <SplitButton model={dynamicItems} className="p-button-text custom-button-css" ></SplitButton>
            </>
        );
    };

    const onHide = () => {
        setDisplayDialog(false)
    }

    const imageTemplate = (rowData) => {

        return (
            <>
                {rowData?.image ?
                    <img
                        src={`${baseURL}/${rowData?.image}`}
                        width="80px" height="80px"
                        alt="logo Image"
                        style={{ border: "1px solid gray", borderRadius: "4px" }}
                    />
                    :
                    <img
                        src={dummy}
                        width="80px" height="80px"
                        alt="logo Image"
                        style={{border:"", borderRadius:"4px"}}
                    />}
            </>
        )
    }

    const Header = () => {
        return (
            <>
                <h3 className="text-center" style={{ fontWeight: "700" }}>Edit Individual</h3>
                <p className="text-center" style={{ fontWeight: "500", color: "gray", fontSize: "14px" }}>Enter the following details</p>
                <div className="mt-2">
                    <hr />
                </div>
            </>
        )
    }

    const Header2 = () => {
        return (
            <>
                <h3 className="text-center" style={{ fontWeight: "700" }}>View Anaylytics</h3>
                <div className="mt-2">
                    <hr />
                </div>
            </>
        )
    }

    const Header3 = () => {
        return (
            <>
                <h3 className="text-center" style={{ fontWeight: "700" }}>Survey Details</h3>
                <div className="mt-2">
                    <hr />
                </div>
            </>
        )
    }

    const analyticsTemplate = (rowData) => {
        return (
            <>
                <Button
                    type="button"
                    label="View Analytics"
                    className="Save-Button"
                    onClick={() => handleViewAnalytics(rowData)}
                />
            </>
        )
    }

    const surverysTemplate = (rowData) => {
        return (
            <>
                <Button
                    type="button"
                    label="View Surveys"
                    className="Save-Button"
                    onClick={() => handleViewSurveys(rowData)}
                />
            </>
        )
    }

    const handleViewAnalytics = (rowData) => {
        setAnalyticsDialog(true)
        setMyId(rowData?._id)
        setMyName(rowData?.username)
    }

    const handleViewSurveys = (rowData) => {
        setSurveryByIndividals(true)
        setMyUserId(rowData?._id)
    }

    const onHide2 = (id) => {
        setSurveryByIndividals(false)
    }

    const hideSurvey = (id) => {
        setAnalyticsDialog(false)
    }

    return (
        <div>
            <Dialog header={Header} visible={displayDialog} style={{ width: '55vw' }} onHide={onHide}>
                <AddEditIndividuals
                    rowObject={rowObject}
                    onHide={onHide}
                    editable={editable}
                    getIndividualsByCompany={getIndividualsByCompany}
                    companyId={companyId}
                />
            </Dialog>

            <Dialog header={Header3} visible={surveryByIndividals} style={{ width: '70vw' }} onHide={onHide2}>
                <GetSurverysByIndividuals
                    myUserId={myUserId}
                    onHide={onHide2}
                />
            </Dialog>

            <Dialog header={Header2} visible={analyticsDialog} style={{ width: '80vw' }} onHide={hideSurvey}>
                <Anaylytics
                    userId={myId}
                    myName={myName}
                    onHide={hideSurvey}
                />
            </Dialog>

            <div className="card dark-bg">
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
                    <DataTable
                        responsive={true}
                        responsiveLayout="scroll"
                        paginator
                        rows={20}
                        value={allUsers}
                        emptyMessage="No records found"
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                        rowsPerPageOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                    >
                        <Column body={imageTemplate} header="Logo"></Column>
                        <Column field="username" header="User Name"></Column>
                        <Column field="email" header="Email"></Column>
                        <Column header="View Surveys" body={surverysTemplate} />
                        <Column header="View Analytics" body={analyticsTemplate} />
                        <Column header="Action" body={actionTemplate2} />
                    </DataTable>
                </LoadingOverlay>
            </div>
        </div>
    )
}

export default ManageIndividuals
