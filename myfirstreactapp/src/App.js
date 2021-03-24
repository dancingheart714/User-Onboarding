import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import * as yup from "yup";
import FormSchema from "./FormSchema";
import Form from "./Form";

const initialFormValues = {
  //text inputs
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  //checkbox
  terms: false
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms: ""
};

const initialUser = [];
const initialDisabled = true;


export default function App() {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

const getUser = () => {
  axios
  .get("https://reqres.in/api/users")
  .then((res) => {
    setUser(res.data.data);
    console.log("FIRED")
  })
  .catch((err) => {
    console.log(err);
  });
};

const postNewUser = (newUser) => { 
  axios
    .post("https://reqres.in/api/users", newUser)
    .then((res) => {
      
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setFormValues(initialFormValues))
};


const inputChange = event => {
  const {name, value} = event.target;
    yup
    .reach(FormSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })

    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckBoxChange = event => {
    const {name, checked} = event.target;
    setFormValues({
      ...formValues,
      [name]: checked,
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  }


    useEffect(() => {
      getUser();
    }, [initialUser]);


  useEffect(() => {
    FormSchema.isValid(formValues)
    .then (valid => {
      setDisabled(!valid);
    })
  }, [formValues]);
  
return (
  <div className="container">
    <header>
      <h1>User Onboarding</h1>
    </header>
    <>
      <Form
      values={formValues}
      change={inputChange}
      onCheckBoxChange={onCheckBoxChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
    </>
    {
      user.map(item => {
        return (
          <h3>{item.first_name}</h3>
        )
      })
    }
  </div>
)
}


