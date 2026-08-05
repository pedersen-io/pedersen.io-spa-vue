import { mount } from "@vue/test-utils";
import Tech from "@/components/Tech.vue";

describe("Tech.vue", () => {
  it("renders the experience table and allows sorting", async () => {
    const wrapper = mount(Tech);

    const firstRow = () => wrapper.findAll("tbody tr").at(0)?.text();

    expect(firstRow()).toContain("Docker");

    await wrapper.find('[data-test="sort-experience"]').trigger("click");

    expect(firstRow()).toContain("Java");
  });
});
