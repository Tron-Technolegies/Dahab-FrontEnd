import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { action as AddMiningMinerAction } from "./components/Admin/mining/miners/AddNewMiner";
import { loader as EditMiningMinerLoader } from "./components/Admin/mining/miners/EditMiningMiner";
import { action as EditMiningMinerAction } from "./components/Admin/mining/miners/EditMiningMiner";
import {
  AboutUsPage,
  AbuDhabiHosting,
  AddInventoryItem,
  AddNewBlog,
  AddNewDataPage,
  AddNewProduct,
  AddRepairMiner,
  AdminBlogPage,
  AdminInventoryPage,
  AdminLayout,
  AdminProductPage,
  AdminRepairPage,
  AdminSingleBlogPage,
  AlertPage,
  AuthLayout,
  BlogPage,
  BuyMinersPage,
  DashboardPage,
  DataPage,
  EditAdminBlog,
  EditDataPage,
  EditProduct,
  ErrorPage,
  EthiopiaHosting,
  EventsPage,
  ForgotPassword,
  HomeLayout,
  HomePage,
  HostMiningPage,
  LoginPage,
  MinerRepairPage,
  MiningPage,
  PrivacyPolicy,
  RemoveMiners,
  RepairSectionsPage,
  ResetPassword,
  ServicePage,
  SingleBlogPage,
  SingleInventoryItem,
  SingleMinerPage,
  SingleProductPage,
  TermsAndConditions,
} from "./pages";
import {
  AddNewMiner,
  AddNewVoucher,
  EditMiningMiner,
  EditVoucher,
  SingleMiningMiner,
} from "./components";

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
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        {
          path: "products",
          element: <AdminProductPage />,
        },
        {
          path: "products/new",
          element: <AddNewProduct />,
        },
        {
          path: "products/:id",
          element: <SingleProductPage />,
        },
        {
          path: "products/:id/edit",
          element: <EditProduct />,
        },
        {
          path: "blogs",
          element: <AdminBlogPage />,
        },
        {
          path: "blogs/new",
          element: <AddNewBlog />,
        },
        {
          path: "blogs/:id",
          element: <AdminSingleBlogPage />,
        },
        {
          path: "blogs/:id/edit",
          element: <EditAdminBlog />,
        },
        {
          path: "data",
          element: <DataPage />,
        },
        {
          path: "data/new",
          element: <AddNewDataPage />,
        },
        {
          path: "data/:id/edit",
          element: <EditDataPage />,
        },
        {
          path: "repair",
          element: <AdminRepairPage />,
        },
        {
          path: "repair/new",
          element: <AddRepairMiner />,
        },
        {
          path: "repair/remove",
          element: <RemoveMiners />,
        },
        {
          path: "repair/status/:id",
          element: <RepairSectionsPage />,
        },
        {
          path: "inventory",
          element: <AdminInventoryPage />,
        },
        {
          path: "inventory/new",
          element: <AddInventoryItem />,
        },
        {
          path: "inventory/alert",
          element: <AlertPage />,
        },
        {
          path: "inventory/:id",
          element: <SingleInventoryItem />,
        },
        {
          path: "mining",
          element: <MiningPage />,
        },
        {
          path: "mining/miner/new",
          element: <AddNewMiner />,
          action: AddMiningMinerAction,
        },
        {
          path: "mining/miner/edit/:id",
          element: <EditMiningMiner />,
          loader: EditMiningMinerLoader,
          action: EditMiningMinerAction,
        },
        {
          path: "mining/miner/:id",
          element: <SingleMiningMiner />,
        },
        {
          path: "mining/voucher/new",
          element: <AddNewVoucher />,
        },
        {
          path: "mining/voucher/edit/:id",
          element: <EditVoucher />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "login", element: <LoginPage /> },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
