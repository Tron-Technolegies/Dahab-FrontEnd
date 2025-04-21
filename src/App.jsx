import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/home/HomePage";
import BuyMinersPage from "./pages/BuyMiners/BuyMinersPage";
import HostMiningPage from "./pages/hostMining/HostMiningPage";
import MinerRepairPage from "./pages/MinerRepair/MinerRepairPage";
import ErrorPage from "./pages/error/ErrorPage";
import AdminLayout from "./pages/admin/AdminLayout";
import DashboardPage from "./pages/admin/Dashboard/DashboardPage";
import AdminProductPage from "./pages/admin/Products/AdminProductPage";
import AddNewProduct from "./pages/admin/Products/AddNewProduct";
import SingleProductPage from "./pages/admin/Products/SingleProductPage";
import AuthLayout from "./pages/auth/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import EditProduct from "./pages/admin/Products/EditProduct";
import ResetPassword from "./pages/auth/ResetPassword";
import AdminBlogPage from "./pages/admin/blog/AdminBlogPage";
import BlogPage from "./pages/blogs/BlogPage";
import SingleBlogPage from "./pages/blogs/SingleBlogPage";
import AddNewBlog from "./pages/admin/blog/AddNewBlog";
import AdminSingleBlogPage from "./pages/admin/blog/AdminSingleBlogPage";
import EditAdminBlog from "./pages/admin/blog/EditAdminBlog";
import AbuDhabiHosting from "./pages/abuDhabiHosting/AbuDhabiHosting";
import EthiopiaHosting from "./pages/EthiopiaHosting/EthiopiaHosting";
import AboutUsPage from "./pages/about/AboutUsPage";
import DataPage from "./pages/admin/datas/DataPage";
import AddNewDataPage from "./pages/admin/datas/AddNewDataPage";
import EditDataPage from "./pages/admin/datas/EditDataPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminRepairPage from "./pages/admin/repair/AdminRepairPage";
import AdminInventoryPage from "./pages/admin/inventory/AdminInventoryPage";
import AddRepairMiner from "./pages/admin/repair/AddRepairMiner";
import RepairSectionsPage from "./pages/admin/repair/RepairSectionsPage";
import RemoveMiners from "./pages/admin/repair/RemoveMiners";
import AddInventoryItem from "./pages/admin/inventory/AddInventoryItem";
import SingleInventoryItem from "./pages/admin/inventory/SingleInventoryItem";
import AlertPage from "./pages/admin/inventory/AlertPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import SingleMinerPage from "./pages/BuyMiners/SingleMinerPage";

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
          path: "events/:id",
          element: <EventsPage />,
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
  return <RouterProvider router={router} />;
}

export default App;
