import React from "react";
import { render } from "@testing-library/react";
import NewItemForm from "./NewItemForm";

it("renders without crashing", () => {
  render(<NewItemForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewItemForm />);
  expect(asFragment()).toMatchSnapshot();
});
