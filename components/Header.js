import {isMobile} from 'react-device-detect';

class Header extends React.Component {
  render() {
    if (isMobile) {
      return (
        <header style={headerStyle}>
          <div>IMS Managed Services mobile</div>
        </header>
      );
    } else {
      return (
        <header style={headerStyle}>
          <div>IMS Managed Services</div>
        </header>
      );
    }
  }
}

const headerStyle = {
  flex: '1',
  margin: '0px',
  padding: '15px',
  fontFamily: 'Quicksand',
  fontSize: '2em'
};

export default Header;
