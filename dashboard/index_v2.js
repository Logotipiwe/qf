window.onload = ()=>{
    const sideButtons = Array.from(document.getElementsByClassName('side_button'));
    const selectedClassName = 'selected';
    sideButtons.forEach(elem=>{
        elem.addEventListener('click', e=>{
            const target = e.currentTarget;
            const pageNum = target.dataset.page;
            //убрали со всех кнопок выделение
            sideButtons.forEach(el=>el.className = el.className.replace(selectedClassName, '').trim());
            //скрыли все страницы
            Array.from(document.getElementsByClassName('main_content')).forEach(el=>{
                el.style.display = 'none';
            })
            //поставили выделение нужной кнопке
            target.className += ' ' + selectedClassName;
            //показали нужную страницу
            document.getElementById('main_content_'+pageNum).style.display = 'flex'
        })
    })

    // document.getElementsByClassName('side_button')[2].click();
}