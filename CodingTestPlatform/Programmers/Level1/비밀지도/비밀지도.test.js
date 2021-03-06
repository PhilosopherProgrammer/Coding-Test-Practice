/**
 * 비밀지도.test.js
 */

const solution = require("./비밀지도");

test('비밀지도 1', () => {
    expect(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####", "# # #", "### #", "#  ##", "#####"]);
});

test('비밀지도 2', () => {
    expect(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])).toEqual(["######", "###  #", "##  ##", " #### ", " #####", "### # "]);
});

