import {
  render,
  screen,
  waitFor,
  fireEvent,
  getByTestId,
  act,
} from "@testing-library/react";
import React from "react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});
