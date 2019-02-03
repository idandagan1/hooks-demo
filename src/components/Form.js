import React from 'react';
import { ThemeContext } from '../context/theme';

export class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { firstName, surname } = this.state;
    console.log(`fistName: ${firstName}, surname: ${surname}`);
  }

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div className="login-form">
        <ThemeContext.Consumer>
          {
          theme => (
            <form onSubmit={this.onSubmit}>
              <input
                value={firstName}
                onChange={this.onChange}
                name="firstName"
                placeholder="Your first name"
                autoComplete="off"
              />
              <input
                value={lastName}
                onChange={this.onChange}
                name="surname"
                placeholder="Your surname"
                autoComplete="off"
              />
              <button
                style={{ backgroundColor: theme }}
                type="submit"
              >
                login
              </button>
            </form>
          )
        }
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default Form;
