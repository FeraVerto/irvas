import './slider';
import modals from './Modules/modals'
import tabs from './Modules/tabs'
import forms from "./Modules/forms";


window.addEventListener('DOMContentLoaded', () => {
    "use strict"
    modals()
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    //(headerSelector, tabSelector, contentSelector, activeClass)
    forms()
})
