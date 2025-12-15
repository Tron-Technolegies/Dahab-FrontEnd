import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  AboutUsPage,
  AbuDhabiHosting,
  BlogPage,
  BuyMinersPage,
  ErrorPage,
  EthiopiaHosting,
  EventsPage,
  HomeLayout,
  HomePage,
  HostMiningPage,
  MinerRepairPage,
  PrivacyPolicy,
  ServicePage,
  SingleBlogPage,
  SingleMinerPage,
  TermsAndConditions,
} from "./pages";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "buy-bitcoin-miners-uae",
          element: <BuyMinersPage />,
        },
        {
          path: "buy-bitcoin-miners-uae/:id",
          element: <SingleMinerPage />,
        },
        {
          path: "host-miners",
          element: <HostMiningPage />,
        },
        {
          path: "host-miners/bitcoin-mining-hosting-abu-dhabi",
          element: <AbuDhabiHosting />,
        },
        {
          path: "host-miners/bitcoin-mining-hosting-ethiopia",
          element: <EthiopiaHosting />,
        },
        {
          path: "asic-miner-repair-dubai",
          element: <MinerRepairPage />,
        },
        {
          path: "blogs",
          element: <BlogPage />,
        },
        {
          path: "blogs/:id",
          element: <SingleBlogPage />,
        },
        {
          path: "about-us",
          element: <AboutUsPage />,
        },
        {
          path: "events/:slug",
          element: <EventsPage />,
        },
        {
          path: "services",
          element: <ServicePage />,
        },
      ],
    },
    {
      path: "/terms_and_conditions",
      element: <TermsAndConditions />,
    },
    {
      path: "/privacy_policy",
      element: <PrivacyPolicy />,
    },
  ]);
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
