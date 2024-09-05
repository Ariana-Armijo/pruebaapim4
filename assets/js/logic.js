let b = document.getElementById("boton1");

b.addEventListener("click", function () {

    let img1 = document.getElementById("Heroe");
    let ingreso = document.getElementById("entrada1").value;

    if (ingreso > 0 && ingreso <= 731) {
        alert("Ingreso Válido");
    } else {
        alert("Por favor ingresar numero válido (1 - 731)");
    }

    fetch("https://www.superheroapi.com/api.php/5097b85a9557dc7a49614f9d5575ca28/" + ingreso)
        .then(r => r.json())
        .then(d => {

            console.log(d);

            Heroe.setAttribute("src", d.image.url);
            document.getElementById("Encontrado").innerText = "Superheroe";
            document.getElementById("text").innerText = "Nombre: " + d.name;
            document.getElementById("text2").innerText = "Conexiones: " + d.connections["group-affiliation"];
            document.getElementById("text3").innerText = "Publicado por: " + d.biography.publisher;
            document.getElementById("text4").innerText = "Ocupación: " + d.work.occupation;
            document.getElementById("text5").innerText = "Primera Aparición: " + d.biography["first-appearance"];
            document.getElementById("text6").innerText = "Altura: " + d.appearance.height[1];
            document.getElementById("text7").innerText = "Peso: " + d.appearance.weight[1];
            document.getElementById("text8").innerText = "Alianzas: " + d.biography.aliases;



            //Grafico de Estadisticas de Canvas

            var options = {
                title: {
                    text: "Estadísticas de: " + d.name

                },
                data: [{
                    type: "pie",
                    startAngle: 45,
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabel: "{label} ({y})",
                    yValueFormatString: "#,##0.#" % "",
                    dataPoints: [
                        { label: "Combate", y: d.powerstats.combat },
                        { label: "Durabilidad", y: d.powerstats.durability },
                        { label: "Inteligencia", y: d.powerstats.intelligence },
                        { label: "Poder", y: d.powerstats.power },
                        { label: "Velocidad", y: d.powerstats.speed },
                        { label: "Fuerza", y: d.powerstats.strength },
                    ]
                }]
            };
            $("#chartContainer").CanvasJSChart(options);



        })

})

