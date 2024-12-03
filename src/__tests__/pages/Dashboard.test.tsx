import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";
import { useEnergyData } from "../../hooks/useEnergyData";

jest.mock("../../hooks/useEnergyData");

describe("Dashboard", () => {
  it("shows the loader when loading is true", () => {
    (useEnergyData as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
    });

    render(<Dashboard />);
    expect(screen.getByRole("status")).toBeInTheDocument(); // Assuming the Loader has role="status"
  });

  it("shows a no-data message when data is null", () => {
    (useEnergyData as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
    });

    render(<Dashboard />);
    expect(screen.getByText("No data available.")).toBeInTheDocument();
  });

  it("renders the energy chart and cards when data is available", () => {
    (useEnergyData as jest.Mock).mockReturnValue({
      data: {
        from: "2024-12-03T12:30Z",
        to: "2024-12-03T13:00Z",
        generationmix: [
          { fuel: "gas", perc: 53.7 },
          { fuel: "solar", perc: 6.8 },
        ],
      },
      loading: false,
    });

    render(<Dashboard />);

    expect(
      screen.getByText("Power Generation in the United Kingdom")
    ).toBeInTheDocument();
    expect(screen.getByText(/gas/i)).toBeInTheDocument();
    expect(screen.getByText(/solar/i)).toBeInTheDocument();
    expect(screen.getByText("53.7%")).toBeInTheDocument();
    expect(screen.getByText("6.8%")).toBeInTheDocument();
  });
});
