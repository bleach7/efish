import { IIcon } from "@/interfaces";

export const LogoBlueIcon = ({ className, ...props }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      fill="none"
      viewBox="0 0 56 56"
      className={className}
      {...props}
    >
      <rect
        width="56"
        height="56"
        fill="url(#paint0_linear_2_4571)"
        rx="10"
      ></rect>
      <mask
        id="mask0_2_4571"
        style={{ maskType: "alpha" }}
        width="56"
        height="56"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <rect
          width="56"
          height="56"
          fill="url(#paint1_linear_2_4571)"
          rx="10"
        ></rect>
      </mask>
      <g mask="url(#mask0_2_4571)">
        <path
          fill="#C1DFFF"
          d="M3.56 35.393C-7.034 41.05-8.8 48.727-8.8 48.727V56h82.4V44.686s-6.474-20.607-22.954-9.293-12.36.808-23.543 2.02-12.949-7.677-23.543-2.02z"
        ></path>
      </g>
      <path
        fill="#52A5FC"
        d="M28.314 8.191c-12.271.282-17.373 7.5-18.39 11.073 3.036 5.197 12.325 5.583 16.59 5.126 2.504 1.76 6.025 1.956 7.043 1.252.814-.563-.678-2.034-1.526-2.7 5.087-2.7 9.9-2.426 11.777 1.878 1.503 3.444-1.904 5.765-3.795 6.496-8.702.376-10.33 1.382-10.056 1.839.601 2.207 5.713 3.395 7.474 4.265 2.723 1.346 1.656 3.821.782 4.89-4.813 4.5-4.76 4.931-4.578 5.322.751 1.91 5.4-1.082 7.63-2.817 7.262-6.354 7.93-14.282 7.356-17.451-.125-9.015-7.043-14.895-10.486-16.708 1.91-1.002 2.178-1.643 2.074-1.839-3.561-2.739-7.63-.235-8.96-.47-1.065-.187-2.4-.182-2.935-.156z"
      ></path>
      <circle cx="19.47" cy="15.038" r="1.409" fill="#fff"></circle>
      <path
        fill="#52A5FC"
        d="M17.827 38.076c10.987-3.944 16.76.026 18.273 2.505-.188 2.441-4.591 4.59-6.77 5.36-.72 1.002-2.099 1.957-2.699 2.309-5.165 2.285-3.77.091-2.426-1.291-4.601.187-8.595-2.087-10.017-3.248-5.352-3.944-6.639-12.025-6.612-15.573.195-7.67 2.778-1.76 3.13-.587.28.934 2.987.796 4.421.587 3.944-.282 2.113 1.76.705 2.817-5.416 5.635-.926 7.095 1.995 7.121z"
      ></path>
      <circle cx="29.331" cy="39.923" r="0.939" fill="#fff"></circle>
      <defs>
        <linearGradient
          id="paint0_linear_2_4571"
          x1="-1.453"
          x2="54.034"
          y1="1.453"
          y2="51.939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#D8EBFF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_2_4571"
          x1="-1.453"
          x2="54.034"
          y1="1.453"
          y2="51.939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#D8EBFF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
