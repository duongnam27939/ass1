import { IProduct } from "@/interface/products";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddProduct } from "@/actions/products";
import { useNavigate  } from "react-router-dom";


const AddProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct>({ name: "", price: "" });
  const router = useNavigate ()

  const HandlebarSubmit = (e:any) => {
    e.preventDefault();
    dispatch(AddProduct(products));
    setProducts({ name: "", price: "" });
    router('/')
   
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <form
          action=""
          className="mx-auto mb-0 mt-8 max-w-md space-y-4 "
          onSubmit={HandlebarSubmit}
        >
          <div>
            <label className="sr-only">Name</label>

            <div className="relative">
              <input
                type="name"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter name"
                value={products.name}
                onChange={(e) =>
                  setProducts({ ...products, name: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="sr-only">Price</label>

            <div className="relative">
              <input
                type="price"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter price"
                value={products.price}
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Thêm mới
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
