    <!-- Le styles -->
    <link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css" rel="stylesheet">
    
    <style>
    body {
        display:none; /*very important, this is in order to hide the js rendering. After processing body is shown using js*/
    }
    </style>
    
    <style type="text/css">
      body {
        padding-top: 20px;
        padding-bottom: 60px;
      }

      /* Custom container */
      .container {
        margin: 0 auto;
        max-width: 1000px;
      }
      .container > hr {
        margin: 60px 0;
      }

      /* Main marketing message and sign up button */
      .jumbotron {
        margin: 80px 0;
        text-align: center;
      }
      .jumbotron h1 {
        font-size: 100px;
        line-height: 1;
      }
      .jumbotron .lead {
        font-size: 24px;
        line-height: 1.25;
      }
      .jumbotron .btn {
        font-size: 21px;
        padding: 14px 24px;
      }

      /* Supporting marketing content */
      .marketing {
        margin: 60px 0;
      }
      .marketing p + h4 {
        margin-top: 28px;
      }


      /* Customize the navbar links to be fill the entire space of the .navbar */
      .navbar .navbar-inner {
        padding: 0;
      }
      .navbar .nav {
        margin: 0;
        display: table;
        width: 100%;
      }
      .navbar .nav li {
        display: table-cell;
        width: 1%;
        float: none;
      }
      .navbar .nav li a {
        font-weight: bold;
        text-align: center;
        border-left: 1px solid rgba(255,255,255,.75);
        border-right: 1px solid rgba(0,0,0,.1);
      }
      .navbar .nav li:first-child a {
        border-left: 0;
        border-radius: 3px 0 0 3px;
      }
      .navbar .nav li:last-child a {
        border-right: 0;
        border-radius: 0 3px 3px 0;
      }
    </style>
    
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->
    
    <div class="container">

      <div class="masthead">
        <h3 class="muted">Quick-i18n</h3> 
            <label for = "selectText">Select example:</label>
            <select name="selectText">
                <option value = "5"> ¡Awesome! </option>
                <option value = "4"> Cool </option>
                <option value = "3"> Nice </option>
                <option value = "2"> Mediocre </option>
                <option value = "1"> Ugly </option>
            </select>
        <div class="navbar">
          <div class="navbar-inner">
            <div class="container">
              <ul class="nav">
                <!--<li class="active"><a href="#">Home</a></li>-->
                <li><a href="javascript:void(0)" onclick='setCookie("quick_i18n_lang","quick_i18n_dic_en_us.js?v=7",365);location.reload()'>View in english</a></li>
                <li><a href="javascript:void(0)" onclick='setCookie("quick_i18n_lang","quick_i18n_dic_es_co.js?v=9",365);location.reload()'>Ver en español</a></li>
                <li><a href="javascript:void(0)" onclick="alert('This is an alert example')">Alert example</a></li>
                <li><a href="javascript:void(0)" onclick="confirm('This is a confirm example')">Confirm example</a></li>
                <li><a href="javascript:void(0)" onclick="prompt('This is a prompt example','Default text')">Prompt example</a></li>
                <li><a href="javascript:void(0)" ><input type = "button" value = "Button example" class="btn btn-primary"></a></li>
                <li><a href="javascript:void(0)" ><input type="submit" value = "Submit example" class="btn btn-primary"></a></li>
                <li>
                    <a href="javascript:void(0)" onclick="">
                            <span data-trigger="hover" data-placement="left" data-original-title="Author" data-content="Quick-i18n is an original idea of Johann Paul Echavarria Zapata ( @abrupto ) with the help of: Alvaro José Agamez Licha and Juan Carlos Gonzalez Arroyave. We all three worked in www.cognox.com" rel="popover" class="hide" 
                            style="display: inline; cursor: pointer;">
                                Contact
                            </span>                            
                    </a>                     
                </li>
              </ul>
            </div>
          </div>
        </div><!-- /.navbar -->
      </div>

      <!-- Jumbotron -->
      <div class="jumbotron">
        <h1>Quick-i18n</h1>
        <p class="lead">¡Internationalization and multilanguage made quick and easy!</p>
        <a class="btn btn-large btn-success" href="#">Download latest version</a>
        
        <br><br><p class="lead">Quick-i18n is a jQuery plugin which allow you to internationalize your websites in a snap.</p>
        <h2>Four simple steps for the impatient:</h2>
        
      </div>      

      <div class="row-fluid">
        <div class="span6">
          <h2>1. Hide the body node: </h2>
          <p>Hide the body tag using a css file or a style tag at the top (better the former):</p>
