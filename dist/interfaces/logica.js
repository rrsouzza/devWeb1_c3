"use strict";
var cores = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
var coresSorteadas = [];
function sorteioCores() {
    for (var i = 0; i < 10; i++) {
        var verificar = false;
        var corSorteada;
        do {
            corSorteada = cores[Math.floor(Math.random() * 140)];
            for (var x = 1; x <= coresSorteadas.length; x++) {
                if (corSorteada == coresSorteadas[x]) {
                    verificar = false;
                }
                else if (x == coresSorteadas.length) {
                    verificar = true;
                }
            }
            if (coresSorteadas.length == 0) {
                verificar = true;
            }
        } while (verificar == false);
        coresSorteadas[i] = corSorteada;
    }
}
function continuacao() {
    var corEscolhida = coresSorteadas[Math.floor(Math.random() * 10)];
    console.log("Cor sorteada: " + corEscolhida);
    var acertou = false;
    do {
        var mensagem = "Eu estou pensando em uma dessas cores: \n";
        for (var i = 0; i < 10; i++) {
            mensagem += coresSorteadas[i] + ", ";
        }
        mensagem += "\n\nTente adivinhar qual cor eu escolhi:";
        var inputUsuario = prompt(mensagem);
        console.log(inputUsuario);
        if (inputUsuario != null) {
            if (inputUsuario.toLowerCase() == corEscolhida.toLowerCase()) {
                document.body.style.backgroundColor = corEscolhida;
                acertou = true;
            }
            else {
                let letraInputCharCode = inputUsuario.toLowerCase().charCodeAt(0);
                console.log("CharCode da letraInput: " + letraInputCharCode);
                let letraInputTexto = String.fromCodePoint(letraInputCharCode);
                console.log("Texto da letraInput: " + letraInputTexto);
                let letraCorSorteadaCharCode = corEscolhida.toLowerCase().charCodeAt(0);
                console.log("CharCode da letraSorteada: " + letraCorSorteadaCharCode);
                let letraCorSorteadaTexto = String.fromCodePoint(letraCorSorteadaCharCode);
                console.log("Texto da letraSorteada: " + letraCorSorteadaTexto);
                if (letraInputCharCode > letraCorSorteadaCharCode) {
                    alert("A cor que você escolheu começa com a letra " + letraInputTexto + ".\n\nA sua cor é alfabeticamente posterior à minha. Tente novamente.");
                }
                else if (letraInputCharCode < letraCorSorteadaCharCode) {
                    alert("A cor que você escolheu começa com a letra " + letraInputTexto + ".\n\nA sua cor é alfabeticamente anterior à minha. Tente novamente.");
                }
                else if (letraInputCharCode == letraCorSorteadaCharCode) {
                    alert("A cor que você escolheu começa com a letra " + letraInputTexto + ".\n\nA sua cor começa com a mesma letra que a minha. Tente novamente.");
                }
                else {
                    alert("Ocorreu algum erro.");
                }
            }
        }
        else {
            acertou = true;
        }
    } while (acertou == false);
}
