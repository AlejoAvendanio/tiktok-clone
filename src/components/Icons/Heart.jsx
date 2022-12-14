
// export const Heart=({fill='currentColor'})=>(
    // <svg width="56" height="56" viewBox="8 8 40 40" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M15 4.5C21 4.5 24 8.5 24 8.5C24 8.5 27 4.5 33 4.5C40 4.5 45 9.99998 45 17C45 25 38.4622 32.1314 32.5 37.5C28.8191 40.8144 26 43 24 43C22 43 19.101 40.7978 15.5 37.5C9.63898 32.1325 3 25 3 17C3 9.99998 8 4.5 15 4.5Z" fill={fill} ></path>
    // </svg>
    import * as React from "react"

export function Heart  (props){
    return(
  <svg
    width="40"
    height="40"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4.5c6 0 9 4 9 4s3-4 9-4c7 0 12 5.5 12 12.5 0 8-6.538 15.131-12.5 20.5C28.82 40.814 26 43 24 43s-4.899-2.202-8.5-5.5C9.639 32.133 3 25 3 17 3 10 8 4.5 15 4.5Z"
        fill="#fff"
        fillOpacity={0.9}
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.804 24.4c2.374 4.993 6.714 9.454 10.696 13.1C19.1 40.798 22 43 24 43s4.819-2.186 8.5-5.5C38.462 32.13 45 25 45 17c0-.175-.003-.349-.01-.521C41.135 27.324 27.358 37 23.5 37c-2.875 0-12.278-5.374-18.696-12.6Z"
      fill="#000"
      fillOpacity={0.03}
    />
    <defs>
      <filter
        id="a"
        x={0.6}
        y={3.3}
        width={46.8}
        height={43.3}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.2} />
        <feGaussianBlur stdDeviation={1.2} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)
}