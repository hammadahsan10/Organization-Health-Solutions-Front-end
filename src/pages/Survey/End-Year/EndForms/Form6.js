

import { InputText } from 'primereact/inputtext'
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { handlePutRequest } from '../../../../services/PutTemplate';
import { useDispatch } from 'react-redux';

const Form6 = ({ myData, headers, formData, handleChange, goToPrevious }) => {

  const role_Name = localStorage.getItem('role_Name')
  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    value49: Yup.mixed().required("This field is required."),
    value50: Yup.mixed().required("This field is required."),
    value51: Yup.mixed().required("This field is required."),
  });

  const formik = useFormik({

    validationSchema: validationSchema,
    initialValues: {
      value49: "",
      value50: "",
      value51: "",
    },

    onSubmit: async (data) => {

      const obj = {
        key49: myData?.key49,
        value49: formik.values.value49,
        key50: myData?.key50,
        value50: formik.values.value50,
        key51: myData?.key51,
        value51: formik.values.value51,
      }

      const updatedFormData = {
        ...formData,
        form6Data: obj
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
      formik.setFieldValue('value49', myData?.value49)
      formik.setFieldValue('value50', myData?.value50)
      formik.setFieldValue('value51', myData?.value51)
    }

  }, [role_Name])

  return (

    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-fluid formgrid grid pl-5 pr-5">

          <div style={{ padding: '6px', width: "100%" }}>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <label>{myData?.key49}</label>
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name === 'Manager' ? true : false} id='value49' name='value49' value={formik.values.value49} onChange={formik.handleChange} cancel={false} />
                </span>
                {getFormErrorMessage("value49")}
              </div>
            </div>
          </div>

          <div style={{ padding: '6px', width: "100%" }}>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <label>{myData?.key50}</label>
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key50} className="p-inputtext-sm" id="value50" name="value50" value={formik.values.value50} onChange={formik.handleChange} type="text" />
                </span>
                {getFormErrorMessage("value50")}
              </div>
            </div>
          </div>

          <div style={{ padding: '6px', width: "100%" }}>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <label>{myData?.key51}</label>
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key51} className="p-inputtext-sm" id="value51" name="value51" value={formik.values.value51} onChange={formik.handleChange} type="text" />
                </span>
                {getFormErrorMessage("value51")}
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
              className="Save-Button w-2 ml-2"
              label="Next"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form6
