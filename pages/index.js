import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Input placeholder='Message body' />
        <Button title='Send Email' />
        <Input placeholder='Message body' />
        <Button title='Send Text' />
        <Input placeholder='Message body' />
        <Button title='Send Crestron Message' />
        <Input placeholder='Message body' />
        <Button title='Send Crestron Log' />
      </div>
    );
  }
}

export default Index;
