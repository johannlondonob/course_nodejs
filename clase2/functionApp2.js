function getUsername( codeShip ) {
    return typeof codeShip == 'string' ? (codeShip.split( ':' ))[1] : 'Código inválido'
}

console.log( getUsername( 'ARQ4324:Sara' ) )
