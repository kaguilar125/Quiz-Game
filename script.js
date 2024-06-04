function imgclick() {
  alert("How to play? Click on an option which you believe responds to the question correctly.");
}

document.querySelectorAll('.option').forEach(item => {
  item.addEventListener('click', event => {
      const isCorrect = item.classList.contains('correct');
      if (isCorrect) {
          item.style.borderColor = '#00FF00'; 
      } else {
          item.style.borderColor = '#FF0000';

          document.querySelector('.correct').style.borderColor = '#00FF00';
      }


      const progressIndicator = document.getElementById('progress-indicator');
      const totalQuestions = document.querySelectorAll('.correct').length;
      const answeredQuestions = document.querySelectorAll('.correct[style*="border-color: rgb(0, 255, 0)"]').length;
      progressIndicator.textContent = `Progress: ${answeredQuestions}/${totalQuestions}`;
  });
});