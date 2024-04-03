import React from 'react'

const ViewHolisticGoals = ({ myData }) => {

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid lightgray', textAlign: "center" }}>
                <thead>
                    <tr style={{ backgroundColor: '#009bcb', color: 'white', border: '2px solid lightgray', textAlign: "center" }}>
                        <th style={{ border: '2px solid lightgray', padding: '20px', fontSize: "17px" }}>Holistic Goals</th>
                        <th style={{ border: '2px solid lightgray', padding: '20px', fontSize: "17px" }}>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.u_thirdvalue1}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.u_thirdvalue2}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.u_thirdvalue3}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.u_thirdvalue4}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.u_thirdvalue5}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.u_thirdvalue6}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.u_thirdvalue7}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.u_thirdvalue8}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.u_thirdvalue9}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.u_thirdvalue10}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ViewHolisticGoals
