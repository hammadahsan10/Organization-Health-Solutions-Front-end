import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./AppTopbar.scss";
import { Badge } from "primereact/badge";
import { baseURL } from "./Config";
import { Avatar } from "primereact/avatar";
import dummy from '../src/assets/ohs-assets/dp2.jpeg'
import { UPDATE_PROFILE } from "./redux/slices/authenticationSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const AppTopbar = (props) => {

    const role_Name = localStorage.getItem("role_Name")
    const dispatch = useDispatch()

    const userName = useSelector((state) => state.authenticationSlice.username) || localStorage.getItem("username");
    const dp = useSelector((state) => state.authenticationSlice.dp) || localStorage.getItem("dp");
    console.log("userName", userName)
    console.log("dp", dp.length)

    useEffect(() => {
        if (userName) {
           dispatch(UPDATE_PROFILE(userName));
        }
    }, [dispatch, userName]);

    return (
        <>
            <div className="layout-topbar">
                <Link to="/dashboard" className="layout-topbar-logo">
                    {/* <img src="assets/layout/images/menulogo_c@2x.png" alt="logo" /> */}
                    <div className="flex flex-column ml-4 text-center topbar-heading">
                        <span style={{ fontWeight: "", fontSize: "22px", letterSpacing: "2px", color: "black" }}>OHS Dashboard</span>
                    </div>
                </Link>

                <button type="button" className="p-link layout-menu-button layout-topbar-button ml-1" onClick={props.onToggleMenuClick}>
                    <i style={{ color: "black" }} className="pi pi-bars" />
                </button>
                <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                    <i className="pi pi-ellipsis-v" />
                </button>

                <ul className={classNames("layout-topbar-menu lg:flex origin-top", { "layout-topbar-menu-mobile-active": props.mobileTopbarMenuActive })}>
                    <li className="flex">
                        {role_Name
                            ?
                            <h2 className="mr-2">
                                <Badge value={role_Name} severity="warning" style={{ fontSize: '0.89rem' }} />
                            </h2>
                            :
                            null}

                        <li className="flex mr-3">
                            <button className="p-link layout-topbar-button user-image" onClick={props.onMobileSubTopbarMenuClick} style={{ width: "3.25rem" }}>
                               <Avatar image={dp?.length < 100 ? `${baseURL}/${dp}` : dp?.length > 100 ? dp : dummy} width="40px" height="40px" className="" size="4rem" shape="circle" />
                                {/* <img src={dp ? `${baseURL}/${dp}` : img} size="3rem" shape="circle" /> */}
                                <span>Profile</span>
                            </button>
                        </li>

                        <li>
                            <button className="p-link layout-topbar-button mx-3" onClick={props.onMobileSubTopbarMenuClick}>
                                <label htmlFor="" className="font-semibold" style={{ textAlign: "center" }}>
                                  {userName || ''}
                                </label>
                            </button>
                        </li>

                        {/* <SplitButton model={items} className="p-button-text custom-button-css ml-4"></SplitButton> */}
                        {/* <button className="p-link layout-topbar-button user-image" type="button" onClick={() => {
                            handleLogOut();
                        }}>
                            <i className="pi pi-power-off" title="Logout"></i>
                        </button> */}
                    </li>
                </ul>
            </div>
        </>
    );
};
