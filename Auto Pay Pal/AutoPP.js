const { type } = require("os");

describe("Refine", function () {
  it("Refine flow:legal, sale-2 with all upsells", function () {

    cy.visit('https://refineapp.me/') //указываем при помощи команды cy.visit сайт, который будем тестсить

    //onboarding page
    cy.get('.skip-button').click(); //получаем при помощи команды cy.get нужный класс объекта и при помощи .click() совершаем клик по нему
    cy.wait(1000); //ждем 1 секунду

    //1 question
    cy.get(':nth-child(2) > .answer').click();
    cy.wait(1000);

    //2 question
    cy.get(':nth-child(2) > .answer').click();
    cy.wait(1000);

    //3 question
    cy.contains("Tiktok").click(); //находим при помощи команды cy.contains нужный текст на объекте и при помощи .click() совершаем клик по этому объекту
    cy.contains("Twitter").click();
    cy.wait(1000);
    cy.get('.button').click();

    //processing page
    cy.wait(12000);

    //email page
    cy.get('#email')
      .type('zxcvvbnm123@gmail.com'); //при помощи метода .type вводим необходимые нам стринговые данные

    cy.wait(1000);
    cy.get('.button').click();

    //sale page
    cy.wait(3000);
    cy.get(':nth-child(1) > .offer-plan').click(); //выбираем офер подписки на неделю

    cy.wait(1000);  
    cy.get('.price__offer-plans > .button').click();

    //checkout
    cy.wait(1000);

    cy.get('#paypal-button')

    const payPalFrame = document.getElementById("paypal-button").getElementsByTagName("iframe")[0].contentWindow;
    payPalFrame.openedWindows = [];
    payPalFrame._open = payPalFrame.open; // saving original function
    payPalFrame.open = function(url,name,params){
    console.log(url);
    payPalFrame.openedWindows.push(payPalFrame._open(url,name,params));
    // you can store names also...
}
    

  })
})