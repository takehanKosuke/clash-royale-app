import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import '../css/ContactForm.css'

class ContactForm extends Component {
  render() {
    return (
      <TextField
        placeholder=""
        multiline={true}
        rows={20}
        rowsMax={20}
        inputProps={300}
      />
    )
  }
}
export default ContactForm;
