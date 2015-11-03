const $ = require('jquery');
const Activator = require('activator');

class ActivatorButton extends Activator {

  constructor (el) {
    super(el);
    this.events();
  }

  events () {
    this.$el.on('click', this.checkStatus.bind(this));
  }

  checkStatus () {
    this.EventEmitter.emit('preCheck');

    if (this.active === false) {
      this.setActive();
    } else {
      this.setInactive();
    }

    this.EventEmitter.emit('postCheck');
  }

}

module.exports = ActivatorButton;
