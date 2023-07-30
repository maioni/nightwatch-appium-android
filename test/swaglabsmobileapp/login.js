describe("Swaglabs Android app test", function () {
  this.tags = ['swaglabsmobileapp', 'login', 'sanity'];
  this.suiteRetries(1);
  this.retries(2);
  this.timeout(10000);

  beforeEach(function (app) {
    app
      .useXpath()
      .clearValue('//android.widget.EditText[@content-desc="test-Username"]')
      .clearValue('//android.widget.EditText[@content-desc="test-Password"]');
  });

  afterEach(function (app) {
    app.end();
  });

  it("Login with empty user name", async function (app) {
    app
      //.debug()
      .useXpath()
      .click('//android.view.ViewGroup[@content-desc="test-LOGIN"]')
      //.assert.elementPresent("//android.view.ViewGroup[@content-desc=\"test-Error message\"]/android.widget.TextView[@text='Username is required']"
      .assert.elementPresent("//android.widget.TextView[@text='Username is required']"
      );
  });

  it("Login with empty password name", async function (app) {
    app
      .useXpath()
      .setValue('//android.widget.EditText[@content-desc="test-Username"]',"standard_user")
      .click('//android.view.ViewGroup[@content-desc="test-LOGIN"]')
      //.assert.elementPresent("//android.view.ViewGroup[@content-desc=\"test-Error message\"]/android.widget.TextView[@text='Password is required']");
      .assert.elementPresent("//android.widget.TextView[@text='Password is required']");
  });

  it("Login with invalid user name", async function (app) {
    app
      .useXpath()
      .setValue('//android.widget.EditText[@content-desc="test-Username"]',"invalid_user")
      .setValue('//android.widget.EditText[@content-desc="test-Password"]',"secret_sauce")
      .click('//android.view.ViewGroup[@content-desc="test-LOGIN"]')
      // .assert.elementPresent("//android.view.ViewGroup[@content-desc=\"test-Error message\"]/android.widget.TextView[@text='Username and password do not match any user in this service.']"
      .assert.elementPresent("//android.widget.TextView[@text='Username and password do not match any user in this service.']");
  });

  it("Login with invalid password", async function (app) {
    app
      .useXpath()
      .setValue('//android.widget.EditText[@content-desc="test-Username"]',"standard_user")
      .setValue('//android.widget.EditText[@content-desc="test-Password"]',"secret_invalid")
      .click('//android.view.ViewGroup[@content-desc="test-LOGIN"]')
      //.assert.elementPresent("//android.view.ViewGroup[@content-desc=\"test-Error message\"]/android.widget.TextView[@text='Username and password do not match any user in this service.']");
      .assert.elementPresent("//android.widget.TextView[@text='Username and password do not match any user in this service.']");
  });

  it("Login with blocked user", async function (app) {
    app
      .useXpath()
      .setValue('//android.widget.EditText[@content-desc="test-Username"]',"locked_out_user")
      .setValue('//android.widget.EditText[@content-desc="test-Password"]',"secret_sauce")
      .click('//android.view.ViewGroup[@content-desc="test-LOGIN"]')
      // .assert.elementPresent("//android.view.ViewGroup[@content-desc=\"test-Error message\"]/android.widget.TextView[@text='Sorry, this user has been locked out.']");
      .assert.elementPresent("//android.widget.TextView[@text='Sorry, this user has been locked out.']");
  });

  it("Login test", async function (app) {
    app
      .useXpath()
      .setValue('//android.widget.EditText[@content-desc="test-Username"]',"standard_user")
      .setValue('//android.widget.EditText[@content-desc="test-Password"]',"secret_sauce")
      .click('//android.view.ViewGroup[@content-desc="test-LOGIN"]')
      // .assert.elementPresent("//android.view.ViewGroup[@content-desc=\"test-Cart drop zone\"]/android.view.ViewGroup/android.widget.TextView[@text='PRODUCTS']");
      .assert.elementPresent("//android.widget.TextView[@text='PRODUCTS']");
  });

  it("Logoff test", async function (app) {
    app
      .useXpath()
      .setValue('//android.widget.EditText[@content-desc="test-Username"]',"standard_user")
      .setValue('//android.widget.EditText[@content-desc="test-Password"]',"secret_sauce")
      .click('//android.view.ViewGroup[@content-desc="test-LOGIN"]')
      .click('//android.view.ViewGroup[@content-desc="test-Menu"]')
      .click('//android.view.ViewGroup[@content-desc="test-LOGOUT"]')
      .assert.elementPresent('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  });
  
});
