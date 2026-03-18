
const parent = document.getElementById('parent');
const tag = document.getElementById('lst-tag');
parent.addEventListener('click',(e)=>{
      const target = e.target;
      document.body.style.backgroundColor = target.id;
      tag.innerText = `Background colour is changed to ${target.id}`
})