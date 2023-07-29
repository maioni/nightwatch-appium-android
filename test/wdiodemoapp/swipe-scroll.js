describe("Native Demo Android app test", function () {
    this.tags = ['wdiodemoapp'];
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

  
    it("Swipe test", async function (app) {
      await app
        .useXpath()
        .click('//android.widget.Button[@content-desc="Swipe"]/android.widget.TextView[2]')
      
      await app
        .useXpath()
        .click('//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView')
        let width, height;
      
      await app.windowSize('window', (result)=>{
          width = result.value.width;
          height = result.value.height;
        })
        console.log('window size ' + width + ' x ' + height)

      // to the right
      for(let i = 0; i < 6; i++){
        app.executeScript('mobile: scrollGesture', {'left':width/4, 'top':height/2, 'height':height/2, 'width':width/2, 'direction':'right', 'percent':1.0})
        app.pause(2500)
      }
      app.pause(5000)
      await app.verify.elementPresent('(//android.view.ViewGroup[@content-desc="slideTextContainer"])[2]/android.widget.TextView[@text="COMPATIBLE"]')

      // to the left
      for(let i = 0; i < 6; i++){
        app.executeScript('mobile: scrollGesture', {'left':width/2, 'top':height/2, 'height':height/2, 'width':width/2, 'direction':'left', 'percent':1.0})
        app.pause(2500)
      }
      app.pause(5000)
      await app.verify.elementPresent('(//android.view.ViewGroup[@content-desc="slideTextContainer"])[1]/android.widget.TextView[@text="FULLY OPEN SOURCE"]')

      // to the down
      for(let i = 0; i < 6; i++){
        app.executeScript('mobile: scrollGesture', {'left':width/2, 'top':height/4, 'height':height/2, 'width':width/2, 'direction':'down', 'percent':1.0})
        app.pause(2500)
      }
      app.pause(5000)
      await app.verify.elementPresent('//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.widget.TextView[@text="You found me!!!"]')

      // to the up
      for(let i = 0; i < 6; i++){
        app.executeScript('mobile: scrollGesture', {'left':width/2, 'top':height/2, 'height':height/2, 'width':width/2, 'direction':'up', 'percent':1.0})
        app.pause(2500)
      }
      app.pause(5000)
      await app.verify.elementPresent('//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.widget.TextView[@text="Or swipe vertical to find what I\'m hiding."]')

    });
});
  