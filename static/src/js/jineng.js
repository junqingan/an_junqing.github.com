$(document).ready(function($) {

  // 技能专栏 HTML
  var canvasHtml = document.getElementById("canvas_html");
  var context = canvasHtml.getContext("2d");
  var w = canvasHtml.width = "150";
  var h = canvasHtml.height = "150";
  function drow(per) {
      context.clearRect(0, 0, w, h);
      if (!per) per = 0;

      context.beginPath();
      if (per < 1) {
          context.arc(75, 75, 50, Math.PI * 1.5, (Math.PI * 2 * per) - (0.5 * Math.PI), false);
      } else {
          context.arc(75, 75, 50, Math.PI * 0, Math.PI * 2, false);
      }
      context.font  = "30px Arial";
      context.lineWidth = 15;
      context.fillStyle="yellowgreen";
      context.strokeStyle= "yellowgreen"
      context.fillText( Math.round(per*100) + "%",75,85);
      context.textAlign = "center";
      context.stroke();
  }

  function drowAnimat(number,per) {
    per = per || 0;
    setTimeout(function(){
      if(per >= number) return ;
      per += 0.01;
      drow(per);
      if(per < number) drowAnimat(number,per);
    },20);
  }
  drowAnimat(0.80);




  // 技能专栏 js
  var canvasJs = document.getElementById("canvas_js");
  var contexts = canvasJs.getContext("2d");
  var m = canvasJs.width = "150";
  var s = canvasJs.height = "150";
  function drows(per) {
      contexts.clearRect(0, 0, m, s);
      if (!per) per = 0;

      contexts.beginPath();
      if (per < 1) {
          contexts.arc(75, 75, 50, Math.PI * 1.5, (Math.PI * 2 * per) - (0.5 * Math.PI), false);
      } else {
          contexts.arc(75, 75, 50, Math.PI * 0, Math.PI * 2, false);
      }
      contexts.font  = "30px Arial";
      contexts.lineWidth = 15;
      contexts.fillStyle="#ff6400";
      contexts.strokeStyle= "#ff6400"
      contexts.fillText( Math.round(per*100) + "%",75,85);
      contexts.textAlign = "center";
      contexts.stroke();
  }

  function drowAnimats(number,per) {
    per = per || 0;
    setTimeout(function(){
      if(per >= number) return ;
      per += 0.01;
      drows(per);
      if(per < number) drowAnimats(number,per);
    },20);
  }

  drowAnimats(0.6);




    // 技能专栏 gulp
  var canvasgp = document.getElementById("canvas_gp");
  var contextg = canvasgp.getContext("2d");
  var l = canvasgp.width = "150";
  var k = canvasgp.height = "150";
  function drowst(per) {
      contextg.clearRect(0, 0, l, k);
      if (!per) per = 0;
      contextg.beginPath();
      if (per < 1) {
          contextg.arc(75, 75, 50, Math.PI * 1.5, (Math.PI * 2 * per) - (0.5 * Math.PI), false);
      } else {
          contextg.arc(75, 75, 50, Math.PI * 0, Math.PI * 2, false);
      }
      contextg.font  = "30px Arial";
      contextg.lineWidth = 15;
      contextg.fillStyle="#1796BD";
      contextg.strokeStyle= "#1796BD"
      contextg.fillText( Math.round(per*100) + "%",75,85);
      contextg.textAlign = "center";
      contextg.stroke();
  }
  function drowAnimatst(number,per) {
    per = per || 0;
    setTimeout(function(){
      if(per >= number) return ;
      per += 0.01;
      drowst(per);
      if(per < number) drowAnimatst(number,per);
    },20);
  }
  drowAnimatst(0.7);
});
