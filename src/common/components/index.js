import LuckDraw from './luckDraw/luckTen'

const components = [
    LuckDraw,
]

const install = (Vue, opts = {}) => {
    // locale.use(opts.locale)

    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if(typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
    ver: '0.0.1',
    // locale: locale.use,
    install,
    LuckDraw,
}