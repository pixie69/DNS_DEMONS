async function sendPackets() {
  let numOfPackets = 0;
  let corrupted = [];
  const screen = document.getElementById("animation-screen");
  const data = document.getElementById("data-string").value;
  const corrupted_input = document.getElementById("corrupted-packets").value;

  numOfPackets = data.length;
  if (corrupted_input !== "") {
    corrupted = corrupted_input.split(",");
  }
  console.log(numOfPackets);
  console.log(corrupted);
  for (let i = 1; i <= numOfPackets; i++) {
    const isCorrupt = corrupted.indexOf(data[i-1]) !== -1;
    const packet = (
      `<div class="row-item">
      ${isCorrupt?`<div class=\"packet corrupt\">${data[i-1]}</div>`:`<div class=\"packet\">${data[i-1]}</div>`}
      </div>`
    );
    screen.innerHTML += packet;
  }
  const packets = document.getElementsByClassName("packet");
  for (let i = 0; i < packets.length; i++) {
    const element = packets[i];
    const isCorrupt = element.classList.contains("corrupt");
    element.style.border = isCorrupt ? "1px solid red" : "1px solid black";
    element.style.animation = isCorrupt
      ? "corruptedAnimation"
      : "normalAnimation";
    element.style.animationDuration = "4s";
    element.style.animationDelay = `${i * 4000}ms`;
  }
  screen.innerHTML+=`<div class="row-item" style="text-align:center;">Total number of transmissions: ${corrupted.length+numOfPackets}</div>`;
}
