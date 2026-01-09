
function startRotation(elementId, intervalMs = 200) {
    const el = document.getElementById(elementId);
    if (!el) {
      throw new Error(`Element with id="${elementId}" not found`);
    }
  
    let text = el.textContent || "";
  
    setInterval(() => {
      if (text.length > 1) {
        text = text[text.length - 1] + text.slice(0, -1);
        el.textContent = text;
      }
    }, intervalMs);
  }
  

  window.startRotation = startRotation;