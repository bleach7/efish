import classNames from "classnames";
import { IWaveContainer } from "./WaveContainer.interface";

export const WaveContainer = ({ className, children }: IWaveContainer) => {
  return (
    <div
      className={classNames(
        "relative flex flex-auto flex-col bg-[#F4FAFF] before:absolute before:-left-[423px] before:-top-[390px] before:h-[664px] before:w-[664px] before:rounded-full before:bg-[#52A5FC] before:blur-[400px] before:content-[''] after:absolute after:-bottom-[473px] after:-right-[423px] after:h-[664px] after:w-[664px] after:rounded-full after:bg-[#52A5FC] after:blur-[400px] after:content-['']",
        className
      )}
    >
      <div className="z-10 flex-auto before:absolute before:bottom-0 before:left-0 before:w-full before:bg-wave before:bg-[length:100%_100%] before:bg-left-bottom before:bg-no-repeat before:content-[''] before:xl:h-[100px] before:2xl:h-[140px]">
        {children}
      </div>
    </div>
  );
};
