const drawNetwork = (context, width, height, nodes, links, RADIUS) => {
  context.clearRect(0, 0, width, height);

  function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = '#999999';
    context.stroke();
  }

  function drawHead(context, x1, y1, x2, y2) {
    const dx = x2 -x1;
    const dy = y2 - y1;
    context.beginPath();
    context.moveTo(x1 + 0.5 * dy, y1 - 0.5 * dx);
    context.lineTo(x1 - 0.5 * dy, y1 + 0.5 * dx);
    context.lineTo(x2, y2);
    context.closePath();
    context.fillStyle = '#999999';
    context.fill();
  }

  function drawArrow(context, x1, y1, x2, y2, arrow, filled) {
        if (arrow == null) {
        arrow = 0.1;
        }
        const t = 1.0 - arrow;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const middleX = dx * t + x1;
        const middleY = dy * t + y1;
        drawLine(context, x1, y1, middleX, middleY);
        drawHead(context, middleX, middleY, x2, y2, filled);
    }

  // Draw the links first
  links.forEach((link) => {
    drawArrow(context, link.source.x, link.source.y, link.target.x, link.target.y);
    // context.beginPath();
    // context.moveTo(link.source.x, link.source.y);
    // context.lineTo(link.target.x, link.target.y);
    // context.lineWidth = '2px';
    // context.strokeStyle = '#999999';
    // context.stroke();
  });

  // Draw the nodes
  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }

    context.beginPath();
    context.moveTo(node.x + RADIUS, node.y);
    context.arc(node.x, node.y, RADIUS, 0, 2 * Math.PI);
    context.strokeStyle = '#ff8103';
    context.lineWidth = 7;
    context.stroke();
    context.fillStyle = '#fc9f42';
    context.fill();
    context.fillStyle = '#292929';
    context.font = "bolder 10px serif";
    context.textAlign = 'center';
    context.fillText(node.properties.neo4jImportId, node.x, node.y);
  });
};

export default drawNetwork;