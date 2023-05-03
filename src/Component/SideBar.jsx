import React from "react";
import {
  FaHome,
  FaComment,
  FaCalendarAlt,
  FaUsers,
  FaBook,
  FaRegIdCard,
  FaSuitcase,
  FaFileAlt,
  FaMoneyBillAlt,
  FaCog,
} from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FaHome />
          <span>Home</span>
        </li>
        <li>
          <FaComment />
          <span>Chats</span>
        </li>
        <li>
          <FaCalendarAlt />
          <span>Schedule</span>
        </li>
        <li>
          <FaUsers />
          <span>Clients</span>
        </li>
        <li>
          <FaBook />
          <span>Bookings</span>
        </li>
        <li>
          <FaRegIdCard />
          <span>Programs</span>
        </li>
        <li>
          <FaSuitcase />
          <span>Packages</span>
        </li>
        <li>
          <FaFileAlt />
          <span>Resources</span>
        </li>
        <li>
          <FaMoneyBillAlt />
          <span>Finance</span>
        </li>
        <li>
          <FaCog />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
