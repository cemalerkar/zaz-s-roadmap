var A1 = document.getElementById("a1");
var B1 = document.getElementById("b1");
var C1 = document.getElementById("c1");
var D1 = document.getElementById("d1");
var E1 = document.getElementById("e1");
var F1 = document.getElementById("f1");
var G1 = document.getElementById("g1");
var H1 = document.getElementById("h1");
var J1 = document.getElementById("j1");
var K1 = document.getElementById("k1");
var L1 = document.getElementById("l1");
var M1 = document.getElementById("m1");
var N1 = document.getElementById("n1");
var O1 = document.getElementById("o1");
var P1 = document.getElementById("p1");
var R1 = document.getElementById("r1");

var A2 = document.getElementById("a2");
var B2 = document.getElementById("b2");
var C2 = document.getElementById("c2");
var D2 = document.getElementById("d2");
var E2 = document.getElementById("e2");
var F2 = document.getElementById("f2");

var A3 = document.getElementById("a3");
var B3 = document.getElementById("b3");

var A4 = document.getElementById("a4");

if (localStorage.getItem("A1") == "tamamlandi") {
  A1.style.textDecoration = "line-through";
}
if (localStorage.getItem("B1") == "tamamlandi") {
  B1.style.textDecoration = "line-through";
}
if (localStorage.getItem("C1") == "tamamlandi") {
  C1.style.textDecoration = "line-through";
}
if (localStorage.getItem("D1") == "tamamlandi") {
  D1.style.textDecoration = "line-through";
}
if (localStorage.getItem("E1") == "tamamlandi") {
  E1.style.textDecoration = "line-through";
}
if (localStorage.getItem("F1") == "tamamlandi") {
  F1.style.textDecoration = "line-through";
}
if (localStorage.getItem("G1") == "tamamlandi") {
  G1.style.textDecoration = "line-through";
}
if (localStorage.getItem("H1") == "tamamlandi") {
  H1.style.textDecoration = "line-through";
}
if (localStorage.getItem("J1") == "tamamlandi") {
  J1.style.textDecoration = "line-through";
}
if (localStorage.getItem("K1") == "tamamlandi") {
  K1.style.textDecoration = "line-through";
}
if (localStorage.getItem("L1") == "tamamlandi") {
  L1.style.textDecoration = "line-through";
}
if (localStorage.getItem("M1") == "tamamlandi") {
  M1.style.textDecoration = "line-through";
}
if (localStorage.getItem("N1") == "tamamlandi") {
  N1.style.textDecoration = "line-through";
}
if (localStorage.getItem("O1") == "tamamlandi") {
  O1.style.textDecoration = "line-through";
}
if (localStorage.getItem("P1") == "tamamlandi") {
  P1.style.textDecoration = "line-through";
}
if (localStorage.getItem("R1") == "tamamlandi") {
  R1.style.textDecoration = "line-through";
}

if (localStorage.getItem("A2") == "tamamlandi") {
  A2.style.textDecoration = "line-through";
}
if (localStorage.getItem("B2") == "tamamlandi") {
  B2.style.textDecoration = "line-through";
}
if (localStorage.getItem("C2") == "tamamlandi") {
  C2.style.textDecoration = "line-through";
}
if (localStorage.getItem("D2") == "tamamlandi") {
  D2.style.textDecoration = "line-through";
}
if (localStorage.getItem("E2") == "tamamlandi") {
  E2.style.textDecoration = "line-through";
}
if (localStorage.getItem("F2") == "tamamlandi") {
  F2.style.textDecoration = "line-through";
}

if (localStorage.getItem("A3") == "tamamlandi") {
  A3.style.textDecoration = "line-through";
}
if (localStorage.getItem("B3") == "tamamlandi") {
  B3.style.textDecoration = "line-through";
}

if (localStorage.getItem("A4") == "tamamlandi") {
  A4.style.textDecoration = "line-through";
}

