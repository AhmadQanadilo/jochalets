import React, { Fragment, useState } from "react";
import Hero from "../components/Hero";
import FilterSection from "../sections/FilterSection";
import FarmsResult from "../sections/FarmsResult";

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
      <Hero />
      <FilterSection onSaveFilterData={SaveFilterDataHandler} />
      <FarmsResult Data={filterState} />
    </Fragment>
  );
}

export default HomeScreen;
