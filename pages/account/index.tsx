import { NotificationIcon } from "@/assets/icons";
import { Button } from "@/components";
import { AccountLayout } from "@/layouts";

const Account = () => {
  return (
    <AccountLayout>
      <div className="flex flex-col gap-y-[10px] rounded-[5px] bg-blue-200 px-5 py-3">
        <Button type="button" bg="blue" size="sm">
          Hello
        </Button>
        <Button type="button" bg="dark" size="sm">
          Hello
        </Button>
        <Button type="button" bg="green" size="sm">
          Hello
        </Button>
        <Button type="button" bg="white" size="sm">
          Hello
        </Button>
        <Button type="button" bg="blue" size="bg">
          Hello
        </Button>
        <Button type="button" bg="dark" size="bg">
          Hello
        </Button>
        <Button type="button" bg="green" size="bg">
          Hello
        </Button>
        <Button type="button" bg="white" size="bg">
          Hello
        </Button>
        <Button type="button" bg="blue" size="bg" icon={NotificationIcon}>
          Hello
        </Button>
        <Button type="button" bg="dark" size="bg" icon={NotificationIcon}>
          Hello
        </Button>
        <Button type="button" bg="green" size="bg" icon={NotificationIcon}>
          Hello
        </Button>
        <Button type="button" bg="white" size="bg" icon={NotificationIcon}>
          Hello
        </Button>
      </div>
    </AccountLayout>
  );
};

export default Account;
