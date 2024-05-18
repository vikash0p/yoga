'use client'
import ReusableHero from "@/components/reusableComp/ReusableHero";
import React from "react";
import ContactPage from "@/components/ContactComponent/ContactPage";
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
