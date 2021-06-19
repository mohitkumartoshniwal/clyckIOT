import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home.vue'


describe('Home.vue', () => {
    const localVue = createLocalVue();
    let vuetify, wrapper;

    localVue.use(Vuetify)
    localVue.use(VueRouter)

    beforeEach(() => {
        vuetify = new Vuetify()
        wrapper = mount(Home, {
            localVue,
            vuetify,
            setData: {
                items: [
                    {
                        src: "arduinoUno.png",
                    },
                    {
                        src: "esp32.png",
                    },
                    {
                        src: "esp8266.png",
                    },
                ],
            }
        })
    })


    it("is mounted", () => {
      expect(wrapper.is(Home)).toBe(true)
    })

})
