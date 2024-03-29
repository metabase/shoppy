import { useAvailableFonts } from "@metabase/embedding-sdk-react";

import "./FontSelector.css";

export const FontSelector = ({ value, setValue }) => {
  const { availableFonts } = useAvailableFonts();

  const handleFontChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="FontSelector--container">
      <label className="FontSelector--label">Select a font:</label>
      <select
        value={value}
        onChange={handleFontChange}
        className="FontSelector-button"
        style={{
          fontFamily: value,
        }}
      >
        {availableFonts?.map((font) => (
          <option value={font}>{font}</option>
        ))}
      </select>
    </div>
  );
};
