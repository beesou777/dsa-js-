/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let visited = new Set()

    let X = 0
    let Y = 0

    // stating position
    visited.add(`${X},${Y}`)
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'N') {
            Y++;
        } else if (path[i] === 'S') {
            Y--;
        } else if (path[i] === 'E') {
            X++;
        } else if (path[i] === "W") {
            X--;
        } else {
            return false;
        }

        let position = `${X},${Y}`;

        if (visited.has(position)) {
            return true;
        }
        visited.add(position)
    }
    return false
};