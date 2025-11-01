import React, { useEffect, useState } from "react";
import SingleMinerTop from "../../components/buyMiners/singleMiner/SingleMinerTop";
import { Link, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useGetSingleProduct from "../../hooks/userProducts/useGetSingleProduct";
import Loading from "../../components/Loading";
import useGetFeaturedProducts from "../../hooks/userProducts/useGetFeaturedProducts";
import { productSchemas } from "../../utils/productSchemas";
import SingleMinerDetailsTabs from "../../components/buyMiners/singleMiner/SingleMinerDetailsTabs";

import ProductFaqSection from "../../components/Home/Faq/ProductFaqSection";

export default function SingleMinerPage() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;
  const { id } = useParams();
  const { loading, product, refetch } = useGetSingleProduct({ id });
  const { loading: featureLoading, products } = useGetFeaturedProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [id]);

  // Match the schema for this product based on its name
  const productSchema = productSchemas.find(
    (schema) => schema.name.toLowerCase().trim() === product?.productName?.toLowerCase().trim()
  );

  // Inject schema dynamically into <head>
  useEffect(() => {
    if (productSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(productSchema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [productSchema]);

  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 ">
      <Helmet>
        <link rel="canonical" href={fullUrl || "https://dahabminers.com/"} />
        <title>{`Buy ${product?.productName || "Bitcoin Miners"} in UAE | Dahab Miners`}</title>
        <meta
          name="description"
          content={`Buy ${
            product?.productName || "Bitcoin mining machines"
          } in Dubai, UAE. Discover efficient miners with top hashrate performance and energy savings.`}
        />
        <meta
          name="keywords"
          content={`Buy ${
            product?.productName || "Bitcoin miners"
          } UAE, Crypto mining hardware Dubai, Bitcoin mining equipment Abu Dhabi, Purchase crypto miners UAE`}
        />
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-2">
          <Link
            className="bg-[#7decda] px-4 py-2 rounded-md w-fit ms-auto"
            to={"/buy-bitcoin-miners-uae"}
          >
            Go Back
          </Link>
          <p className="text-2xl font-semibold text-[#1ECBAF]">{`Buy ${product?.productName}`}</p>
        </div>
      )}
      {loading ? (
        <Loading />
      ) : (
        <>
          <SingleMinerTop product={product} />
          <SingleMinerDetailsTabs product={product} />

          {/*  FAQ Section below product tabs */}
          <ProductFaqSection productName={product?.productName} />
        </>
      )}

      {/* <FeaturedSection loading={featureLoading} products={products} /> */}
    </div>
  );
}
