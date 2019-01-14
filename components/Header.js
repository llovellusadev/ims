const Header = () => {
  return (
    <div>
      <header>
        <div>IMS Managed Services</div>
      </header>
      <style jsx>{`
        header {
          display: flex;
          margin: 0px;
          padding: 15px;
          font-family: Quicksand, Serif;
          font-size: 20px;
        }
        header div {
          flex: 1;
        }
      `}</style>
    </div>
  )
}

export default Header;
