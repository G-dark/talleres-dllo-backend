import express from "express";

import estudiantes from "./24-taller-04-datos.json" assert { type: "json" };

const app = express();
const PORT = 3030;
app.use(express.json());
app.get("/users/hobby", (req, res) => {
  const { hobby } = req.query;
  res.json(
    estudiantes.filter((estudiante) => {
      return estudiante.hobbies.some((hobbie) => {
        return hobbie == hobby;
      });
    })
  );
});
app.get("/users/exists/:id", (req, res) => {
  const { id } = req.params;
  res.json(
    estudiantes.find((estudiante) => {
      return estudiante.codigo == id;
    }) !== undefined
  );
});
app.get("/users/hobby/count", (req, res) => {
  const { hobby } = req.query;
  res.json(
    estudiantes.reduce((acumulado, actual) => {
      return (
        acumulado +
        +actual.hobbies.some((hobbie) => {
          return hobbie == hobby;
        })
      );
    }, 0)
  );
});

app.get("/users/is-free", (req, res) => {
  res.json(
    estudiantes.filter((estudiante) => {
      return estudiante.hobbies.length < 3;
    })
  );
});

app.patch("/users/suggest", (req, res) => {
  const { user, hobby } = req.body;
  const index = estudiantes.findIndex((estudiante) => {
    return estudiante.codigo == user.codigo;
  });
  if (estudiantes[index].hobbies.length < 3) {
    estudiantes[index].hobbies.push(hobby);
  }
  res.json(estudiantes[index]);
});
app.post("/users", (req, res) => {
  const { hobbies, codigo, apellido, nombre } = req.body;
  const user = { codigo, nombre, apellido, hobbies };
  if (
    !estudiantes.some((estudiante) => {
      return estudiante.codigo == user.codigo;
    })
  ) {
    estudiantes.push(user);
    res.json(true).status(201)
  } else {
    res.json(false).status(304)
  }
});

app.listen(PORT, () => {
  console.log(`Escuchando en ${PORT}`);
});
