/*
window.onload = ()=>{
    const scrollFunc = ()=>{
        const blocks = document.getElementsByClassName('elem');
        Array.from(blocks).forEach((block, i)=>{
            const pos = block.getBoundingClientRect().top - window.innerHeight;
            const animClass = 'anim';
            console.log(i, pos);
            if(pos < 0 && !block.className.includes(animClass)) {
                const animType = Math.ceil(Math.random()*4);
                block.setAttribute('class', [...block.classList, 'anim anim'+animType].join(' '));
            }
        })
    }

    window.onscroll = scrollFunc;
    scrollFunc();
}
*/
