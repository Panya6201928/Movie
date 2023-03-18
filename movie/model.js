const data = [
    {id:1 , title: 'Prayut',year:'m44'},
    {id:2 , title: 'Pom', year:'m44'},
    {id:3 , title: 'tu' , year: 'm44'}
];

function getAll(){
    return Promise.resolve(data);
}

module.exports = getAll;