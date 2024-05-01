import Image from "next/image";

type FooterProps = {
  lang?: string;
  homeData: any;
}

function Footer({ homeData }: FooterProps) {
  return (
    <div className="py-8 bg-bg-primary min-h-[200px] flex justify-around items-center">
      <div>
        <div className="mb-4">{homeData.telNo}</div>
        <div className="mb-4">{homeData.email}</div>
        <div className="mb-4">{homeData.address}</div>
      </div>
      <div>
        <Image
          alt="Sujathas-Anthurium Title Image"
          src={"/Sujathas-Anthurium.png"}
          width={172}
          height={58}
        />
      </div>
      <div className="flex">
        <div className="mr-5">
          <Image
            alt="Facebook logo"
            width={50}
            height={50}
            src="/icons/facebook.png"
          ></Image>
        </div>
        <div className="mr-5">
          <Image
            alt="Instagram logo"
            width={50}
            height={50}
            src="/icons/instagram.png"
          ></Image>
        </div>
        <div className="mr-5">
          <Image
            alt="Twitter logo"
            width={50}
            height={50}
            src="/icons/twitter.png"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Footer;
