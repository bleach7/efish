export const ADMIN_NAV_LINKS = [
  {
    path: "/account/users",
    name: "Управление пользователями",
    subLinks: [
      { path: "#", name: "Заявки на регистрацию" },
      { path: "#", name: "Заявки на восстановление" },
    ],
  },
  { path: "/account/references", name: "Управление справочниками" },
  { path: "/account/roles", name: "Управление ролями" },
];
