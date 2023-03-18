const model = require("./model")

function render(movies) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Movie List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table>
        <th>ID</th>
        <th>Title</th>
        <th>Year</th>
        ${movies
            .map ( (movie) => `<tr> <td>${movie.id}</td> <td>${movie.title}</td> <td>${movie.year}</td></tr>`)
            .join('')
        }
    </table>
</body>
</html>
    `
}

module.exports = render;