import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { uploadFarmImgs } from "../store/AdminImages";
import { createFarmInstance } from "../store/AdminCreateFarm";
import { useDispatch, useSelector } from "react-redux";

function FarmCreateScreen() {
  const dispatch = useDispatch();

  const [farmImages, setFarmImages] = useState();
  const [values, setValues] = useState({
    Location: "",
    name: "",
    priceOnHoliday: "",
    priceOnNormalDays: "",
    kitchenDetails: "",
    yardDetails: "",
    bulidingDetails: "",
    poolLenght: "",
    poolWidth: "",
    poolDepth: "",
    bedRoomsNum: "",
    livingRoomNum: "",
    pathRoomNum: "",
    bedsNum: "",
    maxNumOFVistors: "",
    rating: "",
    descrption: "",
    farmType: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(prop);
    console.log(values);
  };

  const ImgsSubmitHandler = (event) => {
    event.preventDefault();
    const images = [...event.target.files];
    images.map((item) => {
      console.log(item);
      const formData = new FormData();
      formData.append("image", item);
      formData.append("farm", 6);
      dispatch(uploadFarmImgs(formData));
    });
  };


  const farmSubmitHandler = (event) => {
    event.preventDefault();
    if (values.Location){
        dispatch(createFarmInstance(values))
        console.log(values)
    }

  }
  return (
    <Container>
      <form onSubmit={farmSubmitHandler}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            padding: "1.2rem",
          }}
        >
          <TextField
            id="Location-input"
            label="Location"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("Location")}
            variant="filled"
          />
          <TextField
            id="farmType-input"
            label="farmType"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("farmType")}
            variant="filled"
          />
          <TextField
            id="name-input"
            label="name"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("name")}
            variant="filled"
          />

          <TextField
            id="priceOnHoliday-input"
            label="priceOnHoliday"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("priceOnHoliday")}
            variant="filled"
          />
          <TextField
            id="priceOnNormalDays-input"
            label="priceOnNormalDays"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("priceOnNormalDays")}
            variant="filled"
          />
          <TextField
            id="kitchenDetails-input"
            label="kitchenDetails"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("kitchenDetails")}
            variant="filled"
          />
          <TextField
            id="yardDetails-input"
            label="yardDetails"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("yardDetails")}
            variant="filled"
          />
          <TextField
            id="bulidingDetails-input"
            label="bulidingDetails"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("bulidingDetails")}
            variant="filled"
          />

          <TextField
            id="poolLenght-input"
            label="poolLenght"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("poolLenght")}
            variant="filled"
          />
          <TextField
            id="poolWidth-input"
            label="poolWidth"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("poolWidth")}
            variant="filled"
          />
          <TextField
            id="poolDepth-input"
            label="poolDepth"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("poolDepth")}
            variant="filled"
          />
          <TextField
            id="bedRoomsNum-input"
            label="bedRoomsNum"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("bedRoomsNum")}
            variant="filled"
          />
          <TextField
            id="livingRoomNum-input"
            label="livingRoomNum"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("livingRoomNum")}
            variant="filled"
          />
          <TextField
            id="pathRoomNum-input"
            label="pathRoomNum"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("pathRoomNum")}
            variant="filled"
          />
          <TextField
            id="bedsNum-input"
            label="bedsNum"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("bedsNum")}
            variant="filled"
          />
          <TextField
            id="maxNumOFVistors-input"
            label="maxNumOFVistors"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("maxNumOFVistors")}
            variant="filled"
          />
          <TextField
            id="rating-input"
            label="rating"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("rating")}
            variant="filled"
          />
          <TextField
            id="descrption-input"
            label="descrption"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("descrption")}
            variant="filled"
          />

          <Button variant="contained" type="submit">
            submit
          </Button>
        </Container>
      </form>
      <label>choose images</label>
      <input
        type={"file"}
        multiple={"multiple"}
        id="images"
        value={farmImages}
        onChange={(event) => {
          ImgsSubmitHandler(event);
        }}
      ></input>
    </Container>
  );
}

export default FarmCreateScreen;
