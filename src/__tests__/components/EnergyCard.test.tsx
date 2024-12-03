import React from "react";
import { render, screen } from "@testing-library/react";
import EnergyCard from "../../components/EnergyCard";

describe("EnergyCard", () => {
  it("renders the fuel name and percentage", () => {
    render(<EnergyCard fuel="gas" percentage={53.7} />);

    expect(screen.getByText(/gas/i)).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "53.7%";
      })
    ).toBeInTheDocument();
  });

  it("applies the correct color class based on percentage", () => {
    const { rerender } = render(<EnergyCard fuel="solar" percentage={45} />);
    const bar = screen.getByRole("presentation", { hidden: true });

    expect(bar).toHaveClass("bg-green-500");

    rerender(<EnergyCard fuel="wind" percentage={15} />);
    expect(bar).toHaveClass("bg-yellow-500");

    rerender(<EnergyCard fuel="nuclear" percentage={30} />);
    expect(bar).toHaveClass("bg-red-500");
  });
});
