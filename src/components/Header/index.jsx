import { Link } from "react-router-dom";
import logo from "../../assests/3541663.jpg";
import { Button } from "@mui/material";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import CountryDropDown from "../CountryDropDown";
import SearchBox from "./searchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple ">
          <div className="container">
            <p className="mb-0 mt-0 text-center ">
              {" "}
              Due to COVID-19 epidemic , orders may be delay{" "}
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="d-flex align-items-center col-sm-10 part-2 ">
                {context.countryList.length !== 0 && <CountryDropDown />}

                {/* header search bar  */}
                <SearchBox />

                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3 ">
                    <FiUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center ">
                    <span className="price">$99.99</span>
                    <div className="position-relative ml-2">
                      <Button className="circle ">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center "></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
