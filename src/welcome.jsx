function Welcome({ name }) {
  const time = 17;
  const greetingMsg = getGreetingMsg(time);

  return (
    <h1>
      {greetingMsg} {name}!
    </h1>
  );
}

function getGreetingMsg(time) {
  let greeting = 'Good Morning';

  if (time > 12 && time <= 16) {
    greeting = 'Good Afternoon';
  }

  if (time > 16 && time <= 20) {
    greeting = 'Good evening';
  }

  if (time > 20) {
    greeting = 'Good night';
  }

  return greeting;
}

export default Welcome;
