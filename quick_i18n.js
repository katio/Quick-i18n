    /*Author: Johann Paul Echavarria Zapata with the help of Alvaro José Agamez Licha and Juan Carlos Gonzalez Arroyave*/
    
    /*Start of helper function for generate the dictionary template of the current site. This should be improved maybe as a navigators plugin*/
    function generateDictionaryTemplate(){
        var textNode = $("*:not(style, script, head, html, body)").contents().filter(function(){return this.nodeType === 3});
        var value;          
        var buffer;
        var windowHelper;
        var isFirstNode = true;
        buffer = "{";
        textNode.each(
            function(index){  
                    if( "" !== $.trim(this.data)){
                        if(false === isFirstNode){
                            buffer = buffer + "<br><br>,";
                        }else{
                            isFirstNode = false;
                        }
                        value = $.trim( 
                            this.data.replace(/\"/g,'\\\"') 
                            );
                        buffer = buffer + '"' + value +'" : <br>"' + value +'"';
                        //buffer = buffer + '"' + this.data +'" : <br>"' + this.data +'"';
                    }

            }
        );    
        buffer = buffer + "}";
        windowHelper = window.open('','','width = 800,height = 600, resizable=yes, scrollbars=yes');
        windowHelper.document.write(buffer);
        windowHelper.focus();        
    }
    /*End of helper function for generate the dictionary template of the current site*/


/*Auxiliar vars for redefinition of alert, confirm and prompt. This can be improved*/
var alertCopy;
var confirmCopy;
var promptCopy;
 
 (function( $ ){
  'use strict';         
  $.fn.quick_i18n = function( options ) {  
    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( { /*This should be improved*/
      'parameter1' : 'true',
      'parameter2' : 'false'
    }, options);

    function cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));             
    }    
    
    function translate(message){ /*This way of define the method should be checked*/
        var value;
       if( "" !==  $.trim( message ) ){
           value = settings.dictionary[ $.trim( message ) ];                                
           if(value){                                                 
                 return value;                              
           }else{
                 return message;   
           }                          
       }
    };
    
    if (true === settings.translateAlertPrompConfirm){ /* === may appears redundant but...*/
    
        /* Start of redefinition of alert and confirm methods */
        if (typeof alertCopy == "undefined"){
            alertCopy = window.alert; /*in order to avoid recursive calling*/
                window.alert =  function(par){
                    var value;
                    value = translate(par);
                   if ( $.trim( value ) !== $.trim( par) ){
                        par = value;
                   }                    
                    return alertCopy(par);
                }
        }
        if (typeof confirmCopy == "undefined"){
         confirmCopy = window.confirm;
         window.confirm =  function(par){
            var value;
            value = translate(par);
           if ( $.trim( value ) !== $.trim( par) ){
                par = value;
           }         
            return confirmCopy(par);
         }
        }
        if (typeof promptCopy == "undefined"){
         promptCopy = window.prompt;
         window.prompt =  function(par, defaultText){
            var value;
            var parDefault;
            
            value = translate(par);
           if ( $.trim( value ) !== $.trim( par) ){
                par = value;
           }
           if(defaultText){
               parDefault = translate(defaultText);
               if ( $.trim( parDefault ) !== $.trim( defaultText) ){
                    defaultText = parDefault;
               }
                
                return promptCopy(par, parDefault);
                
           }else{
                return promptCopy(par);
           }

         }
        }        
        /* End of redefinition of alert and confirm methods */
    }    
        
    return this.each(function() {                                   
            /*Start of massive translation of every single paragraph with the dictionary selected*/                      			
            var textNode = $(this).find("*:not(style, script, head, html, body)").contents().filter(function(){return this.nodeType === 3});
            var value;
            var selector;  
            var attribute;    
            textNode.each(
                function(index){                                   
                        value = translate($.trim(this.data));
                       if ( $.trim( value ) !== $.trim( this.data) ){
                            this.data = value;
                       }
                }
            );
        
        if (settings.attr){ /*Aditional attributes to translate like value for buttons and data-x for some other plugins*/
            $.each(
                settings.attr,
                function(){                                        
                    attribute = this;
                    selector = '[' + attribute + ']';                    
                        $(selector).each(
                            function(){
                                $(this).attr(
                                    attribute, 
                                    translate( 
                                        $.trim( $(this).attr(attribute) ) 
                                    ) 
                                );                            
                            }
                        );                                            
                }    
            )
        }
        /*End of massive translation of every single paragraph in text nodes selected with the dictionary selected*/
    });

  };
})( jQuery );


/*
Parameters: 
    dictionary: is a simple js array.
    translateAlertPrompConfirm: defines whether overwrite alert, prompt and confirm.
    attr: array with attributes to translate buttons and other important attr.
Example: 
        $('html').quick_i18n(
            {
              "dictionary" : quick_i18n_dic_es_co.js,
              "translateAlertPrompConfirm" : true,
              "attr" : [ "value" , "data-content"] 
            }
        );
*/