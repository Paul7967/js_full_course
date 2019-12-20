'use strict';

const money = +prompt('Ваш бюджет на месяц?');
const time = prompt('Введите дату в формате YYYY-MM-DD');

const appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionanExpenses: {},
	income: [],
	savings: false,
	moneyPerDay: 0
};

for (let i = 0; i < 2; i++) {
    let itemName = prompt('Введите обязательную статью расходов в этом месяце', ""),
		itemVal = prompt('Во сколько обойдется?', "");

    if ( typeof(itemName)==='string' && typeof(itemName) != null && typeof(itemVal) != null && itemName != "" && itemVal != "" && itemName.length < 50) {

        console.log ("done");

        appData.expenses[itemName] = itemVal;
    } else {                            
        console.log ("bad result");
        i--;
    }

};



appData.moneyPerDay = appData.budget / 30;

alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

if (appData.moneyPerDay <= 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}