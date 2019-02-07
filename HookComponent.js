class HookComponent {
  constructor() {
    this.hooks = [];
  }

  render() {
    console.log("render UI");
  }
}

module.exports = { HookComponent };
