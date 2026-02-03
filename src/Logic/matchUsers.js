const matchUsers = (users) => {
  const matches = [];

  for (let i = 0; i < users.length; i++) {
    for (let j = i + 1; j < users.length; j++) {
      const userA = users[i];
      const userB = users[j];

      if (
        userA.teachSkill === userB.learnSkill &&
        userB.teachSkill === userA.learnSkill
      ) {
        matches.push({ userA, userB });
      }
    }
  }

  return matches;
};

export default matchUsers