const express = require("express")
const router = express.Router()
const db = require("../db/db.js")
const { fetchUsers } = require("../services/service.js")

router.post("/import", async (req, res) => {
  try {
    const users = await fetchUsers()

    for (const user of users) {
      db.query(
        `INSERT INTO users (external_id, name, email, city) 
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         name = VALUES(name),
         email = VALUES(email),
         city = VALUES(city)
         `,
        [user.id, user.name, user.email, user.address.city],
        (err) => {
          if (err) {
            console.error("Error al insertar usuarios", err)
          }
        },
      )
    }

    res.json({ message: "Usuarios importados desde la API" })
  } catch (error) {
    res.status(500).json({ error: "Error al importar usuarios" })
  }
})

router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener usuarios" })
    }

    res.json({ total: results.length, usuarios: results })
  })
})

router.put("/:id", (req, res) => {
  const { name, email, city } = req.body
  const { id } = req.params

  const query = "UPDATE users SET name = ?, email = ?, city = ? WHERE id = ?"

  db.query(query, [name, email, city, id], (err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (result.affectedRows === 0) {
      // para ver si ha encontrado o no al usuario
      return res.status(404).send("Usuario no encontrado")
    }

    res.json({ message: "Usuario actualizado con éxito", id })
  })
})

router.delete("/:id", (req, res) => {
  const { id } = req.params
  const query = "DELETE FROM users WHERE id = ?"

  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).send(err)
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Usuario no encontrado")
    }

    res.json({ message: "Usuario borrado" })
  })
})

module.exports = router
