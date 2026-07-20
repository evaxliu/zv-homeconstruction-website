"use client";

import { type SubmitEvent, useState } from "react";

const phones = [
  { phone: "(945) 304-9455", lang: "English"},
  { phone: "(509) 396-8744", lang: "Vietnamese"}
]

const businessInfo = [
  { title: "EMAIL", info: "zvhomeconstruction@gmail.com" },
  { title: "OFFICE", info: "18949 108th Ave NE, Bothell, WA 98011" },
  { title: "HOURS", info: "Mon–Fri, 7am – 5pm" }
]

export default function ContactUs() {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "4987eae9-12c3-4233-910b-8784d8a05729"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResult(
          "Thanks for reaching out! I’ll review your message and get back to you within 1–2 business days."
        );

        form.reset();
      } else {
        setIsSuccess(false);
        setResult(
          "Something went wrong while sending your message. Please try again in a moment."
        );
      }
    } catch {
      setIsSuccess(false);
      setResult(
        "Something went wrong while sending your message. Please try again in a moment."
      );
    }
  };

  return(
    <section className="w-full text-[#202A36]" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col lg:flex-row justify-between min-h-[calc(100svh-80px)]">
        <div className="flex flex-col items-start justify-center gap-10">
          <div className="flex flex-col gap-3">
            <p className="max-w-md text-xl font-medium text-[#4E8CA2]">
              Contact
            </p>
            <h3 className="max-w-md text-4xl font-medium">
              Start your project.
            </h3>
            <p className="text-[#4E8CA2]">
              Free estimates. SMS available.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#4E8CA2]">
              CALL OR TEXT
            </p>
            {phones.map((contact) => 
              <div key={contact.phone} className="flex gap-3">
                <p>
                  {contact.phone}
                </p>
                <p className="text-[#4E8CA2]">
                  {contact.lang}
                </p>
              </div>
            )}
          </div>
          {businessInfo.map((info) => 
            <div key={info.title} className="flex flex-col gap-3">
              <p className="text-[#4E8CA2]">
                {info.title}
              </p>
              <p>
                {info.info}
              </p>
            </div>
          )}
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-3 lg:min-w-lg justify-center">
          <div className="flex flex-col gap-3 mt-10">
            <input type="text" name="name" required placeholder="Name *" className="flex border-b border-[#4E8CA2] p-3 shrink w-full" />
            <input type="email" name="email" required placeholder="Email *" className="flex border-b border-[#4E8CA2] p-3 shrink w-full" />
            <input type="text" name="phone" placeholder="Phone" className="flex border-b border-[#4E8CA2] p-3 shrink w-full" />
            <input type="checkbox" name="botcheck" className="hidden"/>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-40 w-full overflow-hidden border-b border-[#4E8CA2]">
              <textarea
                name="message"
                required
                placeholder="Type your message here."
                className="h-full w-full resize-none overflow-y-auto overscroll-y-contain bg-transparent p-3 outline-none [scrollbar-color:auto] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-violet-300 [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-button]:size-0"
              />
            </div>
            <button type="submit" className="flex items-center justify-center h-12 border border-[#4E8CA2] hover:bg-[#4E8CA2] hover:text-white py-2.5 px-5 rounded-xl hover:cursor-pointer text-lg">Submit</button>
            <p
              className={`
                w-0 min-w-full whitespace-normal wrap-anywhere text-left text-sm
                ${isSuccess === true ? "text-green-300" : ""}
                ${isSuccess === false ? "text-red-300" : ""}
              `}
            >
              {result}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}