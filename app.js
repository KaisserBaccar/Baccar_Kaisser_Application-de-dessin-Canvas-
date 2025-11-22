const COLORS =[ 
    "#000000ff" , "#FF0000" , "#ff9500ff", "#ffea00ff",
    "#51ff00ff", "#00ffeeff", "#003180ff" , "#2600ffff" ,"#FFFFFF"
];

const colorsEl = document.getElementById("colors");

COLORS.forEach(color=> {
    const btn = document.createElement('button');
    btn.className="color-btn";
    btn.style.backgroundColor= color;
    btn.addEventListener('click', () =>{
        ctx.strokeStyle = color;
        currentTool="brush";
    })
    colorsEl.appendChild(btn);

})




