import { prata } from "../app/fonts";

type TitleCardProps = {
  title: string;
  subTitle: string;
}

function TitleCard({ title, subTitle }: TitleCardProps) {
  return (
    <div className="flex">
      <div id={title} className={`${prata.className} text-4xl`}>{title}</div>
      <div className={`pl-2 text-xl font-extralight italic translate-y-4`}>
        {subTitle}
      </div>
    </div>
  );
}

export default TitleCard;
