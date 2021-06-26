function rectangleExamples() {
    var ctx; // the canvas object's context
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "deepskyblue";
    ctx.fillRect(20,80,70,140);
    
    ctx.lineWidth = 20;
    ctx.strokeStyle = "red";
    ctx.strokeRect(140,80,70,140);

    ctx.fillRect(260,80,70,140);
    ctx.strokeRect(260,80,70,140);

    ctx.strokeRect(380,80,70,140);
    ctx.fillRect(380,80,70,140);
}