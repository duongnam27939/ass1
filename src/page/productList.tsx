import { fetchProduct, deleteProducts } from "@/actions/products";
import { IProduct } from "@/interface/products";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  const isLoading = useSelector((state: any) => state.products);
  const error = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  if (isLoading === "FETCH_PRODUCTS_PENDING") {
    return <div>Loading...</div>;
  }

  if (error === "FETCH_PRODUCTS_PENDING") {
    return <div>Something went wrong...</div>;
  }
  console.log(products);

  return (
    <div>
      <a href="add">Thêm sản phẩm</a>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                #
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products?.products.map((product: IProduct) => {
              return (
                <tr key={product.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {product.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <button
                      onClick={() => dispatch(deleteProducts(product.id))}
                    >
                      Xóa
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <Link to={`/edit/${product.id}`}>
                      <button>Sửa</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
