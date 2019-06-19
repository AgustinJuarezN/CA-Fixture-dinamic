$url = 'https://estadisticas-deportes.tycsports.com/html/v3/htmlCenter/data/deportes/futbol/copaamerica/pages/es/posiciones.html';
$htmlFixture = '';
$data = '';

fetch($url)
    .then(function(response) {
        return response.text();
    })
    .then(function(body) {

        $htmlFixture = body; //  string var with the html code 
        $data = $htmlFixture.substring($htmlFixture.indexOf("<table"), $htmlFixture.indexOf("</table>"));

        // index of element into string variable (html)

        console.log('thead: ' + $htmlFixture.indexOf("<thead>"), $htmlFixture.indexOf("</thead>"));

        $(".tableFixture").append($data); // add table html code to div

        // moving elements to another elements
        $('#groupA table').append($('.table-condensed thead:nth-child(1)'));
        $('#groupA table').append($('.table-condensed tbody:nth-child(1)'));

        $('#groupB table').append($('.table-condensed thead:nth-child(1)'));
        $('#groupB table').append($('.table-condensed tbody:nth-child(1)'));

        $('#groupC table').append($('.table-condensed thead:nth-child(1)'));
        $('#groupC table').append($('.table-condensed tbody:nth-child(1)'));

    });