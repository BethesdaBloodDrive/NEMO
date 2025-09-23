document.addEventListener('DOMContentLoaded', () => {
    // Toggle visibility for each scenario's content
    const scenarioHeaders = document.querySelectorAll('.scenario-header');
    scenarioHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Handle quiz interactions
    const quizButtons = document.querySelectorAll('.quiz button');
    quizButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedButton = e.target;
            const isCorrect = selectedButton.dataset.answer === 'correct';

            // Check if feedback already exists
            let feedback = selectedButton.parentElement.querySelector('.quiz-feedback');
            if (!feedback) {
                // Create feedback element if it doesn't exist
                feedback = document.createElement('p');
                feedback.classList.add('quiz-feedback');
                selectedButton.parentElement.appendChild(feedback);
            }

            // Update feedback text and style
            feedback.style.display = 'block';
            if (isCorrect) {
                feedback.textContent = 'Correct! Great job!';
                feedback.style.color = '#38b000'; // Green color for correct answers
                // Disable all buttons in the quiz after correct answer
                const allButtons = selectedButton.parentElement.querySelectorAll('button');
                allButtons.forEach(btn => {
                    btn.disabled = true;
                    btn.style.opacity = '0.6'; // Optional: visually indicate disabled state
                    btn.style.cursor = 'not-allowed';
                });
            } else {
                feedback.textContent = 'Incorrect. Try again!';
                feedback.style.color = '#d00000'; // Red color for incorrect answers
            }
        });
    });
});
