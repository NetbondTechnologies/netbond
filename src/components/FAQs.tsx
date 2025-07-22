import React, { useState } from "react";

interface Props {
  question: string;
  answer: string;
  checkAccordion: boolean[];
  setCheckAccordion: React.Dispatch<React.SetStateAction<boolean[]>>;
  Acckey: number;
}

const FAQs: React.FC<Props> = ({
  question,
  answer,
  checkAccordion,
  setCheckAccordion,
  Acckey,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="accordion-faqs xl:w-[90%] mx-auto bg-[#141414] text-start text-white pt-5">
      <div className="accordion py-5 border-b" id="accordion">
        <div
          className="accordion-button flex justify-between items-start w-full xl:text-4xl text-3xl pb-3 cursor-pointer"
          onClick={() => {
            let tempArr = [...checkAccordion];
            tempArr = tempArr.map((e: boolean, i: number) => {
              if (Acckey === i) return !e;
              else return false;
            });
            setCheckAccordion(tempArr);
            setIsExpanded(!isExpanded);
          }}
        >
          <div
            className={`accordion-question xl:text-3xl md:text-2xl text-xl font-bold ${
              checkAccordion[Acckey] ? "text-(--pumpkin)" : "text-white"
            }`}
          >
            {question}
          </div>

          {checkAccordion[Acckey] ? (
            <span className="text-(--pumpkin)">-</span>
          ) : (
            <span>+</span>
          )}
        </div>
        <div
          className={`grid overflow-hidden xl:text-lg transition-all duration-300 ease-in-out px-1 md:px-8 ${
            checkAccordion[Acckey]
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 "
          }`}
        >
          <p className="accordion-answer overflow-hidden">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
