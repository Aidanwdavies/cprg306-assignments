import React from 'react';
import Link from 'next/link';


class StudentInfo extends React.Component {
  render() {
    return (
      <div>
        <h2>Aidan Davies</h2>
        <p>
          Check out my GitHub repository: 
          <Link href="https://github.com/Aidanwdavies/cprg306-assignments.git" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </Link>
        </p>
      </div>
    );
  }
}