'use client'
import ReusableHero from "@/components/reusableComp/ReusableHero";
import React from "react";
import ContactPage from "@/components/ContactComponent/ContactPage";
import { Metadata } from "next";

 const metadata: Metadata = {
  title: "Contact Us - Mantra",
  description:
    "Get in touch with us for any queries or support. We are here to help you on your holistic yoga journey.",
  applicationName: "Mantra",
  category: "fitness",
  openGraph: {
    title: "Contact Us - Mantra",
    description:
      "Get in touch with us for any queries or support. We are here to help you on your holistic yoga journey.",
    url: "https://mantra.example.com/contact-us",
    type: "website",
  },
};

const Contact: React.FC = () => {
  return (
    <div>
      <ReusableHero text="Contact" />
      <div className="container m-auto py-10 h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112081.87334807178!2d77.234176!3d28.613017599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716015252606!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>
      </div>
      <ContactPage />
    </div>
  );
};

export default Contact;
