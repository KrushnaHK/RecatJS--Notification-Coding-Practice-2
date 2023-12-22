const Notification = (props) => {
  //  Write your code here.
  const { className, imageUrl, message } = props;
  return (
    <li className={className}>
      <img src={imageUrl} />
      <p>{message}</p>
    </li>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Notifications</h1>
    <ul>
      <Notification
        className="box1"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="box2"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="box3"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="box4"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
