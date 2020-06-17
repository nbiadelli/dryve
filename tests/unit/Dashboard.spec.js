import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import Dashboard from "../../src/components/Dashboard.vue";

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carList: {}
  }
})

describe("Dashboard", () => {
  it("the Component is rendering the state card list", () => {
    const wrapper = mount(Dashboard, { 
      store, 
      localVue 
    })
    expect(wrapper.find(".carList"))
  })
})
