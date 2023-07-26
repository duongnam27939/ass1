import { fetchProduct, deleteProducts, UpdatePro } from "@/actions/products";
import { IProduct } from "@/interface/products";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const parsedId = parseInt(id); // chuyển id thành số
  const product = useSelector((state: any) =>
    state.products.products.find((item: IProduct) => item.id === parsedId)
  );

  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");
  const router = useNavigate();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const updatedProduct: IProduct = { id: parsedId, name, price }; // use parsedId
    dispatch(UpdatePro(updatedProduct));
    router("/");
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <form
          action=""
          className="mx-auto mb-0 mt-8 max-w-md space-y-4 "
          onSubmit={handleFormSubmit}
        >
          <div>
            <label className="sr-only">Name</label>

            <div className="relative">
              <input
                type="name"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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

export default UpdateProducts;