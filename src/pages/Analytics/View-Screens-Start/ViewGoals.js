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
                    {myData?.value29 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value29}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}
                    {myData?.value30 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value30}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}
                    {myData?.value31 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value31}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}
                    {myData?.value32 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value32}</td>
                            <td style={{ border: '2px solid lightgray', padding: '50px' }}></td>
                        </tr>
                        :
                        null}
                    {myData?.value33 ?
                        <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                            <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.value33}</td>
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
