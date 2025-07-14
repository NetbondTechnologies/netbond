
import Hero from '../SEO/Hero'
import About from '../SEO/About'
import Contact from '../SEO/Contact'
import Services from '../SEO/Services'
import Accordion from '../Accordion';

interface FAQS{
  question: string;
  answer: string;
}

function App() {

  const faqs : FAQS[] = [
    {
      question: "What is SEO, and why is it important for my business?",
      answer: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results, making it easier for potential customers to find you online. It’s essential for increasing visibility, driving traffic, and boosting conversions."
    },
    {
      question: "How does Netbond Technologies help with SEO?",
      answer: "At Netbond Technologies, we offer comprehensive SEO services, including keyword research, on-page and technical optimization, content creation, link building, and performance tracking to help your business achieve sustainable growth."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy, and results typically start showing within 3 to 6 months. However, our tailored approach ensures consistent progress and measurable improvements over time."
    },
    {
      question: "What are the key components of a successful SEO strategy?",
      answer: "A successful SEO strategy includes keyword optimization, high-quality content, mobile-friendly design, fast-loading pages, technical SEO, and authoritative backlinks. We ensure all these components are perfectly aligned for your business."
    },
    {
      question: "Why should I choose Netbond Technologies for SEO?",
      answer: "With expertise in the latest SEO practices and a personalized approach, Netbond Technologies ensures your business stands out in search results. We focus on delivering results that drive real business growth."
    },
  ]

  return (
          <main>
            <Hero />
            <Services />
            <About />
            <Contact />
            <Accordion faqs={faqs}/>
          </main>
  );
}

export default App;