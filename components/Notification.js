const Notification = (props) => {
  if (props.notification) {
    return (
      <div className='notificationContainer'>
        <div className='notification'>{props.notification}</div>
        <style jsx>{`
          .notificationContainer {
            display: flex;
            justify-content: center;
          }
          .notification {
            margin: 5px;
            padding: 15px;
            width: 378px;
            font-family: Quicksand, Serif;
            font-size: 15px;
            background-color: #228B22;
            color: #fff;
            text-align: center;
            border-radius: 3px;
          }
          @media (max-width: 418px) {
            .notification {
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

export default Notification;
