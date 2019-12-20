'use strict';

// const money = +prompt('Ваш бюджет на месяц?');
// const time = +prompt('Введите дату в формате YYYY-MM-DD');
const money = 5,
	time = '2019-12-20';
	
const itemName = prompt('Введите обязательную статью расходов в этом месяце');
const itemVal = prompt('Во сколько обойдется?');

const appData = {
	money,
	time,
	expenses: {},
	income: []
};

appData.expenses[itemName] = itemVal;

const oneDayBudget = money/30;

alert('Бюджет на один день: ' + oneDayBudget);

