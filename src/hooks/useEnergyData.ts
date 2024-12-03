import { useEffect, useState } from "react";
import { fetchEnergyData } from "../services/energyService";

export const useEnergyData = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchEnergyData();
        setData(response);
      } catch {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading };
};
