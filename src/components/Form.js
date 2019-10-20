import React from 'react'

const validEmailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      errors: {
        name: '',
        email: '',
        phone: '',
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 1
            ? 'Vennligst fyll inn navnet ditt'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Vennligst fyll inn en epost adresse';
        break;
      case 'phone': 
        errors.phone = 
          value.length < 8
            ? 'Vennligst fyll inn et telefonnummer'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      alert ('Takk for din melding')
    }else{
      alert('Ops, her har det skjedd en feil')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='container'>
        <h2>Kontaktskjema</h2>
        <div className='[ form-container ]'> 
          <form onSubmit={this.handleSubmit} noValidate>
          <div className='[ form-group ]'>
              <input type='text' name='name' className="form-control" placeholder="Navn" onChange={this.handleChange} noValidate />
              {errors.name.length > 0 && 
                <span className='error'>{errors.name}</span>}
            </div>
            <div className='[ form-group ]'>
              <input type='email' name='email' className="form-control" placeholder="ola@norman.no" onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='[ form-group ]'>
              <input type='number' name='phone' className="form-control" placeholder="Telefon" onChange={this.handleChange} noValidate />
              {errors.phone.length > 0 && 
                <span className='error'>{errors.phone}</span>}
            </div>
            <div className='[ form-group ]'>
                <textarea rows="6" cols="50" className="form-control" placeholder="Skriv en melding"></textarea>
            </div>
            <div className='submit'>
              <button type="button" className="[ btn ]">Send Melding</button>
            </div>
          </form>
        </div>
      </div>
      
    );
  }
}