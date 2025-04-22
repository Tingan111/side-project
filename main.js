const input=document.querySelector(".message-input")
const btn=document.querySelector(".submit-btn")
const list=document.querySelector(".message-list")
const li=document.createElement('li');
const debtn=document.createElement('button');
const span=document.createElement('span');
const editbtn=document.createElement("button");
if(btn){
        btn.addEventListener('click',()=>{
        const text= input.value.trim();
        if(!text) return;
        li.classList.add('message-item');
        li.appendChild(span);
        li.appendChild(editbtn);        
        li.appendChild(debtn);
        list.appendChild(li); 

        input.value='';

        
        span.textContent=text;
        debtn.textContent="X";
        editbtn.textContent="Edit";        
        debtn.addEventListener('click',()=>{
          li.remove();
          debtn.remove();
        })
        editbtn.addEventListener("click",()=>{
          const inputEdit=document.createElement("input");
          inputEdit.type="text";
          inputEdit.value=span.textContent;
          inputEdit.classList.add("edit-input");
          const saveBtn=document.createElement("button");
          saveBtn.textContent="Save";

          li.replaceChild(inputEdit,span);
          li.replaceChild(saveBtn,editbtn);
          inputEdit.focus();

          inputEdit.addEventListener("keydown",(e)=>{
            if(e.key==="Enter"){
             save();
            }
          });

        const save = () => {
          const newText=inputEdit.value.trim();
          if(newText){
            span.textContent=newText;
          }
          li.replaceChild(span,inputEdit);
          li.replaceChild(editbtn,saveBtn)
        };

        saveBtn.addEventListener("click",save);

        })
})}