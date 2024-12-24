import { Button } from "@mui/material";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { MdElectricBolt } from "react-icons/md";
import { MdFastfood } from "react-icons/md";

const NavbarItem = [
  {
    id: 1,
    Name: "Home",
    icon: <CiHome />,
  },
  {
    id: 2,
    Name: "Fashion",
    icon: <GiClothes />,
  },
  {
    id: 3,
    Name: "Electronics",
    icon: <MdElectricBolt />,
  },
  {
    id: 4,
    Name: "Mobile Accesories",
    icon: <CiMobile3 />,
  },
  {
    id: 5,
    Name: "Food and Grocery",
    icon: <MdFastfood />,
  },
  {
    id: 6,
    Name: "Contact us",
    icon: <CiHome />,
  },
];
const FashionMenu = [
  {
    id: 1,
    name: "Mens",
  },
  {
    id: 2,
    name: "Womens",
  },
  {
    id: 3,
    name: "Kids",
  },
  {
    id: 4,
    name: " Weddings",
  },
  {
    id: 5,
    name: "Party Wear",
  },
  {
    id: 6,
    name: "Casual Wear",
  },
  {
    id: 7,
    name: "Formal Wear",
  },
];
const Electronics = [
  {
    id: 1,
    name: "Ac",
  },
  {
    id: 2,
    name: "Fridge",
  },
  {
    id: 3,
    name: "Washing Machine",
  },
  {
    id: 4,
    name: "heater",
  },
  {
    id: 5,
    name: "bulb , tube light & fan",
  },
  {
    id: 6,
    name: "Microwave",
  },
  {
    id: 7,
    name: "Mixers & Grinders",
  },
  {
    id: 8,
    name: "tv",
  },
  {
    id: 9,
    name: "camera",
  },
  {
    id: 10,
    name: "laptop",
  },
  {
    id: 11,
    name: "Mobile",
  },
];
const MobileAccesories = [
  {
    id: 1,
    name: "Screen Guard",
  },
  {
    id: 2,
    name: "Mobile Cover",
  },
  {
    id: 3,
    name: "Charger",
  },
  {
    id: 4,
    name: "Headphones",
  },
  {
    id: 5,
    name: "Power Bank",
  },
  {
    id: 6,
    name: "Memory Card",
  },
  {
    id: 7,
    name: "Mobile Stand",
  },
];
const Food = [
  {
    id: 1,
    name: "Fruits",
  },
  {
    id: 2,
    name: "Vegetables",
  },
  {
    id: 3,
    name: "Grocery",
  },
  {
    id: 4,
    name: "eggs & meat",
  },
  {
    id: 5,
    name: "Frozen Food",
  },
  {
    id: 6,
    name: "nuts & dry fruits",
  },
  {
    id: 7,
    name: "Beverages",
  },
];

const Navigation = () => {
  
  const [Show, setShow] = useState("");

  const ShowDropDown = (menuname) => {
    setShow(Show === menuname ? "" : menuname);
  };

  const [opensidebar, setopensidebar] = useState(true);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1 ">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setopensidebar(!opensidebar)}
              >
                <span className="icon1 mr-2  ">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2  ">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sideBar shadow-lg ${
                  opensidebar === true ? "open" : ""
                }`}
              >
                {NavbarItem.map((item) => {
                  return (
                    <>
                      <li key={item.id} className="list list-inline-item">
                        <Link to={"/"}>
                          <Button onClick={() => ShowDropDown(item.Name)}>
                            {item.icon}
                            &nbsp;{item.Name}
                          </Button>
                        </Link>
                        {Show === item.Name && item.Name === "Fashion" ? (
                          <div className="submenu shadow-lg">
                            {FashionMenu.map((fashionItem) => (
                              <li key={fashionItem.id} className="">
                                <Link to={"/"}>
                                  <Button>{fashionItem.name}</Button>
                                </Link>
                              </li>
                            ))}
                          </div>
                        ) : null}
                        {Show === item.Name && item.Name === "Electronics" ? (
                          <div className="submenu shadow-lg">
                            {Electronics.map((fashionItem) => (
                              <li key={fashionItem.id} className="">
                                <Link to={"/"}>
                                  <Button>{fashionItem.name}</Button>
                                </Link>
                              </li>
                            ))}
                          </div>
                        ) : null}
                        {Show === item.Name &&
                        item.Name === "Mobile Accesories" ? (
                          <div className="submenu shadow-lg">
                            {MobileAccesories.map((fashionItem) => (
                              <li key={fashionItem.id} className="">
                                <Link to={"/"}>
                                  <Button>{fashionItem.name}</Button>
                                </Link>
                              </li>
                            ))}
                          </div>
                        ) : null}
                        {Show === item.Name &&
                        item.Name === "Food and Grocery" ? (
                          <div className="submenu shadow-lg">
                            {Food.map((fashionItem) => (
                              <li key={fashionItem.id} className="">
                                <Link to={"/"}>
                                  <Button>{fashionItem.name}</Button>
                                </Link>
                              </li>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center  ">
            <ul className="list list-inline ml-auto ">
              {NavbarItem.map((item) => {
                return (
                  <>
                    {" "}
                    <li key={item.id} className="list list-inline-item">
                      <Link to={"/"}>
                        <Button onClick={() => ShowDropDown(item.Name)}>
                          {item.icon}
                          &nbsp;{item.Name}
                        </Button>
                      </Link>
                      {Show === item.Name && item.Name === "Fashion" ? (
                        <div className="submenu shadow-lg">
                          {FashionMenu.map((fashionItem) => (
                            <li key={fashionItem.id} className="">
                              <Link to={"/"}>
                                <Button>{fashionItem.name}</Button>
                              </Link>
                            </li>
                          ))}
                        </div>
                      ) : null}
                      {Show === item.Name && item.Name === "Electronics" ? (
                        <div className="submenu shadow-lg">
                          {Electronics.map((fashionItem) => (
                            <li key={fashionItem.id} className="">
                              <Link to={"/"}>
                                <Button>{fashionItem.name}</Button>
                              </Link>
                            </li>
                          ))}
                        </div>
                      ) : null}
                      {Show === item.Name &&
                      item.Name === "Mobile Accesories" ? (
                        <div className="submenu shadow-lg">
                          {MobileAccesories.map((fashionItem) => (
                            <li key={fashionItem.id} className="">
                              <Link to={"/"}>
                                <Button>{fashionItem.name}</Button>
                              </Link>
                            </li>
                          ))}
                        </div>
                      ) : null}
                      {Show === item.Name &&
                      item.Name === "Food and Grocery" ? (
                        <div className="submenu shadow-lg">
                          {Food.map((fashionItem) => (
                            <li key={fashionItem.id} className="">
                              <Link to={"/"}>
                                <Button>{fashionItem.name}</Button>
                              </Link>
                            </li>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
