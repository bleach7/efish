import { ArrowLeft } from "@/assets/icons";
import classNames from "classnames";
import Link from "next/link";
import { createElement, Fragment } from "react";
import { IHeading } from "./Heading.interface";

export const Heading = ({
  as,
  children,
  size = "sm",
  name,
  line,
  path,
  uppecase,
  className,
}: IHeading) => {
  if (path) {
    return createElement(
      "div",
      {
        className: classNames(
          "relative mb-[45px] flex items-center gap-x-[19px]",
          className
        ),
      },
      createElement(
        Link,
        {
          href: path,
        },
        createElement(ArrowLeft, {
          className: "h-auto w-[22px] text-[#52A5FC]",
        })
      ),
      createElement(
        as,
        {
          className: classNames("font-semibold", {
            ["text-[18px] leading-[24px]"]: size === "sm",
            ["text-[24px] leading-[32px]"]: size === "md",
            ["text-[36px] leading-[48px]"]: size === "lg",
            ["uppercase"]: uppecase === true,
            ["relative pl-[17px] before:absolute before:top-2/4 before:left-0 before:h-full before:w-[3.6px] before:-translate-y-2/4 before:bg-[#52A5FC] before:content-['']"]:
              line === true,
          }),
        },
        !name && children,
        name &&
          createElement(
            Fragment,
            null,
            createElement("span", null, children),
            createElement(
              "span",
              {
                className:
                  "text-[14px] capitalize leading-[19px] text-[#52A5FC]",
              },
              name
            )
          )
      )
    );
  }

  return createElement(
    as,
    {
      className: classNames(
        "font-semibold",
        {
          ["text-[18px] leading-[24px]"]: size === "sm",
          ["text-[24px] leading-[32px]"]: size === "md",
          ["text-[36px] leading-[48px]"]: size === "lg",
          ["uppercase"]: uppecase === true,
          ["relative mb-[45px] pl-[17px] before:absolute before:top-2/4 before:left-0 before:h-full before:w-[3.6px] before:-translate-y-2/4 before:bg-[#52A5FC] before:content-['']"]:
            line === true,
        },
        className
      ),
    },
    !name && children,
    name &&
      createElement(
        Fragment,
        null,
        createElement("span", null, children),
        createElement(
          "span",
          {
            className: "text-[14px] capitalize leading-[19px] text-[#52A5FC]",
          },
          name
        )
      )
  );
};
