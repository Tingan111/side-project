const input=document.querySelector(".message-input")
const btn=document.querySelector(".submit-btn")
const list=document.querySelector(".message-list")
if(btn)btn.addEventListener('click',(()=>{
        const text= input.value.trim();
        if(!text) return;
        const li=document.createElement('li');
        const debtn=document.createElement('button');
        const span=document.createElement('span')
        debtn.textContent="X";
        if(debtn)debtn.addEventListener('click',(()=>{
                li.remove();
                debtn.remove();
        }))
        li.classList.add('message-item');
        li.textContent=text;
        li.appendChild(span)
        li.appendChild(debtn)
        list.appendChild(li); 
        input.value='';
}))
