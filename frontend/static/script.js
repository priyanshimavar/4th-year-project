
    // Dark/Light Mode Toggle
    function toggleTheme() {
      document.body.classList.toggle('dark');
    }

    // Webcam Access
    const webcam = document.getElementById('webcam');
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        webcam.srcObject = stream;
      })
      .catch(err => {
        console.error("Error accessing webcam: ", err);
      });

    // Placeholder: Simulated sign recognition output
    let detectedText = "Hello, welcome!";
    document.getElementById('outputText').innerText = detectedText;

    // Text-to-Speech
    function speakText() {
      const text = document.getElementById('outputText').innerText;
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  
