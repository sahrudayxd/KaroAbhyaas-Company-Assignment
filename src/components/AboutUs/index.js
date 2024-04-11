import "./index.css";
import CommonLayout from "../CommonLayout";
import Footer from "../Footer";

const AboutUs = () => (
  <CommonLayout>
    <div className="about-section">
      <div className="about-section-details">
        <img
          src="https://thedotiit.in/wp-content/uploads/2023/06/NEET-Coaching-1.png"
          alt="neet coaching 1"
          className="about-section-image"
        />
        <div>
          <h1 className="about-section-title">
            Empowering NEET Aspirants with KaroAbhayas
          </h1>
          <p className="about-section-description">
            KaroAbhayas, based in Electronic City, is a premier edu-tech company
            dedicated to assisting students in cracking the NEET exam. Our
            platform offers personalized guidance and cutting-edge resources
            tailored to individual needs. From interactive lectures to
            comprehensive study materials, we ensure a holistic learning
            experience. Our team of experienced educators and technologists is
            committed to student success, providing ongoing support and
            mentorship. Join us on your journey to success with KaroAbhayas,
            where every student is empowered to achieve their academic
            aspirations.
          </p>
        </div>
      </div>
      <div className="about-section-details">
        <img
          src="https://live-gci-v2.s3.ap-south-1.amazonaws.com/blog_images/meta/e49fd52a-9760-4c4c-8ee3-47055502b888.png"
          alt="neet coaching 2"
          className="about-section-image"
        />
        <div className="order-1">
          <h1 className="about-section-title">
            Innovative NEET Preparation with KaroAbhayas
          </h1>
          <p className="about-section-description">
            Discover a new approach to NEET exam preparation with KaroAbhayas,
            headquartered in Electronic City. Our platform features innovative
            learning tools and dynamic resources designed to maximize student
            success. With engaging video lectures, practice tests, and
            personalized coaching, we ensure mastery of key concepts. Our team
            of experts is dedicated to providing comprehensive support and
            guidance, fostering a supportive learning community. Join
            KaroAbhayas today to experience a transformative educational
            journey, where excellence is achieved through innovation and
            dedication.
          </p>
        </div>
      </div>
      <div className="about-section-details">
        <img
          src="https://th.bing.com/th/id/R.70aae200b39611b0aab80cb15e6408d3?rik=4SHLP%2bmBzR5JXQ&riu=http%3a%2f%2fwww.aakash.ac.in%2fblog%2fwp-content%2fuploads%2f2018%2f05%2fOnline-NEET-benifits.jpg&ehk=B4iW5W5MrQskRbOxUl6zk2ldVUQHdVAN0OhigKYDtX0%3d&risl=&pid=ImgRaw&r=0"
          alt="neet coaching 3"
          className="about-section-image"
        />
        <div>
          <h1 className="about-section-title">
            Unleash Your Potential with KaroAbhayas
          </h1>
          <p className="about-section-description">
            KaroAbhayas, a leading edu-tech company based in Electronic City, is
            revolutionizing NEET exam preparation. Our platform offers a wealth
            of resources and personalized guidance to help students unlock their
            full potential. From interactive learning modules to real-time
            progress tracking, we provide the tools needed for success. With a
            team of experienced educators and advanced learning technologies, we
            ensure a dynamic and engaging learning experience. Join KaroAbhayas
            today to embark on a journey of academic excellence and personal
            growth, where every student is empowered to achieve their goals.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </CommonLayout>
);

export default AboutUs;
