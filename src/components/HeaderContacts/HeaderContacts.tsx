import "./HeaderContacts.scss";

const HeaderContacts = () => {
  return (
    <div className="header__nav">
      <div className="header__contacts ">
        <div className="header__address">
          <svg
            width={16}
            height={18}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 9.834a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              stroke="#3F4E65"
              strokeWidth={1.3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 .667a6.667 6.667 0 00-6.667 6.666c0 1.577.335 2.609 1.25 3.75L8 17.333l5.416-6.25c.915-1.141 1.25-2.173 1.25-3.75A6.666 6.666 0 008 .667v0z"
              stroke="#3F4E65"
              strokeWidth={1.3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <a href="#">г. Кокчетав, ул. Ж. Ташенова 129Б</a>
            <span>(Рынок Восточный)</span>
          </div>
        </div>

        <div className="header__mail">
          <svg
            width={18}
            height={14}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.375.333h11.25a2.708 2.708 0 012.704 2.555l.005.154v7.916a2.708 2.708 0 01-2.555 2.704l-.154.005H3.375a2.709 2.709 0 01-2.704-2.555l-.004-.154V3.042A2.708 2.708 0 013.222.337l.153-.004h11.25-11.25zm12.709 4.478L9.292 8.386a.625.625 0 01-.503.036l-.08-.035-6.792-3.575v6.146a1.459 1.459 0 001.338 1.454l.12.005h11.25a1.458 1.458 0 001.454-1.34l.005-.119V4.811zm-1.459-3.228H3.375a1.458 1.458 0 00-1.453 1.339l-.005.12v.357L9 7.127l7.084-3.729v-.356a1.459 1.459 0 00-1.34-1.454l-.119-.005z"
              fill="#3F4E65"
            />
          </svg>
          <div>
            <a href="mailto:opt.sultan@mail.ru ">opt.sultan@mail.ru </a>
            <span>На связи в любое время</span>
          </div>
        </div>
      </div>
      <nav className="header__links">
        <ul>
          <li>
            <a href="#">О компании</a>
          </li>
          <li>
            <a href="#">Доставка и оплата</a>
          </li>
          <li>
            <a href="#">Возврат</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderContacts;
