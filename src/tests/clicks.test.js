import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "../components/Carousel";

test("should call handleClickForward", () => {
  const handleClickForward = jest.fn();
  const { getByTestId } = render(
    <Carousel handleClickForward={handleClickForward} />
  );
  fireEvent.click(getByTestId("forward"));
  expect(handleClickForward).toHaveBeenCalled();
});

test("should call handleClickBackward", () => {
  const handleClickBackward = jest.fn();
  const { getByTestId } = render(
    <Carousel handleClickBackward={handleClickBackward} />
  );
  fireEvent.click(getByTestId("backward"));
  expect(handleClickBackward).toHaveBeenCalled();
});
