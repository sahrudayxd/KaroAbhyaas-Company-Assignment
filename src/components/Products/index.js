import { Component } from "react";

import { IoSearch } from "react-icons/io5";

import "./index.css";
import CommonLayout from "../CommonLayout";
import ProductItem from "./ProductItem";

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
        <div className="products">
          <div className="products-width-container">
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
        </div>
      </CommonLayout>
    );
  }
}

export default Products;

const dummyProducts = [
  {
    name: "Chemistry Vol-1",
    image:
      "https://bookwindow.in/image/uploads/1527609137arihant-objective-chemistry-vol-1-for-neet.jpeg",
    description:
      "Comprehensive study material covering essential chemistry topics required for NEET preparation. Dive into fundamental concepts and advanced topics to excel in the chemistry section of the NEET exam.",
    price: 1299,
  },
  {
    name: "Chemistry Vol-2",
    image:
      "https://bookwindow.in/image/uploads/1527609914arihant-objective-chemistry-vol-2-for-neet.jpeg",
    description:
      "In-depth coverage of advanced chemistry concepts necessary for success in NEET exams. Delve into organic, inorganic, and physical chemistry topics to strengthen your understanding and boost your NEET score.",
    price: 1499,
  },
  {
    name: "Physics Vol-1",
    image: "https://images-na.ssl-images-amazon.com/images/I/81YsXnpltGL.jpg",
    description:
      "Thorough explanation of physics topics crucial for NEET exam aspirants. Master key concepts in mechanics, thermodynamics, and electromagnetism to tackle challenging physics questions in the NEET exam confidently.",
    price: 1399,
  },
  {
    name: "Physics Vol-2",
    image:
      "https://m.media-amazon.com/images/I/61W5rsaDnEL._SX698_BO1,204,203,200_.jpg",
    description:
      "Build upon your understanding of advanced physics topics essential for NEET preparation. Explore concepts such as modern physics, optics, and electronics to enhance your problem-solving skills and score higher in the NEET physics section.",
    price: 1599,
  },
  {
    name: "Chapterwise Topicwise Physics",
    image: "https://images-na.ssl-images-amazon.com/images/I/81YsXnpltGL.jpg",
    description:
      "Comprehensive guide covering physics topics chapterwise and topicwise, designed to help NEET aspirants master each concept thoroughly. Includes detailed explanations, solved examples, and practice questions to strengthen problem-solving skills.",
    price: 1699,
  },
  {
    name: "Biology Vol-1",
    image:
      "https://www.bookwalas.com/wp-content/uploads/2023/04/1000031645-scaled.jpg",
    description:
      "Detailed study material encompassing biology concepts vital for NEET exam readiness. Explore the intricacies of biology, including genetics, ecology, and human physiology, to ace the biology section of the NEET exam.",
    price: 1599,
  },
  {
    name: "Biology Vol-2",
    image:
      "https://n2.sdlcdn.com/imgs/i/r/r/Objective-Biology-for-NEET-2020-SDL496740787-1-55344.jpg",
    description:
      "Enhance your understanding of advanced biology topics essential for NEET exam success. Delve into topics such as biotechnology, evolution, and human anatomy to excel in the NEET biology section.",
    price: 1799,
  },
];
