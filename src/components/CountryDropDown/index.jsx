import React, { useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { Dialog } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  let [isopen, setisopen] = useState(false);
  const [selected, setselected] = useState(null);
  const [countryList, setcountryList] = useState([]);

  const context = useContext(MyContext);

  const selectedCountry = (index, country) => {
    setselected(index);
    setisopen(false);
    context.setsearch(country);
  };

  useEffect(() => {
    setcountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setcountryList(list);
    } else {
      setcountryList(context.countryList);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          setisopen(true);
        }}
        className="countryDrop"
      >
        <div className="info d-flex flex-column ">
          <span className="label">Your Location</span>
          <span className="name">
            {context.search !== ""
              ? context.search.length > 10
                ? context.search?.substr(0, 10) + "..."
                : context.search
              : "search your location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isopen}
        onClose={() => {
          setisopen(false);
        }}
        TransitionComponent={Transition}
        className="locationModal"
      >
        <h5 className="mb-0">Delivery Location </h5>
        <p>Enter your address and we will specify fro your area</p>
        <Button className="close_">
          <MdClose
            onClick={() => {
              setisopen(false);
            }}
          />
        </Button>
        <div className="headerSearch w-100 ">
          <input
            type="text"
            placeholder="Search Your city"
            onChange={filterList}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => {
                      setisopen(false);
                      selectedCountry(index, item.country);
                    }}
                    className={`${selected === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
