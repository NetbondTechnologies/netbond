import React from 'react'
import Hero from './Homepage/Hero'
import Info from './Homepage/Info'
import Services from './Homepage/Services'
import Display from './Homepage/Display'
import VidSection from './Homepage/VidSection'
import Accordion from './Accordion'


export interface FAQ_Props {
  question: string;
  answer: string;
}

const HomePage: React.FC = () => {
    const FAQ_Home: FAQ_Props[] = [
    {
      question:
        "What services do you offer as a creative digital marketing agency?",
      answer:
        "We provide a full suite of services, including  SEO, PPC, Web Design, Social Media Marketing, Content Creation and E-mail Marketing, all tailored to meet your specific goals and business needs.",
    },
    {
      question: "How long does it take to design a website?",
      answer:
        "Designing a custom website involves several phases: strategy, planning, design, development, quality assurance, and launch. For an informational website, the process typically takes up to 3 months, allowing time for detailed design and client feedback. Larger, more complex sites with advanced features may require more than 3 months. This timeline includes thorough design of key pages and a user testing phase to ensure optimal performance.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results vary depending on the strategy. SEO and organic campaigns may take a few months, while paid advertising can deliver results almost immediately.",
    },
    {
      question: "Will I receive regular updates on the campaign’s progress?",
      answer:
        "Absolutely! We are committed to honest communication and transparency. You’ll receive regular performance reports and insights to track progress and ensure we’re meeting your expectations.",
    },
    {
      question: "Is digital marketing suitable for small businesses ?",
      answer:
        "Yes, digital marketing is highly effective for small businesses, as it allows you to target specific audiences, work within your budget, and compete with larger companies.",
    },
  ];
  return (
    <>
            <Hero/>
            <Info/>
            <Services/>
            <Display/>
            <VidSection/>
            <Accordion faqs={FAQ_Home}/>
    </>
  )
}

export default HomePage