import React, { useEffect } from "react";

interface ProductModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  price: string;
  image: string;
  link: string;
  desc: string;
}

const ProductModal: React.FC<ProductModalProps> = ({
  show,
  handleClose,
  title,
  price,
  image,
  link,
  desc,
}) => {
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", esc);
    };
  }, [show, handleClose]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center
          bg-[#E31E24]/10 text-[#E31E24] font-bold text-lg hover:bg-[#E31E24]/20 transition"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          {/* IMAGE */}
          <div className="bg-[#F9F9F9] flex items-center justify-center p-6">
            <img
              src={image}
              alt={title}
              className="max-h-[380px] object-contain rounded-xl"
            />
          </div>

          {/* DETAILS */}
          <div className="p-8 flex flex-col">
            <h5 className="text-2xl font-semibold text-[#333] mb-1">
              {title}
            </h5>

            <p className="text-xl font-semibold text-[#E31E24] mb-4">
              {price}
            </p>

            <span className="inline-block w-fit px-3 py-1 mb-5 text-sm rounded-full
              bg-[#E31E24]/10 text-[#E31E24] font-medium">
              Available
            </span>

            {/* DESCRIPTION */}
            <p className="text-[#555] leading-relaxed mb-8">
              {desc}
            </p>

            <button
              onClick={() => window.open("http://localhost/opencart/index.php?route=product/product&language=en-gb&product_id=40", "_blank")}
              className="mt-auto border border-[#E31E24] text-[#E31E24] font-semibold py-3 rounded-xl
              hover:bg-[#c91a1f] hover-text-white transition text-lg cursor-pointer"
            >
              Proceed to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
