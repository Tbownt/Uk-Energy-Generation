import axios from "axios";

export const fetchEnergyData = async () => {
  try {
    const { data } = await axios.get<Data>(
      "https://api.carbonintensity.org.uk/generation"
    );
    return data;
  } catch (error) {
    console.error("Error fetching energy data:", error);
    throw error;
  }
};
