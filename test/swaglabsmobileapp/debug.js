describe("Swaglabs Android app debug test", function () {
  this.tags = ['swaglabsmobileapp-debug'];
  this.suiteRetries(1);
  this.retries(2);
  this.timeout(10000);

  beforeEach(function (app) {
    app
      .useXpath();
  });

  afterEach(function (app) {
    app.end();
  });

  it("Debug mode test for swaglabsmobileapp", async function (app) {
    app
      .debug();
  });

});
