import app from './server/server';


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get("port")}`);
    console.log(`http://localhost:${app.get("port")}`);
});