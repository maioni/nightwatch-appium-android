describe("Native Demo Android app test", function () {
    this.tags = ['wdiodemoapp', 'drag-drop'];
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

  
    it("Drag and drop test", async function (app) {
      await app
        .useXpath()
        .click('//android.widget.Button[@content-desc="Drag"]/android.widget.TextView')
      
      await app
        .useXpath()
        .click('//android.view.ViewGroup[@content-desc="renew"]/android.widget.TextView')

      await app
        .useXpath()  
        .getLocation('//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup', async (result)=>{
            console.log(result)
            const dragElement = await app.findElement('//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView')
            app.executeScript("mobile: dragGesture", {'elementId':dragElement.getId(),'endX':result.value.x, 'endY':result.value.y, speed:2500})
        })
    });
    
});
  