class HookComponent {
  constructor() {
    this.hooks = [];
  }

  static hooks = []

  render() {
    console.log("render UI");
  }
}

module.exports = { HookComponent };
