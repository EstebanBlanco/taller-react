import "./style.css"

const ProfileCard = ({ name, age, hobbies, onClick }) => (
  <div className="profileCard">
    <div className="cardTitle">{name}</div>
    <div className="cardDetails">
      <div><b>Age:</b> {age}</div>
      <div><b>Hobbies:</b></div>
      {
        hobbies.map((hobby) => <label>
          - {hobby}
        </label>)
      }
    </div>
    <div className="buttonContainer">
      <button onClick={onClick}>Press me!</button>
    </div>

  </div>
)

export default ProfileCard