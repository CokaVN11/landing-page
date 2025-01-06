<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is this template free?",
    answer: "Yes. It is a free Shadcn/Vue template.",
    value: "item-1",
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam consectetur sapiente, iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-2",
  },
  {
    question:
      "Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis.",
    value: "item-3",
  },
  {
    question: "Excepteur sint occaecat cupidata non proident sunt?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    value: "item-4",
  },
  {
    question:
      "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
    answer: "consectetur adipisicing elit. Sint labore.",
    value: "item-5",
  },
];
</script>

<template>
  <section
    id="faq"
    class="py-24 sm:py-32 md:w-[700px] container"
  >
    <div class="mb-8 text-center">
      <h2 class="mb-2 text-center text-lg text-primary tracking-wider">FAQS</h2>

      <h2 class="font-bold text-3xl text-center md:text-4xl">
        Common Questions
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="mt-4 font-medium">
      Still have questions?
      <a
        href="#"
        class="text-muted-foreground underline"
      >
        Contact us
      </a>
    </h3>
  </section>
</template>
