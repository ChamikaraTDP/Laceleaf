
import Image from "next/image";


function ItemCard() {
  return (
    <div className="relative hover:shadow-md hover:shadow-red-200">
      <div className="relative w-[200px] h-[200px]">
        <Image alt="flower" src="/images/shop/anthurium-5.JPG" fill={true}
              style={{ objectFit: "cover" }} />
      </div>

      <div className="absolute top-[165px] right-0 bg-bg-in-stock p-1 text-xs rounded-s">In Stock</div>
      {/* <div className="absolute top-[165px] right-0 bg-bg-shop-title p-1 text-xs rounded-s">Out of Stock</div> */}

      <div className="bg-bg-shop-title">
        <div className="font-bold text-lg text-center text-slate-700">Red Rider</div>

        <div className="text-center">3Y old</div>
      </div>

      <div className="bg-bg-shop-price">
        <div className="text-lg text-center">Rs. 3000 /=</div>
      </div>
    </div>
  );
}

export default ItemCard;
