import "./App.css";
import {
  MuiAccordion,
  MuiAutoComplete,
  MuiButton,
  MuiCard,
  MuiCheckbox,
  MuiImageList,
  MuiLayout,
  MuiRadioButton,
  MuiRating,
  MuiSelect,
  MuiSwitch,
  MuiTextField,
  MuiTypography,
} from "./components";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete />
      <MuiLayout />
      <MuiCard />
      <MuiAccordion />
      <MuiImageList />
    </div>
  );
}

export default App;
