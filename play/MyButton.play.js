import Vue from 'vue'
import {play} from '../src/play'
import MyButton from './MyButton.vue'

Vue.component('my-button', MyButton)

play('Button')
  .add('with text', {
    template: `<my-button :handle-click="log">text</my-button>`,
    methods: {
      log() {
        this.$log(new Date())
      }
    }
  })
  .add('with emoji', `<my-button>🤔</my-button>`)
  .add('colorful', {
    render(h) {
      return h(MyButton, {
        props: {color: 'pink'}
      }, ['hello world'])
    }
  })
  .add('rounded', `<my-button :rounded="true">rounded</my-button>`)
