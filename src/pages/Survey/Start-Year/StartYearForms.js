import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import Form1 from './StartForms/Form1';
import Form2 from './StartForms/Form2';
import Form3 from './StartForms/Form3';
import Form4 from './StartForms/Form4';
import Form5 from './StartForms/Form5';
import { useHistory, useLocation } from 'react-router-dom';

const StartYearForms = () => {

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
    });

    const headerList =
        [
            { name: myData?.header1, id: 1 },
            { name: myData?.header2, paragraph: 'Please rate your Top Clifton Strengths based on Management, Use and Value-Add. If there were any areas of Mismanagement, please provide a brief explanation and example', id: 2 },
            { name: myData?.header3, paragraph: 'Be sure to make your goals specific, measurable, attainable, relevant, and timebound so that we can track them together.', id: 3 },
            { name: myData?.header4, paragraph: 'Outline areas within the organization and team where you would like to grow and develop practically.', id: 4 },
            { name: myData?.header5, paragraph: 'Think about personal areas of growth and goals you would like to be held accountable for. (Optional)', id: 5 },
        ]

    let currentHeader = headerList.find(item => item.id === currentStep);

    const goToPrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = data => {
        setFormData(data);
        setCurrentStep(currentStep + 1);

        if (currentStep === 5) {
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
                    Page {currentStep} of 5
                </div>
            </Dialog>
            <div className='text-center'>
                <h2 style={{ color: "black", fontWeight: "700" }}> Start of the Year Survey </h2>
                <h5 style={{ color: "gray", marginTop: "-10px" }}> Please answer the following questions to help us access your performance </h5>
            </div>
        </>
    );
};

export default StartYearForms;
