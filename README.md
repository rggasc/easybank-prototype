amount' in document.getElementById && document.getElementById('amount').value;
const date = document.getElementById('transferDate').value;
const memo = document.getElementById('memo').value || 'No memo';
document.getElementById('confirmFrom').textContent = fromAccount;
document.getElementById('confirmTo').textContent = toAccount;
document.getElementById('confirmAmount').textContent = '$' + parseFloat(amount).toFixed(2);
document.getElementById('confirmDate').textContent = new Date(date).toLocaleDateString();
document.getElementById('confirmMemo').textContent = memo;

document.getElementById('confirmModal').classList.add('show');
}
function closeModal() {
document.getElementById('confirmModal').classList.remove('show');
}
function confirmTransfer() {
closeModal();
document.getElementById('successModal').classList.add('show');
document.getElementById('transferForm').reset();
resetForm();
}
function closeSuccessModal() {
document.getElementById('successModal').classList.remove('show');
}
// Bill Payment Functions
function selectPayee(payeeType) {
const payeeSelect = document.getElementById('payeeSelect');
payeeSelect.value = payeeType;
}
function toggleRecurring() {
const paymentType = document.getElementById('paymentType').value;
const recurringOptions = document.getElementById('recurringOptions');
if (paymentType === 'recurring') {
    recurringOptions.style.display = 'block';
    document.getElementById('frequency').required = true;
} else {
    recurringOptions.style.display = 'none';
    document.getElementById('frequency').required = false;
}
}
function resetPaymentForm() {
document.getElementById('paymentForm').reset();
document.getElementById('recurringOptions').style.display = 'none';
}
function handlePayment(event) {
event.preventDefault();
const payAccount = document.getElementById('payFromAccount').options[document.getElementById('payFromAccount').selectedIndex].text;
const payee = document.getElementById('payeeSelect').options[document.getElementById('payeeSelect').selectedIndex].text;
const amount = document.getElementById('paymentAmount').value;
const date = document.getElementById('paymentDate').value;
const paymentType = document.getElementById('paymentType').options[document.getElementById('paymentType').selectedIndex].text;

document.getElementById('confirmPayAccount').textContent = payAccount;
document.getElementById('confirmPayee').textContent = payee;
document.getElementById('confirmPayAmount').textContent = '$' + parseFloat(amount).toFixed(2);
document.getElementById('confirmPayDate').textContent = new Date(date).toLocaleDateString();
document.getElementById('confirmPayType').textContent = paymentType;

document.getElementById('paymentConfirmModal').classList.add('show');
}
function closePaymentConfirmModal() {
document.getElementById('paymentConfirmModal').classList.remove('show');
}
function confirmPayment() {
alert('Payment scheduled successfully!');
closePaymentConfirmModal();
resetPaymentForm();
}
function openAddPayeeModal() {
document.getElementById('addPayeeModal').classList.add('show');
}
function closeAddPayeeModal() {
document.getElementById('addPayeeModal').classList.remove('show');
}
function addPayee() {
const payeeName = document.getElementById('payeeName').value;
if (payeeName) {
alert('Payee "' + payeeName + '" added successfully!');
closeAddPayeeModal();
document.getElementById('addPayeeForm').reset();
}
}
// Customer Support Functions
function startChat() {
document.getElementById('chatInterface').style.display = 'block';
document.querySelector('.support-options').style.display = 'none';
}
function closeChat() {
document.getElementById('chatInterface').style.display = 'none';
document.querySelector('.support-options').style.display = 'grid';
}
function showEmailForm() {
document.getElementById('emailForm').style.display = 'block';
document.querySelector('.support-options').style.display = 'none';
}
function closeEmailForm() {
document.getElementById('emailForm').style.display = 'none';
document.querySelector('.support-options').style.display = 'grid';
}
function sendChatMessage() {
const input = document.getElementById('chatInput');
const message = input.value.trim();
if (message) {
    addChatMessage(message, true);
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const responses = [
            "I understand your concern. Let me help you with that.",
            "Thank you for providing that information. I'm looking into this for you.",
            "I can assist you with that. Please give me a moment.",
            "I've found some information that might help. Would you like me to explain?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addChatMessage(randomResponse, false);
    }, 1000);
}
}
function sendQuickReply(topic) {
addChatMessage(topic, true);
setTimeout(() => {
    let response;
    switch(topic) {
        case 'Account Balance':
            response = 'Your checking account balance is $5,234.89. Would you like to see other accounts?';
            break;
        case 'Transaction Issue':
            response = 'I can help you with transaction issues. Please provide the transaction details or date.';
            break;
        case 'Reset Password':
            response = 'I can help you reset your password. For security, I\'ll need to verify your identity first.';
            break;
        default:
            response = 'How can I assist you today? Please describe your issue.';
    }
    addChatMessage(response, false);
}, 1000);
}
function addChatMessage(text, isUser) {
const chatMessages = document.getElementById('chatMessages');
const messageDiv = document.createElement('div');
messageDiv.className = isUser ? 'message user-message' : 'message bot-message';
const avatar = document.createElement('div');
avatar.className = 'message-avatar';
avatar.textContent = isUser ? '👤' : '🤖';

const content = document.createElement('div');
content.className = 'message-content';

const text_p = document.createElement('p');
text_p.textContent = text;

const time = document.createElement('span');
time.className = 'message-time';
time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

content.appendChild(text_p);
content.appendChild(time);
messageDiv.appendChild(avatar);
messageDiv.appendChild(content);

chatMessages.appendChild(messageDiv);
chatMessages.scrollTop = chatMessages.scrollHeight;
}
function handleChatKeypress(event) {
if (event.key === 'Enter') {
sendChatMessage();
}
}
function handleEmailSubmit(event) {
event.preventDefault();
alert('Your support request has been submitted successfully! We'll respond within 24 hours.');
closeEmailForm();
event.target.reset();
}
// FAQ Toggle
function toggleFAQ(element) {
const faqItem = element.parentElement;
faqItem.classList.toggle('active');
}
// Set minimum date for transfer and payment forms
window.addEventListener('DOMContentLoaded', function() {
const today = new Date().toISOString().split('T')[0];
const transferDate = document.getElementById('transferDate');
if (transferDate) {
    transferDate.setAttribute('min', today);
    transferDate.value = today;
}

const paymentDate = document.getElementById('paymentDate');
if (paymentDate) {
    paymentDate.setAttribute('min', today);
    paymentDate.value = today;
}
});
// Close modals when clicking outside
window.onclick = function(event) {
const modals = document.getElementsByClassName('modal');
for (let modal of modals) {
if (event.target === modal) {
modal.classList.remove('show');
}
}
}

---
