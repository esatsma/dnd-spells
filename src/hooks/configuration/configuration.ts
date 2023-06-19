import axios, { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { useAPI } from "../useApi/useApi";
import { Cart } from "../../types/cart.type";
import { Filter } from "../../types/filter.type";
import { TotalPrice } from "../../types/price.type";
import { ArrowVariant } from "../../types/arrowOverview.type";

export type ProductDataResponse = {
  product: ArrowVariant;
  totalPrice: TotalPrice;
  filters: Filter[];
};

export type ProductSearchDataResponse = {
  product: ArrowVariant;
  totalPrice: TotalPrice;
};

export const useConfiguration = () => {
  const [cart, setCart] = useState<Cart>({
    variantOptions: {},
    accessories: {},
    additionalItems: {},
  });
  const [productData, setProductData] =
    useState<{
      product: ArrowVariant;
      totalPrice: TotalPrice;
    }>();
  const [filters, setFilters] = useState<Filter[]>([]);
  const [_baseProduct, _setBaseProduct] = useState<string>();
  const [productLoading, setProductLoading] = useState(true);
  const [abortController, setAbortController] = useState<AbortController>();
  const api = useAPI();

  const setBaseProduct = useCallback(
    (productId: string) => {
      (async () => {
        _setBaseProduct(productId);
        setProductLoading(true);

        const response: AxiosResponse<ProductDataResponse> | void = await api
          .get(`/configurator/product/${productId}`)
          .catch(() => {
            alert("Deze combinatie is nog niet beschikbaar");
          });

        setProductLoading(false);

        if (!response?.data) {
          return;
        }

        const { data } = response;

        setProductData({
          product: data.product,
          totalPrice: data.totalPrice,
        });

        setFilters(data.filters);

        setCart((state) => {
          const newState = { ...state };
          newState.variantOptions = data.product.variantOptions;

          return newState;
        });
      })();
    },
    [api]
  );

  const updateCart = async (type: keyof Cart, data: any) => {
    const newCart = {
      ...cart,
    };

    newCart[type] = { ...newCart[type], ...data };

    setCart(newCart);

    if (!productData) return;

    setProductLoading(true);

    if (abortController) abortController.abort();

    const newAbortController = new AbortController();
    setAbortController(newAbortController);

    const response: AxiosResponse<ProductSearchDataResponse> | void = await api
      .post(
        "/configurator/search",
        {
          cart: newCart,
          product: productData.product,
        },
        {
          signal: newAbortController.signal,
        }
      )
      .catch((e) => {
        if (axios.isCancel(e)) return;

        setProductLoading(false);
        alert("Kan product niet ophalen!");
      });

    if (!response?.data) return;

    setProductLoading(false);
    setProductData({
      product: response.data.product,
      totalPrice: response.data.totalPrice,
    });
  };

  return {
    filters,
    setFilters,
    setBaseProduct,
    baseProduct: _baseProduct,
    productLoading,
    productData,
    cart,
    updateCart,
  };
};
