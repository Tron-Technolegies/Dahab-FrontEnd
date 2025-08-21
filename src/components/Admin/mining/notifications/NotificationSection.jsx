import React from "react";
import FormInput from "../../../FormInput";

export default function NotificationSection() {
  return (
    <div className="p-5">
      <p className="text-lg font-semibold">Add New Notification</p>
      <div className="my-5">
        <FormInput admin title={"notification"} />
      </div>
    </div>
  );
}
