import React, { useState } from 'react'
//import regex patern
import FormValidations from '../../Validation/FormValidations'


function ValidityHoc(UpdateComponent) {


  const LogicInputs = () => {

    const [NameErr, setNameErr] = useState(null);
    const [EmailErr, setEmailErr] = useState(null);
    const [PhoneErr, setPhoneErr] = useState(null);
    const [Values, setValues] = useState({ name: '', email: '', phone: '' });


    //Actions
    const ValidationHandeler = (e) => {
      setValues({ ...Values, [e.target.name]: e.target.value });

      if (e.target.name === "name") {
        FormValidations.ValidName.test(e.target.value) ? setNameErr(true) : setNameErr(null);
      }

      if (e.target.name === "email") {
        FormValidations.ValidEmail.test(e.target.value) ? setEmailErr(true) : setEmailErr(null);
      }

      if (e.target.name === "phone") {
        FormValidations.ValidPhone.test(e.target.value) ? setPhoneErr(true) : setPhoneErr(null);
      }
    };


    const InputProps =
      [
        {
          name: 'name',
          placeholder: "Enter Name",
          Values: Values.name,
          StateErr: NameErr,
          NoteText: "Max 12 characters"
        },

        {
          name: 'email',
          placeholder: "Enter Email",
          Values: Values.email,
          StateErr: EmailErr,
          NoteText: "Mini 8 characters and max 30 with @"
        },

        {
          name: 'phone',
          placeholder: "Enter Phone 09..",
          Values: Values.phone,
          StateErr: PhoneErr,
          NoteText: "min-max 11 digit"
        },
      ]

    return (
      <>
        <UpdateComponent
          setValues={setValues}
          Values={Values}
          NameErr={NameErr}
          EmailErr={EmailErr}
          PhoneErr={PhoneErr}
          ValidationHandeler={ValidationHandeler}
          InputProps={InputProps} />
      </>
    )
  }

  return LogicInputs
}


export default ValidityHoc;

