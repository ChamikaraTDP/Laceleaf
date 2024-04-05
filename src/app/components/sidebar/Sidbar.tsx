import Image from "next/image";

const titles = ["Flowers", "Plants", "Pots", "Materials"];
const subTitles = ["Search", "Contact us", "FAQs", "About us"];

export default function Sidebar() {
  return (
    <div className="px-10 h-screen w-full overflow-auto bg-bg-sidebar flex flex-col border-r border-slate-200">
      <div className="pt-10 pb-5">
        <h1 className="text-slate-700 text-3xl">Sujatha&apos;s Anthurium</h1>
      </div>

      <div className="py-2">
        <div className="flex border-b border-solid border-slate-300 justify-between p-1">
          <input
            className="outline-none bg-transparent w-16 grow basis-16"
            type="text"
            placeholder="Search"
          />
          <Image
            src="icons/search.svg"
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
              <h2
                key={ttl}
                className="text-black font-light text-2xl mb-6 uppercase hover:text-txt-hover hover:cursor-pointer"
              >
                {ttl}
              </h2>
            );
          })}
        </div>

        <div className="mt-2 flex flex-col">
          <div className="mt-5 basis-32 shrink-1">
            {subTitles.map((ttl) => {
              return (
                <h2
                  key={ttl}
                  className="text-slate-600 font-semibold text-base mb-3 hover:text-txt-hover hover:cursor-pointer"
                >
                  {ttl}
                </h2>
              );
            })}
          </div>

          <div className="pt-5 pb-10">
            <div className="flex">
              <Image
                src="icons/phone.svg"
                alt="phone icon"
                width={30}
                height={30}
                className="pr-2 pb-2"
              />
              <h2>{`(071) 9939729`}</h2>
            </div>

            <div >
              <a className="flex hover:text-txt-hover" href="mailto:pramudithachamikara@gmail.com">
                <Image
                  src="icons/mail.svg"
                  alt="mail icon"
                  width={30}
                  height={30}
                  className="pr-2"
                />
                pramuditha@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
