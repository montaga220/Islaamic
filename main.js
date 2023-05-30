
var x=2,y1=0,y2=0;
function meuo(){
    if(x%2==0){
    document.getElementById("meuo").style.display="block";
x=x+1;  }
    else{
        document.getElementById("meuo").style.display="none";
        x=x+1;  }
    
} 
window.onscroll=function main(){
    console.log(this.scrollY);
    if(y1==0&&this.scrollY>=345){ 
        y1=1;
        var i=0;
 var fuun= setInterval(function fotter(){
     
         
         if(i==1){
            Shoow("ani1");
         } 
         if(i==2){
            Shoow("ani2");            
            clearInterval(fuun);
         }
         i=i+1;              
 },900)
    }
    if(y2==0&&this.scrollY>=913){
 y2=1;
 var i=0;
 var fuun= setInterval(function fotter(){
       
         if(i==1){
            Shoow_footer("footer0");
         } 
         if(i==2){
            Shoow_footer("footer1");
         } 
         if(i==3){
            Shoow_footer("footer2");            
            clearInterval(fuun);
         } i=i+1;            
 }
 ,900)
    }}

function Shoow(par1){
    var opt1=0;
    var margin1=-250;
    var show1=setInterval(function opte(){
        document.getElementById(par1).style.opacity=opt1+"%";
        document.getElementById(par1).style.marginTop=margin1+"px";
        margin1=margin1+10;
    opt1=opt1+4;
    console.log(opt1);
    if(opt1==100){ 
        clearInterval(show1);
    }
    },50)
} 
function Shoow_footer(par){
    var opt=0;
    var margin=-250;
    var show=setInterval(function opte3(){
        document.getElementById(par).style.opacity=opt+"%";
        document.getElementById(par).style.marginTop=margin+"px";
        margin=margin+10;
    opt=opt+4;
    console.log(opt);
    if(opt==100){ 
        clearInterval(show);
    }
    },50)

} 