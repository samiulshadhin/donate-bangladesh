// Clicking the "History" button will hide the donation data and display the history
document.getElementById('history-button')
    .addEventListener('click', function () {
        buttonFillColor('history-button');
        buttonStrokeColor('donation-button');
        addHiddenClass('donation-page');
        addHiddenClass('footer');
        removeHiddenClass('history-page');
    })


// Clicking the "Donation" button will hide the history and display the donation data
document.getElementById('donation-button')
    .addEventListener('click', function () {
        buttonFillColor('donation-button');
        buttonStrokeColor('history-button');
        addHiddenClass('history-page');
        removeHiddenClass('donation-page');
    })


// Set addEventListener on Card-01 Donate Now button
document.getElementById('donate-now-button')
    .addEventListener('click', function () {
        const inputNumberValue = parseFloat(document.getElementById('card-input-field').value);


        const accountBalance = document.getElementById('account-balance');
        const accountBalanceNumber = parseFloat(accountBalance.innerText);

        if(inputNumberValue > accountBalanceNumber || isNaN(inputNumberValue) || inputNumberValue <= 0 || inputNumberValue === ''){
            alert('Invalid Donation Amount');
            return;
        }

        accountBalance.innerText = accountBalanceNumber - inputNumberValue;

        const cardBalance = document.getElementById('card-balance');
        const cardBalanceNumber = parseFloat(cardBalance.innerText);

        cardBalance.innerText = cardBalanceNumber + inputNumberValue;

        const historyPage = document.getElementById('history-page');
        const cardTitle = document.getElementById('card-title').innerText;
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'border-[1.5px] border-card-border-color rounded-2xl p-8';
        notificationDiv.innerHTML = `
            <h1 class="font-bold text-base lg:text-xl mb-2">${inputNumberValue} Taka is Donated for ${cardTitle}</h1>
                <p class="text-sm lg:text-base">Date : ${new Date().toString()}</p>
        `
        historyPage.insertBefore(notificationDiv, historyPage.firstChild);
        addHiddenClass('empty-history');

        my_modal_5.showModal();
        const audio = new Audio('./assets/audio.mp3');
        audio.play();

        document.getElementById('card-input-field').value = '';
    })




// Set addEventListener on Card-02 Donate Now button
document.getElementById('donate-now-button2')
    .addEventListener('click', function () {
        const inputNumberValue = parseFloat(document.getElementById('card-input-field2').value);


        const accountBalance = document.getElementById('account-balance');
        const accountBalanceNumber = parseFloat(accountBalance.innerText);

        if(inputNumberValue > accountBalanceNumber || isNaN(inputNumberValue) || inputNumberValue <= 0 || inputNumberValue === ''){
            alert('Invalid Donation Amount');
            return;
        }

        accountBalance.innerText = accountBalanceNumber - inputNumberValue;

        const cardBalance = document.getElementById('card-balance2');
        const cardBalanceNumber = parseFloat(cardBalance.innerText);

        cardBalance.innerText = cardBalanceNumber + inputNumberValue;

        const historyPage = document.getElementById('history-page');
        const cardTitle = document.getElementById('card-title2').innerText;
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'border-[1.5px] border-card-border-color rounded-2xl p-8';
        notificationDiv.innerHTML = `
            <h1 class="font-bold text-base lg:text-xl mb-2">${inputNumberValue} Taka is Donated for ${cardTitle}</h1>
                <p class="text-sm lg:text-base">Date : ${new Date().toString()}</p>
        `
        historyPage.insertBefore(notificationDiv, historyPage.firstChild);
        addHiddenClass('empty-history');

        my_modal_5.showModal();
        const audio = new Audio('./assets/audio.mp3');
        audio.play();

        document.getElementById('card-input-field2').value = '';
    })



// Set addEventListener on Card-03 Donate Now button
document.getElementById('donate-now-button3')
    .addEventListener('click', function () {
        const inputNumberValue = parseFloat(document.getElementById('card-input-field3').value);


        const accountBalance = document.getElementById('account-balance');
        const accountBalanceNumber = parseFloat(accountBalance.innerText);

        if(inputNumberValue > accountBalanceNumber || isNaN(inputNumberValue) || inputNumberValue <= 0 || inputNumberValue === ''){
            alert('Invalid Donation Amount');
            return;
        }

        accountBalance.innerText = accountBalanceNumber - inputNumberValue;

        const cardBalance = document.getElementById('card-balance3');
        const cardBalanceNumber = parseFloat(cardBalance.innerText);

        cardBalance.innerText = cardBalanceNumber + inputNumberValue;

        const historyPage = document.getElementById('history-page');
        const cardTitle = document.getElementById('card-title3').innerText;
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'border-[1.5px] border-card-border-color rounded-2xl p-8';
        notificationDiv.innerHTML = `
            <h1 class="font-bold text-base lg:text-xl mb-2">${inputNumberValue} Taka is Donated for ${cardTitle}</h1>
                <p class="text-sm lg:text-base">Date : ${new Date().toString()}</p>
        `
        historyPage.insertBefore(notificationDiv, historyPage.firstChild);
        addHiddenClass('empty-history');

        my_modal_5.showModal();
        const audio = new Audio('./assets/audio.mp3');
        audio.play();

        document.getElementById('card-input-field3').value = '';
    })