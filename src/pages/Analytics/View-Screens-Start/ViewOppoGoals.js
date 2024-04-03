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
                    {myData?.value34 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value34}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}
                    {myData?.value35 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value35}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}
                    {myData?.value36 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value36}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}
                    {myData?.value37 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value37}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}
                    {myData?.value38 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value38}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}

                </tbody>
            </table>
        </div>
    )
}

export default ViewOppoGoals
