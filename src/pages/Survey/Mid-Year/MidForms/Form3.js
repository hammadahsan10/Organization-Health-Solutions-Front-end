

import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const Form3 = ({ myData, formData, handleChange, goToPrevious }) => {

  const role_Name = localStorage.getItem('role_Name')

  const validationSchema = Yup.object().shape({

    value29: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value30: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value31: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value32: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value33: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value34: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value35: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value36: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    value37: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    value38: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,

    dupvalue29: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue30: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue31: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue32: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue33: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue34: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue35: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue36: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,
    dupvalue37: role_Name == 'Individual' ? Yup.mixed().required("This field is required.") : null,
    dupvalue38: role_Name == 'Admin' ? Yup.mixed().required("This field is required.") : null,

  });

  const formik = useFormik({

    validationSchema: validationSchema,
    initialValues: {
      value29: "",
      value30: "",
      value31: "",
      value32: "",
      value33: "",
      value34: "",
      value35: "",
      value36: "",
      value37: "",
      value38: "",

      dupvalue29: "",
      dupvalue30: "",
      dupvalue31: "",
      dupvalue32: "",
      dupvalue33: "",
      dupvalue34: "",
      dupvalue35: "",
      dupvalue36: "",
      dupvalue37: "",
      dupvalue38: "",
    },

    onSubmit: async (data) => {

      const obj = {
        key29: myData?.key29,
        value29: formik.values.value29,
        dupvalue29: formik.values.dupvalue29,

        key30: myData?.key30,
        value30: formik.values.value30,
        dupvalue30: formik.values.dupvalue30,

        key31: myData?.key31,
        value31: formik.values.value31,
        dupvalue31: formik.values.dupvalue31,

        key32: myData?.key32,
        value32: formik.values.value32,
        dupvalue32: formik.values.dupvalue32,

        key33: myData?.key33,
        value33: formik.values.value33,
        dupvalue33: formik.values.dupvalue33,

        key34: myData?.key34,
        value34: formik.values.value34,
        dupvalue34: formik.values.dupvalue34,

        key35: myData?.key35,
        value35: formik.values.value35,
        dupvalue35: formik.values.dupvalue35,

        key36: myData?.key36,
        value36: formik.values.value36,
        dupvalue36: formik.values.dupvalue36,

        key37: myData?.key37,
        value37: formik.values.value37,
        dupvalue37: formik.values.dupvalue37,

        key38: myData?.key38,
        value38: formik.values.value38,
        dupvalue38: formik.values.dupvalue38,

      }

      handleChange({
        ...formData,
        form3Data: obj
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
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key29} className="p-inputtext-sm" id="dupvalue29" name="dupvalue29" value={formik.values.dupvalue29} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue29")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name === 'Manager' ? true : false} id='value29' name='value29' value={formik.values.value29} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value29")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key30} className="p-inputtext-sm" id="dupvalue30" name="dupvalue30" value={formik.values.dupvalue30} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue30")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name === 'Manager' || role_Name === 'Individual' ? true : false} id='value30' name='value30' value={formik.values.value30} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value30")}
              </div>
            </div>
          </div>

          {/* 2 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key31} className="p-inputtext-sm" id="dupvalue31" name="dupvalue31" value={formik.values.dupvalue31} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue31")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value31' name='value31' value={formik.values.value31} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value31")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key32} className="p-inputtext-sm" id="dupvalue32" name="dupvalue32" value={formik.values.dupvalue32} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue32")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value32' name='value32' value={formik.values.value32} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value32")}
              </div>
            </div>
          </div>

          {/* 3 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key33} className="p-inputtext-sm" id="dupvalue33" name="dupvalue33" value={formik.values.dupvalue33} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue33")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value33' name='value33' value={formik.values.value33} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value33")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key34} className="p-inputtext-sm" id="dupvalue34" name="dupvalue34" value={formik.values.dupvalue34} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue34")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value34' name='value34' value={formik.values.value34} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value34")}
              </div>
            </div>
          </div>

          {/* 4 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key35} className="p-inputtext-sm" id="dupvalue35" name="dupvalue35" value={formik.values.dupvalue35} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue35")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value35' name='value35' value={formik.values.value35} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value35")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key36} className="p-inputtext-sm" id="dupvalue36" name="dupvalue36" value={formik.values.dupvalue36} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue36")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value36' name='value36' value={formik.values.value36} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value36")}
              </div>
            </div>
          </div>

          {/* 5 */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: "100%" }} className='mt-4'>
            <div className='col-12 flex flex-row mt-4'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputText disabled={role_Name == 'Manager' ? true : false} placeholder={myData?.key37} className="p-inputtext-sm" id="dupvalue37" name="dupvalue37" value={formik.values.dupvalue37} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue37")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' ? true : false} id='value37' name='value37' value={formik.values.value37} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Me' /> </span>
                </span>
                {getFormErrorMessage("value37")}
              </div>
            </div>

            <div className='col-12 flex flex-row'>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <InputTextarea rows={3} disabled={role_Name == 'Manager' || role_Name == 'Individual' ? true : false} placeholder={myData?.key38} className="p-inputtext-sm" id="dupvalue38" name="dupvalue38" value={formik.values.dupvalue38} onChange={formik.handleChange} type="text" />
                {getFormErrorMessage("dupvalue38")}
              </div>
              <div className="field col-12 md:col-6 pl-6 pr-6">
                <span className='flex flex-row'>
                  <Rating disabled={role_Name == 'Manager' || role_Name === 'Individual' ? true : false} id='value38' name='value38' value={formik.values.value38} onChange={formik.handleChange} cancel={false} />
                  <span className='ml-3' style={{ marginTop: "-2px" }}> <Badge value='Manager' /> </span>
                </span>
                {getFormErrorMessage("value38")}
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

export default Form3
