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
  // const [filterCord, setFilterCord] = useState();
  const SaveFilterDataHandler = (enteredFilterData) => {
    
    setFilterState(enteredFilterData);
  };

  // const FiterWindoCordHandler = (enterDate) => {
  //   setFilterCord(enterDate)
  // }
  

  return (
    <Fragment>
      <ImageSlider />
      <FilterSection  onSaveFilterData={SaveFilterDataHandler} />
      <FarmsResult Data={filterState} />
    </Fragment>
  );
}

export default HomeScreen;
