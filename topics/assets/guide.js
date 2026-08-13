document.querySelectorAll('pre').forEach(pre=>{
  const button=document.createElement('button');
  button.className='copy';
  button.type='button';
  button.textContent='COPY';
  button.setAttribute('aria-label','Copy command block');
  button.addEventListener('click',async()=>{
    const code=pre.querySelector('code');
    if(!code)return;
    try{
      await navigator.clipboard.writeText(code.innerText);
      button.textContent='COPIED';
      button.classList.add('copied');
      setTimeout(()=>{button.textContent='COPY';button.classList.remove('copied');},1500);
    }catch(_){
      button.textContent='SELECT';
      const selection=window.getSelection();
      const range=document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
  pre.appendChild(button);
});
