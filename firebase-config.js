// Firebase web app settings for onomo-allure-feedback.
// These values are safe to publish. Security comes from firestore.rules, not from hiding this file.

export const firebaseConfig = {
  apiKey: "AIzaSyDKY3sjbvjYCQIli6dOHjlyjbtp1FM_siQ",
  authDomain: "onomo-allure-feedback.firebaseapp.com",
  projectId: "onomo-allure-feedback",
  storageBucket: "onomo-allure-feedback.firebasestorage.app",
  messagingSenderId: "5936228289",
  appId: "1:5936228289:web:9839eed850fb5f2240f140",
};

export const isConfigured = !String(firebaseConfig.apiKey).startsWith("PASTE");
