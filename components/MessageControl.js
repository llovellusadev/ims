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
      const escapedData = validator.escape(data);
      if (validator.isEmail(escapedData)) {
        axios.post('/send/email', {
          email: escapedData,
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
      let escapedData = validator.escape(data);
      if (validator.isMobilePhone(escapedData)) {
        if (escapedData.length === 10) {
          escapedData = `+1${escapedData}`;
        }
        axios.post('/send/text', {
          number: escapedData,
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
      const escapedData = validator.escape(data);
      if (validator.isURL(escapedData)) {
        axios.post('/send/message', {
          domain: escapedData,
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
      const escapedData = validator.escape(data);
      if (validator.isURL(escapedData)) {
        axios.post('/send/log', {
          domain: escapedData,
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
