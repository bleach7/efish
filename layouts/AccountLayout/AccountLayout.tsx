import {
  AccountHeader,
  AccountSidebar,
  Container,
  WaveContainer,
} from "@/components";
import { IAccountLayout } from "./AccountLayout.interface";

export const AccountLayout = ({ children }: IAccountLayout) => {
  return (
    <WaveContainer>
      <Container
        width="account"
        className="grid grid-cols-[252px_1fr] gap-[35px_30px]"
      >
        <AccountHeader className="col-span-2" />
        <AccountSidebar />
        <main>
          <section className="min-h-[550px] rounded-[10px] bg-white px-[40px] pt-[42px] pb-[61px] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]">
            {children}
          </section>
        </main>
      </Container>
    </WaveContainer>
  );
};
