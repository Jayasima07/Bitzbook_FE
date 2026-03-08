const development = {
  // environment: 'development',
  apiBaseUrl: "https://bitz.snsihub.tech/", // Local API URL
  PO_Base_url: "https://bitz.snsihub.tech/",
  SO_Base_url: "https://bitz.snsihub.tech/",
  // appName: 'MyReactApp (Dev)',
  //local link -- https://bitz.snsihub.tech/
  //ilan link --  https://bizbooksbe-1.onrender.com/
  //local link -- https://backend-micro-service-1.onrender.com/
};

const staging = {
  apiBaseUrl: "https://staging-api.example.com/", // Staging API URL
  PO_Base_url: "https://staging-api.example.com/", // Staging API URL
  SO_Base_url: "https://staging-api.example.com/", // Staging API URL
  // environment: 'staging',
  // appName: 'MyReactApp (Staging)',
};

const production = {
  apiBaseUrl: "https://api.example.com/", // Live API URL
  PO_Base_url: "https://staging-api.example.com/", // Staging API URL
  SO_Base_url: "https://staging-api.example.com/", // Staging API URL
  // environment: 'production',
  // appName: 'MyReactApp',
};

// Select configuration based on environment
const config =
  process.env.REACT_APP_ENV === "staging"
    ? staging
    : process.env.REACT_APP_ENV === "production"
      ? production
      : development;
export default config;
