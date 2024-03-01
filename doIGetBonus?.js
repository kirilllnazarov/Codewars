function bonusTime(salary, bonus) {
    if (bonus === true) {
      return `£${salary * 10}`
    }
      else {
      return `£${salary}`
      }
     }

     //second solution
     const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`