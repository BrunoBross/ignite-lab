import { gql, useQuery } from "@apollo/client";
import "./styles/global.css";

const GET_TEACHER_QUERY = gql`
  query {
    teachers {
      id
      name
    }
  }
`;

interface Teacher {
  id: string;
  name: string;
}

function App() {
  const { data } = useQuery<{ teachers: Teacher[] }>(GET_TEACHER_QUERY);
  console.log(data);

  return (
    <ul>
      {data?.teachers.map((teacher) => {
        return <li key={teacher.id}>{teacher.name}</li>;
      })}
    </ul>
  );
}

export default App;
