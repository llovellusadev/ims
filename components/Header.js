class Header extends React.Component {
  render() {
    return (
      <header style={headerStyle}>
        <div>IMS Managed Services</div>
      </header>
    );
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
