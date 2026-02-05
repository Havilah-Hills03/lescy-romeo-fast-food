import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CatProps {
  catCardImg: string;
  catAltImg: string;
  catCardTitle: string;
  catLink: string;
}

const CatCard: React.FC<CatProps> = ({
  catCardImg,
  catAltImg,
  catCardTitle,
  catLink,
}) => {
  return (
    <div className="text-center w-[110px] sm:w-[130px] lg:w-auto flex flex-col items-center cat-card-com">
      <Link href={catLink}>
        <div className="mb-2">
          <Image
            src={catCardImg}
            alt={catAltImg}
            width={160}
            height={158}
            className="object-cover rounded-[40px] border-2 border-[#F9F9F9]  hover:border-4 transition-all"
            style={{
              boxShadow: "0px 4px 4px 0px #F9F9F940",
            }}
          />
        </div>

        <p className="text-[#F9F9F9] text-[12px] md:text-[16px] font-medium text-center">
          {catCardTitle}
        </p>
      </Link>
    </div>
  );
};

export default CatCard;