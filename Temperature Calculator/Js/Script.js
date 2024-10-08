function convert() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit");

    if (celsius !== "") {
      fahrenheit.value = (celsius * 9/5) + 32;
      document.getElementById("result").innerHTML = "Cara Kalkulasi: " + celsius + "°C * (9/5) + 32 = " + fahrenheit.value + "°F";
      document.getElementById("info").innerHTML = "Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)";
      document.getElementById("sinfo").innerHTML = "Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celsius (°C) kali 9/5 tambah 32"
      document.getElementById("equation01").innerHTML = "S(°C) * (9/5) + 32 = S(°F)";
      document.getElementById("or").innerHTML = "or";
      document.getElementById("equation02").innerHTML = "S(°C) * (1.8) + 32 = S(°F)";
    } else {
      document.getElementById("result").innerHTML = "Masukkan suhu dalam derajat Celsius.";
      document.getElementById("info").innerHTML = "";
      document.getElementById("sinfo").innerHTML = ""
      document.getElementById("equation01").innerHTML = "";
      document.getElementById("or").innerHTML = "";
      document.getElementById("equation02").innerHTML = "";
    }
  }

  function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").innerHTML = "";
  }

  function reverse() {
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");

    if (fahrenheit.value !== "") {
      celsius.value = (fahrenheit.value - 32) * 5/9;
      document.getElementById("result").innerHTML = "Cara Kalkulasi: " + fahrenheit.value + "°F * (5/9) - 32 = " + celsius.value + "°C";
      document.getElementById("info").innerHTML = "Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)";
      document.getElementById("sinfo").innerHTML = "Suhu S dalam derajat Celsius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) kali 5/9 dikurangi 32";
      document.getElementById("equation01").innerHTML = "S(°F) * (5/9) - 32 = S(°C)";
      document.getElementById("or").innerHTML = "or";
      document.getElementById("equation02").innerHTML = "S(°F) * (0.556) - 32 = S(°C)";
    } else {
      document.getElementById("result").innerHTML = "Masukkan suhu dalam derajat Fahrenheit.";
      document.getElementById("info").innerHTML = "";
      document.getElementById("sinfo").innerHTML = ""
      document.getElementById("equation01").innerHTML = "";
      document.getElementById("or").innerHTML = "";
      document.getElementById("equation02").innerHTML = "";
    }
  }