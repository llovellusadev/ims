class Button extends React.Component {

  handleClick() {
    console.log('button clicked');
  }

  render() {
    return (
      <div>
        <div className="button" onClick={this.handleClick}>
          {this.props.title}
        </div>
        <style jsx>{`
          .button {
            display:inline-block;
            min-width: 180px;
            text-align: center;
            padding: 15px;
            margin: 5px;
            border-radius: 3px;
            color: #fff;
            background-color: #796eff;
            cursor: pointer;
            font-size: 15px;
            font-family: Quicksand, Serif;
            text-decoration: none;
          }          
          .button:hover {
            background-color: #483D8B;
          }          
        `}</style>
      </div>
    );
  }
}

export default Button;
