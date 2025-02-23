function startProcessing() {
    const userInput = document.getElementById('userInput').value.trim();
    const displayElement = document.getElementById('displayText');
    const progressContainer = document.querySelector('.progress-container');
    const progressBar = document.querySelector('.progress-bar');
    const button = document.querySelector('button');

    if (userInput === '') return;

    // Disable button and show processing
    button.classList.add('processing');
    button.textContent = 'Processing...';
    progressContainer.style.display = 'block';
    
    // Reset and start progress bar
    progressBar.style.width = '0%';
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 50);

    // Wait 5 seconds before showing text
    setTimeout(() => {
        displayElement.textContent = "! فقط انظر من النافذة";
        document.getElementById('userInput').value = '';
        progressContainer.style.display = 'none';
        button.classList.remove('processing');
        button.textContent = 'تخمين الطقس';
        progressBar.style.width = '0%';
    }, 5000);
}

// Enter key handler
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        startProcessing();
    }
});
