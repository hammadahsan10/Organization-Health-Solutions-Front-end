

import { InputText } from 'primereact/inputtext'
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { handlePutRequest } from '../../../../services/PutTemplate';
import { useDispatch } from 'react-redux';

const Form8 = ({ myData, headers, formData, handleChange, goToPrevious }) => {

  const role_Name = localStorage.getItem('role_Name')
  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    value59: Yup.mixed().required("This field is required."),
    value60: Yup.mixed().required("This field is required."),
    value61: Yup.mixed().required("This field is required."),
  });

  const formik = useFormik({

    validationSchema: validationSchema,
    initialValues: {
      value59: "",
      value60: "",
      value61: "",
    },

    onSubmit: async (data) => {

      const obj = {
        key59: myData?.key59,
        value59: formik.values.value59,
        key60: myData?.key60,
        value60: formik.values.value60,
        key61: myData?.key61,
        value61: formik.values.value61,
      }

      const updatedFormData = {
        ...formData,
        form8Data: obj
      };

      handleChange(updatedFormData);

      const flattenedData = Object.keys(updatedFormData).reduce((result, formKey) => {
        const formData = updatedFormData[formKey];

        Object.keys(formData).forEach((key) => {
          result[key] = formData[key];
        });

        return result;
      }, {});

      const flattenedData2 =
      {
        ...flattenedData,
        header1: headers[0]?.name,
        header2: headers[1]?.name,
        header3: headers[2]?.name,
        header4: headers[3]?.name,
        header5: headers[4]?.name,
        header6: headers[5]?.name,
        header7: headers[6]?.name,
        header8: headers[7]?.name,
        company: myData?.company?._id
      }

      console.log("flattenedData2", flattenedData2);
      const response = await dispatch(handlePutRequest(flattenedData2, `/api/userSurvey/update/${myData?._id}`, true, true));
      if (response) {
        localStorage.setItem('getSurveyListForMid', true)
      }

    },
  });

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  useEffect(() => {
    if (role_Name == "Manager" || role_Name == "Admin" || role_Name == "Individual") {

      formik.setFieldValue('value59', myData?.value59)
      formik.setFieldValue('value60', myData?.value60)
      formik.setFieldValue('value61', myData?.value61)

    }

  }, [role_Name])

  return (

    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-fluid formgrid grid pl-5 pr-5">

          <div style={{ padding: '6px', width: "100%" }}>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <label>{myData?.key59}</label>
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name === 'Manager' ? true : false} id='value59' name='value59' value={formik.values.value59} onChange={formik.handleChange} cancel={false} />
                </span>
                {getFormErrorMessage("value59")}
              </div>
            </div>
          </div>

          <div style={{ padding: '6px', width: "100%" }}>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <label>{myData?.key60}</label>
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key60} className="p-inputtext-sm" id="value60" name="value60" value={formik.values.value60} onChange={formik.handleChange} type="text" />
                </span>
                {getFormErrorMessage("value60")}
              </div>
            </div>
          </div>

          <div style={{ padding: '6px', width: "100%" }}>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <label>{myData?.key61}</label>
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key61} className="p-inputtext-sm" id="value61" name="value61" value={formik.values.value61} onChange={formik.handleChange} type="text" />
                </span>
                {getFormErrorMessage("value61")}
              </div>
            </div>
          </div>

          <div className='col-12 flex flex-row text-center mt-4 pb-2' style={{ justifyContent: "center" }}>
            <Button
              className="View-Button w-2"
              label="Back"
              onClick={goToPrevious}
              type='button'
            />
            <Button
              disabled={role_Name == 'Manager' ? true : false}
              className="Save-Button w-3 ml-2"
              label="Submit Survey"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form8
