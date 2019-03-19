$(function () {
	// ドラッグ
	$('.box').draggable({
		containment: ".field" //ドラッグの範囲を制限
	});
});