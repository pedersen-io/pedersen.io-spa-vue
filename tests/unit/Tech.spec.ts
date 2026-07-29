import { mount } from "@vue/test-utils";
import Tech from "@/components/Tech.vue";

describe("Tech.vue", () => {
  it("sorts by experience by default and toggles direction when clicked", async () => {
    const wrapper = mount(Tech);

    const firstRow = () => wrapper.findAll("tbody tr").at(0)?.text();

    expect(firstRow()).toContain("Angular");

    await wrapper.find('[data-test="sort-experience"]').trigger("click");

    expect(firstRow()).toContain("Java");
  });
});
