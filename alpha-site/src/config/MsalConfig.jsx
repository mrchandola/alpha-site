import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "1a05d315-29e3-412e-afea-2e2518134a01", // Your B2C App's Client ID
    authority: "https://alphawaydev1.b2clogin.com/alphawaydev1.onmicrosoft.com/B2C_1_signup_in", // B2C Policy Authority
    redirectUri: "http://localhost:3000/loggedin", // Redirect URI registered in B2C
    knownAuthorities: ["alphawaydev1.b2clogin.com"], // Your B2C domain
  },
  cache: {
    cacheLocation: "sessionStorage", // or "localStorage"
    storeAuthStateInCookie: true, // Helps in handling cross-site issues
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);
