
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
    this.sessions = sessions
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
      'type': 'Endurance',
      'value': data[2].value
    },
    {
      'type': 'Strength',
      'value': data[3].value
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