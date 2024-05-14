import React, { useEffect } from "react";

const Translatore = ({ openModal }) => {
 
   const googleTranslateElementInit = () => {
    if (!window.google || !window.google.translate) return;
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: true,
        layout:
          window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    // Check if the script is already added
    if (!document.getElementById("google-translate-script")) {
      // Create a new script element
      const addScript = document.createElement("script");
      addScript.setAttribute("id", "google-translate-script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
    }
    else {
      // If the script is already present, initialize the translate element
      googleTranslateElementInit();
    }
    // Ensure the init function is globally available
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <div>
      <p id="google_translate_element">Change your Language</p>
    </div>
  );
};

export default Translatore;





