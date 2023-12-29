const buttons = document.querySelectorAll('.item')
buttons.forEach(button => {
    const answerButton = button.querySelector('.one')
    const answer = button.querySelector('.answer')
    answerButton.addEventListener('click', () => {
        answer.classList.toggle('show')
        const answerLook = answer.classList.contains('show')
        answerButton.innerHTML = answerLook? 'скрыть ответ':'показать ответ'
        answerButton.style.backgroundColor=answerLook?'green':'white'
    })
})