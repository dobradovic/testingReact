import React from "react";
import { shallow } from "enzyme";
import Counter from "./index";
import { findByTestAttr } from "./../../../Utils";

describe("Testing counter", () => {
  it("should reneder component correctly", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("the increment method increments count", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.instance().state.count).toBe(0);
    // wrapper.find('button.counter-button').simulate('click')
    // wrapper.setState({count: 1})
    wrapper.instance().increment();
    expect(wrapper.instance().state.count).toBe(1);
  });
});
