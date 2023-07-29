describe("Native Demo Android app test", function () {
    this.tags = ['wdiodemoapp-debug'];
    this.suiteRetries(1);
    this.retries(2);
    this.timeout(10000);
  
    beforeEach(function (app) {
      app
        .useXpath()
    });
  
    afterEach(function (app) {
      app.end();
    });


    it("Debug mode test for wdiodemoapp", async function (app) {
      await app
        .debug();
    });

});
  