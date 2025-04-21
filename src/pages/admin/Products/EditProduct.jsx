import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import ProductImageUpload from "../../../components/Admin/Products/ProductImageUpload";
import FormSelect from "../../../components/FormSelect";
import { cryptoCurrency, manufacturer } from "../../../utils/dropdowns";
import useGetSingleAdminProduct from "../../../hooks/adminProducts/useGetSingleAdminProduct";
import Loading from "../../../components/Loading";
import { GoDotFill } from "react-icons/go";
import useUpdateProductImage from "../../../hooks/adminProducts/useUpdateProductImage";
import useUpdateFeaturedImage from "../../../hooks/adminProducts/useUpdateFeaturedImage";
import useEditProduct from "../../../hooks/adminProducts/useEditProduct";

export default function EditProduct() {
  const { id } = useParams();
  const { loading, product } = useGetSingleAdminProduct({ id });
  const {
    loading: productImageLoading,
    details: productImageDetails,
    updateProductImage,
  } = useUpdateProductImage();

  const {
    loading: featuredLoading,
    details: featuredDetails,
    updateFeaturedImage,
  } = useUpdateFeaturedImage();

  const { loading: editProductLoading, editProduct } = useEditProduct();

  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productImagePublicId, setProductImagePublicId] = useState("");
  const [manufacturerItem, setManufacturerItem] = useState("");
  const [cryptoCurrencyItem, setCryptoCurrencyItem] = useState([]);
  const [hashRate, setHashRate] = useState(0);
  const [power, setPower] = useState(0);
  const [algorithm, setAlgorithm] = useState("");
  const [price, setPrice] = useState(0);
  const [featuredImage, setFeaturedImage] = useState("");
  const [featuredImagePublicId, setFeaturedImagePublicId] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  const handleCryptoChange = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCryptoCurrencyItem((prevSelected) => {
      const currentSelections = [...prevSelected];

      // Loop through the selectedValues and add/remove as necessary
      selectedValues.forEach((value) => {
        if (!currentSelections.includes(value)) {
          currentSelections.push(value); // Add new selections
        } else {
          // Remove the value if it was deselected
          currentSelections.splice(currentSelections.indexOf(value), 1);
        }
      });

      return currentSelections;
    });
  };
  useEffect(() => {
    if (product) {
      setProductName(product.productName);
      setProductImage(product.productImage);
      setProductImagePublicId(product.productImagePublicId);
      setManufacturerItem(product.manufacturer);
      setCryptoCurrencyItem(product.cryptoCurrency);
      setHashRate(product.hashRate);
      setPower(product.power);
      setAlgorithm(product.algorithm);
      setPrice(product.price);
      setFeaturedImage(product.featuredImage);
      setFeaturedImagePublicId(product.featuredImagePublicId);
      setDescription(product.description);
      setSlug(product.slug ? product.slug : "");
      setMetaDescription(
        product.metaDescription ? product.metaDescription : ""
      );
      setMetaTitle(product.metaTitle ? product.metaTitle : "");
      setMetaKeywords(product.metaKeywords ? product.metaKeywords : "");
    }
  }, [product]);

  useEffect(() => {
    if (productImageDetails) {
      setProductImage(productImageDetails.productImage);
      setProductImagePublicId(productImageDetails.productImagePublicId);
    }
  }, [productImageDetails, productImageLoading]);
  useEffect(() => {
    if (featuredDetails) {
      setFeaturedImage(featuredDetails.featuredImage);
      setFeaturedImagePublicId(featuredDetails.featuredImagePublicId);
    }
  }, [featuredDetails, featuredLoading]);
  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Edit Product</h1>
        <Link
          to={`/admin/products/${product?._id}`}
          className="bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
        >
          Go Back
        </Link>
      </div>
      <div className="my-10">
        <FormInput
          title={"Name"}
          type={"text"}
          admin
          placeholder={"Enter Name"}
          value={productName}
          onchange={(e) => setProductName(e.target.value)}
        />
        <div className="flex gap-2 items-end">
          <ProductImageUpload
            title={"Product Image"}
            changeFunction={(e) => updateProductImage({ e, id })}
          />
          {productImageLoading && <Loading />}
          {productImage && (
            <div className="w-20 h-20 pb-5 rounded-lg overflow-hidden">
              <img src={productImage} className="object-contain"></img>
            </div>
          )}
        </div>

        <FormSelect
          title={"Manufacturer"}
          list={manufacturer}
          value={manufacturerItem}
          onchange={(e) => setManufacturerItem(e.target.value)}
        />
        <FormSelect
          title={"Cryptocurrency"}
          list={cryptoCurrency}
          multi
          value={cryptoCurrencyItem}
          onchange={handleCryptoChange}
        />
        <h3 className="mb-2">Selected Cryptocurrencies:</h3>
        <ul className="my-5">
          {cryptoCurrencyItem.length > 0 &&
            cryptoCurrencyItem.map((crypto, index) => (
              <li key={index} className="flex gap-2 items-center">
                <span>
                  <GoDotFill />
                </span>
                {crypto}
              </li>
            ))}
        </ul>
        <FormInput
          title={"HashRate"}
          type={"text"}
          admin
          placeholder={"Enter hashrate"}
          value={hashRate}
          onchange={(e) => setHashRate(e.target.value)}
        />
        <FormInput
          title={"Power (Watts)"}
          type={"Number"}
          admin
          placeholder={"Enter power in Watts"}
          value={power}
          onchange={(e) => setPower(e.target.value)}
        />
        <FormInput
          title={"Algorithm"}
          type={"text"}
          admin
          placeholder={"Enter the algorithm of your Miner"}
          value={algorithm}
          onchange={(e) => setAlgorithm(e.target.value)}
        />
        <FormInput
          title={"Price (AED)"}
          type={"Number"}
          admin
          placeholder={"Enter price of product"}
          value={price}
          onchange={(e) => setPrice(e.target.value)}
        />
        <div className="flex gap-2 items-end">
          <ProductImageUpload
            title={"Featured Image"}
            changeFunction={(e) => updateFeaturedImage({ e, id })}
          />
          {featuredLoading && <Loading />}
          {featuredImage && (
            <img
              src={featuredImage}
              className="w-20 h-20 pb-5 rounded-lg overflow-hidden"
            ></img>
          )}
        </div>
        <div className="form-row">
          <label className="form-label">Description</label>
          <div className="flex items-center">
            <textarea
              rows={3}
              className="w-full py-1 px-3 rounded-lg bg-purple-50 border border-gray-300 text-gray-900"
              placeholder="Enter your description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <FormInput
          type={"text"}
          title={"Product Slug"}
          admin
          value={slug}
          onchange={(e) => setSlug(e.target.value)}
          placeholder={"Enter Product slug"}
        />
        <FormInput
          type={"text"}
          admin
          title={"Product Meta Title"}
          value={metaTitle}
          onchange={(e) => setMetaTitle(e.target.value)}
          placeholder={"Enter Product Meta Title"}
        />
        <FormInput
          type={"text"}
          admin
          value={metaDescription}
          onchange={(e) => setMetaDescription(e.target.value)}
          title={"Product Meta Description"}
          placeholder={"Enter Product Meta description"}
        />
        <FormInput
          type={"text"}
          admin
          value={metaKeywords}
          onchange={(e) => setMetaKeywords(e.target.value)}
          title={"Product Meta Keywords"}
          placeholder={"Enter Product Meta keywords"}
        />
        <button
          onClick={() =>
            editProduct({
              id,
              productName,
              productImage,
              productImagePublicId,
              manufacturerItem,
              cryptoCurrencyItem,
              hashRate,
              power,
              algorithm,
              price,
              featuredImage,
              featuredImagePublicId,
              description,
              slug,
              metaDescription,
              metaKeywords,
              metaTitle,
            })
          }
          className="bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
          disabled={editProductLoading}
        >
          Save Product
        </button>
        {editProductLoading && <Loading />}
      </div>
    </div>
  );
}
