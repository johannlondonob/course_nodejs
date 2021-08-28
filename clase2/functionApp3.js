function calcTempMedia( arrayTemps ) {
    console.log(arrayTemps)
    return((Math.max( arrayTemps.map((i) => i) ) + Math.min( arrayTemps.map((i) => i) )) / 2)
}

console.log( calcTempMedia( [24, 20, 16, 8] ) )
