{
  let members = ['a','b','i','j','k'];
  let middle_index = Math.ceil(members.length/2);
  members.forEach((member, index) => {
    if (index < middle_index){
      document.write('<div class="draggable box" style="left:40px; top:' + String((index) * 100) + 'px;">'+member+'</div>');
      document.write('<div class="snaptarget box" style="left:40px; top:' + String((index) * 100) + 'px;"></div>');
    }else{
      document.write('<div class="draggable box" style="left:380px; top:' + String((index-middle_index) * 100) + 'px;">'+member+'</div>');
      document.write('<div class="snaptarget box" style="left:380px; top:' + String((index-middle_index) * 100) + 'px;"></div>');
    }
  });
  let field = document.getElementsByClassName("field");
  field[field.length-1].style.height = String(middle_index*100-20)+"px";  // 高さを指定
}