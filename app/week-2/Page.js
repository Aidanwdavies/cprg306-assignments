import StudentInfo from "./student-info";
import link from 'next/link';

export default function Page() {
    return (
      <main>
        <h1>Shopping list</h1>
        <div>
        <p>Aidan Davies</p>
        <StudentInfo />  
        <p>Student info page </p>
        </div>
      </main>
    );
  }