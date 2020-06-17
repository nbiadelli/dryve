import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import ListClient from "../../src/components/Dashboard.vue";
import state from "../../src/store/index"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    registerCliente: {}
  }
})

describe("ListClient.vue", () => {
  it("the Component is rendering the state registerCliente", () => {
    const wrapper = mount(ListClient, { 
      store, 
      localVue 
    })
    expect(wrapper.find(".registerCliente"))
  })
})
