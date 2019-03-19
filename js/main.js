{
  const members = ['a','b','c','d','e','f','g','h','i','j','k'];
  const middle_index = Math.ceil(members.length/2);
  members.forEach((member, index) => {
    if (index < middle_index){
      document.write('<div class="draggable box" style="left:40px; top:' + String((index) * 100) + 'px;">'+member+'</div>');
      document.write('<div class="snaptarget box" style="left:40px; top:' + String((index) * 100) + 'px;"></div>');
    }else{
      document.write('<div class="draggable box" style="left:380px; top:' + String((index-middle_index) * 100) + 'px;">'+member+'</div>');
      document.write('<div class="snaptarget box" style="left:380px; top:' + String((index-middle_index) * 100) + 'px;"></div>');
    }
  });
  const field = document.getElementsByClassName("field");
  field[0].style.height = String(middle_index*100-20)+"px";  // 高さを指定
}