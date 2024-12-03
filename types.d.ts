interface EnergyData {
  from: Date;
  to: Date;
  generationmix: GenerationMix[];
}

interface GenerationMix {
  fuel: string;
  perc: number;
}

interface Data {
  data: {
    from: string;
    to: string;
    generationmix: EnergyData[];
  };
}

interface EnergyChartProps {
  data: { fuel: string; perc: number }[];
}

interface EnergyCardProps {
  key?: number;
  fuel?: string;
  percentage?: number;
}