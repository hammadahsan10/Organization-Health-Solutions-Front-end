

import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const Form5 = ({ myData, formData, handleChange, goToPrevious }) => {

  const role_Name = localStorage.getItem('role_Name')
  const validationSchema = Yup.object().shape({

    value44: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value45: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value46: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value47: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value48: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value49: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value50: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value51: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value52: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value53: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,

    dupvalue44: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue45: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue46: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue47: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue48: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue49: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue50: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue51: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue52: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue53: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,

  });

  const formik = useFormik({

    validationSchema: validationSchema,
    initialValues: {
      value44: "",
      value45: "",
      value46: "",
      value47: "",
      value48: "",
      value49: "",
      value50: "",
      value51: "",
      value52: "",
      value53: "",

      dupvalue44: "",
      dupvalue45: "",
      dupvalue46: "",
      dupvalue47: "",
      dupvalue48: "",
      dupvalue49: "",
      dupvalue50: "",
      dupvalue51: "",
      dupvalue52: "",
      dupvalue53: "",
    },

    onSubmit: async (data) => {

      const obj = {
        key44: myData?.key44,
        value44: formik.values.value44,
        dupvalue44: formik.values.dupvalue44,

        key45: myData?.key45,
        value45: formik.values.value45,
        dupvalue45: formik.values.dupvalue45,

        key46: myData?.key46,
        value46: formik.values.value46,
        dupvalue46: formik.values.dupvalue46,

        key47: myData?.key47,
        value47: formik.values.value47,
        dupvalue47: formik.values.dupvalue47,

        key48: myData?.key48,
        value48: formik.values.value48,
        dupvalue48: formik.values.dupvalue48,

        key49: myData?.key49,
        value49: formik.values.value49,
        dupvalue49: formik.values.dupvalue49,

        key50: myData?.key50,
        value50: formik.values.value50,
        dupvalue50: formik.values.dupvalue50,

        key51: myData?.key51,
        value51: formik.values.value51,
        dupvalue51: formik.values.dupvalue51,

        key52: myData?.key52,
        value52: formik.values.value52,
        dupvalue52: formik.values.dupvalue52,

        key53: myData?.key53,
        value53: formik.values.value53,
        dupvalue53: formik.values.dupvalue53,

      }

      handleChange({
        ...formData,
        form5Data: obj
      })

    },
  });

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  useEffect(() => {
    if (role_Name == "Manager" || role_Name == "Admin" || role_Name == "Individual") {

      const valuePropertyNames = Object.keys(myData)
        .filter(key => key.startsWith("value"));

      valuePropertyNames.forEach(key => {
        formik.setFieldValue(key, myData[key]);
      });

      const dupValuePropertyNames = valuePropertyNames.map(key => `dup${key}`);
      dupValuePropertyNames.forEach(key => {
        formik.setFieldValue(key, myData[key]);
      });
    }

  }, [role_Name])

  return (

    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-fluid formgrid grid pl-5 pr-5">

          {/* 1 */}
          <h6 style={{ color: "black", fontWeight: "bold" }}> Add Notes and Comments </h6>
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }}>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key44} className="p-inputtext-sm" id="dupvalue44" name="dupvalue44" value={formik.values.dupvalue44} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue44")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name === 'Manager' ? true : false} id='value44' name='value44' value={formik.values.value44} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value44")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key45} className="p-inputtext-sm" id="dupvalue45" name="dupvalue45" value={formik.values.dupvalue45} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue45")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='value45' name='value45' value={formik.values.value45} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value45")}
              </div>
            </div>
          </div>

          {/* 2 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key46} className="p-inputtext-sm" id="dupvalue46" name="dupvalue46" value={formik.values.dupvalue46} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue46")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value46' name='value46' value={formik.values.value46} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value46")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key47} className="p-inputtext-sm" id="dupvalue47" name="dupvalue47" value={formik.values.dupvalue47} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue47")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value47' name='value47' value={formik.values.value47} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value47")}
              </div>
            </div>
          </div>

          {/* 3 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key48} className="p-inputtext-sm" id="dupvalue48" name="dupvalue48" value={formik.values.dupvalue48} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue48")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value48' name='value48' value={formik.values.value48} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value48")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key49} className="p-inputtext-sm" id="dupvalue49" name="dupvalue49" value={formik.values.dupvalue49} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue49")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value49' name='value49' value={formik.values.value49} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value49")}
              </div>
            </div>
          </div>

          {/* 4 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key50} className="p-inputtext-sm" id="dupvalue50" name="dupvalue50" value={formik.values.dupvalue50} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue50")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value50' name='value50' value={formik.values.value50} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value50")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key51} className="p-inputtext-sm" id="dupvalue51" name="dupvalue51" value={formik.values.dupvalue51} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue51")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value51' name='value51' value={formik.values.value51} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value51")}
              </div>
            </div>
          </div>

          {/* 5 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key52} className="p-inputtext-sm" id="dupvalue52" name="dupvalue52" value={formik.values.dupvalue52} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue52")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value52' name='value52' value={formik.values.value52} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value52")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key53} className="p-inputtext-sm" id="dupvalue53" name="dupvalue53" value={formik.values.dupvalue53} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue53")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value53' name='value53' value={formik.values.value53} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value53")}
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

export default Form5
