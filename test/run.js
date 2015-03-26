var mofoPhantom = require('mofo-phantom');
var Test = mofoPhantom.Test;

mofoPhantom.runTests([
  new Test(
    'Clicking the button shows stuff.',
    'http://localhost:31337',
    null,
    function () {
      var stuffIsVisible = this.page.evaluate(function () {
        document.querySelector('[data-test-id="big-button"]').click();
        return document.querySelector('[data-test-id="yolo"]').clientHeight > 0;
      });

      this.onComplete(stuffIsVisible);
    }
  )]);
