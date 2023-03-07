import {
  Heading,
  Link,
  LoginEDSTab,
  LoginEmailTab,
  LoginTabControll,
} from "@/components/ui";
import { Tab } from "@headlessui/react";

export const LoginContent = () => {
  return (
    <>
      <Heading as="h1" size="md" className="mb-[25px]">
        Авторизация
      </Heading>
      <Tab.Group as="div" defaultIndex={1} className="w-full">
        <LoginTabControll />
        <Tab.Panels as="div">
          <Tab.Panel>
            <LoginEDSTab />
          </Tab.Panel>
          <Tab.Panel>
            <LoginEmailTab />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Link
        href="/recovery"
        className="mt-[30px] font-medium text-[#52A5FC] transition-colors duration-300 ease-in-out hover:text-[#5ABB5E]"
      >
        Забыли пароль?
      </Link>
    </>
  );
};
