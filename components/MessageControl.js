import axios from 'axios';
import validator from 'validator';
import Form from './Form';
import TextArea from './TextArea';
import Error from './Error';

class MessageControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      error: ''
    };

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleLogSubmit = this.handleLogSubmit.bind(this);
  }

  handleMessageChange(data) {
    this.setState({ message: validator.escape(data) })
  }

  handleEmailSubmit(data) {
    if (this.state.message.length > 0) {
      if (validator.isEmail(validator.escape(data))) {
        axios.post('/send/email', {
          email: data,
          message: this.state.message
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.setState({ error: '' })
      } else {
        this.setState({ error: 'Incorrectly formatted email' })
      }
    } else {
      this.setState({ error: 'Need a message to send' })
    }
  }

  handleTextSubmit(data) {
    if (this.state.message.length > 0) {
      if (validator.isMobilePhone(validator.escape(data))) {
        if (data.length === 10) {
          data = `+1${data}`;
        }
        axios.post('/send/text', {
          number: data,
          message: this.state.message
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.setState({ error: '' })
      } else {
        this.setState({ error: 'Incorrectly formatted phone number' })
      }
    } else {
      this.setState({ error: 'Need a message to send' })
    }
  }

  handleMessageSubmit(data) {
    if (this.state.message.length > 0) {
      if (validator.isURL(validator.escape(data))) {
        axios.post('/send/message', {
          domain: data,
          message: this.state.message
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.setState({ error: '' })
      } else {
        this.setState({ error: 'Incorrectly formatted domain' })
      }
    } else {
      this.setState({ error: 'Need a message to send' })
    }
  }

  handleLogSubmit(data) {
    if (this.state.message.length > 0) {
      if (validator.isURL(validator.escape(data))) {
        axios.post('/send/log', {
          domain: data,
          message: this.state.message
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.setState({ error: '' })
      } else {
        this.setState({ error: 'Incorrectly formatted domain' })
      }
    } else {
      this.setState({ error: 'Need a message to send' })
    }
  }

  render() {
    return (
      <div>
        <TextArea handleTextChange={this.handleMessageChange} />
        <Form placeholder='Recipient' title='Send Email' handleFormSubmit={this.handleEmailSubmit} />
        <Form placeholder='Phone number' title='Send Text' handleFormSubmit={this.handleTextSubmit} />
        <Form placeholder='Hostname' title='Message Crestron' handleFormSubmit={this.handleMessageSubmit} />
        <Form placeholder='Hostname' title='Send Crestron Log' handleFormSubmit={this.handleLogSubmit} />
        <Error error={this.state.error} />
      </div>
    )
  }
}

export default MessageControl;
