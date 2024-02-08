
function password(user) {
  let userName = user.name;
  let userBirth = user.birthYear;
  let browserName = user.siteName;

  let ValidYear = userBirth.toString().length;

  if (ValidYear < 4 || ValidYear < 0) {
    return 'Type valid year';
  }
  else if (user.hasOwnProperty("name") !== true ||
    user.hasOwnProperty("birthYear") !== true ||
    user.hasOwnProperty("siteName") !== true) {

    return 'Object Property is Missing !'
  }
  let browerUpdateName = browserName[0].toUpperCase() + browserName.slice(1);
  let userPassword = `${browerUpdateName}#${userName}@${userBirth}`

  return userPassword;

}
let userData = { name: 'kolimuddin',birthYear: 1999, siteName: 'google' }
console.log(password(userData));












/* let name='ajjaj';
const updateName=name[0].toUpperCase()+name.slice(1);
//console.log(updateName)

/* const str = "name";
const modStr = str[0].toUpperCase() + str.slice(1);
console.log(str); // name
console.log(modStr); // Name */ 