A1.onclick = function () {
  if (localStorage.getItem("A1") == "tamamlandi") {
    localStorage.setItem("A1", "tamamlanmadi");
    A1.style.textDecoration = "";
  } else {
    localStorage.setItem("A1", "tamamlandi");
    A1.style.textDecoration = "line-through";
  }
};
B1.onclick = function () {
  if (localStorage.getItem("B1") == "tamamlandi") {
    localStorage.setItem("B1", "tamamlanmadi");
    B1.style.textDecoration = "";
  } else {
    localStorage.setItem("B1", "tamamlandi");
    B1.style.textDecoration = "line-through";
  }
};
C1.onclick = function () {
  if (localStorage.getItem("C1") == "tamamlandi") {
    localStorage.setItem("C1", "tamamlanmadi");
    C1.style.textDecoration = "";
  } else {
    localStorage.setItem("C1", "tamamlandi");
    C1.style.textDecoration = "line-through";
  }
};
D1.onclick = function () {
  if (localStorage.getItem("D1") == "tamamlandi") {
    localStorage.setItem("D1", "tamamlanmadi");
    D1.style.textDecoration = "";
  } else {
    localStorage.setItem("D1", "tamamlandi");
    D1.style.textDecoration = "line-through";
  }
};
E1.onclick = function () {
  if (localStorage.getItem("E1") == "tamamlandi") {
    localStorage.setItem("E1", "tamamlanmadi");
    E1.style.textDecoration = "";
  } else {
    localStorage.setItem("E1", "tamamlandi");
    E1.style.textDecoration = "line-through";
  }
};
F1.onclick = function () {
  if (localStorage.getItem("F1") == "tamamlandi") {
    localStorage.setItem("F1", "tamamlanmadi");
    F1.style.textDecoration = "";
  } else {
    localStorage.setItem("F1", "tamamlandi");
    F1.style.textDecoration = "line-through";
  }
};
G1.onclick = function () {
  if (localStorage.getItem("G1") == "tamamlandi") {
    localStorage.setItem("G1", "tamamlanmadi");
    G1.style.textDecoration = "";
  } else {
    localStorage.setItem("G1", "tamamlandi");
    G1.style.textDecoration = "line-through";
  }
};
H1.onclick = function () {
  if (localStorage.getItem("H1") == "tamamlandi") {
    localStorage.setItem("H1", "tamamlanmadi");
    H1.style.textDecoration = "";
  } else {
    localStorage.setItem("H1", "tamamlandi");
    H1.style.textDecoration = "line-through";
  }
};
J1.onclick = function () {
  if (localStorage.getItem("J1") == "tamamlandi") {
    localStorage.setItem("J1", "tamamlanmadi");
    J1.style.textDecoration = "";
  } else {
    localStorage.setItem("J1", "tamamlandi");
    J1.style.textDecoration = "line-through";
  }
};
K1.onclick = function () {
  if (localStorage.getItem("K1") == "tamamlandi") {
    localStorage.setItem("K1", "tamamlanmadi");
    K1.style.textDecoration = "";
  } else {
    localStorage.setItem("K1", "tamamlandi");
    K1.style.textDecoration = "line-through";
  }
};
L1.onclick = function () {
  if (localStorage.getItem("L1") == "tamamlandi") {
    localStorage.setItem("L1", "tamamlanmadi");
    L1.style.textDecoration = "";
  } else {
    localStorage.setItem("L1", "tamamlandi");
    L1.style.textDecoration = "line-through";
  }
};
M1.onclick = function () {
  if (localStorage.getItem("M1") == "tamamlandi") {
    localStorage.setItem("M1", "tamamlanmadi");
    M1.style.textDecoration = "";
  } else {
    localStorage.setItem("M1", "tamamlandi");
    M1.style.textDecoration = "line-through";
  }
};
N1.onclick = function () {
  if (localStorage.getItem("N1") == "tamamlandi") {
    localStorage.setItem("N1", "tamamlanmadi");
    N1.style.textDecoration = "";
  } else {
    localStorage.setItem("N1", "tamamlandi");
    N1.style.textDecoration = "line-through";
  }
};
O1.onclick = function () {
  if (localStorage.getItem("O1") == "tamamlandi") {
    localStorage.setItem("O1", "tamamlanmadi");
    O1.style.textDecoration = "";
  } else {
    localStorage.setItem("O1", "tamamlandi");
    O1.style.textDecoration = "line-through";
  }
};
P1.onclick = function () {
  if (localStorage.getItem("P1") == "tamamlandi") {
    localStorage.setItem("P1", "tamamlanmadi");
    P1.style.textDecoration = "";
  } else {
    localStorage.setItem("P1", "tamamlandi");
    P1.style.textDecoration = "line-through";
  }
};
R1.onclick = function () {
  if (localStorage.getItem("R1") == "tamamlandi") {
    localStorage.setItem("R1", "tamamlanmadi");
    R1.style.textDecoration = "";
  } else {
    localStorage.setItem("R1", "tamamlandi");
    R1.style.textDecoration = "line-through";
  }
};

