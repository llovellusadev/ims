class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.handleTextChange(event.target.value);
  }

  render() {
    return (
      <div className='container'>
        <textarea autoFocus placeholder='Message' value={this.state.value} onChange={this.handleChange} />
        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
          }
          textarea {
            width: 375px;
            border: 2px solid #e0e6e8;
            transition: border 1s;
            height: 50px;
            padding: 15px;
            margin: 5px;
            border-radius: 3px;
            background-color: #fff;
            color: #796eff;
            font-size: 15px;
            font-family: Quicksand, Serif;
            outline: none !important;
            -webkit-appearance: none;
            text-transform: none;
            text-decoration: none;
          }
          textarea:focus {
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
          @media (max-width: 418px) {
            textarea {
              width: 165px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default TextArea;
