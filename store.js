// Initialization for ES Users
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Collapse });

const header =document.querySelector(header);

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.screenY > 0)
});