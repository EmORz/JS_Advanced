
(() =>  {

    function add(vec1, vec2) {
        return [vec1[0]+vec2[0], vec1[1]+vec2[1]];
    }
    
    function multiply(vec1, scalar) {
        return  [vec1[0]*scalar, vec1[1]*scalar]
    }

    function length(vec1) {
        return   Math.sqrt(vec1[0]*vec1[0]+ vec1[1]*vec1[1])
    }

    function dot(vec1, vec2) {
        return vec1[0]*vec2[0]+vec1[1]*vec2[1]
    }

    function cross(vec1, vec2) {
        return vec1[0]*vec2[1]-vec1[1]*vec2[0]
    }
    return{
       add,
        multiply,
        length,
        dot,
        cross
    }
})();
let t = solution();

console.log(t.add([1, 1], [1, 0]))
//solution.add([1, 1], [1, 0]);	[2, 1]	[1 + 1, 1 + 0] = [2, 1]