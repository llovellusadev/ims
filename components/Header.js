import MediaQuery from 'react-responsive';

class Header extends React.Component {
  render() {
    return (
      <header style={headerStyle}>
        <MediaQuery maxDeviceWidth={1224}>
          {(matches) => {
            if (matches) {
              return <div style={mobileStyle}>IMS Managed Services</div>;
            } else {
              return <div style={desktopStyle}>IMS Managed Services</div>;
            }
          }}
        </MediaQuery>
      </header>
    );
  }
}

const headerStyle = {
  flex: '1',
  margin: '0px',
  padding: '15px',
  fontFamily: 'Quicksand'
};

const mobileStyle = {
  fontSize: '10em'
};

const desktopStyle = {
  fontSize: '2em'
};

export default Header;
