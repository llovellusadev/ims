import Header from '../components/Header';
import Form from '../components/Form';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form placeholder="Recipient" title="Send Email" />
        <Form placeholder="Phone number" title="Send Text" />
        <Form placeholder="Hostname" title="Message Crestron" />
        <Form placeholder="Hostname" title="Send Crestron Log" />
      </div>
    );
  }
}

export default Index;