A2.onclick = function () {
  if (localStorage.getItem("A2") == "tamamlandi") {
    localStorage.setItem("A2", "tamamlanmadi");
    A2.style.textDecoration = "";
  } else {
    localStorage.setItem("A2", "tamamlandi");
    A2.style.textDecoration = "line-through";
  }
};
B2.onclick = function () {
  if (localStorage.getItem("B2") == "tamamlandi") {
    localStorage.setItem("B2", "tamamlanmadi");
    B2.style.textDecoration = "";
  } else {
    localStorage.setItem("B2", "tamamlandi");
    B2.style.textDecoration = "line-through";
  }
};
C2.onclick = function () {
  if (localStorage.getItem("C2") == "tamamlandi") {
    localStorage.setItem("C2", "tamamlanmadi");
    C2.style.textDecoration = "";
  } else {
    localStorage.setItem("C2", "tamamlandi");
    C2.style.textDecoration = "line-through";
  }
};
D2.onclick = function () {
  if (localStorage.getItem("D2") == "tamamlandi") {
    localStorage.setItem("D2", "tamamlanmadi");
    D2.style.textDecoration = "";
  } else {
    localStorage.setItem("D2", "tamamlandi");
    D2.style.textDecoration = "line-through";
  }
};
E2.onclick = function () {
  if (localStorage.getItem("E2") == "tamamlandi") {
    localStorage.setItem("E2", "tamamlanmadi");
    E2.style.textDecoration = "";
  } else {
    localStorage.setItem("E2", "tamamlandi");
    E2.style.textDecoration = "line-through";
  }
};
F2.onclick = function () {
  if (localStorage.getItem("F2") == "tamamlandi") {
    localStorage.setItem("F2", "tamamlanmadi");
    F2.style.textDecoration = "";
  } else {
    localStorage.setItem("F2", "tamamlandi");
    F2.style.textDecoration = "line-through";
  }
};

A3.onclick = function () {
  if (localStorage.getItem("A3") == "tamamlandi") {
    localStorage.setItem("A3", "tamamlanmadi");
    A3.style.textDecoration = "";
  } else {
    localStorage.setItem("A3", "tamamlandi");
    A3.style.textDecoration = "line-through";
  }
};
B3.onclick = function () {
  if (localStorage.getItem("B3") == "tamamlandi") {
    localStorage.setItem("B3", "tamamlanmadi");
    B3.style.textDecoration = "";
  } else {
    localStorage.setItem("B3", "tamamlandi");
    B3.style.textDecoration = "line-through";
  }
};

A4.onclick = function () {
  if (localStorage.getItem("A4") == "tamamlandi") {
    localStorage.setItem("A4", "tamamlanmadi");
    A4.style.textDecoration = "";
  } else {
    localStorage.setItem("A4", "tamamlandi");
    A4.style.textDecoration = "line-through";
  }
};
