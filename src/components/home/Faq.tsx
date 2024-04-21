import TitleCard from "../TitleCard";
import ExpandableDesc from "../ExpandableDesc";
import { roboto } from "../../app/fonts";
import questions from "../../data/faq.json";

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
