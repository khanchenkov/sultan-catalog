import "./Breadcrumbs.scss";
import { FC } from "react";
import { IBreadcrumbs } from "../../types/Interfaces";

const Breadcrumbs: FC<IBreadcrumbs> = ({ routes }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs__wrapper">
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            {routes &&
              routes.map((item: string, id) => (
                <li key={id}>
                  <a href="/">{item}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
