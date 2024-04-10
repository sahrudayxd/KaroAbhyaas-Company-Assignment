import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "./index.css";
import "swiper/css";
import "swiper/css/pagination";

const studentsReviewList = [
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/1",
    name: "Arlene McCoy",
    review: "Great course! Highly recommend it.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/2",
    name: "Ralph Edwards",
    review: "The product exceeded my expectations.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/3",
    name: "Darlene Robertson",
    review: "The class was informative and engaging.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/4",
    name: "Kristin Watson",
    review: "I wish there were more resources available.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/5",
    name: "Annette Black",
    review: "Good value for money.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/6",
    name: "Robert Fox",
    review: "Great course! Highly recommend it.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/7",
    name: "Jacob Jones",
    review: "The product exceeded my expectations.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/8",
    name: "Albert Flores",
    review: "Good value for money.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/9",
    name: "Esther Howard",
    review: "The class was informative and engaging.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/10",
    name: "Theresa Webb",
    review: "I wish there were more resources available.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/11",
    name: "Kathryn Murphy",
    review: "Good value for money.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/MoneyMatters/dummyUsers/12",
    name: "Brooklyn Simmons",
    review: "Great course! Highly recommend it.",
  },
];

const topStudentsReviews = () => (
  <div className="reviews-container">
    <h1 className="review-title">Top Students</h1>
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 1500 }}
      loop
      className="mySwiper"
    >
      {studentsReviewList.map((studentReview, index) => (
        <SwiperSlide key={index}>
          <div className="review-container">
            <img
              className="student-img"
              src={studentReview.imgUrl}
              alt={studentReview.name}
            />
            <p className="student-name">{studentReview.name}</p>
            <p className="student-review">{studentReview.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const reviewsList = [
  {
    name: "John Doe",
    comment:
      "This course exceeded my expectations! The content was well-organized, and the instructor explained complex concepts in a clear and concise manner. I highly recommend it to anyone looking to learn.",
  },
  {
    name: "Jane Smith",
    comment:
      "I found this product to be very useful for my needs. It's user-friendly and helped me streamline my workflow. The customer support team was also very responsive and helpful.",
  },
  {
    name: "Alice Johnson",
    comment:
      "The class was informative, but I felt that some topics could have been covered in more depth. Overall, it was a good learning experience, but there is room for improvement.",
  },
  {
    name: "Michael Brown",
    comment:
      "I thoroughly enjoyed this course! The hands-on projects were engaging, and the quizzes helped reinforce my understanding of the material. Great value for money.",
  },
  {
    name: "Sarah Thompson",
    comment:
      "Unfortunately, I was disappointed with this product. It didn't meet my expectations, and I encountered several technical issues. I hope to see improvements in future updates.",
  },
  {
    name: "David Wilson",
    comment:
      "The instructor was fantastic! They were very knowledgeable and supportive throughout the course. I feel much more confident in my skills now, thanks to this class.",
  },
  {
    name: "Emily Garcia",
    comment:
      "I'm impressed with the quality of this product. It's intuitive to use, and it has definitely helped boost my productivity. I would definitely recommend it to others.",
  },
  {
    name: "Ryan Clark",
    comment:
      "Overall, the class was okay. I learned some valuable information, but there were times when I felt the pace was too fast. It would have been helpful to have more practice exercises.",
  },
  {
    name: "Sophia Lee",
    comment:
      "I'm grateful for this course! The instructor's passion for the subject really shone through, and their enthusiasm was contagious. I feel inspired to continue learning.",
  },
  {
    name: "Jacob Martinez",
    comment:
      "The product has some useful features, but it lacks certain functionalities that I was hoping for. It's a decent option for basic tasks, but it may not meet everyone's needs.",
  },
  {
    name: "Olivia Adams",
    comment:
      "I highly recommend this class to anyone interested in the topic! The instructor provided valuable insights, and the discussions were thought-provoking. I learned a lot.",
  },
  {
    name: "Ethan Nguyen",
    comment:
      "Fantastic product! It's exactly what I was looking for, and it has significantly improved my efficiency. The customer service team was also very helpful when I had questions.",
  },
];

const reviews = () => (
  <div className="reviews-container">
    <h1 className="review-title">Reviews</h1>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop
      className="mySwiper"
    >
      {reviewsList.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="review-container">
            <p className="student-name">{review.name}</p>
            <p className="student-review">{review.comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const HomeReviews = () => (
  <>
    {topStudentsReviews()}
    {reviews()}
  </>
);

export default HomeReviews;
