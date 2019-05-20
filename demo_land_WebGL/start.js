/*
	This program has been built with NWSC "C++ Nex" Compiler and clang toolset,
	and is running under wasm (WebAssembly), and is using NWSTK which is
	a multiplatform toolkit for wasm and windows. NWSTK represents
	NOWSMART ToolKit.
	
	But, neither Emscripten compiler emcc nor its library was used to build
	this program.
	
	
	NWSC represents NOWSMART C++ Nex Compiler (for LLVM, wasm, IA32, AMD64).
	NWSA represents NOWSMART Assembler (for IA32 and AMD64(64BIT REX prefix),
	SSE, SSE2, 3DNow!)
	
	
	Produced by NOWSMARTSOFT, LightCone.
*/

var import_func_s = {

_jsfunc_MyStdcLib_1 : function ()
{ 	g_wasm_stdout_buf = "";},

_jsfunc_MyStdcLib_2 : function ()
{ 	g_outarea.value += g_wasm_stdout_buf;
	g_outarea.scrollTop = g_outarea.scrollHeight;
	g_wasm_stdout_buf = "";},

_jsfunc_MyStdcLib_3 : function ($0)
{ 	g_wasm_stdout_buf += String.fromCharCode($0);},

_jsfunc_Wnd_1 : function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
{ 	var idxCanvas = $0;
	var idxParent = $1;
	var x = $2;
	var y = $3;
	var sx = $4;
	var sy = $5;
	var client_org_x = $6;
	var client_org_y = $7;
	var client_sx = $8;
	var client_sy = $9;
	var zIndex = $10;
	var border_width = $11;
	var div_parent;
	if ( idxParent == 0 ) {
	div_parent = document.body;
	}
	else {
	div_parent = g_client_div_s[idxParent];
	}
	var whole_div = document.createElement("div");
	whole_div.width = String(sx);
	whole_div.height = String(sy);
	whole_div.style.border = "0px solid #0080FF";
	whole_div.style.position = "absolute";
	whole_div.style.left = String(x) + "px";
	whole_div.style.top = String(y) + "px";
	whole_div.style.width = String(sx) + "px";
	whole_div.style.height = String(sy) + "px";
	whole_div.style.zIndex = String(zIndex);
	whole_div.style.visibility = "visible";
	div_parent.appendChild(whole_div);
	var canvas = document.createElement("canvas");
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.border = String(border_width) + "px solid #008080";
	canvas.style.position = "absolute";
	canvas.style.left = "0px";
	canvas.style.top = "0px";
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	canvas.style.zIndex = "1";
	canvas.style.visibility = "visible";
	whole_div.appendChild(canvas);
	var new_client_div = document.createElement("div");
	new_client_div.style.border = "0px solid #00FF80";
	new_client_div.style.position = "absolute";
	new_client_div.style.left = String(client_org_x) + "px";
	new_client_div.style.top = String(client_org_y) + "px";
	new_client_div.style.width = String(client_sx) + "px";
	new_client_div.style.height = String(client_sy) + "px";
	new_client_div.style.zIndex = "2";
	new_client_div.style.overflow = "hidden";
	whole_div.appendChild(new_client_div);
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#80ffff";
	ctx.fillRect(0, 0, 100, 100);
	ctx.strokeStyle = "#bb00bb";
	ctx.strokeRect(0, 0, 100, 100);
	g_whole_div_s[idxCanvas] = whole_div;
	g_canvas_s[idxCanvas] = canvas;
	g_client_div_s[idxCanvas] = new_client_div;
	g_ctx_s[idxCanvas] = ctx;
	return 1;},

_jsfunc_Wnd_2 : function ($0, $1)
{ 	var idxCanvas = $0;
	var sizeFont = $1;
	var sxFont = sizeFont / 2.0;
	var ctx = g_ctx_s[idxCanvas];
	{
	var font_name = "monospace";
	ctx.font = "normal normal " + String(sizeFont) + "px " + font_name;
	var sxTextX = ctx.measureText("X").width;
	var ratio = sxTextX / sxFont;
	var strFont = "normal normal " + String( sizeFont / ratio ) + "px " + font_name;
	g_strFont_s[idxCanvas] = strFont;
	ctx.font = strFont;
	}
	return 1;},

_jsfunc_Wnd_3 : function ($0, $1, $2)
{ 	var idxCanvas = $0;
	var x = $1;
	var y = $2;
	var whole_div = g_whole_div_s[idxCanvas];
	whole_div.style.left = String(x) + "px";
	whole_div.style.top = String(y) + "px";},

_jsfunc_Wnd_4 : function ($0, $1, $2, $3, $4, $5, $6, $7)
{ 	var idxCanvas = $0;
	var x = $1;
	var y = $2;
	var sx = $3;
	var sy = $4;
	var client_sx = $5;
	var client_sy = $6;
	var idxCanvas_wgl = $7;
	var whole_div = g_whole_div_s[idxCanvas];
	var canvas = g_canvas_s[idxCanvas];
	var client_div = g_client_div_s[idxCanvas];
	whole_div.width = String(sx);
	whole_div.height = String(sy);
	whole_div.style.left = String(x) + "px";
	whole_div.style.top = String(y) + "px";
	whole_div.style.width = String(sx) + "px";
	whole_div.style.height = String(sy) + "px";
	if ( idxCanvas_wgl == 0 ) {
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.border = "0px solid #008080";
	canvas.style.position = "absolute";
	canvas.style.left = "0px";
	canvas.style.top = "0px";
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	client_div.style.width = String(client_sx) + "px";
	client_div.style.height = String(client_sy) + "px";
	}
	else {
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	client_div.style.width = String(client_sx) + "px";
	client_div.style.height = String(client_sy) + "px";
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	canvas_wgl.width = String(client_sx);
	canvas_wgl.height = String(client_sy);
	canvas_wgl.style.width = String(client_sx) + "px";
	canvas_wgl.style.height = String(client_sy) + "px";
	}},

_jsfunc_Wnd_5 : function ($0, $1, $2)
{ 	var whole_div = g_whole_div_s[$0];
	whole_div.style.left = String($1) + "px";
	whole_div.style.top = String($2) + "px";},

_jsfunc_Wnd_6 : function ($0)
{ 	var ctx = g_ctx_s[$0];
	ctx.save();},

_jsfunc_Wnd_7 : function ($0)
{ 	var ctx = g_ctx_s[$0];
	ctx.restore();},

_jsfunc_Wnd_8 : function ($0)
{ 	var idxCanvas = $0;
	var whole_div = g_whole_div_s[idxCanvas];
	whole_div.parentNode.removeChild(whole_div);
	g_whole_div_s[idxCanvas] = 0;
	g_canvas_s[idxCanvas] = 0;
	g_client_div_s[idxCanvas] = 0;
	g_ctx_s[idxCanvas] = 0;
	return 1;},

_jsfunc_Wnd_9 : function ($0, $1)
{ 	var pTimer = $0;
	var millisec = $1;
	var js_OnTimer = function() {
	var rr = g_exports.wa_OnTimer( pTimer );
	};
	return setInterval( js_OnTimer, millisec );},

_jsfunc_Wnd_10 : function ($0)
{ 	var idTimer = $0;
	clearInterval( idTimer );},

_jsfunc_Wnd_11 : function ($0, $1, $2, $3)
{ 	var idxCanvas = $0;
	var idxCanvas_wgl = $1;
	var sx = $2;
	var sy = $3;
	var client_div = g_client_div_s[idxCanvas];
	var canvas_wgl = document.createElement("canvas");
	canvas_wgl.width = String(sx);
	canvas_wgl.height = String(sy);
	canvas_wgl.style.position = "absolute";
	canvas_wgl.style.left = "0px";
	canvas_wgl.style.top = "0px";
	canvas_wgl.style.width = String(sx) + "px";
	canvas_wgl.style.height = String(sy) + "px";
	canvas_wgl.style.zIndex = "10000";
	canvas_wgl.style.visibility = "visible";
	client_div.appendChild(canvas_wgl);
	if ( canvas_wgl == null ) {
	alert( "Creating canvas for WebGL was failed." );
	}
	if ( !window.WebGLRenderingContext ) {
	alert( "WebGL is NOT supported by this browser." );
	}
	var names = ["webgl", "experimental-webgl"];
	var ctx_wgl = null;
	for (var ii = 0; ii < names.length; ++ii) {
	try {
	ctx_wgl = canvas_wgl.getContext(names[ii]);
	}
	catch(e) {
	}
	if ( ctx_wgl ) {
	break;
	}
	}
	if ( ctx_wgl == null ) {
	alert( "Getting WebGL context for canvas was failed." );
	}
	g_canvas_s[idxCanvas_wgl] = canvas_wgl;
	g_ctx_s[idxCanvas_wgl] = ctx_wgl;},

_jsfunc_PrepDC_1 : function ($0, $1, $2, $3, $4)
{ 	var ctx = g_ctx_s[$0];
	var org_x = $1;
	var org_y = $2;
	var sx = $3;
	var sy = $4;
	ctx.resetTransform();
	ctx.translate( org_x, org_y );
	ctx.beginPath();
	ctx.rect(0, 0, sx, sy);
	ctx.clip();},

_jsfunc_Caret_1 : function ($0, $1, $2, $3, $4, $5, $6)
{ 	var ctx = g_ctx_s[$0];
	var xCaret = $1;
	var yCaret = $2;
	var sxCaret = $3;
	var syCaret = $4;
	var xClientTop = $5;
	var yClientTop = $6;
	var imgData = ctx.getImageData(
	xCaret + xClientTop,
	yCaret + yClientTop,
	sxCaret,
	syCaret
	);
	var pixels = imgData.data;
	var idxMax = sxCaret * syCaret * 4;
	for ( var idx = 0; idx < idxMax; idx += 4 ) {
	pixels[idx] = 255 - pixels[idx];
	pixels[idx + 1] = 255 - pixels[idx + 1];
	pixels[idx + 2] = 255 - pixels[idx + 2];
	}
	ctx.clearRect(
	xCaret + xClientTop,
	yCaret + yClientTop,
	sxCaret,
	syCaret);
	ctx.putImageData(
	imgData,
	xCaret + xClientTop,
	yCaret + yClientTop
	);},

_jsfunc_NexFuncs_1 : function ($0)
{ 	var s = Pointer_stringify($0);
	alert(s);},

_jsfunc_NexFuncs_2 : function ()
{ 	document.body.style.cursor = "se-resize";},

_jsfunc_NexFuncs_3 : function ()
{ 	document.body.style.cursor = "e-resize";},

_jsfunc_NexFuncs_4 : function ()
{ 	document.body.style.cursor = "s-resize";},

_jsfunc_NexFuncs_5 : function ()
{ 	document.body.style.cursor = "default";},

_jsfunc_NexFuncs_6 : function ()
{ 	g_input_tag.focus();},

_jsfunc_DC_1 : function ($0, $1, $2, $3, $4, $5, $6)
{ 	var str = Pointer_stringify($5);
	var ctx = g_ctx_s[$0];
	ctx.beginPath();
	ctx.lineWidth = $6;
	ctx.imageSmoothingEnabled = false;
	ctx.moveTo($1, $2);
	ctx.lineTo($3, $4);
	ctx.strokeStyle = str;
	ctx.stroke();
	return 0;},

_jsfunc_DC_2 : function ($0, $1, $2, $3, $4, $5)
{ 	var ctx = g_ctx_s[$0];
	ctx.fillStyle = Pointer_stringify($5);
	ctx.fillRect($1, $2, $3, $4);
	return 0;},

_jsfunc_DC_3 : function ($0, $1, $2, $3)
{ 	var ctx = g_ctx_s[$0];
	var str = Pointer_stringify($3);
	ctx.fillStyle = "#000000";
	ctx.textBaseline = "top";
	ctx.font = g_strFont_s[$0];
	ctx.fillText(str, $1, $2);},

_jsfunc_DC_4 : function ($0, $1, $2, $3)
{ 	var ctx = g_ctx_s[$0];
	var str = String.fromCodePoint($3);
	ctx.fillStyle = "#000000";
	ctx.textBaseline = "top";
	ctx.font = g_strFont_s[$0];
	ctx.fillText(str, $1, $2);},

_jsfunc_DC_5 : function ($0, $1, $2, $3, $4, $5)
{ 	var ctx = g_ctx_s[$0];
	var x = $1;
	var y = $2;
	var radius = $3;
	var strCol = Pointer_stringify($4);
	ctx.beginPath();
	ctx.lineWidth = $5;
	ctx.strokeStyle = strCol;
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.stroke();},

_jsfunc_BaseWnd_1 : function ()
{ 	if ( document.activeElement != null ) {
	document.activeElement.blur();
	}},

_jsfunc_Image_1 : function ($0)
{ 	var x = $0;
	return Math.sin( x ) * 10000000.0 ;},

_jsfunc_Image_2 : function ($0, $1)
{ 	var idxImg = $0;
	var szPath = Pointer_stringify($1);
	var img_pack = {};
	var img = new Image();
	img_pack.m_img = img;
	img_pack.m_bLoaded = false;
	g_js_img_hash[idxImg] = img_pack;
	img.src = szPath;
	img.onload = function() {
	js_MyPrint( "begin of img.onload" );
	js_MyPrint( "loading image is complete" );
	js_MyPrint( "img.width=" + img.width );
	js_MyPrint( "img.height=" + img.height );
	js_MyPrint( "before wa_CImage_OnBackImageLoaded() in img.onload function" );
	img_pack.m_bLoaded = true;
	g_exports.wa_CImage_OnBackImageLoaded( idxImg );
	js_MyPrint( "after wa_CImage_OnBackImageLoaded() in img.onload function" );
	js_MyPrint( "end of img.onload" );
	}},

_jsfunc_Image_3 : function ($0)
{ 	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.naturalWidth;},

_jsfunc_Image_4 : function ($0)
{ 	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.naturalHeight;},

_jsfunc_Image_5 : function ($0)
{ 	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.clientWidth;},

_jsfunc_Image_6 : function ($0)
{ 	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.clientHeight;},

_jsfunc_Image_7 : function ($0, $1, $2, $3)
{ 	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	var ctx = g_ctx_s[$1];
	var canvas = g_canvas_s[$1];
	var x = $2;
	var y = $3;
	var sx = img.width;
	var sy = img.height;
	ctx.drawImage(
	img,
	0,
	0,
	sx,
	sy,
	x,
	y,
	sx,
	sy
	);},

_jsfunc_Image_8 : function ($0, $1, $2)
{ 	var ctx = g_ctx_s[$0];
	var org_x = $1;
	var org_y = $2;
	ctx.resetTransform();
	ctx.translate( org_x, org_y );},

_jsfunc_Image_9 : function ($0, $1)
{ 	var ctx = g_ctx_s[$0];
	var rad_x = $1;
	ctx.rotate( rad_x );},

_jsfunc_Image_10 : function ($0, $1, $2)
{ 	var ctx = g_ctx_s[$0];
	ctx.translate( $1, $2 );},

_jsfunc_NewEntry_1 : function ()
{ 	g_log_cnt = 0;
	js_MyPrint = function( str ) {
	console.log( "" + g_log_cnt + " : " + str );
	g_log_cnt++;
	};
	g_bTouchSupported = 0;
	eval( "if ( window.ontouchstart === null ) { g_bTouchSupported\x09= 1; }" );
	js_MyPrint( "g_bTouchSupported=" + g_bTouchSupported );
	return g_bTouchSupported;},

_jsfunc_NewEntry_2 : function ($0, $1, $2)
{ 	console.log( "start_from_js(), a=" + String($0) );
	console.log( "start_from_js(), b=" + String($1) );
	console.log( "start_from_js(), c=" + String($2) );},

_jsfunc_NewEntry_3 : function ()
{ 	js_genshi_line = function(ctx, x1, y1, x2, y2, strCol, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.imageSmoothingEnabled = false;
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = strCol;
	ctx.stroke();
	}
	js_genshi_rect = function(ctx, x1, y1, sx, sy, strCol, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.imageSmoothingEnabled = false;
	ctx.moveTo(x1, y1);
	ctx.lineTo(x1, y1 + sy);
	ctx.lineTo(x1 + sx, y1 + sy);
	ctx.lineTo(x1 + sx, y1);
	ctx.lineTo(x1, y1);
	ctx.strokeStyle = strCol;
	ctx.stroke();
	}
	js_genshi_circle = function(ctx, x1, y1, r, strCol, width) {
	ctx.lineWidth = width;
	ctx.strokeStyle = strCol;
	ctx.beginPath();
	ctx.arc(x1, y1, r, 0, Math.PI*2, true);
	ctx.stroke();
	}
	g_touch_mark_canvas = document.createElement("canvas");
	var sx = 200 ;
	var sy = 200 ;
	g_touch_mark_canvas.width = String(sx);
	g_touch_mark_canvas.height = String(sy);
	g_touch_mark_canvas.style.border = "0px solid #FFFFFF";
	g_touch_mark_canvas.style.position = "absolute";
	g_touch_mark_canvas.style.left = "0px";
	g_touch_mark_canvas.style.top = "30px";
	g_touch_mark_canvas.style.width = String(sx) + "px";
	g_touch_mark_canvas.style.height = String(sy) + "px";
	g_touch_mark_canvas.style["background-color"] = "#00000000";
	g_touch_mark_canvas.style.zIndex = "10000000";
	g_touch_mark_canvas.style.visibility = "hidden";
	document.body.appendChild(g_touch_mark_canvas);
	var ctx = g_touch_mark_canvas.getContext("2d");
	var cx = 200 / 2;
	var cy = 200 / 2;
	js_genshi_line( ctx,
	cx,
	0,
	cx,
	200 ,
	"#00FFFF",
	7
	);
	js_genshi_line( ctx,
	cx,
	0,
	cx,
	200 ,
	"#0000FF",
	3
	);
	js_genshi_line( ctx,
	0,
	cy,
	200 ,
	cy,
	"#00FFFF",
	7
	);
	js_genshi_line( ctx,
	0,
	cy,
	200 ,
	cy,
	"#0000FF",
	3
	);
	js_genshi_circle(
	ctx,
	cx,
	cy,
	60 ,
	"#00FFFF",
	7
	);
	js_genshi_circle(
	ctx,
	cx,
	cy,
	60 ,
	"#0000FF",
	3
	);},

_jsfunc_NewEntry_4 : function ()
{ 	g_bIME = 0;
	g_bComposStarted = 0;
	g_input_tag = null;
	js_make_input_tag_caret_goto_btm = function() {
	var len = g_input_tag.value.length;
	g_input_tag.setSelectionRange(len, len);
	}
	js_delay_input_tag_caret_goto_btm = function() {
	js_make_input_tag_caret_goto_btm();
	}
	js_set_delay_input_tag_caret_goto_btm = function() {
	setTimeout( js_delay_input_tag_caret_goto_btm, 0 );
	}
	js_init_input_tag_text_value = function() {
	g_input_tag.value = " " ;
	g_input_tag.value = "aaa";
	g_input_tag.value = " " ;
	g_input_tag.setSelectionRange(1, 1);
	js_set_delay_input_tag_caret_goto_btm();
	}
	g_input_tag = document.createElement("textarea");
	g_input_tag.autocomplete = "off";
	var border_width = 2;
	var sx = 100;
	var sy = 32;
	g_input_tag.width = String(sx);
	g_input_tag.height = String(sy);
	g_input_tag.style.border = String(border_width) + "px solid #008080";
	g_input_tag.style.position = "absolute";
	g_input_tag.style.left = "-10000px";
	g_input_tag.style.top = "0px";
	g_input_tag.style.width = String(sx) + "px";
	g_input_tag.style.height = String(sy) + "px";
	g_input_tag.style["background-color"] = "#ffffff";
	g_input_tag.style.zIndex = "100000";
	g_input_tag.style.visibility = "visible";
	js_init_input_tag_text_value();
	document.body.appendChild(g_input_tag);
	g_input_tag.focus();},

_jsfunc_NewEntry_5 : function ()
{ 	g_outarea = document.getElementById( "outarea" );
	g_js_img_hash = {};},

_jsfunc_NewEntry_6 : function ()
{ 	js_MyPrint( "window.devicePixelRatio = " + window.devicePixelRatio );
	var value;
	if ( !g_bTouchSupported ) {
	value = window.devicePixelRatio;
	}
	else {
	value = window.devicePixelRatio;
	}
	var body1 = document.body;
	var style1 = body1.style;
	var factor1 = 1.0 / value;
	style1.transform = 'scale(' + String(factor1) + ')';
	style1["transform-origin"] = "top left";
	g_scaling = value;
	js_MyPrint( "g_scaling = " + g_scaling );},

_jsfunc_NewEntry_7 : function ()
{ 	return g_scaling * 10000.0;},

_jsfunc_NewEntry_8 : function ()
{ 	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "normal normal 32px monospace";
	var sxTextX = ctx.measureText("X").width;
	js_MyPrint( "font_check, width of font 'X' = " + sxTextX );
	js_MyPrint( "sxTextX / 16.0 = " + (sxTextX / 16.0) );},

_jsfunc_NewEntry_9 : function ()
{ 	g_canvas_s = new Array(200 );
	g_whole_div_s = new Array(200 );
	g_ctx_s = new Array(200 );
	g_client_div_s = new Array(200 );
	g_strFont_s = new Array(200 );},

_jsfunc_NewEntry_10 : function ()
{ 	g_js_bInputInputEvent = 0;
	g_input_tag.addEventListener( 'keydown', js_keydown, {passive: false} );
	g_input_tag.addEventListener( 'keyup', js_keyup, {passive: false} );
	g_input_tag.addEventListener( 'input', js_input_input );
	g_input_tag.addEventListener('compositionstart', js_composition_start );
	g_input_tag.addEventListener('compositionend', js_composition_end );
	if ( !g_bTouchSupported ) {
	document.addEventListener( 'mousemove', js_mousemove, {passive: false} );
	document.addEventListener( 'mousedown', js_mousedown, {passive: false} );
	document.addEventListener( 'mouseup', js_mouseup, {passive: false} );
	}
	else {
	document.addEventListener( 'touchstart',
	js_touchstart,
	{
	once: false,
	passive: false,
	capture: true
	}
	);
	document.addEventListener( 'touchend',
	js_touchend,
	{
	once: false,
	passive: false,
	capture: true
	}
	);
	document.addEventListener( 'touchmove',
	js_touchmove,
	{
	once: false,
	passive: false,
	capture: true
	}
	);
	}
	function is_ignore_key(key) {
	if ( key == 8 ||
	key == 0x20 ||
	key == 0x26 || key == 0x28 ||
	key == 0x25 || key == 0x27 ) {
	return true;
	}
	else {
	return false;
	}
	}
	function js_input_input(e) {
	var str = g_input_tag.value;
	g_js_bInputInputEvent = 1;
	if ( !g_bComposStarted ) {
	if ( g_bIME ) {
	g_exports.c_reflect_IME( 0 );
	}
	}
	if ( g_bIME ) {
	}
	else {
	if ( str.length != 0 ) {
	if ( str.length >= 2 ) {
	var char_code = str.charCodeAt(str.length - 1);
	var rr = g_exports.c_chardown( char_code );
	}
	}
	else {
	var rr1 = g_exports.c_keydown( 0x08 );
	}
	js_init_input_tag_text_value();
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_composition_start(e) {
	g_exports.c_composition_start();
	}
	function js_composition_end_core() {
	var str = g_input_tag.value;
	g_js_ime_unicode_s = [];
	var i = 0;
	if ( str.charAt(0) == " " ) {
	i++;
	}
	else {
	}
	for ( ;; i++ ) {
	var unicode = str.codePointAt(i);
	if ( unicode == null ) {
	break;
	}
	if ( unicode != 0x0d ) {
	g_js_ime_unicode_s.push( unicode );
	}
	}
	console.log( g_js_ime_unicode_s );
	var len = g_js_ime_unicode_s.length;
	g_js_ime_unicode_s.push(0);
	g_exports.c_composition_end_core( len );
	js_init_input_tag_text_value();
	}
	function js_composition_end(e) {
	g_exports.c_compo_end_dbg();
	js_composition_end_core();
	}
	function js_keydown(e) {
	g_js_bInputInputEvent = 0;
	var key = e.keyCode;
	if ( key == 229 ) {
	return;
	}
	if ( key == 0x08 ) {
	return;
	}
	if ( key == 0x2E ||
	key == 0x25 ||
	key == 0x27 ||
	key == 0x26 ||
	key == 0x28 ||
	key == 0x24 ||
	key == 0x23 ||
	key == 0x0d ) {
	}
	else if ( key >= 0x20 ) {
	return;
	}
	var rr = g_exports.c_keydown( key );
	}
	function js_keyup(e) {
	var key = e.keyCode;
	if ( key == 229 ) {
	return;
	}
	else if ( key == 0x08 ) {
	return;
	}
	g_js_bInputInputEvent = 0;
	var rr = g_exports.c_keyup( key );
	}
	function js_mousedown(e) {
	var bProcessed = g_exports.c_mousedown(
	e.clientX * g_scaling,
	e.clientY * g_scaling,
	e.button
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_mouseup(e) {
	var bProcessed = g_exports.c_mouseup(
	e.clientX * g_scaling,
	e.clientY * g_scaling,
	e.button
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_mousemove(e) {
	var bProcessed = g_exports.c_mousemove(
	e.clientX * g_scaling,
	e.clientY * g_scaling,
	e.pageX * g_scaling,
	e.pageY * g_scaling,
	g_scaling * 1000
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_move_touch_mark(mx, my) {
	var tx = mx - 200 / 2;
	var ty = my - 200 / 2;
	g_touch_mark_canvas.style.left = String(tx) + "px";
	g_touch_mark_canvas.style.top = String(ty) + "px";
	}
	function js_enable_touch_mark(bEnable) {
	if ( bEnable ) {
	g_touch_mark_canvas.style.visibility = "visible";
	}
	else {
	g_touch_mark_canvas.style.visibility = "hidden";
	}
	}
	function js_touchstart(e) {
	var touch = e.touches[0];
	var mx = touch.clientX * g_scaling;
	var my = touch.clientY * g_scaling;
	js_move_touch_mark(mx, my);
	js_enable_touch_mark( 1 );
	var bProcessed = g_exports.c_mousedown(
	mx,
	my,
	0
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_touchend(e) {
	js_MyPrint( "js_touchend is coming" );
	js_enable_touch_mark( 0 );
	var bProcessed = g_exports.c_mouseup(
	0,
	0,
	0
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_touchmove(e) {
	var touch = e.touches[0];
	var mx = touch.clientX * g_scaling;
	var my = touch.clientY * g_scaling;
	js_move_touch_mark(mx, my);
	js_enable_touch_mark( 1 );
	var bProcessed = g_exports.c_mousemove(
	mx,
	my,
	touch.pageX * g_scaling,
	touch.pageY * g_scaling,
	g_scaling * 1000
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}},

_jsfunc_NewEntry_11 : function ()
{ 	count = 0;
	function js_OnMainTimer() {
	var rr = g_exports.wa_OnMainTimer(1);
	}
	setInterval(js_OnMainTimer, 20);},

_jsfunc_NewEntry_12 : function ()
{ 	g_bComposStarted = 1;},

_jsfunc_NewEntry_13 : function ()
{ 	g_bComposStarted = 0;},

_jsfunc_NewEntry_14 : function ($0)
{ 	return g_js_ime_unicode_s[$0];},

_jsfunc_NewEntry_15 : function ()
{ 	js_set_delay_input_tag_caret_goto_btm();},

_jsfunc_NewEntry_16 : function ($0)
{ 	g_bIME = $0;
	if ( g_bIME ) {
	g_input_tag.style["background-color"] = "#ffffff";
	g_input_tag.style.left = "220px";
	}
	else {
	g_input_tag.style.left = "-10000px";
	}},

_jsfunc_NewEntry_17 : function ($0)
{ 	var str1 = Pointer_stringify($0);
	g_outarea.value += str1;
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_18 : function ($0)
{ 	g_outarea.value += String($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_19 : function ($0)
{ 	g_outarea.value += String.fromCharCode($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_20 : function ($0, $1)
{ 	alert( Pointer_stringify($0) + String($1) );},

_jsfunc_NewEntry_21 : function ()
{ 	alert( "abort() is called." );},

_jsfunc_NewEntry_22 : function ($0, $1)
{ 	js_MyPrint( String($0) + ", " + Pointer_stringify($1) );},

_jsfunc_main_1 : function ($0)
{ 	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	var prg = g_prg;
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	gl.clearColor(0.0, 0.0, 0.0, 0.0);
	gl.clearDepth(1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);},

_jsfunc_main_2 : function ($0)
{ 	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	var mMatrix = myMat_identity(g_mat_s[0]);
	var vMatrix = myMat_identity(g_mat_s[1]);
	var pMatrix = myMat_identity(g_mat_s[2]);
	var tmpMatrix = myMat_identity(g_mat_s[3]);
	var mvpMatrix = myMat_identity(g_mat_s[4]);
	myMat_lookAt([0.0, 0.0, 3.0], [0, 0, 0], [0, 1, 0], vMatrix);
	myMat_perspective(40, canvas_wgl.width / canvas_wgl.height, 0.01, 1000, pMatrix);
	myMat_multiply(pMatrix, vMatrix, tmpMatrix);
	myMat_multiply(tmpMatrix, mMatrix, mvpMatrix);
	gl.uniformMatrix4fv(g_uniLocation, false, mvpMatrix);},

_jsfunc_main_3 : function ($0)
{ 	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	gl.bindBuffer(gl.ARRAY_BUFFER, g_my_pos_vbo);
	gl.bufferSubData(gl.ARRAY_BUFFER, 0, g_js_mesh3D);
	gl.bindBuffer(gl.ARRAY_BUFFER, g_my_col_vbo);
	gl.bufferSubData(gl.ARRAY_BUFFER, 0, g_js_color_array);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, g_my_ibo);
	gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, g_js_wgl_index_s);},

_jsfunc_main_4 : function ($0, $1)
{ 	var idxCanvas_wgl = $0;
	var num_indices = $1;
	var gl = g_ctx_s[idxCanvas_wgl];
	gl.drawElements(gl.LINES, num_indices, gl.UNSIGNED_SHORT, 0);},

_jsfunc_main_5 : function ($0)
{ 	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	gl.flush();},

_jsfunc_main_6 : function ($0)
{ 	g_prg = null;
	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	var g_vs_text =
	"attribute vec3 position;\x0A" +
	"attribute vec4 color;\x0A" +
	"uniform   mat4 mvpMatrix;\x0A" +
	"varying   vec4 vColor;\x0A" +
	"\x0A" +
	"void main(void){\x0A" +
	"\x09vColor = color;\x0A" +
	"\x09gl_Position = mvpMatrix * vec4(position, 1.0);\x0A" +
	"}\x0A" ;
	var g_fs_text =
	"precision mediump float;\x0A" +
	"\x0A" +
	"varying vec4 vColor;\x0A" +
	"\x0A" +
	"void main(void){\x0A" +
	"\x09gl_FragColor = vColor;\x0A" +
	"}\x0A" ;
	function initShaders() {
	var p = gl.createProgram();
	var vs = gl.createShader(gl.VERTEX_SHADER);
	var fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(vs, g_vs_text);
	gl.shaderSource(fs, g_fs_text);
	gl.compileShader(vs);
	gl.compileShader(fs);
	gl.attachShader(p, vs);
	gl.attachShader(p, fs);
	gl.linkProgram(p);
	gl.useProgram(p);
	g_prg = p;
	}
	create_vbo2_core = function(f32array, usage) {
	var vbo = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, f32array, usage);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	return vbo;
	};
	create_ibo2_core = function(i16array, usage) {
	var ibo = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, i16array, usage);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
	return ibo;
	};
	create_vbo2_staic = function(f32array) {
	return create_vbo2_core( f32array, gl.STATIC_DRAW );
	};
	create_vbo2_dynamic = function(f32array) {
	return create_vbo2_core( f32array, gl.DYNAMIC_DRAW );
	};
	create_ibo2_static = function(i16array) {
	return create_ibo2_core( i16array, gl.STATIC_DRAW );
	};
	create_ibo2_dynamic = function(i16array) {
	return create_ibo2_core( i16array, gl.DYNAMIC_DRAW );
	};
	set_attribute = function(vbo, attL, attS) {
	for (var i in vbo){
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo[i]);
	gl.enableVertexAttribArray(attL[i]);
	gl.vertexAttribPointer(attL[i], attS[i], gl.FLOAT, false, 0, 0);
	}
	};
	initShaders();},

_jsfunc_main_7 : function ($0)
{ 	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	var prg = g_prg;
	g_attLocation = new Array(2);
	g_attLocation[0] = gl.getAttribLocation(prg, "position");
	g_attLocation[1] = gl.getAttribLocation(prg, "color");
	g_uniLocation = gl.getUniformLocation(prg, "mvpMatrix");
	g_attStride = new Array(2);
	g_attStride[0] = 3;
	g_attStride[1] = 4;},

_jsfunc_main_8 : function ($0, $1)
{ 	var mesh3d_addr = $0;
	var color_array_addr = $1;
	var buffer = g_memory.buffer;
	g_js_mesh3D = new Float32Array(
	buffer,
	mesh3d_addr,
	3 * 50 * 300
	);
	g_js_color_array = new Float32Array(
	buffer,
	color_array_addr,
	4 * 50 * 300
	);},

_jsfunc_main_9 : function ($0, $1)
{ 	var index_addr = $0;
	var num_indices = $1;
	var buffer = g_memory.buffer;
	g_js_wgl_index_s = new Int16Array(
	buffer,
	index_addr,
	num_indices
	);},

_jsfunc_main_10 : function ($0)
{ 	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	g_my_pos_vbo = create_vbo2_dynamic(g_js_mesh3D);
	g_my_col_vbo = create_vbo2_dynamic(g_js_color_array);
	set_attribute( [g_my_pos_vbo, g_my_col_vbo], g_attLocation, g_attStride );
	g_my_ibo = create_ibo2_dynamic(g_js_wgl_index_s);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, g_my_ibo);},

_jsfunc_main_11 : function ()
{ 	myMat_create = function(){
	return new Float32Array(16);
	};
	myMat_identity = function(dest){
	dest[0] = 1; dest[1] = 0; dest[2] = 0; dest[3] = 0;
	dest[4] = 0; dest[5] = 1; dest[6] = 0; dest[7] = 0;
	dest[8] = 0; dest[9] = 0; dest[10] = 1; dest[11] = 0;
	dest[12] = 0; dest[13] = 0; dest[14] = 0; dest[15] = 1;
	return dest;
	};
	myMat_multiply = function(mat1, mat2, dest){
	var a = mat1[0], b = mat1[1], c = mat1[2], d = mat1[3],
	e = mat1[4], f = mat1[5], g = mat1[6], h = mat1[7],
	i = mat1[8], j = mat1[9], k = mat1[10], l = mat1[11],
	m = mat1[12], n = mat1[13], o = mat1[14], p = mat1[15],
	A = mat2[0], B = mat2[1], C = mat2[2], D = mat2[3],
	E = mat2[4], F = mat2[5], G = mat2[6], H = mat2[7],
	I = mat2[8], J = mat2[9], K = mat2[10], L = mat2[11],
	M = mat2[12], N = mat2[13], O = mat2[14], P = mat2[15];
	dest[0] = A * a + B * e + C * i + D * m;
	dest[1] = A * b + B * f + C * j + D * n;
	dest[2] = A * c + B * g + C * k + D * o;
	dest[3] = A * d + B * h + C * l + D * p;
	dest[4] = E * a + F * e + G * i + H * m;
	dest[5] = E * b + F * f + G * j + H * n;
	dest[6] = E * c + F * g + G * k + H * o;
	dest[7] = E * d + F * h + G * l + H * p;
	dest[8] = I * a + J * e + K * i + L * m;
	dest[9] = I * b + J * f + K * j + L * n;
	dest[10] = I * c + J * g + K * k + L * o;
	dest[11] = I * d + J * h + K * l + L * p;
	dest[12] = M * a + N * e + O * i + P * m;
	dest[13] = M * b + N * f + O * j + P * n;
	dest[14] = M * c + N * g + O * k + P * o;
	dest[15] = M * d + N * h + O * l + P * p;
	return dest;
	};
	myMat_scale = function(mat, vec, dest){
	dest[0] = mat[0] * vec[0];
	dest[1] = mat[1] * vec[0];
	dest[2] = mat[2] * vec[0];
	dest[3] = mat[3] * vec[0];
	dest[4] = mat[4] * vec[1];
	dest[5] = mat[5] * vec[1];
	dest[6] = mat[6] * vec[1];
	dest[7] = mat[7] * vec[1];
	dest[8] = mat[8] * vec[2];
	dest[9] = mat[9] * vec[2];
	dest[10] = mat[10] * vec[2];
	dest[11] = mat[11] * vec[2];
	dest[12] = mat[12];
	dest[13] = mat[13];
	dest[14] = mat[14];
	dest[15] = mat[15];
	return dest;
	};
	myMat_translate = function(mat, vec, dest){
	dest[0] = mat[0]; dest[1] = mat[1]; dest[2] = mat[2]; dest[3] = mat[3];
	dest[4] = mat[4]; dest[5] = mat[5]; dest[6] = mat[6]; dest[7] = mat[7];
	dest[8] = mat[8]; dest[9] = mat[9]; dest[10] = mat[10]; dest[11] = mat[11];
	dest[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8] * vec[2] + mat[12];
	dest[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9] * vec[2] + mat[13];
	dest[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];
	dest[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];
	return dest;
	};
	myMat_rotate = function(mat, angle, axis, dest){
	var sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
	if(!sq){return null;}
	var a = axis[0], b = axis[1], c = axis[2];
	if(sq != 1){sq = 1 / sq; a *= sq; b *= sq; c *= sq;}
	var d = Math.sin(angle), e = Math.cos(angle), f = 1 - e,
	g = mat[0], h = mat[1], i = mat[2], j = mat[3],
	k = mat[4], l = mat[5], m = mat[6], n = mat[7],
	o = mat[8], p = mat[9], q = mat[10], r = mat[11],
	s = a * a * f + e,
	t = b * a * f + c * d,
	u = c * a * f - b * d,
	v = a * b * f - c * d,
	w = b * b * f + e,
	x = c * b * f + a * d,
	y = a * c * f + b * d,
	z = b * c * f - a * d,
	A = c * c * f + e;
	if(angle){
	if(mat != dest){
	dest[12] = mat[12]; dest[13] = mat[13];
	dest[14] = mat[14]; dest[15] = mat[15];
	}
	} else {
	dest = mat;
	}
	dest[0] = g * s + k * t + o * u;
	dest[1] = h * s + l * t + p * u;
	dest[2] = i * s + m * t + q * u;
	dest[3] = j * s + n * t + r * u;
	dest[4] = g * v + k * w + o * x;
	dest[5] = h * v + l * w + p * x;
	dest[6] = i * v + m * w + q * x;
	dest[7] = j * v + n * w + r * x;
	dest[8] = g * y + k * z + o * A;
	dest[9] = h * y + l * z + p * A;
	dest[10] = i * y + m * z + q * A;
	dest[11] = j * y + n * z + r * A;
	return dest;
	};
	myMat_lookAt = function(eye, center, up, dest){
	var eyeX = eye[0], eyeY = eye[1], eyeZ = eye[2],
	upX = up[0], upY = up[1], upZ = up[2],
	centerX = center[0], centerY = center[1], centerZ = center[2];
	if ( eyeX == centerX && eyeY == centerY && eyeZ == centerZ ) {
	return myMat_identity(dest);
	}
	var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
	z0 = eyeX - center[0]; z1 = eyeY - center[1]; z2 = eyeZ - center[2];
	l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	z0 *= l; z1 *= l; z2 *= l;
	x0 = upY * z2 - upZ * z1;
	x1 = upZ * z0 - upX * z2;
	x2 = upX * z1 - upY * z0;
	l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	if(!l){
	x0 = 0; x1 = 0; x2 = 0;
	} else {
	l = 1 / l;
	x0 *= l; x1 *= l; x2 *= l;
	}
	y0 = z1 * x2 - z2 * x1; y1 = z2 * x0 - z0 * x2; y2 = z0 * x1 - z1 * x0;
	l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	if(!l){
	y0 = 0; y1 = 0; y2 = 0;
	} else {
	l = 1 / l;
	y0 *= l; y1 *= l; y2 *= l;
	}
	dest[0] = x0; dest[1] = y0; dest[2] = z0; dest[3] = 0;
	dest[4] = x1; dest[5] = y1; dest[6] = z1; dest[7] = 0;
	dest[8] = x2; dest[9] = y2; dest[10] = z2; dest[11] = 0;
	dest[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
	dest[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
	dest[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
	dest[15] = 1;
	return dest;
	};
	myMat_perspective = function(fovy, aspect, near, far, dest){
	var t = near * Math.tan(fovy * Math.PI / 360);
	var r = t * aspect;
	var a = r * 2, b = t * 2, c = far - near;
	dest[0] = near * 2 / a;
	dest[1] = 0;
	dest[2] = 0;
	dest[3] = 0;
	dest[4] = 0;
	dest[5] = near * 2 / b;
	dest[6] = 0;
	dest[7] = 0;
	dest[8] = 0;
	dest[9] = 0;
	dest[10] = -(far + near) / c;
	dest[11] = -1;
	dest[12] = 0;
	dest[13] = 0;
	dest[14] = -(far * near * 2) / c;
	dest[15] = 0;
	return dest;
	};
	myMat_transpose = function(mat, dest){
	dest[0] = mat[0]; dest[1] = mat[4];
	dest[2] = mat[8]; dest[3] = mat[12];
	dest[4] = mat[1]; dest[5] = mat[5];
	dest[6] = mat[9]; dest[7] = mat[13];
	dest[8] = mat[2]; dest[9] = mat[6];
	dest[10] = mat[10]; dest[11] = mat[14];
	dest[12] = mat[3]; dest[13] = mat[7];
	dest[14] = mat[11]; dest[15] = mat[15];
	return dest;
	};
	myMat_inverse = function(mat, dest){
	var a = mat[0], b = mat[1], c = mat[2], d = mat[3],
	e = mat[4], f = mat[5], g = mat[6], h = mat[7],
	i = mat[8], j = mat[9], k = mat[10], l = mat[11],
	m = mat[12], n = mat[13], o = mat[14], p = mat[15],
	q = a * f - b * e, r = a * g - c * e,
	s = a * h - d * e, t = b * g - c * f,
	u = b * h - d * f, v = c * h - d * g,
	w = i * n - j * m, x = i * o - k * m,
	y = i * p - l * m, z = j * o - k * n,
	A = j * p - l * n, B = k * p - l * o,
	ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
	dest[0] = ( f * B - g * A + h * z) * ivd;
	dest[1] = (-b * B + c * A - d * z) * ivd;
	dest[2] = ( n * v - o * u + p * t) * ivd;
	dest[3] = (-j * v + k * u - l * t) * ivd;
	dest[4] = (-e * B + g * y - h * x) * ivd;
	dest[5] = ( a * B - c * y + d * x) * ivd;
	dest[6] = (-m * v + o * s - p * r) * ivd;
	dest[7] = ( i * v - k * s + l * r) * ivd;
	dest[8] = ( e * A - f * y + h * w) * ivd;
	dest[9] = (-a * A + b * y - d * w) * ivd;
	dest[10] = ( m * u - n * s + p * q) * ivd;
	dest[11] = (-i * u + j * s - l * q) * ivd;
	dest[12] = (-e * z + f * x - g * w) * ivd;
	dest[13] = ( a * z - b * x + c * w) * ivd;
	dest[14] = (-m * t + n * r - o * q) * ivd;
	dest[15] = ( i * t - j * r + k * q) * ivd;
	return dest;
	};},

_jsfunc_main_12 : function ()
{ 	g_mat_s = new Array(5 );
	for ( i = 0; i < 5 ; i++ ) {
	g_mat_s[i] = myMat_create();
	}},

// this is foot.js from here :
};



var		g_instance;
var		g_exports;
var		g_memory;		// global memory
var     HEAP8;			// g_memory �� BYTE �z��ɓ��e��������


var		g_wasm_stdout_buf	= "";




// g_memory.grow() ����� g_memory �ɑΉ����Ă��� ArrayBuffer �́A
// detach ����āA�V�������̂ɕt���ւ����Ă��܂��̂ŁAHEAP8
// �Ȃǂɓ��e�������Ȃ���΂Ȃ�Ȃ��B
function _js_on_grow_memory() {
    var		buffer = g_memory.buffer;
    
	HEAP8	= new Uint8Array(buffer);
}

function Pointer_stringify( pTop ) {
	var		ptr		= pTop;
	var		str1	= "";
	for ( ;; ) {
		var  code = HEAP8[ptr];
		if ( code == 0 ) {
			break;
		}
		
		str1	+= String.fromCharCode(code);
		ptr++;
	}
	
	return	str1;
}



var		imports = {};


/*
var opts = {
	initial : 2,
	maximum : 100
};
g_memory		= new WebAssembly.Memory(opts);
g_memory.initial = 2;
g_memory.maximum = 100;

console.log( opts );
*/



imports.env = {
	js_func: function(a, b) {
		alert( "a =" + String(a) + ", b=" + String(b) );
		
		return a + b;
	},
	
	js_ffunc: function(a) {
		alert( "a =" + String(a) );
	},
	
	js_alert : function(pTop) {
		var		str1	= Pointer_stringify( pTop );
		
		alert( str1 );
	},
	
	
	js_get_current_memory : function() {
	//	alert( "js_get_current_memory() is coming" );
		
		return	g_memory.buffer.byteLength / 65536;
	},
	
	js_grow_memory : function( numPageToGrow ) {
	//	alert( "js_grow_memory() is coming, numPageToGrow = " +
	//		   String(numPageToGrow) );
		
		var		last_num_pages		= g_memory.grow( numPageToGrow );
		
	//	alert( "js_grow_memory(), g_memory.grow() = " + String(last_num_pages) );
		
		// g_memory.grow() ����� g_memory �ɑΉ����Ă��� ArrayBuffer �́A
		// detach ����āA�V�������̂ɕt���ւ����Ă��܂��̂ŁAHEAP8
		// �Ȃǂɓ��e�������Ȃ���΂Ȃ�Ȃ��B
		_js_on_grow_memory();
		
		
		return	last_num_pages;
	},
	
	// js_on_grow_memory : _js_on_grow_memory,
	
	
	putchar : function(code) {
		g_outarea.value			+= String.fromCharCode(code);
		
		g_outarea.scrollTop		= g_outarea.scrollHeight;
		
		return	code;
	},
	
	
	
};

var		env		= imports.env;

//env.memoryBase	= imports.memoryBase || 0;
//env.memory		= g_memory;
//env.tableBase		= imports.tableBase || 0;
//env.table			= table;



// merge import_func_s in env :
for (var key in import_func_s) {
	env[key] = import_func_s[key];
}

// console.log( env );


fetch("test.wasm")
.then( response => response.arrayBuffer() )
.then( buffer => WebAssembly.compile(buffer) )
.then( module => WebAssembly.instantiate(module, imports) )
.then( instance => {





g_instance	= instance;
g_exports	= instance.exports;
g_memory	= g_exports.memory;


// g_memory �ɑΉ����Ă��� ArrayBuffer ���AJS �� HEAP8[] �z��
// �ɓ��e���� :
_js_on_grow_memory();




var		ret		= g_exports.start_from_js( 123, 456, 3.14 );

	//alert( "start_from_js() = " + String(ret) );

});


