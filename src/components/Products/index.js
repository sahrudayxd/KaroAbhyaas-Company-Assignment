import { Component } from "react";

import { IoSearch } from "react-icons/io5";

import "./index.css";
import CommonLayout from "../CommonLayout";
import ProductItem from "../ProductItem";

class Products extends Component {
  state = { searchInput: "" };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  renderProducts = () => {
    const { searchInput } = this.state;
    const filteredSearchProducts = dummyProducts.filter((productDetails) =>
      productDetails.name
        .toLocaleLowerCase()
        .includes(searchInput.toLocaleLowerCase())
    );

    return (
      <ul>
        {filteredSearchProducts.map((productDetails) => (
          <ProductItem
            key={productDetails.name}
            productDetails={productDetails}
          />
        ))}
      </ul>
    );
  };

  render() {
    const { searchInput } = this.state;
    return (
      <CommonLayout>
        <div className="products-container">
          <div className="search-products">
            <IoSearch size={24} />
            <input
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search Products"
              className="search-input"
            />
          </div>
          {this.renderProducts()}
        </div>
      </CommonLayout>
    );
  }
}

export default Products;

const dummyProducts = [
  {
    name: "Complete Web Development Bootcamp",
    image: "https://via.placeholder.com/360x460",
    description:
      "This comprehensive web development product covers everything you need to know to become a full-stack web developer. Starting with the basics of HTML, CSS, and JavaScript, you'll progress to advanced topics like responsive web design, backend development with Node.js, database management with MongoDB, and deployment using platforms like Heroku. With over 40 hours of video content, practical exercises, and real-world projects, this bootcamp will equip you with the skills necessary to build professional-quality websites and web applications. Whether you're a complete beginner or looking to level up your skills, this product has something for everyone. Join now and kickstart your journey into the world of web development!",
    price: 3499,
  },
  {
    name: "Python Programming Masterclass",
    image: "https://via.placeholder.com/360x460",
    description:
      "Become a proficient Python programmer with this comprehensive masterclass. Python is one of the most popular programming languages globally, known for its simplicity and versatility. In this product, you'll start with the basics of Python syntax and programming concepts before diving into more advanced topics like object-oriented programming, data structures, and algorithm design. You'll also learn how to work with libraries such as NumPy, Pandas, and Matplotlib for data analysis and visualization. Whether you're interested in web development, data science, or automation, Python is a must-know language, and this masterclass will help you master it. Enroll now and take your Python skills to the next level!",
    price: 2799,
  },
  {
    name: "Data Science and Machine Learning Bootcamp",
    image: "https://via.placeholder.com/360x460",
    description:
      "In this bootcamp, you'll learn the essential concepts and techniques of data science and machine learning from scratch. With the exponential growth of data in today's world, there's a high demand for professionals who can analyze and derive insights from it. This product will teach you how to clean, analyze, and visualize data using Python libraries like NumPy, Pandas, and Matplotlib. You'll also delve into machine learning algorithms such as linear regression, logistic regression, decision trees, and neural networks. Through hands-on projects and case studies, you'll gain practical experience and be ready to tackle real-world data science problems. Whether you're a beginner or looking to enhance your skills, this bootcamp is your gateway to a rewarding career in data science and machine learning.",
    price: 3999,
  },
  {
    name: "Mobile App Development with React Native",
    image: "https://via.placeholder.com/360x460",
    description:
      "Build cross-platform mobile apps with React Native, the popular framework for developing native-like applications using JavaScript and React. In this product, you'll learn how to create mobile apps that run on both iOS and Android devices with a single codebase. You'll explore React Native's component-based architecture, UI elements, navigation, state management, and integration with backend services. Whether you're a web developer looking to expand into mobile development or an aspiring app developer, this product will provide you with the skills and knowledge needed to build high-quality mobile apps efficiently. Enroll now and start building your own mobile apps with React Native!",
    price: 2499,
  },
  {
    name: "Digital Marketing Mastery",
    image: "https://via.placeholder.com/360x460",
    description:
      "Master the art of digital marketing and take your online presence to new heights. In today's digital age, effective marketing strategies are crucial for businesses to succeed. This product covers a wide range of topics including search engine optimization (SEO), social media marketing, email marketing, content marketing, and analytics. You'll learn how to create compelling content, engage with your audience on various platforms, and analyze data to measure your marketing efforts' effectiveness. Whether you're a business owner, marketer, or aspiring digital marketer, this product will equip you with the skills and strategies needed to thrive in the competitive digital landscape. Enroll now and become a digital marketing expert!",
    price: 1999,
  },
  {
    name: "Java Programming Fundamentals",
    image: "https://via.placeholder.com/360x460",
    description:
      "Learn the fundamentals of Java programming language with this comprehensive product. Java is a versatile and widely-used programming language known for its portability and performance. In this product, you'll start with the basics of Java syntax, data types, and control structures before moving on to more advanced topics like object-oriented programming, exception handling, and multithreading. You'll also learn how to work with Java's standard libraries and develop practical applications. Whether you're new to programming or looking to expand your skills, this product will provide you with a solid foundation in Java programming. Enroll now and embark on your journey to becoming a Java developer!",
    price: 3199,
  },
  {
    name: "Blockchain and Cryptocurrency Essentials",
    image: "https://via.placeholder.com/360x460",
    description:
      "Discover the revolutionary technology behind blockchain and cryptocurrencies in this comprehensive product. Blockchain, the underlying technology of cryptocurrencies like Bitcoin and Ethereum, has the potential to disrupt various industries, including finance, supply chain management, and healthcare. In this product, you'll learn how blockchain works, its core components, and its applications beyond cryptocurrencies. You'll also delve into the concepts of smart contracts, decentralized applications (DApps), and consensus mechanisms. Whether you're an entrepreneur, developer, or simply curious about blockchain technology, this product will provide you with a solid understanding of its principles and potential. Enroll now and join the blockchain revolution!",
    price: 2899,
  },
  {
    name: "Artificial Intelligence and Deep Learning",
    image: "https://via.placeholder.com/360x460",
    description:
      "Dive into the fascinating world of artificial intelligence (AI) and deep learning with this comprehensive product. AI is transforming industries and shaping the future, with applications ranging from virtual assistants to self-driving cars. In this product, you'll learn the fundamentals of AI, including machine learning algorithms, neural networks, and deep learning frameworks like TensorFlow and Keras. You'll also explore advanced topics such as convolutional neural networks (CNNs), recurrent neural networks (RNNs), and generative adversarial networks (GANs). Whether you're a student, professional, or enthusiast, this product will provide you with the knowledge and skills needed to excel in the field of artificial intelligence. Enroll now and unlock the potential of AI!",
    price: 4599,
  },
  {
    name: "Cybersecurity Fundamentals",
    image: "https://via.placeholder.com/360x460",
    description:
      "Protect yourself and your organization from cyber threats with this comprehensive cybersecurity product. With the increasing digitization of society, cybersecurity has become more critical than ever. In this product, you'll learn about common cyber threats, such as malware, phishing, and denial-of-service (DoS) attacks, and how to defend against them. You'll also explore topics like cryptography, network security, ethical hacking, and security best practices. Whether you're an IT professional, business owner, or simply concerned about your online security, this product will provide you with the knowledge and skills needed to navigate the complex world of cybersecurity. Enroll now and safeguard your digital assets!",
    price: 3799,
  },
  {
    name: "Photography Masterclass",
    image: "https://via.placeholder.com/360x460",
    description:
      "Unlock your creativity and master the art of photography with this comprehensive masterclass. Photography is more than just pointing and shooting—it's about capturing moments, telling stories, and evoking emotions. In this product, you'll learn the fundamentals of photography, including composition, lighting, exposure, and camera settings. You'll also explore different genres of photography, such as landscape, portrait, street, and wildlife photography, and how to develop your unique style. Whether you're a beginner or an experienced photographer looking to hone your skills, this product will inspire and empower you to take your photography to the next level. Enroll now and start capturing unforgettable images!",
    price: 2399,
  },
  {
    name: "UI/UX Design Essentials",
    image: "https://via.placeholder.com/360x460",
    description:
      "Learn the essentials of UI/UX design and create engaging user experiences for digital products. In today's competitive market, user experience (UX) design plays a crucial role in the success of websites, mobile apps, and other digital products. In this product, you'll learn the principles of user-centered design, wireframing, prototyping, and usability testing. You'll also explore design tools like Adobe XD and Figma and best practices for designing intuitive and visually appealing interfaces. Whether you're a designer, developer, or product manager, this product will equip you with the skills and knowledge needed to create user-friendly and impactful digital experiences. Enroll now and become a UI/UX design expert!",
    price: 2199,
  },
  {
    name: "Music Production Basics",
    image: "https://via.placeholder.com/360x460",
    description:
      "Unlock your creativity and produce your own music with this introductory product in music production. Whether you're a musician, aspiring producer, or simply passionate about music, this product will teach you the fundamentals of music production using digital audio workstations (DAWs) like Ableton Live and Logic Pro X. You'll learn about MIDI sequencing, audio recording, editing, mixing, and mastering techniques. You'll also explore different genres and styles of music production, from electronic dance music (EDM) to hip-hop and rock. With hands-on exercises and projects, you'll gain practical experience and be ready to start creating your own tracks. Enroll now and unleash your musical potential!",
    price: 1799,
  },
  {
    name: "English Language Mastery",
    image: "https://via.placeholder.com/360x460",
    description:
      "Improve your English language skills and unlock new opportunities with this comprehensive mastery product. Whether you're a non-native speaker looking to enhance your English proficiency or a native speaker seeking to refine your language skills, this product covers all aspects of the English language, including grammar, vocabulary, pronunciation, and communication skills. You'll learn practical strategies for effective reading, writing, listening, and speaking in English, both in everyday situations and professional contexts. With interactive lessons, quizzes, and exercises, you'll progress from beginner to advanced levels and gain confidence in your ability to communicate fluently in English. Enroll now and take your English skills to the next level!",
    price: 1499,
  },
  {
    name: "Financial Literacy and Investment Strategies",
    image: "https://via.placeholder.com/360x460",
    description:
      "Gain essential financial knowledge and learn investment strategies to secure your financial future. In today's complex financial landscape, understanding basic financial concepts and making informed investment decisions are crucial for building wealth and achieving financial independence. This product covers a wide range of topics including budgeting, saving, investing, retirement planning, and risk management. You'll learn how to analyze financial statements, evaluate investment opportunities, and create a personalized financial plan based on your goals and risk tolerance. Whether you're a beginner or an experienced investor, this product will provide you with the knowledge and tools needed to make smart financial decisions and build a solid financial foundation. Enroll now and take control of your financial future!",
    price: 2099,
  },
  {
    name: "Cooking Essentials: From Beginner to Chef",
    image: "https://via.placeholder.com/360x460",
    description:
      "Master the art of cooking with this comprehensive product designed for beginners and aspiring chefs. Whether you're a novice in the kitchen or looking to enhance your culinary skills, this product covers everything you need to know to cook delicious and impressive meals. You'll learn basic cooking techniques, knife skills, ingredient preparation, and cooking methods for various cuisines and dishes. From soups and salads to mains and desserts, you'll explore a wide range of recipes and culinary traditions. With step-by-step instructions, tips, and tricks from experienced chefs, you'll gain the confidence and expertise to create restaurant-quality meals at home. Enroll now and embark on your culinary journey!",
    price: 1699,
  },
  {
    name: "Yoga and Meditation for Mind-Body Wellness",
    image: "https://via.placeholder.com/360x460",
    description:
      "Achieve holistic wellness and inner peace with this transformative product in yoga and meditation. Yoga is more than just physical exercise—it's a spiritual practice that promotes balance, flexibility, and mindfulness. In this product, you'll learn yoga poses (asanas), breathing techniques (pranayama), and meditation practices to calm the mind, reduce stress, and enhance overall well-being. Whether you're a beginner or an experienced practitioner, this product offers something for everyone, from gentle yoga flows to guided meditations. With regular practice, you'll experience improved strength, flexibility, and mental clarity, leading to a healthier and happier life. Enroll now and start your journey towards mind-body wellness!",
    price: 1399,
  },
  {
    name: "Creative Writing Workshop",
    image: "https://via.placeholder.com/360x460",
    description:
      "Unleash your creativity and express yourself through the art of creative writing with this hands-on workshop. Whether you're a seasoned writer or new to the craft, this workshop will help you develop your writing skills and explore different genres and styles. You'll learn techniques for generating ideas, crafting compelling characters, building immersive worlds, and structuring engaging narratives. Through writing exercises, prompts, and peer feedback, you'll hone your storytelling abilities and unleash your unique voice. Whether you dream of writing novels, short stories, poetry, or screenplays, this workshop will inspire and empower you to pursue your creative aspirations. Enroll now and embark on your writing journey!",
    price: 2999,
  },
];
