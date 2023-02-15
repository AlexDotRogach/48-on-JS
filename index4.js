// Є масив рядків потрібно реалізувати функцию 
// Яка на підрядки java виклиакає колбек функцію 
// яка повертає рядок супер! А на інші "так собі"

const strings = ["java", "sql", "javaScript", "c++", "node"];

function checkJava (strings, checkJavaSetting){
    strings.forEach((string) => console.log(showMessage(string, checkJavaSetting)))
}

function showMessage (string, {success, error}) {
    return string.includes("java") ? success() : error()
}

const checkJavaSetting = {
    success : () => {
        return "супер!";
    },
    error : () => {
        return  "так собі";
    }
}

checkJava(strings,checkJavaSetting);

