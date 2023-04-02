const defineSize = (
  measurment: string | undefined,
  size: string | undefined,
  classname: string
) => {
  const volumeIcon = (
    <svg width={9} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity={0.23} clipPath="url(#prefix__clip0_56_1553)">
        <path
          d="M8.1 14.063a1.41 1.41 0 01-.302.659A.743.743 0 017.2 15H1.8a.73.73 0 01-.59-.271 1.52 1.52 0 01-.31-.666L0 8.436V6.563a.96.96 0 01.274-.704c.183-.185.453-.368.809-.549.356-.18.576-.3.66-.359a5.36 5.36 0 001.013-.967c.3-.37.52-.761.661-1.171H3.15a.424.424 0 01-.316-.14.46.46 0 01-.134-.33V.47a.46.46 0 01.134-.33A.424.424 0 013.15 0h2.7c.122 0 .227.046.316.14A.46.46 0 016.3.468v1.875a.46.46 0 01-.134.33.424.424 0 01-.316.139h-.267c.281.79.801 1.474 1.56 2.05.104.088.338.225.704.41.365.186.65.376.85.572A.96.96 0 019 6.563v1.875l-.9 5.624z"
          fill="#3F4E65"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_56_1553">
          <path fill="#fff" d="M0 0h9v15H0z" />
        </clipPath>
      </defs>
    </svg>
  );
  const weightIcon = (
    <svg width={20} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity={0.23} clipPath="url(#prefix__clip0_56_1572)">
        <path
          d="M13.303 8a1.515 1.515 0 01-1.294-.731L10 3.937 7.994 7.27a1.52 1.52 0 01-1.297.734c-.14 0-.281-.019-.416-.06L2 6.72v5.562c0 .46.312.86.756.969l6.756 1.69c.32.079.654.079.97 0l6.762-1.69c.444-.113.756-.513.756-.969V6.72L13.719 7.94c-.135.04-.275.059-.416.059zm6.644-3.506l-1.61-3.213a.51.51 0 00-.521-.278L10 2l2.866 4.753c.118.197.356.29.578.228l6.184-1.765c.31-.091.46-.435.319-.722zM1.662 1.28L.053 4.494a.51.51 0 00.316.718l6.184 1.766a.514.514 0 00.578-.228L10 2l-7.819-.997a.51.51 0 00-.519.278z"
          fill="#3F4E65"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_56_1572">
          <path fill="#fff" d="M0 0h20v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className={`${classname}__size`}>
      {measurment === "volume" ? volumeIcon : weightIcon}
      <span>{measurment === "volume" ? `${size} мл` : `${size} г`}</span>
    </div>
  );
};

export default defineSize;
