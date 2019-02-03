import React from 'react';
import { ThemeContext } from '../context/theme';

export class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Idan',
      surname: 'Dagan',
      width: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeWidth = this.changeWidth.bind(this);
  }

  onChange(e) {
    const { firstName, lastName } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    window.document.title = `${firstName} ${lastName}`;
  }

  componentDidMount() {
    window.addEventListener('resize', this.changeWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeWidth);
  }

  changeWidth() {
    this.setState({ width: window.innerWidth });
  }

  onSubmit(e) {
    e.preventDefault();
    const { firstName, surname } = this.state;
    console.log(`fistName: ${firstName}, surname: ${surname}`);
  }

  render() {
    const { firstName, lastName, width } = this.state;

    return (
      <div className="login-form">
        <div>Classes</div>
        <div>
          width:
          {width}
        </div>
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
