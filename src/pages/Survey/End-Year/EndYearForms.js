import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { useHistory, useLocation } from 'react-router-dom';
import Form1 from './EndForms/Form1';
import Form2 from './EndForms/Form2';
import Form3 from './EndForms/Form3';
import Form4 from './EndForms/Form4';
import Form5 from './EndForms/Form5';
import Form6 from './EndForms/Form6';

const EndYearForms = () => {

    const location = useLocation();
    const history = useHistory()
    const myData = location.state?.additionalProp;
    const role_Name = localStorage.getItem('role_Name')

    const [visible, setVisible] = useState(true);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        form1Data: '',
        form2Data: '',
        form3Data: '',
        form4Data: '',
        form5Data: '',
        form6Data: '',
    });

    const headerList =
        [
            { name: myData?.header1, id: 1 },
            { name: myData?.header2, paragraph: 'Please rate your Top 5 Clifton Strengths based on Management, Use and Value-Add. If there were any areas of Mismanagement, please provide a brief explanation and example.', id: 2 },
            { name: myData?.header3, paragraph: '(Collectively agreed upon)', id: 3 },
            { name: myData?.header4, paragraph: '(Collectively agreed upon)', id: 4 },
            { name: myData?.header5, paragraph: 'Think about personal areas of growth and goals you would like to be held accountable for. (Optional)', id: 5 },
            { name: myData?.header6, paragraph: 'Use the section below to give feedback on challenged as wins in over the last 6 months.', id: 6 },
        ]

    let currentHeader = headerList.find(item => item.id === currentStep);

    const goToPrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = data => {
        setFormData(data);
        setCurrentStep(currentStep + 1);

        if (currentStep === 6) {
            setVisible(false);
            {
                role_Name === 'Admin'
                    ?
                    history.push('./companyinfo')
                    :
                    history.push('./surveys')
            }
        }

        currentHeader = headerList.find(item => item.id === currentStep + 1);
    };


    const renderForm = () => {

        if (!visible) {
            return null;
        }

        switch (currentStep) {

            case 1:
                return <Form1 goToPrevious={goToPrevious} headers={headerList} myData={myData} formData={formData} handleChange={handleChange} />;
            case 2:
                return <Form2 goToPrevious={goToPrevious} headers={headerList} myData={myData} formData={formData} handleChange={handleChange} />;
            case 3:
                return <Form3 goToPrevious={goToPrevious} headers={headerList} myData={myData} formData={formData} handleChange={handleChange} />;
            case 4:
                return <Form4 goToPrevious={goToPrevious} headers={headerList} myData={myData} formData={formData} handleChange={handleChange} />;
            case 5:
                return <Form5 goToPrevious={goToPrevious} headers={headerList} myData={myData} formData={formData} handleChange={handleChange} />;
            case 6:
                return <Form6 goToPrevious={goToPrevious} headers={headerList} myData={myData} formData={formData} handleChange={handleChange} />;
            default:
                return null;
        }
    };

    const onHide = () => {
        setVisible(false)
        {
            role_Name === 'Admin'
                ?
                history.push('./companyinfo')
                :
                history.push('./surveys')
        }
    }

    const Header = () => {
        return (
            <>
                <div className="text-center">
                    <h4 style={{ fontWeight: "700", color: "black" }}>{currentHeader ? currentHeader.name : ''}</h4>
                    <p style={{ color: "gray", fontSize: "14px", fontWeight: "500", width: "75%", margin: "0 auto" }}>{currentHeader ? currentHeader?.paragraph : ''}</p>
                    <div className="mt-2">
                        <hr />
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Dialog header={Header} style={{ width: '45vw', marginLeft: "290px", boxShadow: '0 15px 20px -5px gray, 0 12px 8px -8px #009bcb' }} visible={visible} onHide={onHide}>
                {renderForm()}
                <div className="footer">
                    Page {currentStep} of 6
                </div>
            </Dialog>
            <div className='text-center'>
                <h2 style={{ color: "black", fontWeight: "700" }}> End of the Year Survey </h2>
                <h5 style={{ color: "gray", marginTop: "-10px" }}> Please answer the following questions to help us access your performance </h5>
            </div>
        </>
    );
};

export default EndYearForms;
