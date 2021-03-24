import React from "react";

export default function Form(props) {
    const {
        values,
        submit, 
        change,
        checkbox, 
        disabled, 
        errors,
        onCheckboxChange
    } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

   

    return (
        <form className="form container" onSubmit={submit}>
            <div className="form-group submit">
                <h1>Add a User</h1>                

            <div className="errors">
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>    
            </div>

            <div className="form-group inputs">
                <h4>Our User's</h4>
                <label>
                    First Name&nbsp;
                    <input
                    value={values.first_name}
                    onChange={change}
                    name="first_name"
                    type="text"
                />
                </label>

                <label>
                    Last Name&nbsp;
                    <input
                    value={values.last_name}
                    onChange={change}
                    name="last_name"
                    type="text"
                />
                </label>

                <label>
                    Email&nbsp;
                    <input
                    value={values.email}
                    onChange={change}
                    name="email"
                    type="text"
                />
                </label>

                <label>
                    Password&nbsp;
                    <input
                    value={values.password}
                    onChange={change}
                    name="password"
                    type="password"
                />
                </label>

                <label>
                    Terms of Service&nbsp;
                    <input
                    type="checkbox"
                    name="terms"
                    checked={onCheckboxChange}
                    // onChange={onCheckboxChange}
                    />
                </label>
            </div>
            <button disabled={disabled}>submit</button>
         </div>
    </form>
    );
}

