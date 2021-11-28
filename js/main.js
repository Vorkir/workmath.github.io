            function conwerter() {
                var number = document.getElementById("number").value;
                var m = +document.getElementById("m").value;
                var n = +document.getElementById("n").value;

                var res = parseInt(number, m).toString(n);

                document.getElementById("result").innerHTML = alert("Результат: " + res);
            }
            document.getElementById("count").addEventListener("click", conwerter);
         
			