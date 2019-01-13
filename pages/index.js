import Header from '../components/Header';
import Form from '../components/Form';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form placeholder="Message body" title="Send Email" />
        <Form placeholder="Message body" title="Send Text" />
        <Form placeholder="Message body" title="Send Crestron Message" />
        <Form placeholder="Message body" title="Send Crestron Log" />
      </div>
    );
  }
}

export default Index;
