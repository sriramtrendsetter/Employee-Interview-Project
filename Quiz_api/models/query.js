const register = "INSERT INTO participant (name,email,password,score) values ($1, $2, $3,$4)";
const getQuestions = "select * from quiz";
const sel = "select password from users WHERE name = $1";
module.exports = {register, getQuestions,sel};