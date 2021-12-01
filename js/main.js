var list = document.querySelector('#list')

var toDoArr =[]


button.addEventListener('click', function (event){
   
   if(dataItem.value.length > 3  && dataItem.value !== null){
      
      var LI = document.createElement("li")
      LI.setAttribute("class", "list__item")
      
      
      
      var input = document.createElement("input")
      input.setAttribute("type", "checkbox")
      input.classList.add("input__checkbox")
      
      var enter = document.createElement("div")
      enter.textContent = dataItem.value
      enter.setAttribute("class", "checkboxContent")
      
      var editBtn = document.createElement("button")
      editBtn.textContent = "edit"
      editBtn.setAttribute("class", "button__edit")
      
      var deleteBtn = document.createElement("button")
      deleteBtn.textContent = "remove"
      deleteBtn.setAttribute("class", "button__remove")
      
      
      LI.appendChild(input)
      LI.appendChild(enter)
      LI.appendChild(editBtn)
      LI.appendChild(deleteBtn)
      
      list.prepend(LI)
      
      dataItem.value = ""   
      
      
      deleteBtn.addEventListener('click', e => {
         var deleteBtn = document.createElement("button")
         deleteBtn.textContent = "remove"
         deleteBtn.setAttribute("class", "button__remove")
         
         LI.remove()
         
      });
      
      
      input.addEventListener("click", e=> {
         
         if (input.checked) {
            enter.style.textDecoration = "line-through"
            
         } else {
            enter.style.textDecoration = "none"
         }
            
            
            console.log(enter);
         })
         
         
         
         
         
         
         
      }else{
         alert('Please enter more than 3 letters  and do not leave the survey blank !')
         return
      }
   })