import { UserIcon } from "@/assets/icons";
import { Container, Heading, Link } from "@/components/ui";

export const Hero = () => {
  return (
    <section className="mb-[90px]">
      <Container width="landing">
        <div className="rounded-[10px] bg-[#D3E7FB] bg-home-hero bg-cover bg-center bg-no-repeat py-[143px] px-[60px] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]">
          <Heading
            as="h1"
            uppecase
            size="lg"
            className="mb-[10px] max-w-[767px]"
          >
            Мониторинг рыб и других водных животных
          </Heading>
          <p className="mb-[50px] max-w-[595px]">
            Предназначена для своевременного сбора и обработки информации о
            добытой, закупленной, искусственно выращенной рыбе или других водных
            животных
          </p>
          <Link
            href="/login"
            appearance="button"
            bg="blue"
            icon={UserIcon}
            size="bg"
            shadow="blue"
          >
            Войти в систему
          </Link>
        </div>
      </Container>
    </section>
  );
};
