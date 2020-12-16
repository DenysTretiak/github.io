class StringBuilder {
  value;
  
  constructor(baseString = ' ') {
    this.value = baseString;
  }

  append(str) {
    this.value = `${this.value}${str}`;
    return this;
  }

  prepend(str) {
    this.value = `${str}${this.value}`;
    return this;
  }

  pad(str) {
    this.value = `${str}${this.value}${str}`
    return this;
  }
}


const builder = new StringBuilder('.');
  builder
    .append('^')
    .prepend('^')
    .pad('=')
    .append('2')
    .prepend('3')


console.log(builder); // '=^.^='


function checkSwitch(num) {
  switch(num) {
    case 1: return 'one'
    case 2: return 'two'
  }   
}

console.log(checkSwitch(3));


