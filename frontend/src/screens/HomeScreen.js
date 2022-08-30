import React, { Fragment, useState } from "react";
import FilterSection from "../sections/FilterSection";
import FarmsResult from "../sections/FarmsResult";
import ImageSlider from "../components/HeroImgSlider";

const InitialFilterData = {
  filterFarmType: "",
  filterLocation: "",
  filterSortBy: "",
};

function HomeScreen() {
  const [filterState, setFilterState] = useState(InitialFilterData);
  const SaveFilterDataHandler = (enteredFilterData) => {
    
    setFilterState(enteredFilterData);
  };
  

  return (
    <Fragment>
      <ImageSlider />
      <FilterSection onSaveFilterData={SaveFilterDataHandler} />
      <FarmsResult Data={filterState} />
    </Fragment>
  );
}

export default HomeScreen;
