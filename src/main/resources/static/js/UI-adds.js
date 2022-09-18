// UI-adds.js


// Get time when note is posted
function get_post_date() 
{
    let click_time = new Date();
    document.getElementById('submission time').innerHTML=click_time;
}

<input type=button value='Show Date' onclick="get_post_date();">
    <div id=time_display>
      <img src="bw-abstract1.png" >ART</img>  
    </div>
</input>
