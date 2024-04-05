import Image from "next/image";

type ItemCardProps = {
  item: {
    imagePath: string;
    name: string;
    price: number;
    isInStock: boolean;
  };
};

function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="relative hover:shadow-md hover:shadow-red-200">
      <div className="relative w-[200px] h-[200px]">
        <Image
          alt="item image"
          src={item.imagePath}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      {item.isInStock ? (
        <div className="absolute top-[165px] right-0 bg-bg-in-stock p-1 text-xs rounded-s">
          In Stock
        </div>
      ) : (
        <div className="absolute top-[165px] right-0 bg-bg-out-stock p-1 text-xs rounded-s">
          Out of Stock
        </div>
      )}

      <div className="bg-bg-shop-title">
        <div className="font-bold text-lg text-center text-slate-700">
          {item.name}
        </div>
        
        {/* <div className="text-center">3Y old</div> */}
      </div>

      <div className="bg-slate-100">
        <div className="text-center">Rs. {item.price} /=</div>
      </div>
    </div>
  );
}

export default ItemCard;
