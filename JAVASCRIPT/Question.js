(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(questions =>{
        questions.addEventListener('click', ()=>{
            //alert('ouch me diste click')
            let height = 0;
            let answer = questions.nextElementSibling;
            let addpadding = questions.parentElement.parentElement;


            addpadding.classList.toggle('questions__padding--add');

            questions.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer. scrollHeight;
            }

            answer.style.height = `${ height}px`;

        })
    });

})();