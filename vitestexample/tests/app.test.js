import App from "../src/App.vue";
import { mount } from "@vue/test-utils";

describe("App.vue", () => {
  it("the component is rendered", () => {
    const wrapper = mount(App);
    if (expect(wrapper.find("h1").exists())) {
      expect(wrapper.text()).toBe("0");
    }
    if (expect(wrapper.find("button").exists())) {
      expect(wrapper.text()).toBe("Increment");
    }
  });
  it("the increment button works", async () => {
    const wrapper = mount(App);
    wrapper.find("button").trigger("click");
    expect(wrapper.find("h1").text()).toBe("1");
  });
});
