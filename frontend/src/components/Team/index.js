import "./index.css";
import TeamMember from "../TeamMember"
const teamMembers = [
  {
    id: 1,
    imgUrl: "https://dineeasebyafsar.netlify.app/team_member_1.png",
    name: "ROSS TYLER",
    title: "Founder & Head Chef",
  },
  {
    id: 2,
    imgUrl: "https://dineeasebyafsar.netlify.app/team_member_2.png",
    name: "WADE WARREN",
    title: "Sous Chef",
  },
  {
    id: 3,
    imgUrl: "https://dineeasebyafsar.netlify.app/team_member_3.png",
    name: "DOE",
    title: "Fast Food Chef",
  },
  {
    id: 4,
    imgUrl: "https://dineeasebyafsar.netlify.app/team_member_4.png",
    name: "ALEX COAL",
    title: "Senior Chef",
  },
];


const Team = () => {
  return (
    <section id="team" className="team">
      <h1 className="team-main-head">OUR TEAM</h1>
      <p>
        Our talented team of culinary professionals brings years of experience
        and dedication to create unforgettable dining experiences. Each team
        member is passionate about their craft and committed to delivering
        excellence.
      </p>
      <ul className="team-list">
        {teamMembers.map((member) => (
          <TeamMember memberData={member} key={member.id} />
        ))}
      </ul>
    </section>
  );
};

export default Team;
