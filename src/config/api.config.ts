export const getApiConfig = () => {
  return {
    apiUrl:
      process.env.API_URL || "https://kinopoiskapiunofficial.tech/api/v2.2",
    apiKey: process.env.API_KEY || "",
  };
};
