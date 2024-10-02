
"use client";
import React from "react";

import { Dock, DockIcon } from "./components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div>
      <Dock className="flex justify-center w-fit " direction="middle">
        <DockIcon>
          <Icons.gitHub className="size-8" />
        </DockIcon>
        <DockIcon>
          <Icons.googleDrive className="size-8" />
        </DockIcon>
        <DockIcon>
          <Icons.notion className="size-8" />
        </DockIcon>
        <DockIcon>
          <Icons.whatsapp className="size-8" />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  notion: (props: IconProps) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000"
      />
    </svg>
  ),
  googleDrive: (props: IconProps) => (
    <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        fill="#b3b3b3"
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        filter="url(#a)"
      />
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill="url(#linearGradient1780)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
      />
      <path
        fill="url(#b)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  ),
};

// import { useEffect, useMemo, useState } from "react";
// import { useTheme } from "next-themes";
// import {
//   Cloud,
//   fetchSimpleIcons,
//   ICloud,
//   renderSimpleIcon,
//   SimpleIcon,
// } from "react-icon-cloud";

// export const cloudProps: Omit<ICloud, "children"> = {
//   containerProps: {
//     style: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       width: "100%",
//       paddingTop: 40,
//     },
//   },
//   options: {
//     reverse: true,
//     depth: 1,
//     wheelZoom: false,
//     imageScale: 2,
//     activeCursor: "default",
//     tooltip: "native",
//     initial: [0.1, -0.1],
//     clickToFront: 500,
//     tooltipDelay: 0,
//     outlineColour: "#0000",
//     maxSpeed: 0.04,
//     minSpeed: 0.02,
//     // dragControl: false,
//   },
// };

// export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
//   const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
//   const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
//   const minContrastRatio = theme === "dark" ? 2 : 1.2;

//   return renderSimpleIcon({
//     icon,
//     bgHex,
//     fallbackHex,
//     minContrastRatio,
//     size: 42,
//     aProps: {
//       href: undefined,
//       target: undefined,
//       rel: undefined,
//       onClick: (e: any) => e.preventDefault(),
//     },
//   });
// };

// export type DynamicCloudProps = {
//   iconSlugs: string[];
// };

// type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

// export function IconCloud({ iconSlugs }: DynamicCloudProps) {
//   const [data, setData] = useState<IconData | null>(null);
//   const { theme } = useTheme();

//   useEffect(() => {
//     fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
//   }, [iconSlugs]);

//   const renderedIcons = useMemo(() => {
//     if (!data) return null;

//     return Object.values(data.simpleIcons).map((icon) =>
//       renderCustomIcon(icon, theme || "light"),
//     );
//   }, [data, theme]);

//   return (
//     // @ts-ignore
//     <Cloud {...cloudProps}>
//       <>{renderedIcons}</>
//     </Cloud>
//   );
// }
// import { SVGProps } from "react";

// export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
//   width?: number;
//   height?: number;
//   src?: string;
// }

// export function Iphone15Pro({
//   width = 433,
//   height = 882,
//   src = 'data:image/jpeg;base64,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',
//   ...props
// }: Iphone15ProProps) {
//   return (
//     <svg
//       width={width}
//       height={height}
//       viewBox={`0 0 ${width} ${height}`}
//       fill="none"
//       xmlns=""
//       {...props}
//     >
//       <path
//         d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
//         className="fill-[#E5E5E5] dark:fill-[#404040]"
//       />
//       <path
//         d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
//         className="fill-[#E5E5E5] dark:fill-[#404040]"
//       />
//       <path
//         d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
//         className="fill-[#E5E5E5] dark:fill-[#404040]"
//       />
//       <path
//         d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
//         className="fill-[#E5E5E5] dark:fill-[#404040]"
//       />
//       <path
//         d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
//         className="fill-[#E5E5E5] dark:fill-[#404040]"
//       />
//       <path
//         d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
//         className="dark:fill-[#262626] fill-white"
//       />
//       <path
//         opacity="0.5"
//         d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
//         className="fill-[#E5E5E5] dark:fill-[#404040]"
//       />
//       <path
//         d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
//         className="fill-[#E5E5E5] dark:fill-[#404040] stroke-[#E5E5E5] dark:stroke-[#404040] stroke-[0.5]"
//       />

//       {src && (
//         <image
//           href={src}
//           x="21.25"
//           y="19.25"
//           width="389.5"
//           height="843.5"
//           preserveAspectRatio="xMidYMid slice"
//           clipPath="url(#roundedCorners)"
//         />
//       )}
//       <path
//         d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
//         className="dark:fill-[#262626] fill-[#F5F5F5]"
//       />
//       <path
//         d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
//         className="dark:fill-[#262626] fill-[#F5F5F5]"
//       />
//       <path
//         d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
//         className="fill-[#E5E5E5] dark:fill-[#404040]"
//       />
//       <defs>
//         <clipPath id="roundedCorners">
//           <rect
//             x="21.25"
//             y="19.25"
//             width="389.5"
//             height="843.5"
//             rx="55.75"
//             ry="55.75"
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }






function App() {


  return (
    <>
      {/* <Meteors /> */}

      {/* <IconCloud iconSlugs={["typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma"]} /> */}
      <DockDemo />
      {/* <Iphone15Pro ></Iphone15Pro> */}
    </>
  )
}

export default App
