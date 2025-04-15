import React from "react";

export default function FormInput({
  title,
  type,
  placeholder,
  value,
  onchange,
  admin,
  disabled,
}) {
  return (
    <div className="form-row">
      {admin && <label className="form-label">{title}</label>}
      <div className="flex items-center">
        <input
          type={type}
          className="w-full py-1 px-3 rounded-lg bg-white border border-[#0B578E] outline-none text-gray-900 h-11"
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          required
          disabled={disabled ? true : false}
        />
      </div>
    </div>
  );
}
