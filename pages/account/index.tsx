import { Input } from "@/components";
import { AccountLayout } from "@/layouts";

const Account = () => {
  return (
    <AccountLayout>
      <div className="flex flex-col gap-y-[10px] rounded-[5px] bg-gray-500 px-5 py-3">
        <Input />
      </div>
    </AccountLayout>
  );
};

export default Account;
