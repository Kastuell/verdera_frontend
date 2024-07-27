// "use client";


// import { ProductT } from "@/types/product.types";
// import { v4 as uuidv4 } from "uuid";

// type CartT = {
//   product: ProductT;
//   quantity: number;
//   id: string;
// };

// export function useCart() {
//   const local = localStorage.getItem("cart");
//   console.log(local == null ? [] : JSON.parse(local));
//   const cart: CartT[] = local == null ? [] : JSON.parse(local);
//   console.log(cart, cart.length);

//   function addProduct(product: ProductT) {
//   console.log(cart);
//   if (cart.length == 0) {
//       cart.push({
//         product: product,
//         quantity: 1,
//         id: uuidv4(),
//       });
//     } else {
//       cart.forEach((item, index) => {
//         if (item.product == product) {
//           cart[index].quantity += 1;
//         } else {
//           cart.push({
//             product: product,
//             quantity: 1,
//             id: uuidv4(),
//           });
//         }
//       });
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }

//   return { cart, addProduct };
// }
