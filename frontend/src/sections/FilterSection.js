import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { BorderBottom } from "@mui/icons-material";

function FilterSection(props) {
  const theme = useTheme();

  const [location, setLocation] = useState("جميع المناطق");
  const [sortBy, setSortBy] = useState("");
  const [farmType, setFarmType] = useState("الكل");

  const LocationDic = [
    { id: 1, location: "جميع المناطق" },
    { id: 2, location: "البحر الميت" },
    { id: 3, location: "عمان" },
    { id: 4, location: "مادبا" },
    { id: 5, location: "جرش" },
    { id: 6, location: "عجلون" },
    { id: 7, location: "الزرقاء" },
    { id: 8, location: "اربد" },
    { id: 9, location: "البلقاء" },
    { id: 10, location: "الكرك" },
    { id: 11, location: "العقبة" },
  ];
  const sortByDic = [
    { id: 1, filter: "الاقل سعرا" },
    { id: 2, filter: "الاكثر سعرا" },
  ];
  const farmTypeDic = [
    { id: 1, label: "عائلية" },
    { id: 2, label: "شبابية" },
    { id: 3, label: "مناسبات" },
    { id: 4, label: "الكل" },
  ];

  const filterSubmitHandler = (event) => {
    event.preventDefault();

    props.onSaveFilterData({
      filterLocation: location?.location,
      filterSortBy: sortBy?.filter,
      filterFarmType: farmType?.label,
    });
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        borderTop:`3px solid ${theme.palette.grey[500]}`,
        borderBottom:`3px solid ${theme.palette.grey[500]}`,
        padding:"1.2rem 0",
        marginTop:"1.2rem"
      }}
    >
      <Container
        sx={{
        }}
      >
        <form onSubmit={filterSubmitHandler}>
          <Container
            sx={{
              display: "flex",
              gap: "1.2rem",
              paddingTop: "1.2rem",
              width: "100%",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Autocomplete
              value={location}
              onChange={(event, newValue) => {
                setLocation(newValue);
              }}
              id="controllable-states-demo"
              options={LocationDic}
              getOptionLabel={(option) => `${option.location}`}
              renderInput={(params) => (
                <TextField {...params} label="اختر الموقع" />
              )}
              isOptionEqualToValue={(option, value) => true}
            />
            <Autocomplete
              value={sortBy}
              onChange={(event, newValue) => {
                setSortBy(newValue);
              }}
              id="controllable-states-demo"
              options={sortByDic}
              getOptionLabel={(option) => `${option.filter}`}
              renderInput={(params) => (
                <TextField {...params} label="ترتيب حسب" />
              )}
              isOptionEqualToValue={(option, value) => true}
            />

            <Autocomplete
              value={farmType}
              onChange={(event, newValue) => {
                setFarmType(newValue);
              }}
              id="controllable-states-demo"
              options={farmTypeDic}
              getOptionLabel={(option) => `${option.label}`}
              renderInput={(params) => (
                <TextField {...params} label="ترتيب حسب" />
              )}
              isOptionEqualToValue={(option, value) => true}
            />

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
            >
              Search
            </Button>
          </Container>
        </form>
      </Container>
    </Box>
  );
}

export default FilterSection;
