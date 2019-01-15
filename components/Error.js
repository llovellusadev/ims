const Error = (props) => {
  if (props.error) {
    return (
      <div className='errorContainer'>
        <div className='error'>{props.error}</div>
        <style jsx>{`
          .errorContainer {
            display: flex;
            justify-content: center;
          }
          .error {
            margin: 5px;
            padding: 15px;
            width: 378px;
            font-family: Quicksand, Serif;
            font-size: 15px;
            background-color: #FF4500;
            color: #fff;
            text-align: center;
            border-radius: 3px;
          }
          @media (max-width: 418px) {
            .error {
              width: 170px;
            }
          }
      `}</style>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Error;
