import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "./App";
import "./i18n";

describe("App", () => {
  it("renders the tagline and switches language to French", async () => {
    render(<App />);

    expect(
      screen.getByText("AI document intelligence for fund compliance"),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "FR" }));

    expect(
      screen.getByText("Intelligence documentaire IA pour la conformité des fonds"),
    ).toBeInTheDocument();
  });
});
