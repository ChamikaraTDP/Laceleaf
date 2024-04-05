import TitleCard from "../TitleCard";
import { roboto } from "../../page";
import ExpandableDesc from "../ExpandableDesc";

const questions = [
  {
    title: "How can I get more information?",
    description: `Give a call to this number - 0719939729 or Drop a message to pramudithachamikara@gmail.com 
    Or you can contact us by providing us with your use case here, that way we can give our best for your time.`,
  },
  {
    title: "Cannot find what you are looking for?",
    description:
      "Do you need a specific varient that you cannot find on our website? ",
  },
  {
    title: "Can I get a discount on bulk purchases?",
    description: "Yes you can, Please let us know about your requirement.",
  },
  {
    title: "Can I get some guidence on plant care?",
    description:
      "Of course, Please contact us via phone or visit us. We are glad to give you all the help we can.",
  },
];

function Faq() {
  return (
    <div className="py-24 px-20 bg-bg-default">
      <TitleCard title="FAQs" subTitle="Got a question?" />

      <div className={`${roboto.className} w-3/5 m-auto pt-10`}>
        {questions.map((qt) => (
          <ExpandableDesc
            key={qt.title}
            title={qt.title}
            desc={qt.description}/>
        ))}
      </div>
    </div>
  );
}

export default Faq;
