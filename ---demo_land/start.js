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
{
	g_wasm_stdout_buf = "";},

_jsfunc_MyStdcLib_2 : function ()
{
	g_outarea.value += g_wasm_stdout_buf;
	g_outarea.scrollTop = g_outarea.scrollHeight;
	g_wasm_stdout_buf = "";},

_jsfunc_MyStdcLib_3 : function ($0)
{
	g_wasm_stdout_buf += String.fromCharCode($0);},

_jsfunc_basic_math_1 : function ($0)
{
	var a = $0;
	return Math.floor( a );},

_jsfunc_basic_math_2 : function ($0)
{
	var x = $0;
	return Math.log10( x );},

_jsfunc_basic_math_3 : function ($0, $1)
{
	var x = $0;
	var y = $1;
	return Math.pow( x, y );},

_jsfunc_Wnd_1 : function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
{
	var idxCanvas = $0;
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
{
	var idxCanvas = $0;
	var sizeFont = $1;
	var sxFont = sizeFont / 2.0;
	var ctx = g_ctx_s[idxCanvas];
	{
	var font_name = "MS Gothic";
	ctx.font = "normal normal " + String(sizeFont) + "px " + font_name;
	var sxTextX = ctx.measureText("X").width;
	var ratio = sxTextX / sxFont;
	var strFont = "normal normal " + String( sizeFont / ratio ) + "px " + font_name;
	g_strFont_s[idxCanvas] = strFont;
	ctx.font = strFont;
	}
	return 1;},

_jsfunc_Wnd_3 : function ($0, $1, $2)
{
	var idxCanvas = $0;
	var x = $1;
	var y = $2;
	var whole_div = g_whole_div_s[idxCanvas];
	whole_div.style.left = String(x) + "px";
	whole_div.style.top = String(y) + "px";},

_jsfunc_Wnd_4 : function ($0, $1, $2, $3, $4, $5, $6, $7)
{
	var idxCanvas = $0;
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
{
	var whole_div = g_whole_div_s[$0];
	whole_div.style.left = String($1) + "px";
	whole_div.style.top = String($2) + "px";},

_jsfunc_Wnd_6 : function ()
{
	console.log( "CWnd::OnLButtonDown(), call wasm_UnfocusHiddenInputTag()" );},

_jsfunc_Wnd_7 : function ($0)
{
	var ctx = g_ctx_s[$0];
	ctx.save();},

_jsfunc_Wnd_8 : function ($0)
{
	var ctx = g_ctx_s[$0];
	ctx.restore();},

_jsfunc_Wnd_9 : function ($0)
{
	var idxCanvas = $0;
	var whole_div = g_whole_div_s[idxCanvas];
	whole_div.parentNode.removeChild(whole_div);
	g_whole_div_s[idxCanvas] = 0;
	g_canvas_s[idxCanvas] = 0;
	g_client_div_s[idxCanvas] = 0;
	g_ctx_s[idxCanvas] = 0;
	return 1;},

_jsfunc_Wnd_10 : function ($0, $1)
{
	var pTimer = $0;
	var millisec = $1;
	var js_OnTimer = function() {
	var rr = g_exports.wa_OnTimer( pTimer );
	};
	return setInterval( js_OnTimer, millisec );},

_jsfunc_Wnd_11 : function ($0)
{
	var idTimer = $0;
	clearInterval( idTimer );},

_jsfunc_Wnd_12 : function ($0, $1, $2, $3)
{
	var idxCanvas = $0;
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
{
	var ctx = g_ctx_s[$0];
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
{
	var ctx = g_ctx_s[$0];
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
{
	var s = Pointer_stringify($0);
	alert(s);},

_jsfunc_NexFuncs_2 : function ()
{
	document.body.style.cursor = "se-resize";},

_jsfunc_NexFuncs_3 : function ()
{
	document.body.style.cursor = "e-resize";},

_jsfunc_NexFuncs_4 : function ()
{
	document.body.style.cursor = "s-resize";},

_jsfunc_NexFuncs_5 : function ()
{
	document.body.style.cursor = "default";},

_jsfunc_NexFuncs_6 : function ()
{
	document.onkeydown = null;
	document.onkeyup = null;
	g_input_tag.focus();},

_jsfunc_NexFuncs_7 : function ()
{
	document.onkeydown = js_keydown_whole;
	document.onkeyup = js_keyup_whole;},

_jsfunc_NexFuncs_8 : function ()
{
	document.onkeydown = null;
	document.onkeyup = null;},

_jsfunc_NexFuncs_9 : function ()
{
	return window.innerWidth;},

_jsfunc_NexFuncs_10 : function ()
{
	return window.innerHeight;},

_jsfunc_DC_1 : function ($0, $1, $2, $3, $4, $5, $6)
{
	var str = Pointer_stringify($5);
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
{
	var ctx = g_ctx_s[$0];
	ctx.fillStyle = Pointer_stringify($5);
	ctx.fillRect($1, $2, $3, $4);
	return 0;},

_jsfunc_DC_3 : function ($0, $1, $2, $3, $4)
{
	var ctx = g_ctx_s[$0];
	var str = Pointer_stringify($3);
	ctx.fillStyle = Pointer_stringify($4);
	ctx.textBaseline = "top";
	ctx.font = g_strFont_s[$0];
	ctx.fillText(str, $1, $2);},

_jsfunc_DC_4 : function ($0, $1, $2, $3)
{
	var ctx = g_ctx_s[$0];
	var str = String.fromCodePoint($3);
	ctx.fillStyle = "#000000";
	ctx.textBaseline = "top";
	ctx.font = g_strFont_s[$0];
	ctx.fillText(str, $1, $2);},

_jsfunc_DC_5 : function ($0, $1, $2, $3, $4, $5)
{
	var ctx = g_ctx_s[$0];
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
{
	if ( document.activeElement != null ) {
	document.activeElement.blur();
	}},

_jsfunc_TopWnd_1 : function ($0, $1)
{
	var ctx = g_ctx_s[$0];
	var str = Pointer_stringify( $1 );
	var metrics = ctx.measureText( str );
	return metrics.width;},

_jsfunc_TopWnd_2 : function ()
{
	printf_file_list = function(file_list) {
	var i;
	var num = file_list.length;
	console.log( "num = " + num );
	for ( i = 0; i < num; i++ ){
	var file = file_list[i];
	console.log( "i = " + i );
	console.log( "name:" + file.name );
	console.log( "size:" + file.size );
	console.log( "type:" + file.type );
	var reader = new FileReader();
	reader.readAsText( file, 'UTF-8' );
	reader.onload = function( readerEvent ) {
	var content = readerEvent.target.result;
	console.log( content );
	}
	}
	}},

_jsfunc_TopWnd_3 : function ()
{
	g_open_dlg_obj = new Object();
	g_open_dlg_obj.m_file_list = null;
	g_open_dlg_obj.m_bOk = 0;
	var whole_div = document.createElement('div');
	whole_div.style.position = "absolute";
	whole_div.style.left = "50px";
	whole_div.style.top = "20px";
	whole_div.style["background-color"] = "#FF0000";
	whole_div.style.border = "5px solid #00FF00";
	whole_div.style.width = "300px";
	whole_div.style.height = "110px";
	whole_div.style.zIndex = "10000000";
	document.body.appendChild( whole_div );
	g_open_dlg_obj.m_whole_div = whole_div;
	var title = document.createElement('span');
	title.innerHTML = "File Open Dialog";
	title.style.position = "absolute";
	title.style.border = "2px solid #000000";
	title.style.color = "#000000";
	title.style["background-color"] = "#FFFF00";
	title.style["text-align"] = "center";
	title.style.left = "0px";
	title.style.top = "0px";
	title.style.width = "296px";
	title.style.height = "25px";
	whole_div.appendChild( title );
	g_open_dlg_obj.m_title = title;
	file_input_tag = document.createElement('input');
	file_input_tag.type = 'file';
	file_input_tag.name = 'name';
	file_input_tag.multiple = 'multiple';
	file_input_tag.innerHTML = "input element";
	file_input_tag.style.position = "absolute";
	file_input_tag.style.border = "2px solid #000000";
	file_input_tag.style.left = "0px";
	file_input_tag.style.top = "35px";
	file_input_tag.style.width = "280px";
	file_input_tag.style.height = "32px";
	file_input_tag.style.color = "#000000";
	file_input_tag.style["background-color"] = "#00FFFF";
	whole_div.appendChild( file_input_tag );
	g_open_dlg_obj.m_file_input_tag = file_input_tag;
	CalcelToOpen = function() {
	console.log( "CalcelToOpen() γ«ζ₯γ." );
	g_exports.c_OpenDialogCanceled();
	}
	var cancel_button = document.createElement('button');
	cancel_button.innerHTML = "Cancel";
	cancel_button.style.position = "absolute";
	cancel_button.style.left = "120px";
	cancel_button.style.top = "80px";
	file_input_tag.style.height = "24px";
	cancel_button.onclick = CalcelToOpen;
	whole_div.appendChild( cancel_button );
	g_open_dlg_obj.m_cancel_button = cancel_button;
	file_input_tag.onclick = function(event) {
	console.log( "file_input_tag.onclick() is coming. " );
	}
	file_input_tag.onblur = function(event) {
	console.log( "file_input_tag.onblur() is coming. " );
	}
	file_input_tag.onfocus = function(event) {
	console.log( "file_input_tag.onfocus() is coming. " );
	}
	document.body.onfocus = function(event) {
	console.log( "document.body.onfocus() is coming." );
	}
	document.body.onblur = function(event) {
	console.log( "document.body.onblur() is coming." );
	}
	file_input_tag.onchange = function(event) {
	console.log( "file_input_tag.onchange() is coming. " );
	g_open_dlg_obj.m_bOk = 1;
	var file_list = event.target.files;
	g_open_dlg_obj.m_file_list = file_list;
	g_exports.c_OpenDialogEnd();
	}
	file_input_tag.click();},

_jsfunc_TopWnd_4 : function ()
{
	var whole_div = g_open_dlg_obj.m_whole_div;
	document.body.removeChild( whole_div );},

_jsfunc_TopWnd_5 : function ()
{
	var file_list = g_open_dlg_obj.m_file_list;
	console.log( "g_open_dlg_obj.m_bOk = " + g_open_dlg_obj.m_bOk );
	console.log( "file_list = " + file_list );
	if ( file_list != null ) {
	console.log( "begin of filelist(2)" );
	printf_file_list(file_list);
	console.log( "end of filelist(2)" );
	}
	else {
	console.log( "file_list == null" );
	}},

_jsfunc_TopWnd_6 : function ()
{
	var atag = document.createElement('a');
	atag.href = URL.createObjectURL(new Blob(['NWSTK, Hello Blob. Y.A.\n'], {type: 'text/plain'}));
	atag.download = 'test-blob-NWSTK.txt';
	atag.style.display = 'none';
	document.body.appendChild(atag);
	atag.click();
	document.body.removeChild(atag);},

_jsfunc_Image_1 : function ($0)
{
	var x = $0;
	return Math.sin( x ) * 10000000.0 ;},

_jsfunc_Image_2 : function ($0, $1)
{
	var idxImg = $0;
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
{
	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.naturalWidth;},

_jsfunc_Image_4 : function ($0)
{
	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.naturalHeight;},

_jsfunc_Image_5 : function ($0)
{
	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.clientWidth;},

_jsfunc_Image_6 : function ($0)
{
	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.clientHeight;},

_jsfunc_Image_7 : function ($0, $1, $2, $3)
{
	var idxImg = $0;
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
{
	var ctx = g_ctx_s[$0];
	var org_x = $1;
	var org_y = $2;
	ctx.resetTransform();
	ctx.translate( org_x, org_y );},

_jsfunc_Image_9 : function ($0, $1)
{
	var ctx = g_ctx_s[$0];
	var rad_x = $1;
	ctx.rotate( rad_x );},

_jsfunc_Image_10 : function ($0, $1, $2)
{
	var ctx = g_ctx_s[$0];
	ctx.translate( $1, $2 );},

_jsfunc_NewEntry_1 : function ()
{
	g_log_cnt = 0;
	js_MyPrint = function( str ) {
	console.log( "" + g_log_cnt + " : " + str );
	g_log_cnt++;
	};
	g_bTouchSupported = 0;
	if ( window.ontouchstart === null ) {
	g_bTouchSupported = 1;
	}
	js_MyPrint( "g_bTouchSupported=" + g_bTouchSupported );
	return g_bTouchSupported;},

_jsfunc_NewEntry_2 : function ($0, $1, $2)
{
	console.log( "start_from_js(), a=" + String($0) );
	console.log( "start_from_js(), b=" + String($1) );
	console.log( "start_from_js(), c=" + String($2) );},

_jsfunc_NewEntry_3 : function ()
{
	js_genshi_line = function(ctx, x1, y1, x2, y2, strCol, width) {
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
	function make_one_touch_mark(dx, dy, sx, sy) {
	canvas = document.createElement("canvas");
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.border = "0px solid #FFFFFF";
	canvas.style.position = "absolute";
	canvas.style.left = "0px";
	canvas.style.top = "30px";
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	canvas.style["background-color"] = "#00000000";
	canvas.style.zIndex = "10000000";
	canvas.style.visibility = "hidden";
	gjs_touch_mark_visiblity = 0;
	gjs_bTouchMarkEnable = 1;
	document.body.appendChild(canvas);
	var ctx = canvas.getContext("2d");
	var cx = 200 / 2;
	var cy = 200 / 2;
	js_genshi_line( ctx,
	dx + cx,
	dy,
	dx + cx,
	dy + 200 ,
	"#00FFFF",
	7
	);
	js_genshi_line( ctx,
	dx,
	dy + cy,
	dx + 200 ,
	dy + cy,
	"#00FFFF",
	7
	);
	js_genshi_circle(
	ctx,
	dx + cx,
	dy + cy,
	60 ,
	"#00FFFF",
	7
	);
	js_genshi_line( ctx,
	dx + cx,
	dy,
	dx + cx,
	dy + 200 ,
	"#0000FF",
	3
	);
	js_genshi_line( ctx,
	dx,
	dy + cy,
	dx + 200 ,
	dy + cy,
	"#0000FF",
	3
	);
	js_genshi_circle(
	ctx,
	dx + cx,
	dy + cy,
	60 ,
	"#0000FF",
	3
	);
	return canvas;
	}
	g_touch_mark_canvas_s = new Array( 4 );
	g_touch_mark_canvas_s[0] = make_one_touch_mark(
	- 0 ,
	- 0 ,
	200 ,
	( 200 / 2 - 4 )
	);
	g_touch_mark_canvas_s[1] = make_one_touch_mark(
	- 0 ,
	- ( 200 / 2 + 4 ) ,
	200 ,
	( 200 / 2 - 4 )
	);
	g_touch_mark_canvas_s[2] = make_one_touch_mark(
	- 0 ,
	- ( 200 / 2 - 4 ) ,
	( 200 / 2 - 4 ) ,
	8
	);
	g_touch_mark_canvas_s[3] = make_one_touch_mark(
	- ( 200 / 2 + 4 ) ,
	- ( 200 / 2 - 4 ) ,
	( 200 / 2 - 4 ) ,
	8
	);},

_jsfunc_NewEntry_4 : function ()
{
	g_bIME = 0;
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
{
	g_outarea = document.getElementById( "outarea" );
	g_js_img_hash = {};},

_jsfunc_NewEntry_6 : function ()
{
	g_scaling = 1.0;},

_jsfunc_NewEntry_7 : function ()
{
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "normal normal 32px monospace";
	var sxTextX = ctx.measureText("X").width;
	js_MyPrint( "font_check, width of font 'X' = " + sxTextX );
	js_MyPrint( "sxTextX / 16.0 = " + (sxTextX / 16.0) );},

_jsfunc_NewEntry_8 : function ()
{
	g_canvas_s = new Array(200 );
	g_whole_div_s = new Array(200 );
	g_ctx_s = new Array(200 );
	g_client_div_s = new Array(200 );
	g_strFont_s = new Array(200 );},

_jsfunc_NewEntry_9 : function ()
{
	g_js_bInputInputEvent = 0;
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
	js_keydown_whole = function(e) {
	var key = e.keyCode;
	var rr = g_exports.c_keydown( key );
	e.preventDefault();
	e.stopPropagation();
	};
	js_keyup_whole = function(e) {
	var key = e.keyCode;
	var rr = g_exports.c_keyup_whole( key );
	e.preventDefault();
	e.stopPropagation();
	};
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
	if ( g_bTouchSupported ) {
	var tx = mx - 200 / 2;
	var ty = my - 200 / 2;
	g_touch_mark_canvas_s[0].style.left = String(tx) + "px";
	g_touch_mark_canvas_s[0].style.top = String(ty) + "px";
	g_touch_mark_canvas_s[1].style.left = String(tx) + "px";
	g_touch_mark_canvas_s[1].style.top = String(ty + ( 200 / 2 + 4 ) ) + "px";
	g_touch_mark_canvas_s[2].style.left = String(tx) + "px";
	g_touch_mark_canvas_s[2].style.top = String(ty + ( 200 / 2 - 4 ) ) + "px";
	g_touch_mark_canvas_s[3].style.left = String(tx + ( 200 / 2 + 4 ) ) + "px";
	g_touch_mark_canvas_s[3].style.top = String(ty + ( 200 / 2 - 4 ) ) + "px";
	}
	}
	js_set_raw_touch_mark_visibility = function( bVisible ) {
	if ( g_bTouchSupported ) {
	if ( bVisible ) {
	for ( var i = 0; i < 4 ; i++ ) {
	g_touch_mark_canvas_s[i].style.visibility = "visible";
	}
	gjs_touch_mark_visiblity = 1;
	}
	else {
	for ( var i = 0; i < 4 ; i++ ) {
	g_touch_mark_canvas_s[i].style.visibility = "hidden";
	}
	gjs_touch_mark_visiblity = 0;
	}
	}
	}
	function js_touchstart(e) {
	var touch = e.touches[0];
	var mx = touch.clientX * g_scaling;
	var my = touch.clientY * g_scaling;
	if ( gjs_bTouchMarkEnable ) {
	js_move_touch_mark(mx, my);
	js_set_raw_touch_mark_visibility( 1 );
	}
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
	if ( gjs_bTouchMarkEnable ) {
	js_set_raw_touch_mark_visibility( 0 );
	}
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
	if ( gjs_bTouchMarkEnable ) {
	js_move_touch_mark(mx, my);
	js_set_raw_touch_mark_visibility( 1 );
	}
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

_jsfunc_NewEntry_10 : function ()
{
	count = 0;
	function js_OnMainTimer() {
	var rr = g_exports.wa_OnMainTimer(1);
	}
	setInterval(js_OnMainTimer, 20);},

_jsfunc_NewEntry_11 : function ($0)
{
	var bEnable = $0;
	if ( gjs_bTouchMarkEnable ) {
	js_set_raw_touch_mark_visibility( 0 );
	}
	else {
	}
	gjs_bTouchMarkEnable = bEnable;},

_jsfunc_NewEntry_12 : function ()
{
	g_bComposStarted = 1;},

_jsfunc_NewEntry_13 : function ()
{
	g_bComposStarted = 0;},

_jsfunc_NewEntry_14 : function ($0)
{
	return g_js_ime_unicode_s[$0];},

_jsfunc_NewEntry_15 : function ()
{
	js_set_delay_input_tag_caret_goto_btm();},

_jsfunc_NewEntry_16 : function ($0)
{
	g_bIME = $0;},

_jsfunc_NewEntry_17 : function ()
{
	g_input_tag.style["background-color"] = "#ffffff";
	g_input_tag.style.left = "220px";},

_jsfunc_NewEntry_18 : function ()
{
	g_input_tag.style.left = "-10000px";},

_jsfunc_NewEntry_19 : function ($0)
{
	var str1 = Pointer_stringify($0);
	g_outarea.value += str1;
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_20 : function ($0)
{
	g_outarea.value += String($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_21 : function ($0)
{
	g_outarea.value += String.fromCharCode($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_22 : function ($0, $1)
{
	alert( Pointer_stringify($0) + String($1) );},

_jsfunc_NewEntry_23 : function ()
{
	alert( "abort() is called." );},

_jsfunc_NewEntry_24 : function ($0, $1)
{
	js_MyPrint( String($0) + ", " + Pointer_stringify($1) );},

// this is foot.js from here :
};



var		g_instance;
var		g_exports;
var		g_memory;		// global memory
var     HEAP8;			// g_memory π BYTE zρΙe΅½ΰΜ


var		g_wasm_stdout_buf	= "";




// g_memory.grow() ·ιΖ g_memory ΙΞ΅Δ’ι ArrayBuffer ΝA
// detach ³κΔAV΅’ΰΜΙt―Φ¦ηκΔ΅ά€ΜΕAHEAP8
// ΘΗΙe΅Ό³Θ―κΞΘηΘ’B
function _js_on_grow_memory() {
    var		buffer = g_memory.buffer;
    
	HEAP8	= new Uint8Array(buffer);
}


function GetLengthOfPointerString( pTop ) {
	var		ptr		= pTop;
	var		len		= 0;
	for ( ;; ) {
		var  code = HEAP8[ptr];
		if ( code == 0 ) {
			break;
		}
		ptr++;
		len++;
	}
	
	return	len;
}

//function Pointer_stringify( pTop ) {
//	var		ptr		= pTop;
//	var		str1	= "";
//	for ( ;; ) {
//		var  code = HEAP8[ptr];
//		if ( code == 0 ) {
//			break;
//		}
//		
//		str1	+= String.fromCharCode(code);
//		ptr++;
//	}
//	
//	return	str1;
//}


//function Pointer_stringify( pTop ) {
//	var		len			= GetLengthOfPointerString( pTop );
//	var		u8array		= new Uint8Array(HEAP8, pTop, len);
//	
//	var		decoder		= new TextDecoder("utf-8");
//	
//	// utf8 ΜBYTE zρ©η JS Μ utf16 Άρπμι :
//	var		decodedText = decoder.decode(u8array);
//	
//	return	decodedText;
//}


function Pointer_stringify( pTop ) {
	var		len			= GetLengthOfPointerString( pTop );
	var		u8array		= new Uint8Array(len);
	
	var		ptr		= pTop;
	for ( var cnt = 0; cnt < len; cnt++ ) {
		u8array[cnt]	= HEAP8[ptr];
		ptr++;
	}
	
	var		decoder		= new TextDecoder("utf-8");
	
	// utf8 ΜBYTE zρ©η JS Μ utf16 Άρπμι :
	var		decodedText = decoder.decode(u8array);
	
	return	decodedText;
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
		
		// g_memory.grow() ·ιΖ g_memory ΙΞ΅Δ’ι ArrayBuffer ΝA
		// detach ³κΔAV΅’ΰΜΙt―Φ¦ηκΔ΅ά€ΜΕAHEAP8
		// ΘΗΙe΅Ό³Θ―κΞΘηΘ’B
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


/*
	Request Headers
		Accept-Encoding: identity
	Ι΅½’B
	
	XMLHttpRequest.setRequestHeader( "xxx", "yyy" );
*/
function get_filesize(url, callback) {
	var xhr = new XMLHttpRequest();
	
	xhr.open("HEAD", url, true); // Notice "HEAD" instead of "GET",
								 //  to get only the header
	
	// gzip ΘΗΕ³kπΉΈΙA»ΜάάΜt@CΜTCYπΤ΅Δΰη’½’ :
	xhr.setRequestHeader( "Accept-Encoding", "identity" );
	
	// σΤͺΟ»΅½ΙΔΡo³κιΦπo^΅Δ¨­ :
	xhr.onreadystatechange = function() {
		if (this.readyState == this.DONE) {
			// R[obNΦΙoCgπΐψΙ΅ΔΔΡo· :
			callback(parseInt(xhr.getResponseHeader("Content-Length")));
		}
	};
	
	// ΐΫΙ XHR π­s·ι :
	xhr.send();
}

function ya_aaa(size)
{
	console.log( "YA, From HEAD, the size of test.wasm is: "
				 + size + " bytes." );
	
	fetch("test.wasm")
	.then( response => response.arrayBuffer() )
	.then( buffer => WebAssembly.compile(buffer) )
	.then( module => WebAssembly.instantiate(module, imports) )
	.then( instance => {
		g_instance	= instance;
		g_exports	= instance.exports;
		g_memory	= g_exports.memory;
		
		// g_memory ΙΞ΅Δ’ι ArrayBuffer πAJS Μ HEAP8[] zρ
		// Ιe·ι :
		_js_on_grow_memory();
		
		var		ret		= g_exports.start_from_js( 123, 456, 3.14 );
		
		//alert( "start_from_js() = " + String(ret) );
	});
}

/*
window.onload = function() {
	get_filesize( "test.wasm", ya_aaa );
}
*/


/*
	in:		bufOld		= ΜΜ ArrayBuffer
			sizeCopy	= ΜΜobt@©ηRs[·ιoCg
			sizeNew		= V΅’ ArrayBuffer ΜoCgB
	
	EsizeNew >= sizeCopy
	EsizeCopy >= (bufOld ΜTCY)
	
	Μππ½·ΰΜΖ·ιB½Ύ΅A
		sizeNew < (bufOld ΜTCY)
	Ε ΑΔΰζ’B
*/
function resizeArrBuf(bufOld, sizeCopy, sizeNew) {
	var		bufNew		= new ArrayBuffer(sizeNew);
	var		u8arrNew	= new Uint8Array(bufNew);
	var		u8arrOld	= new Uint8Array(bufOld, 0, sizeCopy);
	
	u8arrNew.set(u8arrOld);
	
	return	bufNew;
}

window.onload = function() {
//	console.log( "window.location.hostname=" + window.location.hostname );
	
	
	
//	var		outarea		= document.getElementById( "outarea" );
	
	var		sx		= 300;
	var		sy		= 70;
	var		wx		= window.innerWidth;
	var		wy		= window.innerHeight;
	
//	console.log( "window.parent.screen.height = " + window.parent.screen.height );
//	console.log( "window.parent.screen.width = " + window.parent.screen.width );
//	console.log( "window.innerWidth  = " + window.innerWidth );
//	console.log( "window.innerHeight = " + window.innerHeight );
	
	div1 = document.createElement('div');
	div1.style.border	= "2px solid #00FF00";
	div1.style.position	= "absolute";
	div1.style.left		= String((wx - sx) / 2) + "px";
	div1.style.top		= String((wy - sy) / 2) + "px";
	div1.style.width	= String(sx) + "px";
	div1.style.height	= String(sy) + "px";
	div1.style["background-color"]	= "#FFFFFF";
	div1.style.zIndex		= "100";		// lͺ¬³’ΩΗγλ€(Μϋ)Ι ι±ΖΙΘιB
	document.body.appendChild( div1 );
	
	span1 = document.createElement('span');
	span1.style.height	= "16px";
	span1.innerHTML		= "NWSTK: Now loading a wasm module...";
	div1.appendChild( span1 );
	
	prgrs	= document.createElement('progress');
	prgrs.style.width	= "200px";
	prgrs.style.height	= "16px";
	div1.appendChild( prgrs );
	
	br1 = document.createElement('br');
	div1.appendChild( br1 );
	
	span2 = document.createElement('span');
	span2.style.height	= "16px";
	div1.appendChild( span2 );
	
	
	fetch("test.wasm")
	.then( async response => {
		// SoCg(ρ³kΜκΙΜέ³΅’l) :
		// Apache Μ mod_gzip W[Ε gzip ³k³κΔ’ικA±ΜlΝ³kγΜlΕ ΑΔA
		// ³Μ *.wasm ΜTCYΕΝΘ’BΖ±λͺAreader.read() ΕΗέάκιf[^ΝA
		// WJγΜf[^ΘΜΕA³Μ *.wasm ΜTCYΙΘΑΔ΅ά€B
		// ³kOΜf[^ΜTCYπζΎ·ιϋ@Ν©Β©ηΘ©Α½B
		// Θ¨ARequest-Header Ι Accept-Encoding πwθ·ι±ΖΰΦ~³κΔ’ιB
		// Accept-Encoding ΝA"Forbidden Header Name" Ε ιB
		// ΣͺKvB
		var			total	= Number.parseInt(response.headers.get("Content-Length"));
		
		console.log( `original total = ${total}` );
		
		/*
		for (var key of response.headers.keys()) {
			console.log( "response.headers.get(" + key + ")=" +
						  response.headers.get(key) );
		}
		*/
		
		var		cnt_enc	= response.headers.get("content-encoding");
		
		console.log( "cnt_enc=" + cnt_enc );
		
		
		
		prgrs.max		= total;
		prgrs.value		= 0;
		
		
		var		sizeBuf		= total;
		var		buffer		= new ArrayBuffer(total);
		var		u8arr		= new Uint8Array(buffer);
		
		let		sizeLoaded	= 0;		// σM΅½oCg
		
		// ­΅ΈΒΗέρΕ vOXo[Ζ % \¦Εi»σ΅π\¦·ι :
		const	reader	= response.body.getReader();
		while ( true ) {
			const {done, value} = await reader.read();
			if (done) {
				if ( sizeLoaded != sizeBuf ) {
					// obt@TCYΖ[h΅½TCYͺΩΘΑΔ’ικ :
					console.log( `At the end of fetch, final sizeLoaded = ${sizeLoaded}, ` );
					console.log( `  resize from ${sizeBuf} to ${sizeLoaded}` );
					
					buffer	= resizeArrBuf(buffer, sizeLoaded, sizeLoaded);
				}
				break;
			}
			// ΗρΎf[^ΝoCif[^iUint8ArrayjΕ^¦ηκι :
			
			// ‘ρ[h³κ½oCgiͺlj :
			var		sizeAdd			= value.length;
			
			console.log( `sizeAdd = ${sizeAdd}` );
			
			// obt@ΙKvΘoCg :
			var		sizeNeedBuf		= sizeLoaded + sizeAdd;
			if ( sizeNeedBuf > total ) {
				// obt@ͺ«θΘ’κ(­΅½ίΙmΫ΅Δ¨­) :
				var			sizeNew		= sizeLoaded + sizeAdd * 3;
				console.log( `Resize ArrayBuffer from ${sizeBuf} to ${sizeNew}` );
				
				// obt@πTCYΟX΅Δ¨­ :
				// sizeLoaded = Rs[·ιoCgAsizeNew = V΅’obt@ΜoCg :
				buffer	= resizeArrBuf(buffer, sizeLoaded, sizeNew);
				
				// obt@ΜeΰV΅’obt@ΜΰΜΙC³΅Δ¨­ :
				u8arr	= new Uint8Array(buffer);
				
				// \z³κιΕεoCgΰKxΙβ΅Δ¨­ :
				total		= sizeLoaded + sizeAdd * 2;
				// vOXo[ΜΕεlΰC³΅Δ¨­ :
				prgrs.max	= total;
				
				console.log( `new total = ${total}` );
				
				sizeBuf		= sizeNew;
			}
			
			// value zρπ u8arr zρΜ sizeLoaded ΜΚuΙRs[·ι :
			u8arr.set( value, sizeLoaded );
			
			// ΗέρΎoCgπΟZ΅Δ¨­ :
			sizeLoaded		+= sizeAdd;
			
			// vOXo[Ιlπέθ΅Δ¨­ :
			prgrs.value		= sizeLoaded;
			
			
			// 12.3 Μζ€Ι¬_ΘΊ 1 άΕ\¦·ι :
			var		perc	= ((sizeLoaded * 100.0) / total).toFixed(1);
			
	//		console.log( `${perc}% : ${sizeLoaded} / ${total}` );
	//		console.log( `sizeAdd=${sizeAdd}` );
	//		console.log( `value=${value}` );
			
			span2.innerHTML	= `${perc}% :` + sizeLoaded.toLocaleString() + " / " + total.toLocaleString();
		}
		
		// vOXo[πΝΑΔ’ι div vfSΜπν΅Δ¨­ :
		document.body.removeChild( div1 );
		
		
		return	buffer;
	})
	.then( buffer => WebAssembly.compile(buffer) )
	.then( module => WebAssembly.instantiate(module, imports) )
	.then( instance => {
		g_instance	= instance;
		g_exports	= instance.exports;
		g_memory	= g_exports.memory;
		
		// g_memory ΙΞ΅Δ’ι ArrayBuffer πAJS Μ HEAP8[] zρ
		// Ιe·ι :
		_js_on_grow_memory();
		
		var		ret		= g_exports.start_from_js( 123, 456, 3.14 );
		
		// alert( "start_from_js() = " + String(ret) );
	});
};
