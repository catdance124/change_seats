$(function () {
	// ドラッグ
	$('.draggable').draggable({
		containment: ".field", //ドラッグの範囲を制限
		snap: ".snaptarget", /* ターゲットにスナップする */
		snapMode: "inner",   /* 内側にスナップする */
		// revert: "invalid" /* Droppableな要素以外にDragされた場合、元の位置に戻る */
	});

$(".snaptarget").droppable({
    drop: function(event, ui) {
     var $srcObj = $(ui.draggable[0]);
     $srcObj.offset($(this).offset());
     return false;
    }
  });
});