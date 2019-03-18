(function(){

	//要素の取得
	var elements = document.getElementsByClassName("drag-and-drop");

	//要素内のクリックされた位置を取得するグローバル（のような）変数
	var x;
	var y;

	//マウスが要素内で押されたとき、又はタッチされたとき発火
	for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener("mousedown", mdown, { passive: false });
			elements[i].addEventListener("touchstart", mdown, { passive: false });
	}

	//マウスが押された際の関数
	function mdown(e) {
			//クラス名に .drag を追加
			this.classList.add("drag");
			//タッチイベントとマウスのイベントの差異を吸収
			if(e.type === "mousedown") {
					var event = e;
			} else {
					var event = e.changedTouches[0];
			}
			//要素内の相対座標を取得
			x = event.pageX - this.offsetLeft;
			y = event.pageY - this.offsetTop;
			//ムーブイベントにコールバック
			document.body.addEventListener("mousemove", mmove, { passive: false });
			document.body.addEventListener("touchmove", mmove, { passive: false });
	}

	//マウスカーソルが動いたときに発火
	function mmove(e) {
			//ドラッグしている要素を取得
			var drag = document.getElementsByClassName("drag")[0];
			//同様にマウスとタッチの差異を吸収
			if(e.type === "mousemove") {
					var event = e;
			} else {
					var event = e.changedTouches[0];
			}
			//フリックしたときに画面を動かさないようにデフォルト動作を抑制
			e.preventDefault();
			//マウスが動いた場所に要素を動かす
			drag.style.top = event.pageY - y + "px";
			drag.style.left = event.pageX - x + "px";
			//マウスボタンが離されたとき、またはカーソルが外れたとき発火
			drag.addEventListener("mouseup", mup, { passive: false });
			document.body.addEventListener("mouseleave", mup, { passive: false });
			drag.addEventListener("touchend", mup, { passive: false });
			document.body.addEventListener("touchleave", mup, { passive: false });

	}

	//マウスボタンが上がったら発火
	function mup(e) {
			var drag = document.getElementsByClassName("drag")[0];
			//ムーブベントハンドラの消去
			document.body.removeEventListener("mousemove", mmove, { passive: false });
			drag.removeEventListener("mouseup", mup, { passive: false });
			document.body.removeEventListener("touchmove", mmove, { passive: false });
			drag.removeEventListener("touchend", mup, { passive: false });
			//クラス名 .drag も消す
			drag.classList.remove("drag");
	}
})()