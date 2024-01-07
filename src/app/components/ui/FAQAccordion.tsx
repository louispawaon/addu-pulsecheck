import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import type { FAQType } from '@/lib/types/FAQType'
import { nunito_sans, poppins } from '@/app/styles/fonts'
import { FaQuestionCircle } from "react-icons/fa";

type FAQAccordionProps = FAQType

const FAQAccordion: React.FC<FAQAccordionProps>= ({question, answer, value}) => {
  return (
    <Accordion type="single" collapsible className='bg-primary p-2 rounded-md'>
        <AccordionItem value={value}>
        <AccordionTrigger className={`${poppins.variable} font-medium text-left md:text-xl`}>{question}</AccordionTrigger>
        <AccordionContent className={`${nunito_sans.variable} text-justify text-lg text-foreground`}>
            {answer}
        </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}

export default FAQAccordion