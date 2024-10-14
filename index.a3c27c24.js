var t=Array.from(document.querySelectorAll(".population")).map(function(t){return Number(t.textContent.split(",").join(""))}),e=t.reduce(function(t,e){return t+e},0),o=e/t.length,n=e.toLocaleString(),r=Math.round(o).toLocaleString();document.querySelector(".total-population").textContent=n,document.querySelector(".average-population").textContent=r;
//# sourceMappingURL=index.a3c27c24.js.map
