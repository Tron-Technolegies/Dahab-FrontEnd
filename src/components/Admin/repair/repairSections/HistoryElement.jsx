import React from "react";

export default function HistoryElement({ report, miner }) {
  return (
    <div className="p-5 bg-white rounded-md my-2">
      <div className="my-5 flex flex-col gap-5 p-5 bg-gray-100">
        {report.problemList.map((x) => (
          <div
            className="bg-gray-200 p-5 flex flex-col gap-2 rounded-md text-lg font-semibold"
            key={x._id}
          >
            <h4>{x.problem}</h4>
            <p>{`Component: ${x.component}`}</p>
            <p>{`Quantity: ${x.qty}`}</p>
            <p>{`Additional Component: ${x.additionalComponent}`}</p>
            <p>{`Additional Quantity: ${x.additionalQty}`}</p>
            <p>{`Issue Identified by: ${x.identifyTechnician}`}</p>
            <p>{`Issue Identified on: ${x.issueUpdatedOn.slice(0, 10)}`}</p>
            <p>{`Repair Updated by: ${x.repairTechnician}`}</p>
            <p>{`Repair Updated on: ${x.repairUpdatedOn.slice(0, 10)}`}</p>
            <p>{`${x.issueStatus} on ${x.updatedAt.slice(0, 10)}`}</p>
            <p>{`Remarks during Identification: ${x.issueRemark}`}</p>
            <p>{`Remarks during Repair Process: ${x.repairRemark}`}</p>
          </div>
        ))}
        <p className="font-semibold">{`Test Status: Failed`}</p>
        <img
          className="max-w-64 object-cover min-w-48"
          src={report.failureImage}
        />
        <p className="font-semibold">{`Test Remarks: ${report.remarks}`}</p>
        <p className="font-semibold">{`Test Performed by: ${report.testTechnician}`}</p>
        <p className="font-semibold">{`Test Performed On: ${report.testUpdatedOn.slice(
          0,
          10
        )}`}</p>
      </div>
    </div>
  );
}
