

import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const Form4 = ({ myData, formData, handleChange, goToPrevious }) => {

  const role_Name = localStorage.getItem('role_Name')

  const validationSchema = Yup.object().shape({

    value39: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value40: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value41: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value42: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value43: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value44: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value45: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value46: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value47: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value48: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,

    dupvalue39: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue40: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue41: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue42: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue43: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue44: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue45: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue46: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue47: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue48: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,

  });

  const formik = useFormik({

    validationSchema: validationSchema,
    initialValues: {
      value39: "",
      value40: "",
      value41: "",
      value42: "",
      value43: "",
      value44: "",
      value45: "",
      value46: "",
      value47: "",
      value48: "",

      dupvalue39: "",
      dupvalue40: "",
      dupvalue41: "",
      dupvalue42: "",
      dupvalue43: "",
      dupvalue44: "",
      dupvalue45: "",
      dupvalue46: "",
      dupvalue47: "",
      dupvalue48: "",
    },

    onSubmit: async (data) => {

      const obj = {
        key39: myData?.key39,
        value39: formik.values.value39,
        dupvalue39: formik.values.dupvalue39,

        key40: myData?.key40,
        value40: formik.values.value40,
        dupvalue40: formik.values.dupvalue40,

        key41: myData?.key41,
        value41: formik.values.value41,
        dupvalue41: formik.values.dupvalue41,

        key42: myData?.key42,
        value42: formik.values.value42,
        dupvalue42: formik.values.dupvalue42,

        key43: myData?.key43,
        value43: formik.values.value43,
        dupvalue43: formik.values.dupvalue43,

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

      }

      handleChange({
        ...formData,
        form4Data: obj
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
          <h6 style={{ color: "black", fontWeight: "bold" }}> Opportunities </h6>
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }}>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key39} className="p-inputtext-sm" id="dupvalue39" name="dupvalue39" value={formik.values.dupvalue39} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue39")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name === 'Manager' ? true : false} id='value39' name='value39' value={formik.values.value39} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value39")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key40} className="p-inputtext-sm" id="dupvalue40" name="dupvalue40" value={formik.values.dupvalue40} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue40")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='value40' name='value40' value={formik.values.value40} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value40")}
              </div>
            </div>
          </div>

          {/* 2 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key41} className="p-inputtext-sm" id="dupvalue41" name="dupvalue41" value={formik.values.dupvalue41} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue41")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value41' name='value41' value={formik.values.value41} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value41")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key42} className="p-inputtext-sm" id="dupvalue42" name="dupvalue42" value={formik.values.dupvalue42} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue42")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value42' name='value42' value={formik.values.value42} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value42")}
              </div>
            </div>
          </div>

          {/* 3 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key43} className="p-inputtext-sm" id="dupvalue43" name="dupvalue43" value={formik.values.dupvalue43} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue43")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value43' name='value43' value={formik.values.value43} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value43")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key44} className="p-inputtext-sm" id="dupvalue44" name="dupvalue44" value={formik.values.dupvalue44} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue44")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value44' name='value44' value={formik.values.value44} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value44")}
              </div>
            </div>
          </div>

          {/* 4 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key45} className="p-inputtext-sm" id="dupvalue45" name="dupvalue45" value={formik.values.dupvalue45} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue45")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value45' name='value45' value={formik.values.value45} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value45")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key46} className="p-inputtext-sm" id="dupvalue46" name="dupvalue46" value={formik.values.dupvalue46} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue46")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value46' name='value46' value={formik.values.value46} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value46")}
              </div>
            </div>
          </div>

          {/* 5 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key47} className="p-inputtext-sm" id="dupvalue47" name="dupvalue47" value={formik.values.dupvalue47} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue47")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value47' name='value47' value={formik.values.value47} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value47")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key48} className="p-inputtext-sm" id="dupvalue48" name="dupvalue48" value={formik.values.dupvalue48} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue48")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value48' name='value48' value={formik.values.value48} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value48")}
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

export default Form4
