const input=document.querySelector(".message-input")
const btn=document.querySelector(".submit-btn")
const list=document.querySelector(".message-list")
if(btn)btn.addEventListener('click',(()=>{
        const text= input.value.trim();
        if(!text) return;
        const li=document.createElement('li');
        li.classList.add('message-item');
        li.textContent=text;
        list.appendChild(li); 
        hi.value='';
}))
