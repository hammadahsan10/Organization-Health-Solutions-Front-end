import React from 'react'

const ViewGoals = ({ myData }) => {

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
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.dupvalue29}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue30}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue31}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue32}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue33}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue34}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue35}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue36}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue37}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue38}</td>
                    </tr>

                    {/* New */}
                    {myData.value39 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value39}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}

                    {myData.value40 ?

                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value40}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}

                    {myData.value41 ?

                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value41}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}

                    {myData.value42 ?

                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value42}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}

                    {myData.value43 ?

                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.value43}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}
                </tbody>
            </table>
        </div>
    )
}

export default ViewGoals
