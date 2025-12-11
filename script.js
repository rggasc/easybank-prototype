// Login Handling
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        // Simulate login
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = 'index.html';
    }
}

// Chat Widget
function toggleChat() {
    const chatBody = document.getElementById('chatBody');
    if (chatBody.style.display === 'none') {
        chatBody.style.display = 'block';
    } else {
        chatBody.style.display = 'none';
    }
}

// Account Details - Switch Account
function switchAccount(accountType) {
    const accounts = {
        checking: {
            name: 'Checking Account',
            number: '****4521',
            balance: '$5,234.89'
        },
        savings: {
            name: 'Savings Account',
            number: '****7832',
            balance: '$12,450.00'
        },
        business: {
            name: 'Business Account',
            number: '****9104',
            balance: '$8,920.50'
        }
    };
    
    const account = accounts[accountType];
    if (account) {
        document.getElementById('accountName').textContent = account.name;
        document.getElementById('accountNumber').textContent = 'Account Number: ' + account.number;
        document.getElementById('currentBalance').textContent = account.balance;
        document.getElementById('availableBalance').textContent = account.balance;
    }
}

// Download Statement
function downloadStatement() {
    alert('Statement download initiated. Your PDF statement will be downloaded shortly.');
}

// Search Transactions
function searchTransactions() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('transactionTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const text = row.textContent.toLowerCase();
        
        if (text.includes(searchInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

// Filter Transactions
function filterTransactions() {
    const filterValue = document.getElementById('filterSelect').value;
    const table = document.getElementById('transactionTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const amountCell = row.getElementsByClassName('amount')[0];
        
        if (filterValue === 'all') {
            row.style.display = '';
        } else if (filterValue === 'deposits' && amountCell.classList.contains('positive')) {
            row.style.display = '';
        } else if (filterValue === 'withdrawals' && amountCell.classList.contains('negative')) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

// Fund Transfer Functions
function updateAvailableBalance() {
    const fromAccount = document.getElementById('fromAccount').value;
    const balanceText = document.getElementById('availableBalanceText');
    
    const balances = {
        checking: '$5,234.89',
        savings: '$12,450.00',
        business: '$8,920.50'
    };
    
    if (fromAccount && balances[fromAccount]) {
        balanceText.textContent = 'Available: ' + balances[fromAccount];
        balanceText.style.display = 'block';
    } else {
        balanceText.style.display = 'none';
    }
}

function toggleRecipientFields() {
    const transferType = document.getElementById('transferType').value;
    const recipientFields = document.getElementById('recipientFields');
    const toAccount = document.getElementById('toAccount');
    const recipientUserField = document.getElementById('recipientUserField');
    
    if (transferType === 'own') {
        recipientFields.style.display = 'grid';
        recipientUserField.style.display = 'none';
        toAccount.innerHTML = `
            <option value="">Select account</option>
            <option value="checking">Checking Account - ****4521</option>
            <option value="savings">Savings Account - ****7832</option>
            <option value="business">Business Account - ****9104</option>
        `;
        toAccount.required = true;
    } else if (transferType === 'internal') {
        recipientFields.style.display = 'grid';
        recipientUserField.style.display = 'block';
        toAccount.style.display = 'none';
        toAccount.required = false;
        document.getElementById('recipientUser').required = true;
    } else {
        recipientFields.style.display = 'none';
    }
}

function validateAmount() {
    const fromAccount = document.getElementById('fromAccount').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const errorMessage = document.getElementById('amountError');
    
    const balances = {
        checking: 5234.89,
        savings: 12450.00,
        business: 8920.50
    };
    
    if (fromAccount && amount > balances[fromAccount]) {
        errorMessage.textContent = 'Insufficient funds';
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
        return true;
    }
}

function resetForm() {
    document.getElementById('transferForm').reset();
    document.getElementById('availableBalanceText').style.display = 'none';
    document.getElementById('recipientFields').style.display = 'none';
    document.getElementById('amountError').style.display = 'none';
}

function handleTransfer(event) {
    event.preventDefault();
    
    if (!validateAmount()) {
        return;
    }
    
    const fromAccount = document.getElementById('fromAccount').options[document.getElementById('fromAccount').selectedIndex].text;
    const transferType = document.getElementById('transferType').value;
    let toAccount;
    
    if (transferType === 'own') {
        toAccount = document.getElementById('toAccount').options[document.getElementById('toAccount').selectedIndex].text;
    } else {
        toAccount = document.getElementById('recipientUser').value;
    }
    
    const amount =
