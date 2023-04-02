import "./Footer.scss";
import visaIcon from "../../img/icons/visa-icon.png";
import mastercardIcon from "../../img/icons/mastercard-icon.png";
import telegramIcon from "../../img/icons/telegram-icon.png";
import whatsupIcon from "../../img/icons/whatsup-icon.png";
import { useMediaQuery } from "react-responsive";
import FooterMobile from "../FooterMobile/FooterMobile";

const Footer = () => {
  const isMobileOrTab = useMediaQuery({ query: "(max-width: 1040px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1041px)" });

  return (
    <footer className="footer">
      <div className="container">
        {isMobileOrTab && <FooterMobile />}
        {isDesktop && (
          <div className="footer__wrapper">
            <div className="footer__description">
              <svg
                width={156}
                height={66}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#prefix__clip0_3079_491)" fill="#fff">
                  <path d="M48.513 24.674a16.76 16.76 0 00-3.319-9.896.513.513 0 00-.117-.158 21.426 21.426 0 00-5.124-4.89 1.476 1.476 0 00-.162-.112A26.63 26.63 0 0029.696 5.57h-.045a.13.13 0 00-.072 0 28.09 28.09 0 00-2.823-.374c-.072-1.988-.482-3.216-.964-3.98A2.32 2.32 0 0024.352.05h-.203a2.336 2.336 0 00-1.446 1.165c-.486.765-.9 1.998-.963 3.986-9.361.792-17.156 5.906-20.262 12.825a.834.834 0 00-.045.112 16.181 16.181 0 00-1.396 6.563c0 5.358 2.607 10.347 7.348 14.067a12.728 12.728 0 00.59 6.23c-1.117 3.599-2.107 8.192-.225 12.096v.036c2.17 4.453 6.42 5.659 10.532 6.82a30.496 30.496 0 015.686 1.992l.064.027h.04a.604.604 0 00.126 0h.068c.081.001.162-.019.234-.058a30.491 30.491 0 015.691-2.02c2.342-.661 4.732-1.35 6.754-2.622l.059-.041a10.052 10.052 0 003.719-4.156c1.905-3.91.9-8.444-.153-11.957a.198.198 0 00-.036-.068c1.072-2.6.774-5.398.635-6.333 4.737-3.702 7.344-8.682 7.344-14.04zm-1.014 0a15.372 15.372 0 01-.616 4.3 17.095 17.095 0 00-2.752-4.025c-2.048-2.25-5.673-5.025-11.553-6.114a65.048 65.048 0 0111.914-3.288 15.734 15.734 0 013.008 9.127zm-3.678-10.031a63.642 63.642 0 00-15.31 4.809c-.314-2.55-1.45-4.557-2.953-5.29.05-.18.09-.351.13-.522a65.888 65.888 0 0113.788-3.032 20.6 20.6 0 014.345 4.035zm-5.894 32.47l-.27.238a7.506 7.506 0 01-3.305 1.475h-.18c-2.517.45-5.777.112-9.744-1.053h-.293c-1.807.552-3.66.936-5.538 1.147h-.081c-3.517.342-6.164-.278-7.907-1.87-2.022-1.764-2.4-4.53-2.4-6.402a10.075 10.075 0 003.697 3.9c2.589 1.53 5.853 1.8 9.712.86a2.943 2.943 0 002.62 1.583 2.938 2.938 0 002.617-1.584c3.858.958 7.127.67 9.712-.859a10.01 10.01 0 003.697-3.9c.036 1.871-.343 4.638-2.337 6.464zM35.675 60.89a26.632 26.632 0 01-5.475 1.992 12.446 12.446 0 01-2.202-2.784c-.9-1.615-.45-3.392.221-5.074.113-.288.248-.599.392-.922.549-1.246 1.206-2.749.981-4.139.739.09 1.481.136 2.225.14.746.002 1.491-.055 2.228-.171.284.8-.121 2.177-.486 3.414A9.545 9.545 0 0033.005 56a5.8 5.8 0 002.67 4.89zM24.27 64.939c-.73-.54-3.255-2.622-3.742-6.028-.45-3.095.878-6.46 3.913-10.008 1.34.383 2.703.683 4.08.9.36 1.142-.275 2.586-.838 3.868-.148.342-.288.666-.405.967-.743 1.912-1.279 3.954-.162 5.938.546.946 1.207 1.82 1.968 2.604a28.433 28.433 0 00-4.818 1.76h.004zm11.793-21.246c-2.423 1.43-5.566 1.647-9.32.648a.503.503 0 00-.65.36 1.926 1.926 0 01-1.827 1.287 1.92 1.92 0 01-1.833-1.305.486.486 0 00-.243-.306.537.537 0 00-.423-.036c-3.747.994-6.876.778-9.303-.648a9.394 9.394 0 01-4.007-5.105c.41-.828 2.418-4.589 6.93-8.961.481-.279 6.605-3.626 17.767.027 4.48 4.35 6.524 8.151 6.925 8.938a9.417 9.417 0 01-4.02 5.088l.004.013zM20.952 20.896c0-2.578.94-4.845 2.22-5.677.139-.099.29-.179.45-.239.159-.06.326-.096.495-.108h.19c.171.004.342.036.503.095.16.052.31.125.45.216 1.14.706 2.022 2.546 2.225 4.737.035.324.052.65.05.976v.17a9.775 9.775 0 01-.343 2.475 8.743 8.743 0 01-.346.985c-.608 1.444-1.558 2.393-2.612 2.393s-2.004-.945-2.611-2.389a6.99 6.99 0 01-.356-1.034 9.766 9.766 0 01-.315-2.6zm1.067 6.046c-1.524.068-3.034.31-4.503.72a48.657 48.657 0 013.251-2.529 5.96 5.96 0 001.252 1.809zm4.318.143a5.688 5.688 0 001.391-1.952c1.351.976 2.603 1.97 3.72 2.947a34.186 34.186 0 00-5.111-.994zm-.419-14.597a37.39 37.39 0 00.784-5.452c.9-.175 1.823-.342 2.773-.495a26.032 26.032 0 018.627 3.212 66.657 66.657 0 00-12.184 2.735zM23.482 1.805c.166-.326.425-.595.743-.774.317.18.575.45.743.774.333.562.675 1.56.747 3.283V6.21c0 .328-.026.67-.049 1.048a38.997 38.997 0 01-.9 5.614c-.073.328-.145.66-.226 1.007a1.89 1.89 0 00-.315-.022 3.304 3.304 0 00-.37.027c-.049-.212-.103-.419-.148-.63a42.047 42.047 0 01-.9-5.33c-.036-.36-.063-.702-.077-1.026-.013-.324-.027-.54-.031-.792V5.093c.108-1.727.454-2.726.783-3.288zm-1.765 4.372c0 .31.023.639.045.976-9.24 2.51-14.958 6.217-17.867 8.547 3.567-5.168 10.136-8.848 17.822-9.523zM2.324 18.521c.356-.383 2.355-2.452 6.304-4.81a53.427 53.427 0 0113.22-5.514c.206 1.828.522 3.643.945 5.434a44.816 44.816 0 00-13.625 8.245c-4.052 3.671-6.115 7.09-6.948 8.736a15.223 15.223 0 01.109-12.087l-.005-.004zm.45 13.279c.63-1.422 5.147-10.657 18.948-16.644-1.085 1.268-1.779 3.342-1.779 5.735-.01 1.087.141 2.17.45 3.212-8.014 5.641-11.666 11.745-12.67 13.64A18.817 18.817 0 012.77 31.8h.004zm5.854 14.494c.359.574.792 1.099 1.288 1.56a7.905 7.905 0 002.922 1.674 7.657 7.657 0 00-2.855 1.646 7.092 7.092 0 00-2.004 3.558c-.67-2.78-.117-5.812.626-8.438h.023zm.099 10.476c.288-6.801 6.66-6.698 6.938-6.689a.365.365 0 00.14-.022c.338 0 .684.027 1.036 0-2.09 1.646-3.355 3.553-3.76 5.69a9.213 9.213 0 00.833 5.654c-2.161-.922-4.016-2.258-5.21-4.633h.023zm6.686 5.223c-.373-.572-1.886-3.109-1.319-6.046.45-2.28 2.013-4.291 4.674-5.978a27.877 27.877 0 004.106-.756c-2.66 3.432-3.791 6.748-3.34 9.842a9.816 9.816 0 002.224 4.872c-1.058-.369-2.14-.675-3.202-.976-1.062-.301-2.148-.607-3.143-.958zM36.68 60.27a4.834 4.834 0 01-2.647-4.31c.065-.8.236-1.588.509-2.343.414-1.386.833-2.812.522-3.9a8.7 8.7 0 002.377-.967c0 3.882 2.14 5.55 3.03 6.081a9.245 9.245 0 01-.652 1.84 9.05 9.05 0 01-3.157 3.599h.018zm4.003-6.518c-.878-.644-2.427-2.285-2.192-5.772l.144-.126c.48-.44.898-.94 1.247-1.489.621 2.277 1.13 4.886.783 7.387h.018zm.113-15.996c-.986-1.863-4.624-7.945-12.68-13.608.326-1.053.487-2.15.478-3.252v-.324a40.76 40.76 0 012.188-.985c6.56.782 10.464 3.693 12.585 6.01a15.237 15.237 0 013.04 4.8 18.256 18.256 0 01-5.629 7.359h.018z" />
                  <path d="M17.529 35.987c-1.5 0-2.841.657-3.345 1.637a.508.508 0 00.22.68c.072.035.15.053.23.053a.504.504 0 00.45-.274c.329-.639 1.35-1.089 2.445-1.089 1.094 0 2.116.45 2.45 1.089a.502.502 0 00.68.22.509.509 0 00.22-.683c-.513-.976-1.864-1.633-3.35-1.633zM30.979 35.987c-1.5 0-2.846.657-3.346 1.637a.499.499 0 00.22.68c.072.035.15.053.23.053a.503.503 0 00.45-.274c.33-.639 1.351-1.089 2.445-1.089 1.095 0 2.117.45 2.45 1.089a.502.502 0 00.68.22.513.513 0 00.22-.683c-.508-.976-1.855-1.633-3.35-1.633zM63.87 29.078c3.292 0 6.858 1.799 7.47 6.032h-3.993c-.568-1.61-1.774-2.34-3.476-2.34-2.382 0-3.95 1.8-3.95 4.423 0 2.339 1.545 4.377 3.95 4.404 1.729 0 3.111-.864 3.543-2.565h3.994c-.59 4.499-4.151 6.258-7.537 6.258-4.053.022-8.128-2.7-8.15-8.097-.023-5.398 4.11-8.115 8.15-8.115zM77.766 44.696l2.485-5.12-5.344-9.725v-.612h4.538l3 5.848h.112l2.724-5.848h4.426v.612l-7.56 15.294h-4.381v-.45zM94.705 45.145h-3.976v-.589l7.15-15.488h1.734l7.204 15.475v.602h-3.976l-4.084-9.298-4.052 9.298zM108.668 32.888v-3.63h11.801v3.63h-3.881v12.258h-4.016V32.888h-3.904zM133.5 43.135h-6.263l-.932 2.01h-3.972v-.589l7.151-15.488h1.747l7.173 15.488v.59h-3.972l-.932-2.011zm-3.152-7.648l-1.801 4.175h3.634l-1.833-4.175zM156 45.146h-4.156v-6.388h-4.903v6.388h-4.152V29.257h4.152v5.758h4.903v-5.758H156v15.889z" />
                </g>
                <defs>
                  <clipPath id="prefix__clip0_3079_491">
                    <path fill="#fff" d="M0 0h156v66H0z" />
                  </clipPath>
                </defs>
              </svg>
              <p>
                Компания «Султан» — снабжаем розничные магазины товарами <br />{" "}
                "под ключ" в Кокчетаве и Акмолинской области
              </p>
              <span>Подпишись на скидки и акции </span>
              <div className="footer__email-dist">
                <input type="email" placeholder="Введите ваш E-mail" />
                <button>
                  <svg
                    width={8}
                    height={15}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12.857L5 7.5 0 2.143 1 0l7 7.5L1 15l-1-2.143z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="footer__nav">
              <h4>Меню сайта</h4>
              <ul>
                <li>
                  <a href="/">О компании</a>
                </li>
                <li>
                  <a href="/">Доставка и оплата</a>
                </li>
                <li>
                  <a href="/">Возврат</a>
                </li>
                <li>
                  <a href="/">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="footer__categories">
              <h4>Категории:</h4>
              <ul>
                <li>
                  <a href="/">Бытовая химия</a>
                </li>
                <li>
                  <a href="/">Косметика и гигиена</a>
                </li>
                <li>
                  <a href="/">Товары для дома</a>
                </li>
                <li>
                  <a href="/">Товары для детей и мам</a>
                </li>
                <li>
                  <a href="/">Посуда</a>
                </li>
              </ul>
            </div>
            <div className="footer__price-list">
              <h4>Скачать прайс-лист:</h4>
              <button>
                Прайс-лист
                <svg
                  width={12}
                  height={13}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.958 4.375H8.125V.125h-4.25v4.25H1.04L6 10.042l4.958-5.667zM.333 11.458h11.333v1.417H.333v-1.417z"
                    fill="#fff"
                  />
                </svg>
              </button>
              <span>Связь в мессенджерах:</span>
              <ul>
                <li>
                  <a href="/">
                    <img src={whatsupIcon} alt="Whats App" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={telegramIcon} alt="Telegram" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__contacts">
              <h4>Контакты:</h4>
              <div className="footer__support">
                <a href="tel:+7 (777) 490-00-91">+7 (777) 490-00-91</a>
                <span>время работы: 9:00-20:00</span>
                <button>Заказать звонок</button>
              </div>
              <div className="footer__payment">
                <div>
                  <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru </a>
                  <span>На связи в любое время</span>
                </div>
                <ul>
                  <li>
                    <img src={visaIcon} alt="Visa" />
                  </li>
                  <li>
                    <img src={mastercardIcon} alt="Mastercard" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
