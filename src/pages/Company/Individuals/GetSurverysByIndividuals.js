import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react'
import { Triangle } from 'react-loader-spinner';
import LoadingOverlay from 'react-loading-overlay';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handleGetRequest } from '../../../services/GetTemplate';


const GetSurverysByIndividuals = ({ myUserId, onHide }) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const currentYear = new Date().getFullYear();

    const [isActive, setIsActive] = useState(false)
    const [myData, setMyData] = useState([])

    const handleViewSurveyForIndividual = (item) => {

        if (item?.Name == 'Start of the Year Survey') {

            history.push({
                pathname: `./startyearforms`,
                state: { additionalProp: item }
            });
        }

        else if (item?.Name == 'Mid of the Year Survey') {

            history.push({
                pathname: `./midyearforms`,
                state: { additionalProp: item }
            });
        }

        else if (item?.Name == 'End of the Year Survey') {

            history.push({
                pathname: `./endyearforms`,
                state: { additionalProp: item }
            });
        }

        else {
            return null
        }
    }

    const getSurveyListByUserId = async () => {

        setIsActive(true);
        const response = await dispatch(handleGetRequest(`/api/userSurvey/getByUserId/${myUserId}`, true));
        if (response.length) {
            setMyData(response);
        }
        else {
            setMyData([])
            setIsActive(false)
        }
        setIsActive(false);
    };


    useEffect(() => {
        if (myUserId) {
            getSurveyListByUserId()
        }
    }, [myUserId])

    return (
        <div>
            {myData?.length ?
                <>
                    <h3 style={{ color: "black", fontWeight: "bold" }} className="ml-2 mt-2">{currentYear}</h3>
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
                                <div key={item._id}>
                                    <div className="scroll-container card flex justify-content-between">
                                        <div className="flex flex-row">
                                            <div className="flex flex-row" style={{ alignItems: "center" }}>
                                                <h5 style={{ color: 'black' }} className="ml-6">{item?.Name}</h5>
                                            </div>
                                            <div className="flex flex-row ml-6" style={{ alignItems: "center" }}>
                                                <h6 style={{ color: 'black', fontSize: "15px", color: "#009bcb" }} className="ml-6 mt-2">(Submitted by {item?.UserName})</h6>
                                            </div>
                                            <div className="flex flex-row ml-5" style={{ alignItems: "center" }}>
                                                <h5 style={{ color: 'black' }} className="ml-6"><Badge value={item?.status == 'pending' ? 'Pending' : 'Completed'} className={item?.status == 'pending' ? 'badge-pending mt-2' : 'badge-success mt-2'} ></Badge> </h5>
                                            </div>
                                        </div>

                                        <div className='flex justify-content-between' style={{ display: 'flex', alignItems: 'center' }}>
                                            <Button
                                                type="button"
                                                label="View Survey"
                                                className="View-Button"
                                                onClick={() => {
                                                    handleViewSurveyForIndividual(item);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </LoadingOverlay>
                </>
                :
                <div className='col-12'>
                    <h5 style={{ fontStyle: "italic", textAlign:"center", color:"gray" }}>No Survery Found</h5>
                </div>
            }

        </div>
    )
}

export default GetSurverysByIndividuals
