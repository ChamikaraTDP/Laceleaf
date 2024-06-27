import Image from "next/image";

type FooterProps = {
  lang?: string;
  homeData: any;
}

function Footer({ homeData }: FooterProps) {
  return (
    <div className="py-4 bg-bg-primary min-h-[150px] flex flex-col sm:flex-row justify-around items-center">
      <div className="order-2 sm:order-1 text-center sm:text-start mt-8">
        <div className="mb-1 lg:mb-4 text-sm sm:text-base">{homeData.telNo}</div>
        <div className="mb-1 lg:mb-4 text-sm sm:text-base">{homeData.email}</div>
        <div className="mb-1 lg:mb-4 text-sm sm:text-base">{homeData.address}</div>
      </div>

      <div className="relative order-1 sm:order-2 w-[108px] h-[40px] sm:w-[140px] sm:h-[52px] lg:w-[172px] lg:h-[64px]">
        <Image
          alt="Sujathas-Anthurium Title Image, shows brand logo"
          src={"/Sujathas-Anthurium.png"}
          fill
          style={{ objectFit: 'contain' }}
          sizes="(min-width: 640px) 140px, (min-width: 1024px) 172px, 108px"
          />
      </div>

      <div className="order-3 flex mt-4">
        <div className="mr-5 relative w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] object-contain">
          <Image
            alt="Facebook logo"
            fill
            src="/icons/facebook.png"
          />
        </div>
        <div className="mr-5 relative w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] object-contain">
          <Image
            alt="Instagram logo"
            fill
            src="/icons/instagram.png"
          />
        </div>
        <div className="mr-5 relative w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] object-contain">
          <Image
            alt="Twitter logo"
            fill
            src="/icons/twitter.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
