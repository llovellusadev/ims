import Header from '../components/Header';
import Form from '../components/Form';
import TextArea from '../components/TextArea';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TextArea />
        <Form placeholder="Recipient" title="Send Email" />
        <Form placeholder="Phone number" title="Send Text" />
        <Form placeholder="Hostname" title="Message Crestron" />
        <Form placeholder="Hostname" title="Send Crestron Log" />
      </div>
    );
  }
}

export default Index;
