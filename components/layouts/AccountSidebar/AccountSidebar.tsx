import { Menu } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { IAccountSidebar } from "./AccountSidebar.interface";

export const AccountSidebar = ({ className }: IAccountSidebar) => {
  return (
    <aside className={classNames(className)}>
      <nav>
        <ul className="flex flex-col gap-y-[2px] text-[14px] font-medium leading-[19px]">
          <li>
            <Menu as="div">
              <div>
                <Link href="#">Управление пользователями</Link>
                <Menu.Button as="button" type="button">
                  Arrow
                </Menu.Button>
              </div>
              <Menu.Items as="div" className="flex flex-col">
                <Menu.Item as={Link} href="#">
                  <span>Заявки на регистрацию</span>
                </Menu.Item>
                <Menu.Item as={Link} href="#">
                  <span>Заявки на восстановление</span>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <li>
            <Link href="#">Управление справочниками</Link>
          </li>
          <li>
            <Link href="#">Управление ролями</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
