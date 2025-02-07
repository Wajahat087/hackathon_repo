"use client";

import { IProduct } from "@/app/shop/[slug]/page";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import Swal from 'sweetalert2';

export default function ProductList({ products }: { products: IProduct[] }) {

  
  const handleClick = (product: IProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (cart[product.title]) {
      Swal.fire({
        title: "Success!",
        text: "Item added in the cart successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      cart[product.title] = {
        ...cart[product.title],
        quantity: cart[product.title].quantity + 1,
      };
    } else {
      Swal.fire({
        title: "Success!",
        text: "Item added in the cart successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      cart[product.title] = { ...product, quantity: 1 };
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

    // alert("Item added to cart");
  };


  // const WishhandleClick = (product: IProduct) => {
  //   const wish = JSON.parse(localStorage.getItem("wish") || "{}");
  //   if (wish[product.title]) {
  //     wish[product.title] = {
  //       ...wish[product.title],
  //       quantity: wish[product.title].quantity + 1,
  //     };
  //   } else {
  //     wish[product.title] = { ...product, quantity: 1 };
  //   }
  //   if (wish[product.title].quantity > 1) {
  //     alert("Item already exist in wishlist");
  //     return;
  //   }

  //   localStorage.setItem("wish", JSON.stringify(wish));

  //   window.dispatchEvent(new Event("wishListUpdated"));

  //   // alert("Item added to your wishlist");
  // };

  const WishhandleClick = (product: IProduct) => {
    const wish = JSON.parse(localStorage.getItem("wish") || "{}");

    // Check if the product already exists in the wishlist
    if (wish[product.title]) {
      Swal.fire({
        title: "Please Check!",
        text: "This item is already in your wishlist!",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return; // Exit the function if the item already exists
    }

    // Add the product to the wishlist
    wish[product.title] = { ...product, quantity: 1 };
    localStorage.setItem("wish", JSON.stringify(wish));

    // Trigger an event to update the UI (if needed)
    window.dispatchEvent(new Event("wishListUpdated"));

    // Show a success pop-up
    Swal.fire({
      title: "Success!",
      text: "Item added to your wishlist!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {products[0].imageUrl ? (
              <Image
                src={products[0].imageUrl}
                alt={products[0].title}
                width={675}
                height={607}
                className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
              />
            ) : (
              <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
                <span>No Image Available</span>
              </div>
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {products[0].title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{products[0].description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${products[0].price} USD
                </span>
                <button
                  onClick={() => handleClick(products[0])}
                  className="flex ml-auto text-white bg-[#007580] border-0 py-2 px-6 focus:outline-none hover:bg-[#bfcdce] rounded hover:text-[#000000]"
                >
                  Add To Cart
                </button>
                <button  onClick={() => WishhandleClick(products[0])} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-[#007580] hover:text-gray-300"
                  >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-4">
      </div>
    </div>
  );
}