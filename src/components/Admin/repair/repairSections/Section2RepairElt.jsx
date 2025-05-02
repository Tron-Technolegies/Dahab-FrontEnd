import React, { useEffect, useState } from "react";
import useUpdateOneRepairStatus from "../../../../hooks/adminRepair/useUpdateOneRepairStatus";
import { useDispatch, useSelector } from "react-redux";
import { setRefetchTrigger } from "../../../../slices/adminSlice";
import Loading from "../../../Loading";
import useGetAvailableParts from "../../../../hooks/adminRepair/useGetAvailableParts";
import FormSelect from "../../../FormSelect";
import FormInput from "../../../FormInput";
import { repairTechnicians } from "../../../../utils/repairdata";

const options = ["Pending", "Repair Done", "Component Needed"];

export default function Section2RepairElt({
  item,
  minerId,
  minerStatus,
  components,
  refetch,
  qty,
}) {
  const [repairStatus, setRepairStatus] = useState("Pending");
  const [extraComponent, setExtraComponent] = useState("No Components needed");
  const [extraQty, setExtraQty] = useState(0);
  const [repairTechnician, setRepairTechnician] = useState("Mehraj");
  const [repairRemark, setRepairRemark] = useState("");
  const { user } = useSelector((state) => state.user);
  const { loading, updateStatus } = useUpdateOneRepairStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    if (item?.issueStatus) {
      setRepairStatus(item.issueStatus);
    }
    if (item?.additionalComponent) {
      setExtraComponent(item.additionalComponent);
    }
    if (item?.additionalQty) {
      setExtraQty(item.additionalQty);
    }
    if (item?.repairTechnician) {
      setRepairTechnician(item.repairTechnician);
    }
    if (item?.repairRemark) {
      setRepairRemark(item.repairRemark);
    }
  }, [item]);
  return (
    <div className="flex sm:flex-row flex-col justify-between gap-5 sm:items-center bg-gray-200 p-5 rounded-lg my-5">
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-xl">Problem</p>
          <p>{item?.problem}</p>
        </div>
        <div>
          <p className="text-xl">Component</p>
          <p>{item?.component}</p>
        </div>
        <div>
          <p className="text-xl">Quantity</p>
          <p>{item?.qty}</p>
        </div>
        <div>
          <p className="text-xl">Identified By</p>
          <p>{item?.identifyTechnician}</p>
        </div>
        <div>
          <p className="text-xl">Issue Remarks</p>
          <p>{item?.issueRemark ? item?.issueRemark : "N/A"}</p>
        </div>
        {item?.issueStatus !== "Pending" && (
          <p>{`Last Updated : ${item?.repairUpdatedOn
            ?.toString()
            .slice(0, 10)} at ${item?.repairUpdatedOn
            ?.toString()
            .slice(14, 19)}`}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm">Repair Status</label>
        <select
          value={repairStatus}
          onChange={(e) => setRepairStatus(e.target.value)}
          disabled={
            (minerStatus === "Need Testing" ||
              minerStatus === "Ready To Connect") &&
            user?.role === "admin"
          }
          className="py-1 px-3 rounded-lg bg-white h-11 border border-[#0B578E] outline-none  text-black"
        >
          {options.map((item, index) => (
            <option
              key={index}
              className="border-b py-1 border-gray-300 bg-[#CCF2FF] text-black"
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
        <label className="text-sm">Extra Component</label>
        <select
          value={extraComponent}
          onChange={(e) => {
            setExtraComponent(e.target.value);
            refetch(e.target.value);
          }}
          disabled={
            (minerStatus === "Need Testing" ||
              minerStatus === "Ready To Connect") &&
            user?.role === "admin"
          }
          className="py-1 px-3 rounded-lg bg-white h-11 border border-[#0B578E] outline-none  text-black"
        >
          <option
            className="border-b py-1 border-gray-300 bg-[#CCF2FF] text-black"
            value={"No Components needed"}
          >
            No Components needed
          </option>
          {components?.map((item, index) => (
            <option
              key={index}
              className="border-b py-1 border-gray-300 bg-[#CCF2FF] text-black"
              value={item.itemName}
            >
              {item.itemName}
            </option>
          ))}
        </select>
        <label className="text-sm">Extra Quantity</label>
        <select
          value={extraQty}
          onChange={(e) => setExtraQty(e.target.value)}
          disabled={
            (minerStatus === "Need Testing" ||
              minerStatus === "Ready To Connect") &&
            user?.role === "admin"
          }
          className="py-1 px-3 rounded-lg bg-white h-11 border border-[#0B578E] outline-none  text-black"
        >
          <option
            className="border-b py-1 border-gray-300 bg-[#CCF2FF] text-black"
            value={0}
          >
            0
          </option>
          {Array.from(
            {
              length:
                minerStatus === "Need Repair" ||
                minerStatus === "Need Testing" ||
                minerStatus === "Ready To Connect"
                  ? item?.additionalQty
                  : qty,
            },
            (_, i) => i + 1
          ).map((item, index) => (
            <option
              className="border-b py-1 border-gray-300 bg-[#CCF2FF] text-black"
              key={index}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
        <FormSelect
          title={"Technician"}
          list={repairTechnicians}
          disabled={
            (minerStatus === "Need Testing" ||
              minerStatus === "Ready To Connect") &&
            user.role === "admin"
          }
          value={repairTechnician}
          onchange={(e) => setRepairTechnician(e.target.value)}
          issue
        />
        <FormInput
          title={"Remarks"}
          type={"text"}
          admin
          disabled={
            (minerStatus === "Need Testing" ||
              minerStatus === "Ready To Connect") &&
            user.role === "admin"
          }
          value={repairRemark}
          onchange={(e) => setRepairRemark(e.target.value)}
        />
        {(minerStatus === "Need Testing" ||
          minerStatus === "Ready To Connect") && (
          <p className="mb-2">{`last updated : ${item?.repairUpdatedOn
            ?.toString()
            .slice(0, 10)} at ${item?.repairUpdatedOn
            ?.toString()
            .slice(14, 19)}`}</p>
        )}
        <button
          className="px-4 py-2 rounded-md bg-homeBg hover:bg-homeBgGradient text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={async () => {
            await updateStatus({
              id: minerId,
              problemId: item?._id,
              repairStatus: repairStatus,
              extraComponent: extraComponent,
              extraQty: extraQty,
              repairRemark: repairRemark,
              repairTechnician: repairTechnician,
            });
            dispatch(setRefetchTrigger());
          }}
          disabled={
            (minerStatus === "Need Testing" ||
              minerStatus === "Ready To Connect") &&
            user?.role === "admin"
          }
        >
          Save
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
