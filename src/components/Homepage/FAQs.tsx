import React from "react";
const FAQs = () => {
    
  return (
    <div className="faqs w-full text-center px-[10%] pt-15 pb-[700px] bg-[#141414] h-[200px]">
      <h1 className="text-7xl">Frequently Asked Questions</h1>
      <div className="accordion-faqs bg-[#141414] text-white">
        

        <div className=" w-full text-start bg-[#141414]">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold">How do I create an account?</div>
    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">How do I update my profile information?</div>
    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
  </div>
</div>


      </div>
    </div>
  );
};

export default FAQs;
