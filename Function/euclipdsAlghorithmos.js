function solve(a, b) {
    
    return b === 0? a: solve(b, a % b)
}

console.log(solve(252, 105))