import "./estilo.css"

function Inputcrear(props) {
  return (
    <div>
    <input type={props.caja} name={props.name} onChange={props.fun} />
    </div>
  
  )
}

export default Inputcrear