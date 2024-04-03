import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FilterMatchMode } from "primereact/api";
import LoadingOverlay from "react-loading-overlay";
import { Triangle } from "react-loader-spinner";
import { InputText } from "primereact/inputtext";
import { handleGetRequest } from "../../services/GetTemplate";
import { useDispatch } from "react-redux";
import { handleDeleteRequest } from "../../services/DeleteTemplate";
import { confirmDialog } from "primereact/confirmdialog";
import { useHistory } from "react-router-dom";
import { SplitButton } from 'primereact/splitbutton';
import AddEditCompanies2 from "./AddEditCompanies2";
import { baseURL } from "../../Config";
import dummy from '../../assets/ohs-assets/dp2.jpeg'

const ManageCompanies = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [isActive, setIsActive] = useState(false)
    const [rowObject, setRowObject] = useState();
    const [editable, setEditable] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const handleDeleteDialog = (id) => {
        confirmDialog({
            message: 'Are you sure you want to Delete this User ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => handleDeleteCompany(id),
            reject: null
        });
    }

    const handleDeleteCompany = async (id) => {

        setIsActive(true);
        const response = await dispatch(handleDeleteRequest(`/api/company/delete/${id}`, true, true));
        if (response) {
            await getCompanyList()
            getCompanyList()
        }

        setIsActive(false);
    }


    const handleDialog = (item) => {
        setDisplayDialog(true);
    };

    const handleDialogforEdit = (item) => {

        setDisplayDialog(true);
        setEditable(true)
        setRowObject(item)
    };

    const onHide = (name) => {
        setDisplayDialog(false);
        setEditable(false)
    };

    const handleViewInfo = (item) => {

        console.log("item", item)
        history.push({
            pathname: `./companyinfo`,
            state: { additionalProp: item }
        });
        localStorage.setItem('myCompanyId', item?._id)
        localStorage.setItem('myCompanyName', item?.companyName)
    };


    const handleViewSurverysMenu = (item) => {

        history.push({
            pathname: `./surveys`,
            state: { additionalProp: item }
        });
    };

    const Header = () => {
        return (
            <>
                <h3 className="text-center" style={{ fontWeight: "700" }}>{editable ? "Edit Company" : "Add Company"}</h3>
                <div className="mt-2">
                    <hr />
                </div>
            </>
        )
    }

    //Get All Companies
    const getCompanyList = async () => {

        setIsActive(true);

        const response = await dispatch(handleGetRequest("/api/company/getAll", true));
        if (response) {
            setAllUsers(response?.data);
        }
        setIsActive(false);
    };

    useEffect(() => {
        getCompanyList()
    }, [])

    const filteredCompanies = allUsers.filter((item) =>
        item.companyName.toLowerCase().includes(globalFilterValue.toLowerCase())
    );

    return (

        <>
            <Dialog header={Header} visible={displayDialog} style={{ width: '55vw' }} onHide={onHide}>
                <AddEditCompanies2
                    onHide={onHide}
                    rowObject={rowObject}
                    editable={editable}
                    getCompanyList={getCompanyList}
                />
            </Dialog>

            <div className="card flex justify-content-between">
                <h2 style={{ fontWeight: "700", color: 'black' }}>Manage Companies</h2>
                <div className='flex justify-content-between custom-alignment' style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="p-input-icon-left mr-3">
                        <i className="pi pi-search" />
                        <InputText
                            placeholder="Search"
                            value={globalFilterValue}
                            onChange={onGlobalFilterChange}
                            className="search-input"
                            style={{
                                background: 'transparent',
                                border: '1px solid gray',
                                borderRadius: '0',
                                color: 'black',
                            }}
                        />

                    </span>
                    <div className="">
                        <Button
                            label="Add New"
                            className="Save-Button"
                            icon="pi pi-plus"
                            onClick={() => {
                                handleDialog();
                            }}
                        />
                    </div>
                </div>
            </div>

            <br />
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
                {filteredCompanies?.map((item) => {
                    const items = [
                        {
                            label: "Edit",
                            command: () => {
                                handleDialogforEdit(item);
                            },
                        },
                        {
                            label: "Delete",
                            command: () => {
                                handleDeleteDialog(item._id);
                            },
                        },
                    ];

                    return (
                        <div key={item._id}>
                            <div className="scroll-container card flex justify-content-between">
                                <div className="flex flex-row mb-2" style={{ alignItems: "center" }}>
                                    <img src={item?.logo ? `${baseURL}/${item?.logo}` : dummy} width="60px" height="60px" style={{ border: "", borderRadius: "6px" }} />
                                    <h4 style={{ color: 'black' }} className="ml-6">{item?.companyName}</h4>
                                </div>
                                <div className='flex justify-content-between' style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="">
                                        <Button
                                            type="button"
                                            label="View Surveys"
                                            className="Save-Button"
                                            onClick={() => {
                                                handleViewSurverysMenu(item);
                                            }}
                                        />
                                    </div>
                                    <div className="">
                                        <Button
                                            type="button"
                                            label="View"
                                            className="ml-4 View-Button"
                                            onClick={() => {
                                                handleViewInfo(item);
                                            }}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <SplitButton model={items} className="p-button-text custom-button-css"></SplitButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </LoadingOverlay>

        </>
    );
};

export default ManageCompanies