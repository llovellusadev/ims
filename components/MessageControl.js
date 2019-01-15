import axios from 'axios';
import validator from 'validator';
import Form from './Form';
import TextArea from './TextArea';
import Error from './Error';
import Notification from './Notification';

class MessageControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      notification: '',
      error: ''
    };

    this.notificationTimeout = null;
    this.errorTimeout = null;

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.showNotification = this.showNotification.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
    this.showError = this.showError.bind(this);
    this.hideError = this.hideError.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleLogSubmit = this.handleLogSubmit.bind(this);
  }

  handleMessageChange(data) {
    this.setState({ message: validator.escape(data) })
  }

  showNotification(notification) {
    this.setState({ notification: notification });

    clearTimeout(this.notificationTimeout);

    this.notificationTimeout = setTimeout(() => {
      this.hideNotification();
    }, 2000)
  }

  hideNotification() {
    this.setState({ notification: '' });
  }

  showError(err) {
    this.setState({ error: err });

    clearTimeout(this.errorTimeout);

    this.errorTimeout = setTimeout(() => {
      this.hideError();
    }, 2000)
  }

  hideError() {
    this.setState({ error: '' });
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
          this.showNotification('Message sent');
        }.bind(this))
        .catch(function (error) {
          this.showError('Message failed');
        }.bind(this));
        this.hideError();
      } else {
        this.showError('Incorrectly formatted email');
      }
    } else {
      this.showError('Need a message to send');
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
          this.showNotification('Message sent');
        }.bind(this))
        .catch(function (error) {
          this.showError('Message failed');
        }.bind(this));
        this.hideError();
      } else {
        this.showError('Incorrectly formatted phone number');
      }
    } else {
      this.showError('Need a message to send');
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
          this.showNotification('Message sent');
        }.bind(this))
        .catch(function (error) {
          this.showError('Message failed');
        }.bind(this));
        this.hideError();
      } else {
        this.showError('Incorrectly formatted domain');
      }
    } else {
      this.showError('Need a message to send');
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
          this.showNotification('Message sent');
        }.bind(this))
        .catch(function (error) {
          this.showError('Message failed');
        }.bind(this));
        this.hideError();
      } else {
        this.showError('Incorrectly formatted domain');
      }
    } else {
      this.showError('Need a message to send');
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
        <Notification notification={this.state.notification} />
        <Error error={this.state.error} />
      </div>
    )
  }
}

export default MessageControl;
