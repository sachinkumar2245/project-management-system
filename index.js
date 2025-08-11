//This is entry point of the application
import { app, PORT } from "./app.js";


app.listen(PORT, () =>{

    console.log(`Server is listening on port ${PORT}`);
})