import { IProduct } from "@/interface/products";


const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                error: null,
            };
        case 'FETCH_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter((item: any) => item.id !== action.payload),
                isLoading: false,
            };


        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload],
                isLoading: false,
            };

        case "UPDATE_PRODUCT":
            const updatedProducts = state.products.map((product: any) => {
                if (product.id === action.payload.id) {
                    return action.payload
                }
                return product
            });
            return {
                ...state,
                products:updatedProducts
            }
        default:
            return state;
    }
};

export default productReducer;