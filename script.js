function calcular(type, value) {
    if (type == 'action') {
        if (value == '+' || value == '-' || value == '/' || value == '*') {
            var field = document.getElementById("insert").value;
            document.getElementById("insert").value = field + value;
        }
        if (value == '=') {
            var expression = document.getElementById("insert").value;
            document.getElementById("insert").value = eval(expression)
        }
    } else if (type == 'value') {
        var field = document.getElementById("insert").value;
        document.getElementById("insert").value = field + value;
    }

};