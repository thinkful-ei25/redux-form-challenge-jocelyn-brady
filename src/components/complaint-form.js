import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {required , nonEmpty, valLength , valNum } from '../validators'; 

export class ComplaintForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (

      <form
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label>Your Tracking Number:</label>
          <Field
          name="trackingNumber" 
          id="trackingNumber" 
          label="tracking number" 
          type="text"
          component="input" 
          validate = {[required, nonEmpty, valLength, valNum]}/>
          <label>What is your issue? </label>
          <Field 
          name="issue" 
          id="issue" 
          type="select" 
          component="select"
          validate = {[required, nonEmpty]}>
            <option value="My delivery hasn't arrived">
              My delivery hasn't arrived
            </option>
            <option value="Wrong Item Was Delivered">
              Wrong Item Was Delivered
            </option>
            <option value="Part of My Order Was Missing">
              Part of My Order Was Missing
            </option>
            <option value="Damaged Order">Damaged Order</option>
            <option value="Other">Other </option>
          </Field>
          <label>Give More Details (optional) </label>
          <Field name="details" type="text" id="details" component="input"/>
        <button type="submit disabled={this.props.pristine || this.props.submitting}">Submit</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'complaint'
})(ComplaintForm);