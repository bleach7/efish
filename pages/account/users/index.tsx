import { Heading } from "@/components";
import { AccountLayout } from "@/layouts";

const Users = () => {
  return (
    <AccountLayout>
      <Heading as="h1" uppecase line size="sm">
        Управление пользователями
      </Heading>
    </AccountLayout>
  );
};

export default Users;
