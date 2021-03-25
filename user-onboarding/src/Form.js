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
        <form className="form-container" onSubmit={submit}>
            <div className="form-group submit">
                <h1>Add a User</h1>                

            <div className="errors">
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>    
            </div>

            <div className="form-group.submit">
                <h4>Join Us!</h4>
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
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh tellus molestie nunc non. At augue eget arcu dictum varius duis at consectetur lorem. Arcu non odio euismod lacinia at quis risus. Fames ac turpis egestas maecenas. Quis vel eros donec ac odio tempor. Tortor posuere ac ut consequat semper viverra. Vitae et leo duis ut diam quam nulla. Tempor nec feugiat nisl pretium. Adipiscing diam donec adipiscing tristique. Integer eget aliquet nibh praesent tristique magna sit amet purus. Hendrerit gravida rutrum quisque non tellus orci. Neque viverra justo nec ultrices. Nunc sed velit dignissim sodales ut eu sem. Orci a scelerisque purus semper. A arcu cursus vitae congue mauris rhoncus aenean vel.</p>
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

           
            <button disabled={disabled} id="myBTN" >Submit</button>

            <h2>Our Current Users:</h2>
  

         </div>
    </form>
    );
}