import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import List from "../../data.json";
import Header from "../Components/Header";
import DemoMap from "../Components/DemoMap";
import { LiaMapSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cardList, setCardList] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const STORAGE_KEY = "cardListOrder";
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);
  const navigate = useNavigate();

  const handleDragStart = (i) => {
    setDraggedIndex(i);
  };

  const handleDrop = () => {
    setDraggedIndex(i);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (index === draggedIndex) return;
    const updated = [...cardList];
    const draggedItem = updated[draggedIndex];
    updated.splice(draggedIndex, 1);
    updated.splice(index, 0, draggedItem);

    setDraggedIndex(index);

    setCardList(updated);
  };

  useEffect(() => {
    if (cardList.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cardList));
    }
  }, [cardList]);

  useEffect(() => {
    setCardList(List);
  }, []);
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setCardList(JSON.parse(stored));
    } else {
      setCardList(List);
    }
  }, []);
  return (
    <div className="flex w-full">
      <div className="w-[45%] overflow-y-scroll h-[100vh] max-sm:w-full sm:max-lg:w-full relative">
        <Header />
        <h1 className="font-helvetica font-bold text-[30px] pl-12 pt-4 max-sm:pl-5 sm:max-lg:pt-2">
          Itinerary
        </h1>
        <h6 className="font-helvetica font-bold text-[#8392AB] text-[16px] pl-12 py-2 max-sm:pl-5">
          Day
        </h6>
        <div className=" max-sm:w-full sm:max-lg:w-full ">
          {cardList?.map((card, i) => {
            return (
              <Card
                title={card.title}
                description={card.description}
                image={card.image}
                rating={card.rating}
                reviewCount={card.reviews}
                key={card.id}
                id={card.id}
                file={card.files}
                onDragOver={(e) => handleDragOver(e, i)}
                onDragStart={() => handleDragStart(i)}
                onDrop={handleDrop}
                isDragging={draggedIndex === i}
              />
            );
          })}
        </div>
        {mobileView && (
          <div className="fixed bottom-4  w-full flex justify-center items-center">
            <button
              type="button"
              className="w-32 h-10 bg-gray-700 rounded-md font-bold capitalize text-white flex justify-center items-center gap-2"
              onClick={() => navigate("/map")}
            >
              Maps <LiaMapSolid size={20} />
            </button>
          </div>
        )}
      </div>
      <div className="w-[55%] max-sm:hidden sm:max-lg:hidden">
        <DemoMap />
      </div>
    </div>
  );
};

export default Home;
