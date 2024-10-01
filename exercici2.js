let taula = document.getElementById("taula_propietats");
taula.innerHTML = `
<table>
    <tr>
        <td> a. Valor máxim que pot tenir un número JS </td>
        <td> `+Number.MAX_VALUE +` </td>
    </tr>
    <tr>
        <td> b. Altura total de la pantalla </td>
        <td> `+ screen.height + ` </td>
    </tr>
    <tr>
        <td> c. Altura interna de la finestra </td>
        <td> ` + window.innerHeight +` </td>
    </tr>
    <tr>
        <td> d. URL de la web </td>
        <td> ` + document.URL+` </td>
    </tr>
</table>
`;