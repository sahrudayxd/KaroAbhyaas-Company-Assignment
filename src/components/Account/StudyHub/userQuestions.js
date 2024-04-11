import "./index.css";

const dummyQuestionDetails = [
  {
    question: "What is the primary function of mitochondria?",
    moduleName: "Biology",
    date: "11/04/2024",
  },
  {
    question: "Which of the following is not a greenhouse gas?",
    moduleName: "Chemistry",
    date: "12/04/2024",
  },
  {
    question: "In which phase of mitosis do the chromatids separate?",
    moduleName: "Biology",
    date: "13/04/2024",
  },
  {
    question: "What is the SI unit of electric current?",
    moduleName: "Physics",
    date: "14/04/2024",
  },
];

const QuestionItem = (props) => {
  const { questionDetails } = props;
  const { question, moduleName, date } = questionDetails;
  return (
    <div className="question-item">
      <div>
        <h1 className="question">{question}</h1>
        <div className="question-key-value">
          <p className="question-key">MODULE NAME :</p>
          <p className="question-value">{moduleName}</p>
        </div>
        <div className="question-key-value">
          <p className="question-key">DATE :</p>
          <p className="question-value">{date}</p>
        </div>
      </div>
      <button className="view-reply-button">VIEW REPLY</button>
    </div>
  );
};

const UserQuestions = () => (
  <>
    {dummyQuestionDetails.map((questionDetails) => (
      <QuestionItem
        key={questionDetails.question}
        questionDetails={questionDetails}
      />
    ))}
  </>
);

export default UserQuestions;
