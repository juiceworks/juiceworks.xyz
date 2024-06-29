//@ts-check
import $ from "jquery";

//@ts-ignore
import home from "./views/home.html?raw";


$(function() {
  $("#content").html(home);
})
