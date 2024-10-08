export default {
  user: {
    firstname: 'Bhagyaraj',
    lastname: 'BK',
    dob: new Date('2000-03-27T00:00:00'),
    get name() {
      return `${this.firstname} ${this.lastname}`;
    },
    github: 'https://github.com/Bhagyaraj-B-K',
    linkedIn: 'https://www.linkedin.com/in/bhagyaraj-b-k/',
    instagram: 'https://www.instagram.com/dbz_holix',
    facebook: 'https://www.facebook.com/share/e9wTngkjjncVwewr/?mibextid=qi2Omg'
  },
  company: [
    {
      name: 'Juego Studios Private Limited',
      joined: new Date('2022-04-04T12:00:00'),
      designation: 'Backend Developer'
    }
  ],
  get currentCompany () {
    return this.company[this.company.length-1];
  },
  get firstCompany () {
    return this.company[0];
  },
  get getTotalExperience () {
    const currentDate = new Date();
    let yearDifference = currentDate.getFullYear() - this.company[0].joined.getFullYear();
    let monthDifference = (currentDate.getMonth()+1) - (this.company[0].joined.getMonth()+1);
    if(monthDifference < 0) {
      yearDifference--;
      monthDifference = 12 + monthDifference;
    }
    return {
      years: yearDifference,
      months: monthDifference
    };
  }
}