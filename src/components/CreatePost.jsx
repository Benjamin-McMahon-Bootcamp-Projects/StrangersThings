import { useState } from "react"

export default function CreatePost({ baseUrl, token }) {

const [ title, setTitle ] = useState('')
const [ description, setDescription ] = useState('')
const [ price, setPrice ] = useState('')
const [ location, setLocation ] = useState('')
const [ willDeliver, setWillDeliver ] = useState(false)

  async function fetchPost() {

    const response = await fetch(baseUrl + '/posts', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver
        }
      })
    })
    const result = response.json()
    console.log(result)
  }

  return(
    <div>
      <form onSubmit={(event)=>{
        event.preventDefault()
        fetchPost()
      }}>

        <label>
          Title <input type="text" value={title} onChange={(event)=>{setTitle(event.target.value)}} />
        </label>
        <label>
          Description: <input type="text" value={description} onChange={(event)=>{setDescription(event.target.value)}} />
        </label>
        <label>
          Price: <input type="text" value={price} onChange={(event)=>{setPrice(event.target.value)}} />
        </label>
        <label>
          Location: <input type="text" value={location} onChange={(event)=>{setLocation(event.target.value)}} />
        </label>
        <label>
          Will you deliver?  
          <label>Yes: <input type="radio" name="willDeliver" id="delivers" value={true} /></label>
          <label>No: <input type="radio" name="willDeliver" id="doesntDeliver" value={false} /></label>
        </label>
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}