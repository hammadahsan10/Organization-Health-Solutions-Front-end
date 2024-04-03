import React from 'react'

const ViewStrengths = ({ myData }) => {

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid lightgray', textAlign: "center" }}>
                <thead>
                    <tr style={{ backgroundColor: '#009bcb', color: 'white', border: '2px solid lightgray', textAlign: "center" }}>
                        <th style={{ border: '2px solid lightgray', padding: '20px', fontSize: "17px" }}>Strengths</th>
                        <th style={{ border: '2px solid lightgray', padding: '20px', fontSize: "17px" }}>Mismanagement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData?.dupvalue9}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue10}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue11}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue12}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue13}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue14}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue15}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue16}</td>
                    </tr>
                    <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                        <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue17}</td>
                        <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue18}</td>
                    </tr>

                    {myData?.value8 == '10' ?
                        <>
                            <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                                <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue19}</td>
                                <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue20}</td>
                            </tr>
                            <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                                <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue21}</td>
                                <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue22}</td>
                            </tr>
                            <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                                <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue23}</td>
                                <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue24}</td>
                            </tr>
                            <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                                <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue25}</td>
                                <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue26}</td>
                            </tr>
                            <tr style={{ border: '2px solid lightgray', textAlign: "left", color: "black" }}>
                                <td style={{ border: '2px solid lightgray', padding: '50px', fontWeight: "600" }}>{myData.dupvalue27}</td>
                                <td style={{ border: '2px solid lightgray', padding: '50px' }}>{myData?.dupvalue28}</td>
                            </tr>
                        </>
                        :
                        null}

                </tbody>
            </table>
        </div>
    )
}

export default ViewStrengths
