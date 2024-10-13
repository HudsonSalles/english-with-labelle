"use client";

import { useEffect, useState } from "react";

//components
import AOS from "aos";
import "aos/dist/aos.css";

//internal components
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Mark, Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo, mission } from "@/components/data";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      AOS.init({
        easing: "ease-in-out",
      });
    }
  }, [isClient]);

  return (
    <>
      <Hero />

      <div data-aos="fade-up" data-aos-duration="1000">
        <SectionTitle preTitle="Me conheça" title="Sobre a Teacher">
          Professora de inglês com 6 anos de experiência, especializado em ESL.
          Preparo alunos para IELTS, TOEFL e EIKEN utilizando uma abordagem
          personalizada. Experiência internacional com alunos de diversos
          países. Possuo graduação em Gestão de Recursos Humanos e MBA em Gestão
          de Pessoas, além de estar cursando Letras-Inglês.
        </SectionTitle>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <Benefits imgPos="right" data={mission} />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <Benefits data={benefitOne} />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <Benefits imgPos="right" data={benefitTwo} />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <SectionTitle
          preTitle="Por que eu?"
          title="Vantagens de estudar com a LABELLE"
        >
          <span className="flex flex-col gap-2">
            <span>
              Estude <Mark>onde quiser</Mark>, confortável, sem precisar sair de
              casa
            </span>
            <span>
              Perdeu a aula? Quando avisado previamente, você poderá{" "}
              <Mark>remarcá-la</Mark>
            </span>
            <span>
              Material Didático <Mark>sem custo adicional</Mark>
            </span>
          </span>
        </SectionTitle>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <SectionTitle preTitle="Alunos satisfeitos" title="HAPPY STUDENTS">
          Veja depoimentos de alguns de nossos alunos satisfeitos com os cursos
          e resultados.
        </SectionTitle>

        <Testimonials />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <SectionTitle title="Perguntas frequentes">
          Ainda tem dúvidas?
          <br /> Não se preocupe, aqui tem algumas perguntas que podem te
          ajudar.
          <br />
          Caso não encontre o que precisa, é só me chamar e responderei assim
          que possível.
        </SectionTitle>

        <Faq />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <Cta />
      </div>
    </>
  );
}
