import "./index.css";

const dummyOrderDetails = [
  {
    orderId: "1234",
    name: "NEET BOOK",
    date: "11/04/2024",
    address: [
      "+R107, AJMERA INFINITY,",
      "KARUNA NAGAR, ELECTRONIC CITY,",
      "BANGALORE, INDIA",
      "PIN: 846009",
    ],
  },
  {
    orderId: "5678",
    name: "Chemistry Guide",
    date: "12/04/2024",
    address: ["123 Main Street,", "Cityville,", "Stateland,", "PIN: 123456"],
  },
  {
    orderId: "91011",
    name: "Physics Handbook",
    date: "13/04/2024",
    address: ["456 Elm Street,", "Townville,", "Stateland,", "PIN: 654321"],
  },
  {
    orderId: "121314",
    name: "Biology Workbook",
    date: "14/04/2024",
    address: ["789 Oak Street,", "Villageville,", "Stateland,", "PIN: 987654"],
  },
];

const OrderItem = (props) => {
  const { orderDetails } = props;
  const { orderId, name, date, address } = orderDetails;
  return (
    <div className="order">
      <div>
        <h1 className="order-id">ORDER #{orderId}</h1>
        <div className="order-key-value">
          <p className="order-key">PRODUCT :</p>
          <p className="order-value">{name}</p>
        </div>
        <div className="order-key-value">
          <p className="order-key">DATE :</p>
          <p className="order-value">{date}</p>
        </div>
        <div className="order-key-value">
          <p className="order-key">ADDRESS :</p>
          <p className="order-value">
            {address[0]} <br />
            {address[1]}
            <br />
            {address[2]}
            <br />
            {address[3]}
          </p>
        </div>
      </div>
      <div className="order-options">
        <button className="order-option">VIEW DETAILS</button>
        <button className="order-option">TRACK ORDER</button>
        <button className="order-option">DOWNLOAD INVOICE</button>
      </div>
    </div>
  );
};

const UserOrders = () => (
  <>
    {dummyOrderDetails.map((orderDetails) => (
      <OrderItem key={orderDetails.orderId} orderDetails={orderDetails} />
    ))}
  </>
);

export default UserOrders;
