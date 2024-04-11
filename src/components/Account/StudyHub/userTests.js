import "./index.css";

const dummyTestDetails = [
  {
    testName: "NEET Practice Test 1",
    moduleName: "Biology",
    date: "11/04/2024",
    marks: 100,
    duration: "30 Mins",
  },
  {
    testName: "NEET Practice Test 2",
    moduleName: "Physics",
    date: "12/04/2024",
    marks: 100,
    duration: "45 Mins",
  },
  {
    testName: "NEET Mock Test 1",
    moduleName: "Chemistry",
    date: "13/04/2024",
    marks: 100,
    duration: "60 Mins",
  },
  {
    testName: "NEET Model Test 1",
    moduleName: "Biology",
    date: "14/04/2024",
    marks: 100,
    duration: "45 Mins",
  },
];

const TestItem = (props) => {
  const { testDetails } = props;
  const { testName, moduleName, date, marks, duration } = testDetails;
  return (
    <div className="test">
      <div>
        <h1 className="test-name">{testName}</h1>
        <div className="test-key-value">
          <p className="test-key">MODULE NAME :</p>
          <p className="test-value">{moduleName}</p>
        </div>
        <div className="test-key-value">
          <p className="test-key">DATE :</p>
          <p className="test-value">{date}</p>
        </div>
        <div className="test-key-value">
          <p className="test-key">MARKS</p>
          <p className="test-value">{marks}</p>
        </div>
        <div className="test-key-value">
          <p className="test-key">DURATION</p>
          <p className="test-value">{duration}</p>
        </div>
      </div>

      <button className="start-button">START</button>
    </div>
  );
};

const UserTests = () => (
  <>
    {dummyTestDetails.map((testDetails) => (
      <TestItem key={testDetails.testName} testDetails={testDetails} />
    ))}
  </>
);

export default UserTests;
