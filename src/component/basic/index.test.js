import React from "react";
import { shallow } from "enzyme";
import Basic from "./index";
import { findByTestAttr } from "./../../../Utils";

describe("testing basic component", () => {
  it("renders correctly enzyme", () => {
    const wrapper = shallow(<Basic />);
    expect(wrapper).toMatchSnapshot();
  });
});
