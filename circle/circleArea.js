function circleArea(radius) {
    let area = Math.PI * (Math.pow(radius, 2))
    console.log(area);

}
function circleCircumference(radius) {
    let circumference = 2 * (Math.PI) * (radius)
    console.log(circumference);

}
module.exports = {
    circleArea,
    circleCircumference
}
