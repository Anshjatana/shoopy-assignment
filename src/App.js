import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const [selectedPaymentMode, setSelectedPaymentMode] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const data = [
    {
      title: "Name.com Inc.",
      image:
        "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_dcb9168484e57e50c0b17699c90cbc98/name-com.jpg",
      price: "$9.89",
      description: "June 22 . Automatic Payment",
      paymentMode: "Automatic",
      status: "Completed",
    },
    {
      title: "Name.com Inc.",
      image:
        "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_dcb9168484e57e50c0b17699c90cbc98/name-com.jpg",
      price: "$8.89",
      description: "June 21 . Manual Payment",
      paymentMode: "Manual",
      status: "Pending",
    },
    {
      title: "Name.com Inc.",
      image:
        "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_dcb9168484e57e50c0b17699c90cbc98/name-com.jpg",
      price: "$9.09",
      description: "June 20 . Automatic Payment",
      paymentMode: "Automatic",
      status: "Completed",
    },
    {
      title: "Name.com Inc.",
      image:
        "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_dcb9168484e57e50c0b17699c90cbc98/name-com.jpg",
      price: "$7.79",
      description: "June 19 . Automatic Payment",
      paymentMode: "Automatic",
      status: "Pending",
    },
    {
      title: "Name.com Inc.",
      image:
        "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_dcb9168484e57e50c0b17699c90cbc98/name-com.jpg",
      price: "$9.99",
      description: "June 18 . Manual Payment",
      paymentMode: "Manual",
      status: "Completed",
    },
    {
      title: "Name.com Inc.",
      image:
        "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_dcb9168484e57e50c0b17699c90cbc98/name-com.jpg",
      price: "$6.96",
      description: "June 17 . Manual Payment",
      paymentMode: "Manual",
      status: "Pending",
    },
    {
      title: "Name.com Inc.",
      image:
        "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_dcb9168484e57e50c0b17699c90cbc98/name-com.jpg",
      price: "$7.36",
      description: "June 16 . Automatic Payment",
      paymentMode: "Automatic",
      status: "Pending",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Filter
        setSelectedPaymentMode={setSelectedPaymentMode}
        setSelectedStatus={setSelectedStatus}
      />
      <div className="card-list">
        {data
          .filter(
            (card) => selectedStatus === "" || card.status === selectedStatus
          )
          .map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              price={card.price}
              paymentMode={card.paymentMode}
              selectedPaymentMode={selectedPaymentMode}
              status={card.status}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
