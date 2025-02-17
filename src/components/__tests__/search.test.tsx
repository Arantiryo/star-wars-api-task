import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Search from "../search";

describe("Search", () => {
  it("renders search input", () => {
    render(<Search search="" setSearch={() => {}} />);
    expect(screen.getByLabelText("Search characters")).toBeInTheDocument();
  });

  it("debounces search input", async () => {
    vi.useFakeTimers();
    const setSearch = vi.fn();

    render(<Search search="" setSearch={setSearch} />);
    const input = screen.getByLabelText("Search characters");

    fireEvent.change(input, { target: { value: "luke" } });
    expect(setSearch).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(setSearch).toHaveBeenCalledWith("luke");
    vi.useRealTimers();
  });
});
