import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App.jsx";

describe("App", () => {
  it("renders the main section headings", () => {
    render(<App />);

    // Target only section headings (h1/h2/etc.), not nav links
    expect(screen.getByRole("heading", { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Experience/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Projects/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Contact/i })).toBeInTheDocument();
  });
});
