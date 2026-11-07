import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("renders notifications and courses from its initial state", () => {
    render(<App />);

    expect(screen.getByText("New course available")).toBeInTheDocument();
    expect(screen.getByText("New resume available")).toBeInTheDocument();
    expect(screen.getByText("Urgent requirement")).toBeInTheDocument();
  });

  it("opens and hides the notification drawer", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen.getByText("Here is the list of notifications")
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /close/i }));
    expect(
      screen.queryByText("Here is the list of notifications")
    ).not.toBeInTheDocument();

    await user.click(screen.getByText("Your notifications"));
    expect(
      screen.getByText("Here is the list of notifications")
    ).toBeInTheDocument();
  });

  it("updates the user and renders courses after login", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Email"), "student@example.com");
    await user.type(screen.getByLabelText("Password"), "password123");
    await user.click(screen.getByRole("button", { name: "OK" }));

    expect(
      screen.getByText("Welcome student@example.com", { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText("ES6")).toBeInTheDocument();
    expect(screen.getByText("Webpack")).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: /logout/i }));

    expect(
      screen.queryByText("Welcome student@example.com", { exact: false })
    ).not.toBeInTheDocument();
    expect(screen.getByText("Log in to continue")).toBeInTheDocument();
  });

  it("removes a notification immutably when it is marked as read", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByText("New course available"));

    expect(screen.queryByText("New course available")).not.toBeInTheDocument();
    expect(screen.getByText("New resume available")).toBeInTheDocument();
  });
});
