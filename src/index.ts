import { app } from "./http/server"

app.listen({port:3333}).then(() => {
  console.log('Server is running 🚀🚀🚀')
})