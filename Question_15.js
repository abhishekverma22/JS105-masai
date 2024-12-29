function generatePassword(length, includeNumbers = true, includeSpecialChars = false ) {
    let randomCharSetSmall = "abcdefghijklmnopqrstuvwxyz";
    let randomCharSetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomNumSet = "123456789";
    let randomSpecialCharSet = "@#!";
    let password = "";
  
    let randomIndexCap = Math.floor(Math.random() * randomCharSetCap.length);
    password += randomCharSetCap[randomIndexCap];
  
    if (includeNumbers && includeSpecialChars) {
      for (let i = 0; i < length - 3; i++) {
        let randomIndex = Math.floor(Math.random() * randomCharSetSmall.length);
        password += randomCharSetSmall[randomIndex];
      }
      let numIndex = Math.floor(Math.random() * randomNumSet.length);
      let charIndex = Math.floor(Math.random() * randomSpecialCharSet.length);
      password += randomNumSet[numIndex];
      password += randomSpecialCharSet[charIndex];
    } else if (!includeNumbers && !includeSpecialChars) {
      for (let i = 0; i < length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * randomCharSetSmall.length);
        password += randomCharSetSmall[randomIndex];
      }
    } else if (!includeNumbers || !includeSpecialChars) {
      for (let i = 0; i < length - 2; i++) {
        let randomIndex = Math.floor(Math.random() * randomCharSetSmall.length);
        password += randomCharSetSmall[randomIndex];
      }
      if (includeNumbers) {
        let numIndex = Math.floor(Math.random() * randomNumSet.length);
        password += randomNumSet[numIndex];
      } else {
        let charIndex = Math.floor(Math.random() * randomSpecialCharSet.length);
        password += randomSpecialCharSet[charIndex];
      }
    }
  
    console.log(password);
  }
  console.log(generatePassword(10, true, true));