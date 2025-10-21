import React, { useEffect, useState } from "react";
import FormInput from "../../FormInput";
import PhoneInput from "react-phone-input-2";

import { handleEnquiryFormClick } from "../../../utils/whatsapp";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import ContactDetailSingleElt from "./ContactDetailSingleElt";
import { toast } from "react-toastify";

export default function AboutPageContactSection() {
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    import("react-phone-input-2/lib/style.css");
    import("./PhoneInputCustomStyles.css");
  }, []);

  function handleClick() {
    if (!phone || !firstName || !lastName || !email || !message) {
      toast.warn("Please fill all fields");
    } else {
      handleEnquiryFormClick({
        firstName,
        lastName,
        email,
        phone,
        message,
      });
    }
  }

  return (
    <section className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-10 p-10 customborder">
        {/* Left side - Form */}
        <div className="flex flex-col gap-5 lg:w-1/2 w-full">
          <h5 className="text-[#0194FE] font-semibold text-3xl lg:text-left text-center">
            Contact Us
          </h5>
          <p className="text-[#A1D3F8] lg:text-left text-center">
            Thank you for getting in touch!
            <br /> Kindly fill the form, have a great day!
          </p>
          <div>
            <div>
              <FormInput
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FormInput
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <FormInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PhoneInput
              country="ae"
              value={phone}
              onChange={setPhone}
              inputStyle={{
                padding: "20px",
                paddingLeft: "40px",
                color: "black",
                width: "100%",
                borderColor: "#D0D5DD",
              }}
            />
            <textarea
              className="p-2 my-4 border rounded-lg bg-white border-[#D0D5DD] w-full text-black"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="px-4 py-2 rounded-full btn-bg w-full" onClick={handleClick}>
              Send Message
            </button>
          </div>
        </div>

        {/* Right side - Contact Details */}
        <div className="flex flex-col justify-center items-center gap-5 lg:w-1/2 w-full">
          <div className="flex justify-center lg:ms-auto mx-auto items-center gap-5 max-w-[500px]">
            <div className="flex flex-col gap-3">
              <ContactDetailSingleElt
                icon={<CiLocationOn />}
                content={
                  <>
                    Plot 122 Ad Doja 1 St - Musaffah - M40 - Abu Dhabi
                    <br />
                    United Arab Emirates
                  </>
                }
              />
              <ContactDetailSingleElt
                icon={<CiLocationOn />}
                content="Saif Thamer General Transport Establishment building, Al Jubailah, Liwa, Abu Dhabi"
              />
              <ContactDetailSingleElt
                icon={<CiLocationOn />}
                content="WM92+VCQ Alem Gena, Ethiopia"
              />
              <ContactDetailSingleElt icon={<CiMail />} content="Rizwan@dahabminers.ae" />
              <ContactDetailSingleElt icon={<CiPhone />} content="+971509669623" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
