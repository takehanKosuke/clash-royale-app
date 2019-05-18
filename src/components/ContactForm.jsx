import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

import '../css/ContactForm.css'

class ContactForm extends Component {
  render() {
    return (
      <>
        <h1>お問合せはこちら</h1>
        <OutlinedInput
          placeholder="お問合せ内容"
          multiline={true}
          fullWidth={true}
          rows={20}
        />
        <Button variant="contained" color="primary" size="large">Submit</Button>
      </>
    )
  }
}
export default ContactForm;
