/*
    최대값구하기.sql
    https://programmers.co.kr/learn/courses/30/lessons/59415?language=mysql
*/

SELECT DATETIME FROM ANIMAL_INS ORDER BY DATETIME DESC LIMIT 1

SELECT MAX(DATETIME) FROM ANIMAL_INS