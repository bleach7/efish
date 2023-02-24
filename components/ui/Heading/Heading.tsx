import { ArrowLeft } from "@/assets/icons";
import classNames from "classnames";
import Link from "next/link";
import { IHeading } from "./Heading.interface";

export const Heading = ({
  children,
  size = "sm",
  name,
  line,
  path,
  uppecase,
  className,
}: IHeading) => {
  if (path) {
    return (
      <div
        className={classNames(
          "relative mb-[45px] flex items-center gap-x-[19px]",
          className
        )}
      >
        <Link href={path}>
          <ArrowLeft className="h-auto w-[22px] text-[#52A5FC]" />
        </Link>
        <h1
          className={classNames("font-semibold", {
            ["text-[18px] leading-[24px]"]: size === "sm",
            ["text-[24px] leading-[32px]"]: size === "md",
            ["text-[36px] leading-[48px]"]: size === "lg",
            ["uppercase"]: uppecase === true,
            ["relative pl-[17px] before:absolute before:top-2/4 before:left-0 before:h-full before:w-[3.6px] before:-translate-y-2/4 before:bg-[#52A5FC] before:content-['']"]:
              line === true,
          })}
        >
          {!name && children}
          {name && (
            <>
              <span>{children}</span>
              <span className="text-[14px] capitalize leading-[19px] text-[#52A5FC]">
                {name}
              </span>
            </>
          )}
        </h1>
      </div>
    );
  }

  return (
    <div
      className={classNames(
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
      )}
    >
      {!name && children}
      {name && (
        <>
          <span>{children}</span>
          <span className="text-[14px] capitalize leading-[19px] text-[#52A5FC]">
            {name}
          </span>
        </>
      )}
    </div>
  );
};
