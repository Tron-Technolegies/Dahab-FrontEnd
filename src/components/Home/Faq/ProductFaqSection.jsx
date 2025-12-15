import React, { useState } from "react";
import productFaqData from "../../../utils/productFaqdata";
import FAQCard from "./FAQCard";

export default function ProductFaqSection({ productName }) {
  const [active, setActive] = useState(0);

  // Find product FAQ object by productName
  const product = productFaqData.find((item) => item.productName === productName);

  const faqs = product?.faqs || [];

  if (!faqs.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-white mb-5">Frequently Asked Questions</h2>

      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <FAQCard
            key={index}
            count={index + 1}
            question={faq.question}
            answer={faq.answer}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
}
