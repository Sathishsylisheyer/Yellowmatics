
import React from 'react';
import { useParams } from 'react-router-dom';

function TutorialPage() {
  const { language } = useParams();
  return (
    <div>
      <h2>{language.toUpperCase()} Tutorial</h2>
      <p>Learn the basics of {language} here.</p>
    </div>
  );
}

export default TutorialPage;
