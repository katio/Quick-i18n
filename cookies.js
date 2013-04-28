function otherPluginsProcess(){                
        $("[rel='popover']").popover();
        $("[rel='popover']").css( {"cursor" : "pointer"} );                
}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}

function renderLanguageFromCookie(callback)
{
var langCookie = getCookie("quick_i18n_lang");
//var arrDictionary; 
if (langCookie != null && langCookie != "")
  {
   $.ajax({
   type: "get",
   url: langCookie,  
   cache:false,
   dataType:'json',
   success: 
        function(json){
        /*Assignation of language from cookie calling quick_i18n plugin*/                
        $('html').quick_i18n(
            {
              "dictionary" : json,
              "translateAlertPrompConfirm" : true,
              "attr" : [ "value" , "data-content"] /*Array with attributes to translate buttons and other important attr*/
            }
        ); 
   }
 }).done(function( msg ) {
   if( callback ){
    callback();
   } 
   $("body").show(); /*very important, this is in order to hide the js rendering. Body should be hidden previously using CSS*/
}).fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ', ' + error;    
    alert("Dictionary file "+langCookie+" couldn't be loaded or bad format: "+ err);
    });
  }
else 
  {
   if( callback ){
    callback();
   }   
    /*No cookie, no translation. Just show the body*/
    $("body").show(); /*very important, this is in order to hide the js rendering. Body should be hidden previously using CSS*/
  }    
}