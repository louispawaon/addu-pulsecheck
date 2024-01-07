import React, { FC } from 'react'
import FAQAccordion from '@/app/components/ui/FAQAccordion'
import { FAQData } from '@/data/FAQData'

const FAQAccordionSection: FC = () => {
  return (
    <section>
        <div className="flex flex-col gap-4 p-4">
            {FAQData.map((asked, index) => (
              <FAQAccordion key={index} {...asked}/>
            ))}
        </div>
    </section>
  )
}

export default FAQAccordionSection