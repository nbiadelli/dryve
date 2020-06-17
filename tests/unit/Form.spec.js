import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import From from "../../src/components/Form.vue";

const localVue = createLocalVue()
localVue.use(Vuex)


describe("From.vue", () => {
    let actions
    let store
    beforeEach(() => {
        actions = {
            addRegister: jest.fn(),
        }
        store = new Vuex.Store({
            actions
        })
    })
    it("calls store action addRegister when button is clicked", () => {
        const wrapper = mount(From, {
            actions,
            stubs: ['v-text-field', 'v-btn', 'v-form' ]
        })
        expect(actions.addRegister).not.toHaveBeenCalled()
    })
})