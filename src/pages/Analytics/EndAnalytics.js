import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { handleGetRequest } from '../../services/GetTemplate';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from 'primereact/button';
import ViewStrengths from './View-Screens-End/ViewStrengths';
import { Dialog } from 'primereact/dialog';
import ViewGoals from './View-Screens-End/ViewGoals';
import ViewOppoGoals from './View-Screens-End/ViewOppoGoals';
import ViewHolisticGoals from './View-Screens-End/ViewHolisticGoals';
import { ProgressBar } from 'primereact/progressbar';

const EndAnaylytics = ({ userId2, userId3 }) => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [chartData2, setChartData2] = useState({});
    const [chartOptions2, setChartOptions2] = useState({});
    const [myData, setMyData] = useState([]);
    const [isActive, setIsActive] = useState(false)

    const [strengthDialog, setStrengthDialog] = useState(false)
    const [goalsDialog, setGoalsDialog] = useState(false)
    const [oppoGoalsDialog, setOppoGoalsDialog] = useState(false)
    const [holisticGoalsDialog, setHolisticGoalsDialog] = useState(false)

    const userId = localStorage.getItem('userId')
    const dispatch = useDispatch()

    function formatLabel(label) {
        if (!label) return '';
        const words = label.split(' ');
        if (words.length <= 2) {
            return label;
        } else {
            return words.slice(0, 2).join(' ') + '...';
        }
    }

    const getChart1Data = () => {

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        let data;
        if (myData?.value8 == '10') {
            data = {
                labels: [
                    formatLabel(myData?.dupvalue9),
                    '',
                    formatLabel(myData?.dupvalue11),
                    '',
                    formatLabel(myData?.dupvalue13),
                    '',
                    formatLabel(myData?.dupvalue15),
                    '',
                    formatLabel(myData?.dupvalue17),
                    '',
                    formatLabel(myData?.dupvalue19),
                    '',
                    formatLabel(myData?.dupvalue21),
                    '',
                    formatLabel(myData?.dupvalue23),
                    '',
                    formatLabel(myData?.dupvalue25),
                    '',
                    formatLabel(myData?.dupvalue27)
                ],
                datasets: [
                    {
                        label: 'Strengths',
                        backgroundColor: [
                            '#33CFFF',
                            '#009BCB'
                        ],
                        borderColor: [
                            '#33CFFF',
                            '#009BCB'
                        ],
                        data: [Math.round(myData?.value9), Math.round(myData?.value10), Math.round(myData?.value11), Math.round(myData?.value12), Math.round(myData?.value13), Math.round(myData?.value14), Math.round(myData?.value15), Math.round(myData?.value16), Math.round(myData?.value17), Math.round(myData?.value18), Math.round(myData?.value19), Math.round(myData?.value20), Math.round(myData?.value21), Math.round(myData?.value22), Math.round(myData?.value23), Math.round(myData?.value24), Math.round(myData?.value25), Math.round(myData?.value26), Math.round(myData?.value27), Math.round(myData?.value28)]
                    },
                ]
            };
        }
        else {
            data = {
                labels: [
                    formatLabel(myData?.dupvalue9),
                    '',
                    formatLabel(myData?.dupvalue11),
                    '',
                    formatLabel(myData?.dupvalue13),
                    '',
                    formatLabel(myData?.dupvalue15),
                    '',
                    formatLabel(myData?.dupvalue17),
                ],
                datasets: [
                    {
                        label: 'Strengths',
                        backgroundColor: [
                            '#33CFFF',
                            '#009BCB'
                        ],
                        borderColor: [
                            '#33CFFF',
                            '#009BCB'
                        ],
                        data: [Math.round(myData?.value9), Math.round(myData?.value10), Math.round(myData?.value11), Math.round(myData?.value12), Math.round(myData?.value13), Math.round(myData?.value14), Math.round(myData?.value15), Math.round(myData?.value16), Math.round(myData?.value17), Math.round(myData?.value18)]
                    },
                ]
            };
        }

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    max: 5,
                    ticks: {
                        stepSize: 1,
                        beginAtZero: true,
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        }

        setChartData(data);
        setChartOptions(options);

    }

    const getChart2Data = () => {

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: [
                formatLabel(myData?.dupvalue29),
                '',
                formatLabel(myData?.dupvalue31),
                '',
                formatLabel(myData?.dupvalue33),
                '',
                formatLabel(myData?.dupvalue35),
                '',
                formatLabel(myData?.dupvalue37),
            ],
            datasets: [
                {
                    label: 'Goals',
                    backgroundColor: [
                        '#33CFFF',
                        '#009BCB'
                    ],
                    borderColor: [
                        '#33CFFF',
                        '#009BCB'
                    ],
                    data: [Math.round(myData?.value29), Math.round(myData?.value30), Math.round(myData?.value31), Math.round(myData?.value32), Math.round(myData?.value33), Math.round(myData?.value34), Math.round(myData?.value35), Math.round(myData?.value36), Math.round(myData?.value37), Math.round(myData?.value38)]
                },
            ]

        };
        const options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    max: 5,
                    ticks: {
                        stepSize: 1,
                        beginAtZero: true,
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData2(data)
        setChartOptions2(options);

    }

    const getSurveyListByUserId = async () => {

        setIsActive(true);

        let response;
        if (userId3) {
            response = await dispatch(handleGetRequest(`/api/userSurvey/getByUserId/${userId3}`, true));
        }
        else if (userId2) {
            response = await dispatch(handleGetRequest(`/api/userSurvey/getByUserId/${userId2}`, true));
        } else {
            response = await dispatch(handleGetRequest(`/api/userSurvey/getByUserId/${userId}`, true));
        }

        if (response.length) {
            const result = response.filter(item => item.Name == 'End of the Year Survey')
            setMyData(result[0]);
        }
        else {
            setMyData(response)
            setIsActive(false)
        }
        setIsActive(false);
    };


    useEffect(() => {
        if (myData) {
            getChart1Data();
            getChart2Data();
        }

    }, [myData]);

    useEffect(() => {
        getSurveyListByUserId()
    }, [])

    const handleViewStrengths = () => {
        setStrengthDialog(true)
    }

    const onHide1 = () => {
        setStrengthDialog(false)
    }

    const handleViewGoals = () => {
        setGoalsDialog(true)
    }

    const onHide2 = () => {
        setGoalsDialog(false)
    }

    const handleViewOppoGoals = () => {
        setOppoGoalsDialog(true)
    }

    const onHide3 = () => {
        setOppoGoalsDialog(false)
    }

    const handleViewHolisticGoals = () => {
        setHolisticGoalsDialog(true)
    }

    const onHide4 = () => {
        setHolisticGoalsDialog(false)
    }

    const scaledValue1 = Math.min(100, (myData?.u_value1 / 5) * 100);
    const scaledValue2 = Math.min(100, (myData?.u_value3 / 5) * 100);
    const scaledValue3 = Math.min(100, (myData?.u_value5 / 5) * 100);
    const scaledValue4 = Math.min(100, (myData?.u_value7 / 5) * 100);
    const scaledValue5 = Math.min(100, (myData?.u_value9 / 5) * 100);

    return (
        <>
            <Dialog header="" visible={strengthDialog} style={{ width: '50vw', marginLeft: "290px" }} onHide={onHide1}>
                <ViewStrengths
                    myData={myData}
                />
            </Dialog>

            <Dialog header="" visible={goalsDialog} style={{ width: '50vw', marginLeft: "290px" }} onHide={onHide2}>
                <ViewGoals
                    myData={myData}
                />
            </Dialog>

            <Dialog header="" visible={oppoGoalsDialog} style={{ width: '50vw', marginLeft: "290px" }} onHide={onHide3}>
                <ViewOppoGoals
                    myData={myData}
                />
            </Dialog>

            <Dialog header="" visible={holisticGoalsDialog} style={{ width: '50vw', marginLeft: "290px" }} onHide={onHide4}>
                <ViewHolisticGoals
                    myData={myData}
                />
            </Dialog>

            <div className='col-12 flex flex-column' style={{ color: "black", display: "flex", flexDirection: "column", height: "110vh", background: "#F8F8F8" }}>
                {/* Row 1 */}
                <div className='col-12 flex flex-row'>
                    {/* Chart 1 */}
                    <div className='mr-1 col-7 card'>
                        <div className='flex flex-row justify-content-between'>
                            <h4 style={{ color: "black", fontWeight: "bold" }}> Strengths </h4>
                            <Button
                                type="button"
                                label="View Strength"
                                className="View-Button mb-6"
                                onClick={handleViewStrengths}
                            />
                        </div>
                        <Chart type="bar" data={chartData} options={chartOptions} />
                    </div>
                    {/* Chart 2 */}
                    <div className='ml-1 col-5 card'>
                        <div className='flex flex-row justify-content-between'>
                            <h4 style={{ color: "black", fontWeight: "bold" }}> Goals </h4>
                            <Button
                                type="button"
                                label="View Goals"
                                className="View-Button mb-6"
                                onClick={handleViewGoals}
                            />
                        </div>
                        <Chart type="bar" data={chartData2} options={chartOptions2} />
                    </div>
                </div>
                {/* Row 2 */}
                <div className='mt-4 col-12 flex flex-row'>
                    {/* Chart 3 */}
                    <div className='mr-1 col-7 card'>
                        <div className='flex flex-row justify-content-between'>
                            <h4 style={{ color: "black", fontWeight: "bold" }}> Oppotunities for Growth </h4>
                            <Button
                                type="button"
                                label="View Opportunity Goals"
                                className="View-Button mb-6"
                                onClick={handleViewOppoGoals}
                            />
                        </div>

                        <div className='scroll-container2 mt-6 col-12 flex flex-row' style={{ marginLeft: "-14px" }}>
                            <div className='col-4 flex flex-column' style={{ border: "2px solid rgb(210 210 210)", borderRadius: "20px", padding: "20px" }}>
                                <div className='flex flex-row justify-content-between'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value39 / 5) * 100)} text={myData?.value39 ? `${Math.floor((myData?.value39 / 5) * 100)}%` : 'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value40 / 5) * 100)} text={myData?.value40 ? `${Math.floor((myData?.value40 / 5) * 100)}%` : 'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}>
                                        {myData?.dupvalue39 && myData.dupvalue39.length > 20 ? `${myData.dupvalue39.substring(0, 20)}...` : myData?.dupvalue39}
                                    </h5>
                                </div>
                            </div>

                            <div className='ml-3 col-4 flex flex-column' style={{ border: "2px solid rgb(210 210 210)", borderRadius: "20px", padding: "20px" }}>
                                <div className='flex flex-row justify-content-between'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value41 / 5) * 100)} text={myData?.value41 ? `${Math.floor((myData?.value41 / 5) * 100)}%` : 'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value42 / 5) * 100)} text={myData?.value42 ? `${Math.floor((myData?.value42 / 5) * 100)}%` : 'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}>
                                        {myData?.dupvalue41 && myData.dupvalue41.length > 20 ? `${myData.dupvalue41.substring(0, 20)}...` : myData?.dupvalue41}
                                    </h5>

                                </div>
                            </div>

                            <div className='ml-3 col-4 flex flex-column' style={{ border: "2px solid rgb(210 210 210)", borderRadius: "20px", padding: "20px" }}>
                                <div className='flex flex-row justify-content-between'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value43 / 5) * 100)} text={myData?.value43 ? `${Math.floor((myData?.value43 / 5) * 100)}%` : 'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value44 / 5) * 100)} text={myData?.value44 ? `${Math.floor((myData?.value44 / 5) * 100)}%` : 'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}>
                                        {myData?.dupvalue43 && myData.dupvalue43.length > 20 ? `${myData.dupvalue43.substring(0, 20)}...` : myData?.dupvalue43}
                                    </h5>
                                </div>
                            </div>

                            <div className='ml-3 col-4 flex flex-column' style={{ border: "2px solid rgb(210 210 210)", borderRadius: "20px", padding: "20px" }}>
                                <div className='flex flex-row justify-content-between'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value45 / 5) * 100)} text={myData?.value45 ? `${Math.floor((myData?.value45 / 5) * 100)}%` : 'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value46 / 5) * 100)} text={myData?.value46 ? `${Math.floor((myData?.value46 / 5) * 100)}%` : 'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}>
                                        {myData?.dupvalue45 && myData.dupvalue45.length > 20 ? `${myData.dupvalue45.substring(0, 20)}...` : myData?.dupvalue45}
                                    </h5>
                                </div>
                            </div>

                            <div className='ml-3 col-4 flex flex-column' style={{ border: "2px solid rgb(210 210 210)", borderRadius: "20px", padding: "20px" }}>
                                <div className='flex flex-row justify-content-between'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value47 / 5) * 100)} text={myData?.value47 ? `${Math.floor((myData?.value47 / 5) * 100)}%` : 'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={Math.floor((myData?.value48 / 5) * 100)} text={myData?.value48 ? `${Math.floor((myData?.value48 / 5) * 100)}%` : 'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}>
                                        {myData?.dupvalue47 && myData.dupvalue47.length > 20 ? `${myData.dupvalue47.substring(0, 20)}...` : myData?.dupvalue47}
                                    </h5>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Chart 4 */}
                    <div className='ml-1 col-5 card'>
                        <div className='flex flex-row justify-content-between'>
                            <h4 style={{ color: "black", fontWeight: "bold" }}> Holistic Life Goals </h4>
                            <Button
                                type="button"
                                label="View Holistic Goals"
                                className="View-Button mb-6"
                                onClick={handleViewHolisticGoals}
                            />
                        </div>
                        <div className='mt-2'>
                            <div className='flex flex-row justify-content-between' style={{ alignItems: "baseline", marginBottom: "-10px" }}>
                                <h5 style={{ color: 'black' }}>{myData?.u_thirdvalue1}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{myData?.u_value1 ? `${Math.floor((myData?.u_value1 / 5) * 100)}%` : 'N/A'}</h5>
                            </div>
                            <ProgressBar value={scaledValue1}></ProgressBar>
                        </div>

                        <div className=''>
                            <div className='flex flex-row justify-content-between' style={{ alignItems: "baseline", marginBottom: "-10px" }}>
                                <h5 style={{ color: 'black' }}>{myData?.u_thirdvalue3}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{myData?.u_value3 ? `${Math.floor((myData?.u_value3 / 5) * 100)}%` : 'N/A'}</h5>
                            </div>
                            <ProgressBar value={scaledValue2}></ProgressBar>
                        </div>

                        <div className=''>
                            <div className='flex flex-row justify-content-between' style={{ alignItems: "baseline", marginBottom: "-10px" }}>
                                <h5 style={{ color: 'black' }}>{myData?.u_thirdvalue5}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{myData?.u_value5 ? `${Math.floor((myData?.u_value5 / 5) * 100)}%` : 'N/A'}</h5>
                            </div>
                            <ProgressBar value={scaledValue3}></ProgressBar>
                        </div>

                        <div className=''>
                            <div className='flex flex-row justify-content-between' style={{ alignItems: "baseline", marginBottom: "-10px" }}>
                                <h5 style={{ color: 'black' }}>{myData?.u_thirdvalue7}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{myData?.u_value7 ? `${Math.floor((myData?.u_value7 / 5) * 100)}%` : 'N/A'}</h5>
                            </div>
                            <ProgressBar value={scaledValue4}></ProgressBar>
                        </div>

                        <div className=''>
                            <div className='flex flex-row justify-content-between' style={{ alignItems: "baseline", marginBottom: "-10px" }}>
                                <h5 style={{ color: 'black' }}>{myData?.u_thirdvalue9}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{myData?.u_value9 ? `${Math.floor((myData?.u_value9 / 5) * 100)}%` : 'N/A'}</h5>
                            </div>
                            <ProgressBar value={scaledValue5}></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EndAnaylytics
