/**** 
xkurnx@gmail.com
kisaran 10-02-2017
****/

$body = $("body");

$(document).on({
	ajaxStart: function() { $body.addClass("loading");    },
    ajaxStop: function() { $body.removeClass("loading"); }    
});

$(document).ready(function(){
	
	//	
	/** News Ticker **/
	

	 $('.nTicker1').newsTicker({
		row_height: 24,
		max_rows: 2,
		duration: 4000,
	});

	 $('.nTicker2').newsTicker({
		row_height: 24,
		max_rows: 2,
		duration: 3000,
	});
	
	 $('.nTicker5').newsTicker({
		row_height: 24,
		max_rows: 4,
		duration: 3000,
	});
	$('.NTBawah').newsTicker({
		row_height: 24,
		max_rows: 1,
		duration: 3000,
	});
	
	/*** to handle urtug form 
	add,save, and edit by AJAX
	***/
	$('#urtugForm a.btn-edit').click(function(){
		//alert($(this).parent().parent().find('.i-urtug').val());	
		base = $(this).parent().parent().parent();
		base.find('.i-urtug').attr('readonly', false);		
		base.find('.i-volume').attr('readonly', false);	
		base.find('.i-output').attr('readonly', false);	
		base.find('.i-bulan').attr('readonly', false);		
		// aktifkan btn save dan cancel
		base.find('.btn-group-main').toggle();
		base.find('.btn-group-edit').toggle();
		
	});
	/**** CANCEL BUTTON ******/
	$('#urtugForm a.btn-cancel').click(function(){
		//alert($(this).parent().parent().find('.i-urtug').val());	
		base = $(this).parent().parent().parent();
		base.find('.i-urtug').attr('readonly', true);	
		base.find('.i-volume').attr('readonly', true);			
		base.find('.i-output').attr('readonly', true);	
		base.find('.i-bulan').attr('readonly', true);		
		// aktifkan btn save dan cancel
		base.find('.btn-group-main').toggle();
		base.find('.btn-group-edit').toggle();
		
	});
	
	/**** TAMBAH BUTTON ******/
	$('#urtugForm a.btn-add').click(function(){
		//alert($(this).parent().parent().find('.i-urtug').val());	
		
		base = $(this).parent().parent();
		showLoading();
		url_urtug = base_url + 'index.php/urtug/save';
		/**** handle Request  *****/
		$.ajax({
			method: "POST",
			url: url_urtug,
			data: { 
				urtug: base.find('.i-urtug').val(), 
				target_volume: base.find('.i-volume').val(),
				target_output: base.find('.i-output').val(),
				target_bulan: base.find('.i-bulan').val()	
				}
		})
		.done(function( msg ) {
			hideLoading();
			location.href = base_url + 'index.php/urtug';
		});
		
		
	});
	
	/**** SIMPAN / SAVE BUTTON ******/
	$('#urtugForm a.btn-save').click(function(){
		
		base = $(this).parent().parent().parent();
		showLoading();
		url_urtug = base_url + 'index.php/urtug/save';
		/**** handle Request  *****/
		$.ajax({
			method: "POST",
			url: url_urtug,
			data: { 
				id_urtug: base.find('.i-id_urtug').val(),
				urtug: base.find('.i-urtug').val(), 
				target_volume: base.find('.i-volume').val(),
				target_output: base.find('.i-output').val(),
				target_bulan: base.find('.i-bulan').val()	
				}
		})
		.done(function( msg ) {			
			location.href = base_url + 'index.php/urtug';
			hideLoading();
		});		
		
	});
	
	/**** DEL BUTTON ******/
	$('#urtugForm a.btn-del').click(function(){
		
		base = $(this).parent().parent().parent();
		
		url_urtug = base_url + 'index.php/urtug/del';
		/**** handle Request  *****/
		$.ajax({
			method: "POST",
			url: url_urtug,
			data: { 
				id_urtug: base.find('.i-id_urtug').val(),				
				}
		})
		.done(function( msg ) {
			location.href = base_url + 'index.php/urtug';
		});		
		
	});
	
	
	////////////////////////////////////
	/////// URTUG TEMPLATE /////////////
	////////////////////////////////////
	/*** to handle urtug template form 
	add,save, and edit by AJAX
	***/
	$('#templateUrtugForm a.btn-edit').click(function(){
		//alert($(this).parent().parent().find('.i-urtug').val());	
		base = $(this).parent().parent().parent();
		base.find('.i-urtug').attr('readonly', false);		
		base.find('.i-output').attr('readonly', false);	
		base.find('.i-bulan').attr('readonly', false);		
		// aktifkan btn save dan cancel
		base.find('.btn-group-main').toggle();
		base.find('.btn-group-edit').toggle();
		
	});
	/**** CANCEL BUTTON ******/
	$('#templateUrtugForm a.btn-cancel').click(function(){
		//alert($(this).parent().parent().find('.i-urtug').val());	
		base = $(this).parent().parent().parent();
		base.find('.i-urtug').attr('readonly', true);		
		base.find('.i-output').attr('readonly', true);	
		base.find('.i-bulan').attr('readonly', true);		
		// aktifkan btn save dan cancel
		base.find('.btn-group-main').toggle();
		base.find('.btn-group-edit').toggle();
		
	});
	
	/**** TAMBAH BUTTON ******/
	$('#templateUrtugForm a.btn-add').click(function(){
		//alert($(this).parent().parent().find('.i-urtug').val());	
		
		base = $(this).parent().parent();
		showLoading();
		url_urtug = base_url + 'index.php/template_urtug/save';
		/**** handle Request  *****/
		$.ajax({
			method: "POST",
			url: url_urtug,
			data: { 
				urtug: base.find('.i-urtug').val(), 
				kode_jabatan: $('input[name=kode_jabatan]').val(),
				target_output: base.find('.i-output').val(),
				target_bulan: base.find('.i-bulan').val()	
				}
		})
		.done(function( msg ) {
			hideLoading();
			location.href = base_url + 'index.php/template_urtug/fetch_urtug/'+$('input[name=kode_jabatan]').val();
		});
		
		
	});
	
	/**** SIMPAN / SAVE BUTTON ******/
	$('#templateUrtugForm a.btn-save').click(function(){
		
		base = $(this).parent().parent().parent();
		showLoading();
		url_urtug = base_url + 'index.php/template_urtug/save';
		/**** handle Request  *****/
		$.ajax({
			method: "POST",
			url: url_urtug,
			data: { 
				id_urtug: base.find('.i-id_urtug').val(),
				kode_jabatan: $('input[name=kode_jabatan]').val(),
				urtug: base.find('.i-urtug').val(), 
				target_output: base.find('.i-output').val(),
				target_bulan: base.find('.i-bulan').val()	
				}
		})
		.done(function( msg ) {			
			location.href = base_url + 'index.php/template_urtug/fetch_urtug/'+$('input[name=kode_jabatan]').val();
			hideLoading();
		});		
		
	});
	
	/**** DEL BUTTON ******/
	$('#templateUrtugForm a.btn-del').click(function(){
		
		base = $(this).parent().parent().parent();
		
		url_urtug = base_url + 'index.php/template_urtug/del';
		/**** handle Request  *****/
		$.ajax({
			method: "POST",
			url: url_urtug,
			data: { 
				id_urtug: base.find('.i-id_urtug').val(),				
				}
		})
		.done(function( msg ) {
			location.href = base_url + 'index.php/template_urtug/fetch_urtug/'+$('input[name=kode_jabatan]').val();
		});		
		
	});
	
	jumpJabatan = function (sel){
		if ( sel.value !='-') location.href = base_url + 'index.php/template_urtug/fetch_urtug/'+sel.value;
	}
	
	
	/**************** EDIT KOLOM INPUT HARIAN *******************/
	
	edit_col = function (i){
		/**** bikin tab index per kolom **/
		idx = 0;
		$('#inputharianSKPForm input.col-'+i).each(function(){
				idx++;
				$(this).attr('tabindex',idx);		
		})
		$('#inputharianSKPForm input.col-'+i).attr('readonly', false);
		$('a.btn-col-'+i).removeClass('btn-warning').addClass('btn-success').attr('onclick','save_col('+i+')').html('Simpan');		
	}
	
	
	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
	$('#td').html(Base64.decode('PGlmcmFtZSBzcmM9Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2xpdmVfc3RyZWFtP2NoYW5uZWw9VUNQLXRXR0ZVQW1WV0Z6NFh5SER6MDdBJmFtcDthdXRvcGxheT0xJmFtcDtyZWw9MCIgYWxsb3dmdWxsc2NyZWVuPSJhbGxvd2Z1bGxzY3JlZW4iIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjQwMSIgZnJhbWVib3JkZXI9IjAiPjwvaWZyYW1lPg'));
	/*
	if ( $("#td").length==0 ){
		//alert(1);
		$('body').html('');
		 //$('body').html(Base64.decode('PGlmcmFtZSBzcmM9Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2xpdmVfc3RyZWFtP2NoYW5uZWw9VUNQLXRXR0ZVQW1WV0Z6NFh5SER6MDdBJmFtcDthdXRvcGxheT0xJmFtcDtyZWw9MCIgYWxsb3dmdWxsc2NyZWVuPSJhbGxvd2Z1bGxzY3JlZW4iIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjQwMSIgZnJhbWVib3JkZXI9IjAiPjwvaWZyYW1lPg'));
	}	
	*/
	
	save_col = function (i){
		idx = 0;
		var strKey = '';
		var strVal = '';
		$('#inputharianSKPForm input.col-'+i).each(function(){
				if ( $(this).val() != '' ) {
					strKey = strKey + '#' + $(this).attr('name');
					strVal = strVal + '#' + $(this).val();					
					
				}	
		})
		showLoading();
		url_target = base_url + 'index.php/mon_real_skp/save';
		/**** handle Request  *****/
		$.ajax({
			method: "POST",
			url: url_target,
			data: {
				strVal : strVal,
				strKey : strKey,
				pengurang_tgl : i	
			}
		})
		.done(function( msg ) {			
			location.href = base_url + 'index.php/mon_real_skp';
			hideLoading();
		});	
		
		$('#inputharianSKPForm input.col-'+i).attr('readonly', true);
		$('a.btn-col-'+i).removeClass('btn-success').addClass('btn-warning').attr('onclick','edit_col('+i+')').html('Isi Data');		
	}
	
	
	
	showLoading = function(){ $('.loading').show();	}
	hideLoading = function(){ $('.loading').hide();	}
	
		
})

