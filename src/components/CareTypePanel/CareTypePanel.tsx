import "./CareTypePanel.scss";
import { FC } from "react";

interface ICareTypePanel {
  setCurrentCareType: any;
  careTypes: string[];
  currentCareType: string;
}

const CareTypePanel: FC<ICareTypePanel> = ({
  setCurrentCareType,
  careTypes,
  currentCareType,
}) => {

  const typeCareButtonHandler = (careType: string) => {
    if (careType === currentCareType) {
      setCurrentCareType("");
    } else {
      setCurrentCareType(careType);
    }
  };

  return (
    <div className="care-type-panel">
      <div className="container">
        <div className="care-type-panel__wrapper">
          <ul>
            {careTypes.map((item, i) => (
              <li key={i} className={currentCareType === item ? "active" : ""}>
                <button onClick={() => typeCareButtonHandler(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareTypePanel;
