/**
 * 행렬의곱셈.test.js
 */

const solution = require("./행렬의곱셈");

test('행렬의 곱셈 1', () => {
    expect(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])).toEqual([[15, 15], [15, 15], [15, 15]]);
});

test('행렬의 곱셈 2', () => {
    expect(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])).toEqual([[22, 22, 11], [36, 28, 18], [29, 20, 14]]);
});