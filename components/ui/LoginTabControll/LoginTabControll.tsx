import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "../Button";

export const LoginTabControll = () => {
  return (
    <Tab.List
      as="div"
      className="mb-[25px] flex items-center justify-center gap-x-[10px] drop-shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
    >
      <Tab as={Fragment}>
        {({ selected }) => (
          <Button type="button" size="bg" bg={selected ? "blue" : "white"}>
            Вход по эцп
          </Button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (
          <Button type="button" size="bg" bg={selected ? "blue" : "white"}>
            Вход по логину
          </Button>
        )}
      </Tab>
    </Tab.List>
  );
};
