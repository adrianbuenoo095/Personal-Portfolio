export function getsCurrentYear() : string {
  let dateElement = document.getElementById("date")!;
  let date = new Date();
  let fullYear = date.getFullYear();
  
  return dateElement.innerHTML = `${fullYear}`;
}
