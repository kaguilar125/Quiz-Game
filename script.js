let correctCount = 0;
let incorrectCount = 0;

document.querySelectorAll('.option').forEach(item => {
  item.addEventListener('click', event => {
      const isCorrect = item.classList.contains('correct');
      if (isCorrect) {
        item.style.borderColor = '#00FF00';
        correctCount++; 
        if (item.id === 'option3') {
          window.location.href = 'next_page.html'; 
        }
        if (item.id === 'option4') {
          window.location.href = 'third_page.html'; 
        }
        if (item.id === 'option5') {
          window.location.href = 'fourth_page.html';
        }
        if (item.id === 'option6') {
          window.location.href = 'fifth_page.html'; 
        }
        if (item.id === 'option7') {
          window.location.href = 'sixth_page.html'; 
        }
        console.log(item.id);
      } else {
        item.style.borderColor = '#FF0000';
        document.querySelector('.correct').style.borderColor = '#00FF00';
        incorrectCount++; 
    }

    const progressIndicator = document.getElementById('progress-indicator');
    progressIndicator.textContent = `Progress: Correct - ${correctCount}, Incorrect - ${incorrectCount}`;
  });
});