<pre>
    <span style="color:blue">&lt;style&gt;</span>
    body {
        display:none; 
    }
    <span style="color:blue">&lt;/style&gt;</span>
</pre>		  
          <!--<p><a class="btn" href="#">View details &raquo;</a></p>-->
        </div>  
        <div class="span6">
          <h2>2. Add three js files and a function call: </h2>
          <p>jQuery, the plugin and a js of cookies management (at the bottom before closing the body tag):</p>
<pre>
<span style="color:blue">&lt;script</span> <span style="color:red">src</span>="jquery.min.js"<span style="color:blue">&gt;</span>
<span style="color:blue">&lt;/script&gt;</span>
<span style="color:blue">&lt;script</span> <span style="color:red">src</span>="quick_i18n.js"<span style="color:blue">&gt;</span>
<span style="color:blue">&lt;/script&gt;</span>
<span style="color:blue">&lt;script</span> <span style="color:red">src</span>="cookies.js"<span style="color:blue">&gt;</span>
<span style="color:blue">&lt;/script&gt;</span>
<span style="color:blue">&lt;script&gt;</span>
$(
    function(){
        renderLanguageFromCookie(otherPluginsProcess);
    }
);
<span style="color:blue">&lt;/script&gt;</span>
 </pre>          	  
          <!--<p><a class="btn" href="#">View details &raquo;</a></p>-->
        </div>          
      </div>
      
      <div class="row-fluid">
        <div class="span6">
          <h2>3. Create the dictionaries: </h2>
          <p>Create a js file for each language:</p>
<pre>
Take a look to this files and their structure:
<ul>
<li>quick_i18n_dic_en_us.js</li>
<li>quick_i18n_dic_es_co.js</li>
</ul>
<p>There is a helper function you can use to generate the base code for the dictionary. Just press F12 key, in any decent browser, and in the console tab type and execute:</p> 
<b>generateDictionaryTemplate()</b>
</pre>
          <!--<p><a class="btn" href="#">View details &raquo;</a></p>-->
        </div>  
        <div class="span6">
          <h2>4. Set the language:</h2>
          <p>Select the language with the Quick-i18n cookie. The first parameter is the name of the cookie and the second (cookie's value) is the path to the dictionary file. The third is the cookie expiration in days:</p>
<pre>
<span style="color:blue">&lt;script</span>&gt;
setCookie("quick_i18n_lang","quick_i18n_dic_es_co.js?Open&v=9",365);
location.reload();
<span style="color:blue">&lt;/script</span>&gt;
</pre>
        </div>          
      </div>
      <div class="row-fluid">          
          <div class="span12" style="text-align:center">
          <h2>¡Enjoy!</h2>
          <img src="Cheesy_grin.png" alt="enjoy" height="50" width="50">
          </div>      
      </div>    
         <hr>
        <h2> Details for the patient: </h2>
        <span>You will have to be more patient. This is a Beta, and there is no detailed documentation yet. :)</span>
        <hr>
      <div class="footer">
        <!--<p>No &copy; 2013</p>-->
      </div>   
    </div> <!-- /container -->

   

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>	    
	<script src="quick_i18n.js"></script>
	<script src="cookies.js?v=2"></script>
    <script>
        $(
            function(){
                renderLanguageFromCookie(otherPluginsProcess); 
                /* otherPluginsProcess is an optional parameter. It can be a function or an anonymous function with other plugins which need translated text before initialization */
            }
        );
    </script>
