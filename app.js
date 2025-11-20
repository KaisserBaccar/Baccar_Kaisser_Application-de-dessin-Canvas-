const COLORS =[ 
    "#000000" , "#FF0000" , "#00FF00", "#0000FF",
    "#FFFF00", "#FFA500", "#800080" , "#00FFFF"
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




