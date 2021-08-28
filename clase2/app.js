// Desarrollo taller 1

let coordX1 = 0
let coordX2 = 50
let coordY1 = 0
let coordY2 = -70

let x = coordX2 - coordX1
let y = coordY2 - coordY1

let powX = Math.pow( x, 2 )
let powY = Math.pow( y, 2 )

let totalPow = powX + powY

let distance1 = Math.sqrt( totalPow )

let distance2 = Math.sqrt( (Math.pow( coordX2 - coordX1, 2 )) + (Math.pow( coordY2 - coordY1, 2 )) )

console.log( `La distancia 1 del planeta Yavin4 a Naboo es de: ${ distance1 } UA` )
console.log( `La distancia 2 del planeta Yavin4 a Naboo es de: ${ distance2 } UA` )
