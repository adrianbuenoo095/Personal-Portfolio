import { hidesNavigationBar, openNavigationBar } from "./abu_sidebarMenu";
/**
 * Author: Adrian Bueno
 */

window.addEventListener("load", onLoad);
function onLoad(evt) {
  console.log("page is fully loaded");
  window.addEventListener("load", hidesNavigationBar);
  openNavigationBar();
}
