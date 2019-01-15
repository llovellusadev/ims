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

    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleLogSubmit = this.handleLogSubmit.bind(this);
  }

  handleEmailSubmit(data) {
    if (validator.isEmail(validator.escape(data))) {
      console.log('emailing');
      this.setState({ error: '' })
    } else {
      this.setState({ error: 'Incorrectly formatted email' })
    }
  }

  handleTextSubmit(data) {
    if (validator.isMobilePhone(validator.escape(data))) {
      if (data.length === 10) {
        data = `+1${data}`;
      }
      console.log('texting', data);
      this.setState({ error: '' })
    } else {
      this.setState({ error: 'Incorrectly formatted phone' })
    }
  }

  handleMessageSubmit(data) {
    if (validator.isURL(validator.escape(data))) {
      console.log('messaging');
      this.setState({ error: '' })
    } else {
      this.setState({ error: 'Incorrectly formatted domain' })
    }
  }

  handleLogSubmit(data) {
    if (validator.isURL(validator.escape(data))) {
      console.log('logging');
      this.setState({ error: '' })
    } else {
      this.setState({ error: 'Incorrectly formatted domain' })
    }
  }

  render() {
    return (
      <div>
        <TextArea />
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
