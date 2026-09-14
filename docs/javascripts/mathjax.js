window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// `document$` solo existe en el tema Material. En el tema por defecto de
// mkdocs MathJax tipografía automáticamente en DOMContentLoaded.
if (typeof document$ !== 'undefined' && document$ && document$.subscribe) {
  document$.subscribe(() => {
    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
  })
}

function checkAnswer(button) {
  const container = button.parentElement;
  const correctOption = container.getAttribute('data-correct');
  const selected = container.querySelector('input[type="radio"]:checked');
  const resultP = container.querySelector('.quiz-result');

  if (!selected) {
    resultP.style.color = "orange";
    resultP.textContent = "⚠️ Por favor, selecciona una opción.";
    return;
  }

  if (selected.value === correctOption) {
    resultP.style.color = "green";
    resultP.textContent = "✅ ¡Correcto! Acertaste.";
  } else {
    resultP.style.color = "red";
    resultP.textContent = "❌ Incorrecto. Vuelve a intentarlo.";
  }
}