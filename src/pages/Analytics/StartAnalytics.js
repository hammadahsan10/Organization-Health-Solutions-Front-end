import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { handleGetRequest } from '../../services/GetTemplate';
import { useDispatch } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from 'primereact/button';
import ViewStrengths from './View-Screens-Start/ViewStrengths';
import { Dialog } from 'primereact/dialog';
import { CircularProgressbar } from 'react-circular-progressbar';
import ViewGoals from './View-Screens-Start/ViewGoals';
import ViewOppoGoals from './View-Screens-Start/ViewOppoGoals';
import { ProgressBar } from 'primereact/progressbar';
import ViewHolisticGoals from './View-Screens-Start/ViewHolisticGoals';


const StartAnaylytics = ({ userId2, userId3 }) => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [myData, setMyData] = useState([]);
    const [isActive, setIsActive] = useState(false)
    const [chartData2, setChartData2] = useState({});
    const [chartOptions2, setChartOptions2] = useState({});

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
                },
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
            labels: ['', '', '', '', '', '', '', '', '', ''],
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
                    data: ['', '', '', '', '', '', '', '', '', '']
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
            const result = response && response.filter(item => item.Name == 'Start of the Year Survey')
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
            getChart2Data()
        }

    }, [myData]);

    console.log("mydat", myData)

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
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}></h5>
                                </div>
                            </div>

                            <div className='ml-3 col-4 flex flex-column' style={{ border: "2px solid rgb(210 210 210)", borderRadius: "20px", padding: "20px" }}>
                                <div className='flex flex-row justify-content-between'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}></h5>
                                </div>
                            </div>

                            <div className='ml-3 col-4 flex flex-column' style={{ border: "2px solid rgb(210 210 210)", borderRadius: "20px", padding: "20px" }}>
                                <div className='flex flex-row justify-content-between'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}></h5>
                                </div>
                            </div>

                            <div className='ml-3 col-4 flex flex-column' style={{ border: "2px solid rgb(210 210 210)", borderRadius: "20px", padding: "20px" }}>
                                <div className='flex flex-row justify-content-between'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}></h5>
                                </div>
                            </div>

                            <div className='ml-3 col-4 flex flex-column' style={{ border: "2px solid rgb(210 210 210)", borderRadius: "20px", padding: "20px" }}>
                                <div className='flex flex-row justify-content-between'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="light-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>

                                    <div style={{ width: '80px', height: '80px' }}>
                                        <CircularProgressbar className="dark-blue-progress-bar" strokeWidth={12} value={'N/A'} text={'N/A'} />
                                    </div>
                                </div>
                                <div className='flex-column mt-3 text-center' style={{ marginBottom: "-18px" }}>
                                    <h5 style={{ color: 'black' }}></h5>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <h5 style={{ color: 'black' }}>{'N/A'}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{'N/A'}</h5>
                            </div>
                            <ProgressBar value=''></ProgressBar>
                        </div>

                        <div className=''>
                            <div className='flex flex-row justify-content-between' style={{ alignItems: "baseline", marginBottom: "-10px" }}>
                                <h5 style={{ color: 'black' }}>{'N/A'}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{'N/A'}</h5>
                            </div>
                            <ProgressBar value=''></ProgressBar>
                        </div>

                        <div className=''>
                            <div className='flex flex-row justify-content-between' style={{ alignItems: "baseline", marginBottom: "-10px" }}>
                                <h5 style={{ color: 'black' }}>{'N/A'}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{'N/A'}</h5>
                            </div>
                            <ProgressBar value=''></ProgressBar>
                        </div>

                        <div className=''>
                            <div className='flex flex-row justify-content-between' style={{ alignItems: "baseline", marginBottom: "-10px" }}>
                                <h5 style={{ color: 'black' }}>{'N/A'}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{'N/A'}</h5>
                            </div>
                            <ProgressBar value=''></ProgressBar>
                        </div>

                        <div className=''>
                            <div className='flex flex-row justify-content-between' style={{ alignItems: "baseline", marginBottom: "-10px" }}>
                                <h5 style={{ color: 'black' }}>{'N/A'}</h5>
                                <h5 style={{ color: '#33CFFF' }}>{'N/A'}</h5>
                            </div>
                            <ProgressBar value=''></ProgressBar>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StartAnaylytics
