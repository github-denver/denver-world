import Vue from 'vue'

import Button from './Button'

export const groupButton = Vue.component('group-button-component', {
  components: { Button },
  props: ['attribute'],
  template: `
    <Button :className="attribute.className">
      <slot></slot>
    </Button>
  `
})