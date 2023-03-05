import {
  CloudIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  LockIcon,
  UserIcon,
} from "@/assets/icons";
import { Button, Heading, Link } from "@/components";
import { LoginLayout } from "@/layouts";
import { Tab } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

const Login = () => {
  const [isHidden, setIsHidden] = useState(true);
  const hiddenFileInputEDS = useRef<HTMLInputElement>(null);

  const handleToggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleFileClick = () => {
    if (hiddenFileInputEDS.current) {
      hiddenFileInputEDS.current.click();
    }
  };

  return (
    <LoginLayout>
      <Heading as="h1" size="md" className="mb-[25px]">
        Авторизация
      </Heading>
      <Tab.Group as="div" defaultIndex={1} className="w-full">
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
        <Tab.Panels as="div">
          <Tab.Panel>
            <form className="flex w-full flex-col items-center">
              <input type="file" ref={hiddenFileInputEDS} className="sr-only" />
              <button
                type="button"
                onClick={handleFileClick}
                className="mb-[30px] flex w-full items-center justify-center gap-x-[20px] rounded-[5px] bg-white py-[14px] px-[20px] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
              >
                <CloudIcon className="h-auto w-[24px] text-[#52A5FC]" />
                <span>Загрузите сертификат</span>
              </button>
              <Button type="button" size="bg" bg="blue">
                Войти
              </Button>
            </form>
          </Tab.Panel>
          <Tab.Panel>
            <form className="flex w-full flex-col items-center">
              <fieldset className="flex w-full flex-col gap-y-[10px]">
                <div className="relative w-full">
                  <UserIcon className="pointer-events-none absolute top-2/4 left-[20px] h-auto w-[24px] -translate-y-2/4 text-[#52A5FC]" />
                  <input
                    type="text"
                    placeholder="Ваш логин"
                    className="inline-block w-full rounded-[5px] py-[15px] pl-[64px] pr-[20px] text-[16px] font-normal leading-[21px] text-[#0A091D] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
                  />
                </div>
                <div className="relative w-full">
                  <LockIcon className="pointer-events-none absolute top-2/4 left-[20px] h-auto w-[24px] -translate-y-2/4 text-[#52A5FC]" />
                  <input
                    type={isHidden ? "password" : "text"}
                    placeholder="Ваш пароль"
                    className="inline-block w-full rounded-[5px] py-[15px] pl-[64px] pr-[20px] text-[16px] font-normal leading-[21px] text-[#0A091D] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
                  />
                  <button
                    type="button"
                    onClick={handleToggleIsHidden}
                    className="absolute top-2/4 right-[20px] flex h-[24px] w-[24px] -translate-y-2/4 items-center justify-center text-[#52A5FC]"
                  >
                    {isHidden ? (
                      <EyeOpenIcon className="h-auto w-full" />
                    ) : (
                      <EyeCloseIcon className="h-auto w-full" />
                    )}
                  </button>
                </div>
              </fieldset>
              <Button type="button" bg="blue" size="bg" className="mt-[30px]">
                Войти
              </Button>
            </form>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Link
        href="/recovery"
        className="mt-[30px] font-medium text-[#52A5FC] transition-colors duration-300 ease-in-out hover:text-[#5ABB5E]"
      >
        Забыли пароль?
      </Link>
    </LoginLayout>
  );
};

export default Login;
