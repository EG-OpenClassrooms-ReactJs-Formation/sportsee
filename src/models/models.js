
export class UserMainData{
    constructor(id, firstName, lastName, age, todayScore, 
        keyData = {
          calorieCount: 0, proteinCount: 0, 
          carbohydrateCount: 0, lipidCount: 0}) 
    {
      this.keyData = keyData;
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.todayScore = todayScore;
      
    }
    
}

export class UserActivity{
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
    
  }
}

export class UserAverageSession{
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
    if (this.sessions !== undefined) {
      this.sessions[0].day = 'L';
      this.sessions[1].day = 'M';
      this.sessions[2].day = 'M';
      this.sessions[3].day = 'J';
      this.sessions[4].day = 'V';
      this.sessions[5].day = 'S';
      this.sessions[6].day = 'D';
    }
    // this.sessions = [
    //   {
    //     'day': 'M',
    //     'sessionLength': sessions[0].sessionLength
    //   },
    //   {
    //     'day': 'T',
    //     'sessionLength': sessions[1].sessionLength
    //   },
    //   {
    //     'day': 'W',
    //     'sessionLength': sessions[2].sessionLength
    //   },
    //   {
    //     'day': 'T',
    //     'sessionLength': sessions[3].sessionLength
    //   },
    //   {
    //     'day': 'F',
    //     'sessionLength': sessions[4].sessionLength
    //   },
    //   {
    //     'day': 'S',
    //     'sessionLength': sessions[5].sessionLength
    //   },
    //   {
    //     'day': 'S',
    //     'sessionLength': sessions[6].sessionLength
    //   },
    // ]
  }
}

export class UserPerformance{
  constructor(userId, data) {

    this.userId = userId;
    this.data = [
    {
      'type' : 'Cardio',
      'value': data[0].value
    },
    {
      'type': 'Energy',
      'value': data[1].value
    },
    {
      'type': 'Strength',
      'value': data[3].value
    },
    {
      'type': 'Endurance',
      'value': data[2].value
    },
    {
      'type': 'Speed',
      'value': data[4].value
    },
    {
      'type': 'Intensity',
      'value': data[5].value
    },
  ]
  }
}