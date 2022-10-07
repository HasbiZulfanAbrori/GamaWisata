const parentContainer =  document.querySelector('.produk');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('btn btn-primary');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more');

    currentText.classList.toggle('read-more--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})