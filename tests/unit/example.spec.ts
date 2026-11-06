import { shallowMount } from "@vue/test-utils";
import Subdomain from "@/components/Subdomain.vue";

describe("Subdomain.vue", () => {
  it("renders the provided content and link props", () => {
    const wrapper = shallowMount(Subdomain, {
      props: {
        propMessage: "new message",
        destination: "https://example.com",
        imagefile: "https://imgur.com/UPeRp4h",
        name: "Example",
      },
    });

    expect(wrapper.text()).toContain("new message");
    expect(wrapper.text()).toContain("Example");
    expect(wrapper.find("a").attributes("href")).toBe("https://example.com");
    expect(wrapper.find("img").attributes("src")).toBe("https://imgur.com/UPeRp4h");
  });
});
