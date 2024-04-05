import { prata } from "../page";


type TitleCardProps = {
  title: string;
  subTitle: string;
}

function TitleCard({ title, subTitle }: TitleCardProps) {
  return (
    <div className="flex">
      <div className={`${prata.className} text-4xl`}>{title}</div>
      <div className={`pl-2 text-xl font-extralight italic translate-y-4`}>
        {subTitle}
      </div>
    </div>
  );
}

export default TitleCard;
