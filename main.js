const input=document.querySelector(".message-input")
const btn=document.querySelector(".submit-btn")
const list=document.querySelector(".message-list")

let messages=JSON.parse(localStorage.getItem("message")) || [];

const saveToLocal = () => {
  localStorage.setItem("message",JSON.stringify(messages))
};

const renderMessages = () => {
  list.innerHTML = "";

  messages.forEach((msg) =>{ 
    const li = document.createElement("li");
    li.classList.add("message-item");

    const span = document.createElement("span");
    span.textContent=msg.text;
  
    const debtn = document.createElement("button");
    debtn.textContent="刪除";
  
  
    const editbtn= document.createElement("button");
    editbtn.textContent= "編輯";
  
    li.appendChild(span);
    li.appendChild(editbtn);
    li.appendChild(debtn);
    list.appendChild(li);
    debtn.addEventListener("click", () => {
    messages = messages.filter((m) => m.id !== msg.id);
    saveToLocal();
    renderMessages();
    })

  editbtn.addEventListener("click", () => {
    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = span.textContent;
    inputEdit.classList.add("edit-input");
  

    const saveBtn = document.createElement("button");
    saveBtn.textContent="儲存";
      
      li.replaceChild(inputEdit, span);
      li.replaceChild(saveBtn, editbtn);
      inputEdit.focus();
    
    const save = () => {
      const newText = inputEdit.value.trim();
      if (newText) {
        msg.text = newText;
        saveToLocal();
        renderMessages();
      }
    };
    
    inputEdit.addEventListener("keydown", (e) => {
      if (e.key==="Enter") {
        save();
      }
    });
    saveBtn.addEventListener("click", save)
  
});
});
};

btn.addEventListener("click", () => {
  
  const text = input.value.trim();
  if (!text) return;

  const newMessage = {
    id: Date.now(),
    text,
  };
  messages.push(newMessage);
  saveToLocal();
  renderMessages();

  input.value= "";
});
  
renderMessages();
