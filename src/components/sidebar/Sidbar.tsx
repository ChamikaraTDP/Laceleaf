import Image from "next/image";
import Link from "next/link";

const titles = ["Flowers", "Plants", "Pots", "Materials"];
const subTitles = ["Search", "Contact Us", "FAQs", "About Us"];

export default function Sidebar() {
  return (
    <div className="px-10 h-screen w-full overflow-auto bg-bg-sidebar flex flex-col border-r border-slate-200">
      <div className="pt-10 pb-5">
        {/* <h1 className="text-slate-700 text-3xl">Sujatha&apos;s Anthurium</h1> */}

        <Link href={"/"} className="cursor-pointer">
          <Image
            alt="Sujathas-Anthurium Title Image"
            src={"/Sujathas-Anthurium.png"}
            width={172}
            height={58}
          />
        </Link>
      </div>

      <div className="py-2">
        <div className="flex border-b border-solid border-slate-300 justify-between p-1">
          <input
            className="outline-none bg-transparent w-16 grow basis-16"
            type="text"
            placeholder="Search"
          />
          <Image
            src="/icons/search.svg"
            alt="search icon"
            width={30}
            height={30}
          />
        </div>
      </div>

      <div className="flex flex-col grow justify-between">
        <div className="mt-7">
          {titles.map((ttl) => {
            return (
              <Link key={ttl} href={"/shop"} className="cursor-pointer">
                <h2
                  className="text-black font-light text-2xl mb-6 uppercase hover:text-txt-hover"
                >
                  {ttl}
                </h2>
              </Link>
            );
          })}
        </div>

        <div className="mt-2 flex flex-col">
          <div className="basis-32 shrink-1">
            {subTitles.map((ttl) => {
              return (
              <Link key={ttl} href={`/#${ttl}`} className="cursor-pointer">

                <h2
                  key={ttl}
                  className="text-slate-600 font-semibold text-base mb-3 hover:text-txt-hover"
                >
                  {ttl}
                </h2>
              </Link>
              );
            })}
          </div>

          <div className="pt-5 pb-10">
            <div className="flex">
              <Image
                src="/icons/phone.svg"
                alt="phone icon"
                width={30}
                height={30}
                className="pr-2 pb-2"
              />
              <h2>{`071 1788728`}</h2>
            </div>

            <div>
              <a
                className="flex hover:text-txt-hover"
                href="mailto:pramudithachamikara@gmail.com"
              >
                <Image
                  src="/icons/mail.svg"
                  alt="mail icon"
                  width={30}
                  height={30}
                  className="pr-2"
                />
                sujathasanthurium@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}