import React, { useEffect } from "react";
import SingleMinerTop from "../../components/buyMiners/singleMiner/SingleMinerTop";
import { Link, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useGetSingleProduct from "../../hooks/userProducts/useGetSingleProduct";
import Loading from "../../components/Loading";
import FeaturedSection from "../../components/buyMiners/singleMiner/FeaturedSection";
import useGetFeaturedProducts from "../../hooks/userProducts/useGetFeaturedProducts";

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

  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 ">
      <Helmet>
        <link rel="canonical" href={fullUrl || "https://dahabminers.com/"} />
        <title>
          Buy Bitcoin Miners in UAE | Bitcoin mining equipment Abu Dhabi
        </title>
        <meta
          name="description"
          content="Find and purchase the top Bitcoin Mining Machines in Dubai, UAE, such as the Bitmain Antminer AL1 Pro, DragonBall Miner A11, and IceRiver AL3. 
    "
        />
        <meta
          name="keywords"
          content="Buy Bitcoin Miners UAE, Crypto mining hardware Dubai, Bitcoin mining equipment Abu Dhabi, Purchase crypto miners UAE"
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
      {loading ? <Loading /> : <SingleMinerTop product={product} />}
      <FeaturedSection loading={featureLoading} products={products} />
    </div>
  );
}
