import "./index.css";
import CommonLayout from "../CommonLayout";

const Classes = () => {
  return (
    <CommonLayout>
      <div className="classes-section">
        <ul className="classes">
          {dummyNeetClasses.map((classDetails) => (
            <li className="class-item" key={classDetails.name}>
              <img
                src="https://via.placeholder.com/420x260"
                alt={classDetails.name}
                className="class-image"
              />
              <div className="class-details">
                <h1 className="class-name">{classDetails.name}</h1>
                <p className="class-description">{classDetails.description}</p>
                <button className="practice-button">PRACTICE</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CommonLayout>
  );
};

export default Classes;

const dummyNeetClasses = [
  {
    name: "Biology Essentials for NEET",
    description:
      "Master the essential concepts of biology required to crack the NEET exam with this comprehensive class. Covering topics such as cell biology, genetics, ecology, and human physiology, this class will provide you with a solid foundation in biological sciences. Whether you're a beginner or looking to strengthen your knowledge, this class will equip you with the skills and confidence to excel in the NEET exam and pursue a career in the medical field.",
  },
  {
    name: "Chemistry Fundamentals for NEET",
    description:
      "Gain a deep understanding of the fundamental principles of chemistry required for success in the NEET exam with this comprehensive class. Covering topics such as atomic structure, chemical bonding, organic chemistry, and chemical kinetics, this class will provide you with the knowledge and confidence to achieve your goals.",
  },
  {
    name: "Physics Basics for NEET",
    description:
      "Build a strong foundation in physics and tackle challenging problems with confidence in the NEET exam with this introductory class. Covering topics such as mechanics, thermodynamics, electricity, and magnetism, this class will prepare you for success in the NEET exam and beyond.",
  },
  {
    name: "NEET Biology Masterclass",
    description:
      "Dive deep into the world of biology with this comprehensive masterclass designed specifically for NEET aspirants. From molecular biology and genetics to ecology and human physiology, this class covers all the essential topics you need to know to ace the NEET exam. Whether you're a beginner or looking to reinforce your knowledge, this class will provide you with the skills and confidence to succeed.",
  },
  {
    name: "Chemistry Mastery for NEET",
    description:
      "Take your chemistry skills to the next level with this advanced mastery class tailored for NEET preparation. Covering topics such as chemical equilibrium, coordination compounds, and organic reactions, this class will help you tackle even the most challenging questions in the NEET exam. Whether you're aiming for a top score or simply want to strengthen your chemistry fundamentals, this class is your key to success.",
  },
  {
    name: "NEET Physics Pro",
    description:
      "Become a physics pro and conquer the NEET exam with this intensive preparation class. From mechanics and optics to modern physics and electromagnetism, this class covers all the essential topics you need to know to excel in physics. With rigorous practice sessions and problem-solving exercises, you'll sharpen your skills and build the confidence to tackle any physics question in the NEET exam.",
  },
  {
    name: "NEET Biology Bootcamp",
    description:
      "Gear up for the NEET exam with this intensive biology bootcamp designed to boost your knowledge and skills. Covering topics such as plant physiology, animal diversity, and biotechnology, this bootcamp will provide you with a comprehensive review of biology concepts tested in the NEET exam. Whether you're a novice or an experienced learner, this bootcamp will help you ace the biology section of the NEET exam.",
  },
  {
    name: "Chemistry Crash Course for NEET",
    description:
      "Get ready for the NEET exam in record time with this fast-paced chemistry crash course. Covering all the essential topics in chemistry, from atomic structure to chemical kinetics, this course will help you review key concepts and solve practice problems efficiently. Whether you're short on time or looking for a quick refresher, this crash course will prepare you for success in the NEET chemistry section.",
  },
  {
    name: "NEET Physics Refresher",
    description:
      "Refresh your physics knowledge and prepare for the NEET exam with this comprehensive refresher course. Covering topics such as motion, thermodynamics, and electromagnetism, this course will help you review fundamental physics concepts and sharpen your problem-solving skills. Whether you're looking to reinforce your knowledge or brush up on specific topics, this refresher course will help you achieve your goals.",
  },
  {
    name: "NEET Chemistry Review",
    description:
      "Review essential chemistry concepts and enhance your preparation for the NEET exam with this comprehensive review course. Covering topics such as chemical bonding, organic chemistry, and coordination compounds, this course will help you identify strengths and weaknesses in your chemistry knowledge and focus your study efforts effectively. Whether you're aiming for a top score or looking to improve your performance, this review course will set you on the path to success.",
  },
];
