describe("Swaglabs Android app webview test", function () {
  this.tags = ['swaglabsmobileapp', 'webview'];
  // this.suiteRetries(1);
  // this.retries(2);
  this.timeout(10000);

  beforeEach(function (app) {
    app
      .useXpath()
      .clearValue('//android.widget.EditText[@content-desc="test-Username"]')
      .clearValue('//android.widget.EditText[@content-desc="test-Password"]')
      .setValue('//android.widget.EditText[@content-desc="test-Username"]',"standard_user")
      .setValue('//android.widget.EditText[@content-desc="test-Password"]',"secret_sauce")
      .click('//android.view.ViewGroup[@content-desc="test-LOGIN"]')
  });

  afterEach(function (app) {
    app.end();
  });

  it("Webviews test for swaglabsmobileapp", async function (app) {
    await app
      .click('//android.view.ViewGroup[@content-desc="test-Menu"]')
      .click('//android.view.ViewGroup[@content-desc="test-WEBVIEW"]')
      .verify.elementPresent('//android.widget.TextView[@text="WEBVIEW SELECTION"]');
      
    await app
      .click('//android.widget.EditText[@content-desc="test-enter a https url here..."]')
      .setValue('//android.widget.EditText[@content-desc="test-enter a https url here..."]', 'https://www.google.com')
      //.click('//android.view.ViewGroup[@content-desc="test-GO TO SITE"]/android.widget.TextView[@text="GO TO SITE"]')
      .click('//android.widget.TextView[@text="GO TO SITE"]');

    await app.contexts(async (result)=>{
      console.log(result)
      let context = result.value[1];
    await app
      .setContext(context)
      .verify.elementPresent('//input[@name="q"]');
    });
  });

});
