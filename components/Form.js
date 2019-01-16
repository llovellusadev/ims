class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.value);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    if (this.props.busy) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className='formContainer'>
            <input type='text' className='input' placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} />
            <input type='submit' className='button' value={this.props.title} disabled={this.props.busy} />
          </div>
          <style jsx>{`
            .formContainer {
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
            }
            .input {
              width: 165px;
              border: 2px solid #e0e6e8;
              transition: border 1s;
              height: 17px;
              padding: 15px;
              margin: 5px;
              border-radius: 3px;
              background-color: #fff;
              color: #796eff;
              font-size: 15px;
              font-family: Quicksand, Serif;
            }
            .input:focus {
              border: 2px solid #796eff;
            }
            input {
              outline: none !important;
              -webkit-appearance: none;
              text-transform: none;
              text-decoration: none;
            }
            input[type=submit] {
              border: 2px solid #796eff;
            }
            input[type=submit]:hover {
              border: 2px solid #483D8B;
            }
            ::placeholder {
              color: #bbb;
              opacity: 1;
            }
            :-ms-input-placeholder {
              color: #bbb;
            }
            ::-ms-input-placeholder {
              color: #bbb;
            }
            .button {
              display:inline-block;
              width: 200px;
              height: 50px;
              text-align: center;
              padding: 15px;
              margin: 5px;
              border-radius: 3px;
              color: #fff;
              background-color: #796eff;
              cursor: pointer;
              font-size: 15px;
              font-family: Quicksand, Serif;
              opacity: 0.5;
            }          
            .button:hover {
              background-color: #483D8B;
            }          
        `}</style>
        </form>
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className='formContainer'>
            <input type='text' className='input' placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} />
            <input type='submit' className='button' value={this.props.title} disabled={this.props.busy} />
          </div>
          <style jsx>{`
            .formContainer {
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
            }
            .input {
              width: 165px;
              border: 2px solid #e0e6e8;
              transition: border 1s;
              height: 17px;
              padding: 15px;
              margin: 5px;
              border-radius: 3px;
              background-color: #fff;
              color: #796eff;
              font-size: 15px;
              font-family: Quicksand, Serif;
            }
            .input:focus {
              border: 2px solid #796eff;
            }
            input {
              outline: none !important;
              -webkit-appearance: none;
              text-transform: none;
              text-decoration: none;
            }
            input[type=submit] {
              border: 2px solid #796eff;
            }
            input[type=submit]:hover {
              border: 2px solid #483D8B;
            }
            ::placeholder {
              color: #bbb;
              opacity: 1;
            }
            :-ms-input-placeholder {
              color: #bbb;
            }
            ::-ms-input-placeholder {
              color: #bbb;
            }
            .button {
              display:inline-block;
              width: 200px;
              height: 50px;
              text-align: center;
              padding: 15px;
              margin: 5px;
              border-radius: 3px;
              color: #fff;
              background-color: #796eff;
              cursor: pointer;
              font-size: 15px;
              font-family: Quicksand, Serif;
              opacity: 1;
            }          
            .button:hover {
              background-color: #483D8B;
            }          
        `}</style>
        </form>
      )
    }
  }
}

export default Form;
