import React, { useState, useMemo } from "react";
import './styles.css'
import api from '../services/api'

export default function New({ history }) {

  const [company, setCompany] = useState("")
  const [techs, setTechs] = useState("")
  const [price, setPrice] = useState("")
  const [thumbnail, setThumbnail] = useState(null)

  const preview = useMemo(
    () => { return thumbnail ? URL.createObjectURL(thumbnail) : null },
    [thumbnail]
  )

  async function handleSubmit(event) {
    event.preventDefault()
    const user_id = localStorage.getItem("user")
    const data = new FormData()

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, { headers: { user_id } })

    history.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit}>

      <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img id="img" alt="img" />
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input id="company" placeholder="sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)} />

      <label htmlFor="techs">TECNOLOGIAS * (separada por vírgulas)</label>
      <input id="techs" placeholder="tecnologias"
        value={techs}
        onChange={event => setTechs(event.target.value)} />

      <label htmlFor="price">VALOR DA DIÁRIA * (Em branco para gratuito)</label>
      <input id="price" placeholder="valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)} />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
  );
}
