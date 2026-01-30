const express = require("express")
const app = express()
const usersRouter = require("./routes/users.js")

app.use(express.json())
app.use("/users", usersRouter)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
