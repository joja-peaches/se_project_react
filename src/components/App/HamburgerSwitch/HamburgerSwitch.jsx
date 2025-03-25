import { useContext } from "react";
import "./HamburgerSwitch.css";
import CurrentTemperatureUnitContext from "../../../contexts/CurrentTemperaturUnitContext";

export default function HamburgerSwitch({ isOpen }) {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className={`hamburger-switch ${isOpen ? 'hamburger-switch_on' : ""}`}>
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="hamburger-switch__checkbox"
      />
      <span className="hamburger-switch__circle"></span>
      <span
        className={`hamburger-switch__text hamburger-switch__text-F ${
          currentTemperatureUnit === "F"
            ? "hamburger-switch__text_color_white"
            : ""
        }`}
      >
        F
      </span>
      <span
        className={`hamburger-switch__text hamburger-switch__text-C ${
          currentTemperatureUnit === "C"
            ? "hamburger-switch__text_color_white"
            : ""
        }`}
      >
        C
      </span>
    </label>
  );
}