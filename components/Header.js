import {isMobile} from 'react-device-detect';

class Header extends React.Component {
  render() {
    if (isMobile) {
      return (
        <header style={headerStyle}>
          <div style={mobileDivStyle}>IMS Managed Services</div>
        </header>
      );
    } else {
      return (
        <header style={headerStyle}>
          <div style={desktopDivStyle}>IMS Managed Services</div>
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
};

const mobileDivStyle = {
  fontSize: '10em'
};

const desktopDivStyle = {
  fontSize: '2em'
};

export default Header;
