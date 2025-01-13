function selectOption(element, isCorrect) {
    const answerSection = document.getElementById("answerSection");
    const answerText = document.getElementById("answerText");
  
    // Show the answer section
    answerSection.classList.remove("hidden");
  
    // Update the answer text based on correctness
    if (isCorrect) {
      answerText.textContent = "Correct! সবুজ গ্রহ বলা হয় ইউরেনাসকে। শুক্র গ্রহ (ইংরেজি: Venus) হল সূর্য থেকে দূরত্বের দিক দিয়ে সৌরজগতের দ্বিতীয় গ্রহ। এই পার্থিব গ্রহটিকে অনেক সময় পৃথিবীর বোন গ্রহ বলে আখ্যায়িত করা হয় পৃথিবী হলো একমাত্র গ্রহ যেখানে মানুষ বাস করে। আর মঙ্গল গ্রহকে বলা হয় লাল গ্রহ বা গোলাপি গ্রহ।";
      answerText.className = "correct";
    } else {
      answerText.textContent = "Incorrect. Try again!";
      answerText.className = "incorrect";
    }
  }
  