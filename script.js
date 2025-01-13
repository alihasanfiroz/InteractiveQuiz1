function selectOption(element, isCorrect) {
    const answerSection = document.getElementById("answerSection");
    const answerText = document.getElementById("answerText");
  
    // Show the answer section
    answerSection.classList.remove("hidden");
  
    // Update the answer text based on correctness
    if (isCorrect) {
      answerText.textContent = "Correct! Paris is the capital of France.";
      answerText.className = "correct";
    } else {
      answerText.textContent = "Incorrect. Try again!";
      answerText.className = "incorrect";
    }
  }
  