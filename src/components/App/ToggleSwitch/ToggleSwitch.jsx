import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  return (
    <label className="toggle-switch">
      <input type="checkbox" className="toggle-switch__checkbox" />
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__text toggle-switch__text-F">F</span>
      <span className="toggle-switch__text toggle-switch__text-C">C</span>
    </label>
  );
}
