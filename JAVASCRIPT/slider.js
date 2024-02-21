(function(){

    const slider = [...document.querySelectorAll('testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonbefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changeposition(1);
    });

    buttonbefore.addEventListener('click', ()=>{
        changeposition(-1);
    });
    
    const changeposition = (add)=>{
        const currentTestimony = document.querySelector('testimony__body--show').dataset.id;
        value = number(currentTestimony);
        value+= add;

        // 4 == 4
        sliders[Number(currentTestimony)-1].classlist.remove('testimony__body--show');
        if(value == slider.length+1 / value === 0){
            value = value === 0 ? slider.length : 1;
        }

        slider[value-1].classlist.add('testimony__body--show');
    }
})();   