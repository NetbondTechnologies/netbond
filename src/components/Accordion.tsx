import React, { useState } from "react";


import FAQs from "./FAQs";
import type { FAQ_Props } from "./HomePage";

interface Props {
  faqs: FAQ_Props[];
}

const Accordion: React.FC<Props> = ({ faqs }) => {
  let initialArr = new Array(faqs.length).fill(false);
  initialArr[0] = true;
  const [checkAccordion, setCheckAccordion] = useState<boolean[]>(initialArr);

  return (
    <>
      <div className="faqs w-full text-center px-[10%] py-15 bg-[#141414]">
        <h1 className="text-7xl relative w-fit mx-auto pb-4 faqs-title">
          Frequently Asked Questions
        </h1>

        <div className="w-full mb-10"></div>
        {faqs?.map((item: FAQ_Props, i: number) => {
          return (
            <FAQs
              question={item.question}
              answer={item.answer}
              key={i}
              Acckey={i}
              checkAccordion={checkAccordion}
              setCheckAccordion={setCheckAccordion}
            />
          );
        })}
      </div>
    </>
  );
};

export default Accordion;
