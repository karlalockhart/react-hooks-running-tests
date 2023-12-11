import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  const element = screen.queryByText("please pass this test");

  //to debug a single element
  screen.debug(element);

  expect(element).toBeInTheDocument();

  //what the DOM looks like while testing
  //screen.debug();

  //expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
