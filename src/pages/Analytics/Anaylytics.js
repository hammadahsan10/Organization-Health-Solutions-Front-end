import React, { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import StartAnalytics from './StartAnalytics';
import MidAnaylytics from './MidAnalytics';
import EndAnalytics from './EndAnalytics';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const Anaylytics = ({ userId, userId3, myName, onHide }) => {

    const username = localStorage.getItem('username')
    const role_Name = localStorage.getItem('role_Name')
    const [filteredValue, setFilteredValue] = useState(1)
    const [filteredYear, setFilteredYear] = useState(1)

    const dateOptions = [

        { name: 'Start of the Year', id: 1 },
        { name: 'Mid of the Year', id: 2 },
        { name: 'End of the Year', id: 3 },
    ]

    const YearOptions = [
        { name: '2024', id: 1 },
    ]

    return (
        <>
            <div className='scroll-container card col-12 flex flex-row'>
                {role_Name == 'Individual' ?
                    <div className="col-6 flex-column">
                        <h2 style={{ fontWeight: "700", color: 'black' }}>Hey {username} !</h2>
                        <p style={{ fontSize: "14px", color: 'gray' }}>Hope you are having a good day</p>
                    </div>
                    :
                    <div className="col-6 flex flex-row">
                        <Button
                            tooltip='Go Back'
                            tooltipOptions={{position:"top"}}
                            className='back-btn'
                            icon='pi pi-arrow-left'
                            onClick={onHide}
                        >
                        </Button>
                        <h3 style={{ fontWeight: "700", color: 'black' }} className='mt-2 ml-2'>{myName} Survey Analytics</h3>
                    </div>
                }
                <div className='col-6 flex flex-row'>
                    <div className='col-3 flex flex-row'>
                        <div style={{ border: '2px solid rgb(208 208 208)', borderRadius: "10px", background: "transparent", padding: "8px 14px", display: 'flex', alignItems: 'center' }}>
                            <div style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: '#33CFFF',
                                marginRight: '5px',
                            }}></div>
                            <span style={{ color: 'black' }}>Me</span>
                        </div>

                        <div className='ml-3' style={{ border: '2px solid rgb(208 208 208)', borderRadius: "10px", background: "transparent", padding: "8px 14px", display: 'flex', alignItems: 'center' }}>
                            <div style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: '#009BCB',
                                marginRight: '5px',
                            }}></div>
                            <span style={{ color: 'black' }}>Manager</span>
                        </div>

                    </div>
                    <div className='col-1'>

                    </div>
                    <div className='col-2 ml-6 mr-4 mt-1'>
                        <Dropdown style={{ borderColor: "blue", border: "1px solid red" }} options={dateOptions} optionLabel='name' optionValue='id' placeholder='--Select Date--' value={filteredValue} onChange={(e) => setFilteredValue(e.value)} />
                    </div>
                    <div className='col-2 ml-8 mt-1'>
                        <Dropdown options={YearOptions} optionLabel='name' optionValue='id' placeholder='--Select Date--' value={filteredYear} onChange={(e) => setFilteredYear(e.value)} />
                    </div>
                </div>
            </div>

            {filteredValue === 1 ?
                <StartAnalytics
                    userId2={userId}
                    userId3={userId3}
                />
                :
                filteredValue === 2 ?

                    <MidAnaylytics
                        userId2={userId}
                        userId3={userId3}
                    />
                    :
                    filteredValue === 3
                        ?
                        <EndAnalytics
                            userId2={userId}
                            userId3={userId3}
                        />
                        :
                        null
            }
        </>
    )
}

export default Anaylytics
