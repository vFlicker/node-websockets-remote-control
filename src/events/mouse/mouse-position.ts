import robot from 'robotjs'
import WebSocket from 'ws'

export const mousePosition = (ws: WebSocket) => {
  const mousePos = robot.getMousePos()
  ws.send(`${mousePos.x},${mousePos.y}`)
}
