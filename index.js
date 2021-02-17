window.onload = ()=>{
    const scrollFunc = ()=>{
        const screens = document.getElementsByClassName('screen');
        Array.from(screens).forEach((screen, i)=>{
            //доля экрана снизу, ниже которой находится верх блока (сверху страницы - 1, снизу страницы - 0, ниже страницы - минусовые)
            const screenTopPosInWindow = (window.innerHeight - screen.getBoundingClientRect().top)/window.innerHeight;
            const animClass = 'anim_screen';
            console.log(i, screenTopPosInWindow.toFixed(2));
            const animateWindowPos = 0.3; //до какой части экрана должен дойти верх блока чтобы его анимировало
            if(screenTopPosInWindow > animateWindowPos && !screen.className.includes(animClass)) {
                const animType = Math.ceil(Math.random()*4);
                screen.setAttribute('class', [...screen.classList, 'anim'].join(' '));
            }
        })
    }

    window.onscroll = scrollFunc;
    scrollFunc();
}
