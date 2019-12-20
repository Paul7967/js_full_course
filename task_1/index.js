'use strict';

let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц?');
	time = prompt('Введите дату в формате YYYY-MM-DD');

	while (isNaN(money) || money == "" || money == null ) {
		money = +prompt('Ваш бюджет на месяц?');
	}
}
// start();
money = 61000;
time = '2019-12-25';

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	moneyPerDay: 0
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		// let itemName = prompt('Введите обязательную статью расходов в этом месяце', "Статья " + (i+1)),
		// 	itemVal = prompt('Во сколько обойдется?', Math.floor(Math.random()*100));
		let itemName = "Статья обязательных расходов" + (i+1),
			itemVal = Math.floor(Math.random()*100);

		if ( typeof(itemName)==='string' && typeof(itemName) != null && typeof(itemVal) != null && itemName != "" && itemVal != "" && itemName.length < 50) {

			console.log ("done");

			appData.expenses[itemName] = itemVal;
		} else {                            
			console.log ("bad result");
			i--;
		}

	};
}

chooseExpenses();


function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(2);

	// alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
};

detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay <= 100) {
		console.log ("Это минимальный уровень достатка!");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log ("Это средний уровень достатка!");
	} else if (appData.moneyPerDay > 2000) {
		console.log ("Это высокий уровень достатка!");
	} else {
		console.log ("Произошла ошибка");
	}
};

detectLevel();

function checkSavings() {
	if (appData.savings) {
		let save = +prompt('Какова сумма накоплений?', '47000'),
			percent = +prompt('Под какой процент', '12');

		appData.monthIncome = save/100/12*percent;
		// alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
	}
}

checkSavings();

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		// let itemName = prompt('Введите обязательную статью необязательных расходов в этом месяце', "Статья " + (i+1)),
		// 	itemVal = prompt('Во сколько обойдется?', Math.floor(Math.random()*100));
		let itemName = "Статья необязательных расходов " + (i+1),
			itemVal = Math.floor(Math.random()*100);

		if ( typeof(itemName)==='string' && typeof(itemName) != null && typeof(itemVal) != null && itemName != "" && itemVal != "" && itemName.length < 50) {

			console.log ("done");

			appData.optionalExpenses[itemName] = itemVal;
		} else {                            
			console.log ("bad result");
			i--;
		}

	};
}

chooseOptExpenses();

console.log(appData);