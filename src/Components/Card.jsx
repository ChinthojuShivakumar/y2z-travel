import { SiGooglemaps } from "react-icons/si";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RiAttachment2 } from "react-icons/ri";
import { IoReorderTwoOutline } from "react-icons/io5";
import { Marker } from "./Marker";
import { FiEdit2 } from "react-icons/fi";
import { useState } from "react";
import { PiCheckLight } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFileWord } from "react-icons/fa";

const Card = ({
  title,
  image,
  description,
  rating,
  reviewCount,
  id,
  file,
  onDragOver,
  onDragStart,
  onDrop,
  isDragging,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);
  const [attachmentF, setAttachmentF] = useState(false);
  const [deleteF, setDeleteF] = useState(false);
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{ cursor: isDragging ? "grab" : "pointer" }}
      className="max-sm:my-5 sm:max-lg:my-5"
    >
      <div className="flex w-full gap-2 p-2">
        <div className="flex justify-center items-center cursor-pointer">
          <IoReorderTwoOutline size={28} />
        </div>
        <div className="relative ">
          <div className="absolute top-8 shadow-sm -left-4 max-sm:top-3 sm:max-lg:top-8">
            <Marker number={id} />
          </div>
          <img
            src={image}
            alt=""
            className="w-52 h-36 rounded-[12px] max-sm:h-28 "
          />
        </div>
        <div className="w-full flex flex-col gap-2 p-2">
          <div className="flex justify-between items-center w-full gap-5">
            <h1 className="font-helvetica font-bold w-52 text-[16px] max-sm:w-auto sm:max-lg:w-auto">
              {title}
            </h1>
            <div className="w-full flex gap-5 justify-end">
              <p className="text-[#344767] p-1 cursor-default">
                <SiGooglemaps size={20} />
              </p>

              {mobileView && (
                <p className="p-1">
                  <BsThreeDotsVertical size={20} />
                </p>
              )}
              <p
                className={`max-sm:hidden p-1 sm:max-lg:hidden ${
                  attachmentF && "bg-gray-200 cursor-pointer  rounded-md"
                }`}
                onClick={() => setAttachmentF(true)}
              >
                <RiAttachment2 size={20} />
              </p>
              <p
                className={`text-[#EA0606] p-1 max-sm:hidden sm:max-lg:hidden ${
                  deleteF && "bg-gray-200 cursor-pointer  rounded-md"
                }`}
                onClick={() => setDeleteF(true)}
              >
                <RiDeleteBin6Fill size={20} />
              </p>
            </div>
          </div>
          <p className="text-[#8392AB]  text-[14px] font-normal ">
            {rating} ⭐ <span>({reviewCount})</span>
          </p>
          <p
            className={`line-clamp-2 max-sm:hidden text-justify text-[#343A40] py-2 px-1 bg-opacity-60 rounded-lg bg-gray-100 font-normal text-[14px] flex justify-between items-start gap-5 ${
              editMode && "border-2 border-[#FF0080] rounded-lg "
            }`}
          >
            <span className="space-y-4 line-clamp-2 text-gray-800 max-sm:line-clamp-2">
              {" "}
              {description}
            </span>
            <span onClick={() => setEditMode(!editMode)}>
              {" "}
              {editMode ? (
                <span
                  className={`${
                    editMode && "text-[#FF0080]"
                  } w-[12px] h-[12px] font-bold`}
                >
                  <PiCheckLight size={20} />
                </span>
              ) : (
                <span>
                  <FiEdit2 size={20} color="#344767" />
                </span>
              )}
            </span>
          </p>
        </div>
      </div>
      {mobileView && (
        <span className="space-y-4 text-gray-800 max-sm:line-clamp-2 max-sm:px-5">
          {" "}
          {description}
        </span>
      )}
      {file && (
        <div className="pl-12 py-2 flex gap-3">
          <div className="w-32 border-[1px] border-gray-400 text-gray-400 flex justify-between items-center p-2 rounded-md">
            <FaFileWord size={20} color="#134DB1" />
            <p className="text-start w-auto">{file}</p>
            <BsThreeDotsVertical size={20} />
          </div>
          <div className="w-32 border-[1px] border-dashed text-gray-400 border-gray-400 flex justify-center items-center p-2 rounded-md text-center">
            +
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
