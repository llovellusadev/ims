import Header from '../components/Header';
import Button from '../components/Button';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Button title='Send Email' />
        <Button title='Send Text' />
        <Button title='Send Crestron Message' />
        <Button title='Send Crestron Log' />
      </div>
    );
  }
}

export default Index;
