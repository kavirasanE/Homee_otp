import React, { useEffect } from "react";

const Translatore = () => {
  const googleTranslateElementInit = () => {
    if (!window.google || !window.google.translate) return;
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    // Check if the script is already added
    if (!document.getElementById("google-translate-script")) {
      // Create a new script element
      var addScript = document.createElement("script");
      addScript.setAttribute("id", "google-translate-script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
    } else {
      // If the script is already present, initialize the translate element
      googleTranslateElementInit();
    }
    // Ensure the init function is globally available
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return <div id="google_translate_element" className="w-full">Language</div>;
};

export default Translatore;
