import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'

export const LandingQaClient = () => {
  return (
    <section className="space-y-5">
      <div className="space-y-5 text-center lg:text-left">
        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        <p className="lg:w-[80%]">
          If you can&apos;t find the information you&apos;re looking for, feel
          free to reach out to us via Twitter at{' '}
          <a
            className="font-bold"
            href="https://twitter.com/velpcode"
            target="_blank"
          >
            @Velpcode
          </a>{' '}
          and{' '}
          <a className="font-bold" href="https://twitter.com/Yazdun">
            @Yazdun
          </a>
          . We&apos;re here to make your DivSplash experience as seamless and
          enjoyable as possible!
        </p>
      </div>
      <Accordion type="multiple">
        {faq.map(({ question, answer }) => {
          return (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}

const faq = [
  {
    question: 'What is DivSplash?',
    answer:
      'DivSplash is an open-source platform that offers a diverse collection of doodles and illustrations for designers and creators to use in their projects.',
  },
  {
    question: 'How can I use the doodles from DivSplash?',
    answer:
      "You can easily download and incorporate our doodles into your websites, apps, or designs. They're here to add a touch of creativity to your projects.",
  },
  {
    question: 'Are the resources on DivSplash free to use?',
    answer:
      'Yes, all the doodles on DivSplash are available for free. You can download and use them without any copyright concerns.',
  },
  {
    question: 'What kind of support does DivSplash offer?',
    answer:
      "DivSplash provides lifetime support to ensure that you have a smooth experience using our resources. If you encounter any issues or have questions, we're here to help.",
  },
  {
    question: "Can I contribute to DivSplash's collection?",
    answer:
      'Absolutely! DivSplash codebase is open-source and we encourage contributions from the creative community. Although currently there is no way to contribute custom doodles to DivSplash',
  },
  {
    question: 'Is DivSplash committed to quality?',
    answer:
      "Absolutely. We're dedicated to providing high-quality resources that meet your design needs. We want every doodle you find here to be top-notch.",
  },
  {
    question: 'How does DivSplash handle user data?',
    answer:
      'DivSplash collects minimal user data, including name, email, and payment information for order processing. For more details, you can refer to our Privacy Policy.',
  },
]
