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
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.dupvalue44}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue45}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue46}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue47}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue48}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue49}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue50}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue51}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue52}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue53}</td>
                    </tr>

                    {/* New */}
                    {myData.value54 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value54}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}

                    {myData.value55 ?

                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value55}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}

                    {myData.value56 ?

                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value56}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}

                    {myData.value57 ?

                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value57}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}

                    {myData.value58 ?

                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value58}</td>
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
