export const getApiConfig = () => {
  return {
    apiUrl:
      process.env.API_URL || "https://kinopoiskapiunofficial.tech/api/v2.2",
    apiKey: process.env.API_KEY || "62d6bbc8-78dc-4c38-8763-ce6726a81471",
  };
};
