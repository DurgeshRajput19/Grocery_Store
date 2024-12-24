import { IoIosSearch } from "react-icons/io";
import { Button } from "@mui/material";
const SearchBox = () => {
  return (
    <>
      <div className="headerSearch ml-3 ">
        <input type="text" placeholder="search for products" />
        <Button>
          <IoIosSearch />
        </Button>
      </div>
    </>
  );
};

export default SearchBox;
