import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Header from "../src/components/Header.jsx";

describe("Header", () => {
  it("toggles theme on click", async () => {
    render(<Header />);
    const btn = screen.getByRole("button", { name: /toggle theme/i });
    const before = document.documentElement.dataset.theme;
    await userEvent.click(btn);
    const after = document.documentElement.dataset.theme;
    expect(after).not.toBe(before);
  });
});
