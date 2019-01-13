class Input extends React.Component {

  render() {
    return (
      <div>
        <input className="input" placeholder={this.props.placeholder} />
        <style jsx>{`
          .input {
            min-width: 176px;
            border: 2px solid #e0e6e8;
            transition: border 1s;
            height: 15px;
            padding: 15px;
            margin: 5px;
            border-radius: 3px;
            background-color: #fff;
            color: #796eff;
            font-size: 15px;
            font-family: Quicksand, Serif;
          }
          .input:focus {
            outline: none !important;
            border: 2px solid #796eff;
          }
          ::placeholder {
            color: #bbb;
            opacity: 1;
          }
          :-ms-input-placeholder {
            color: #bbb;
          }
          ::-ms-input-placeholder {
            color: #bbb;
          }
        `}</style>
      </div>
    );
  }
}

export default Input;
