import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Vehicle from "./Vehicle";
import ReactPaginate from "react-paginate";
import "./vehicles.css";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    try {
      const response = axios
        .get("http://localhost:5005/api/vehicles/")
        .then((response) => {
          setVehicles(response.data);
          console.log(vehicles);
        });
      console.log(response);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }, []);

  const pageCount = Math.ceil(vehicles.length / itemsPerPage);
  //  console.log(vehicles.length);

  // Invoke when user click to request another page.
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);

    //scroll to the top when changing the page
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  };

  useEffect(() => {
    // Scroll to the top when changing the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" instead of "smooth" for instant scrolling
    });
  }, [pageNumber]);

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = vehicles.slice(startIndex, endIndex);

  return (
    <Box flex="3">
      <Box bg="#fff" border="1px solid #E8E8E8">
        {currentItems.map((vehicle) => (
          <Vehicle
            key={vehicle._id}
            make={vehicle.make}
            model={vehicle.model}
            year={vehicle.year}
            picture={vehicle.picture}
            price={vehicle.price}
          />
        ))}
      </Box>
      <Box mt="20px">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next →"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="← Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          disabledClassName={"pagination__link--disabled"}
          previousLinkClassName="pagination__link"
          nextLinkClassName="pagination__link"
          activeLinkClassName="pagination__link--active"
        />
      </Box>
    </Box>
  );
};

export default Vehicles;
