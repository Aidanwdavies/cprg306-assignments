import React from 'react';
import Link from 'next/link';

export default function StudentInfo() {
    return (
      <div>
        <h2>Aidan Davies</h2>
        <p>
          Check out my GitHub repository: 
          <Link href="https://github.com/Aidanwdavies/cprg306-assignments.git">
            GitHub Repository
          </Link>
        </p>
      </div>
    );
  }

