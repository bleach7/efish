import { Container, LangSwitcher, Logo, WaveContainer } from "@/components";
import { PropsWithChildren } from "react";

export const LoginLayout = ({ children }: PropsWithChildren) => {
  return (
    <WaveContainer>
      <Container width="login">
        <main>
          <section className="flex flex-col items-center pt-[108px] pb-[240px]">
            <LangSwitcher
              type="buttons"
              className="mb-[81px]"
              fontWeight="700"
            />
            <Logo color="blue" size="bg" className="mb-[50px]" />
            {children}
          </section>
        </main>
      </Container>
    </WaveContainer>
  );
};
