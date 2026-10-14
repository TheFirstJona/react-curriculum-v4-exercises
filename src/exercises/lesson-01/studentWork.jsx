//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Jonathan Torres-Tomas';
  const age = 25;
  const hobbies = [
    'Playing the trombone in symphonic bands',
    'Trail maintenance and outdoor volunteering',
    'Playing video games and managing community Discord servers',
  ];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, my name is {name} and I am {age} years old. I recently graduated
        with a degree in Economics, and I am passionate about learning new
        technical skills including modern web development, playing the newest PC
        games including Overwatch, and creating music.
      </p>
      <h2>My Hobbies & Interests</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
