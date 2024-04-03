import React from 'react'

const ViewOppoGoals = ({ myData }) => {

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid lightgray', textAlign: "center" }}>
                <thead>
                    <tr style={{ backgroundColor: '#009bcb', color: 'white', border: '2px solid lightgray', textAlign: "center" }}>
                        <th style={{ border: '2px solid lightgray', padding: '20px', fontSize: "17px" }}>Goals</th>
                        <th style={{ border: '2px solid lightgray', padding: '20px', fontSize: "17px" }}>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.dupvalue39}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue40}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue41}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue42}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue43}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue44}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue45}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue46}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue47}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue48}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ViewOppoGoals
