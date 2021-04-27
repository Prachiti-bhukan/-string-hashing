const welcomeNote = () =>
{
console.log("Welcome to the String hashingd  \n\nWhich algorithm you want to try\n1. md5\n2. sha-1\n3. sha-256\n4. sha-512\n");
}

function takeInput()
{
  const readLineSync = require('readline-sync');
  const userInput = readLineSync.question('Enter your choice\n');

  if(userInput==1)
  {
     hashMd5();
  }

  else if(userInput==2)
  {
    hashSha1();
  }

  else if(userInput==3)
  {
    hashSha256();
  }

  else if(userInput==4)
  {
    hashSha512();
  }

  else  
  {
    console.log("\n\n INVALID !!!\n\n");
  }

}


const hashMd5 = () =>
{
const readLineSync = require('readline-sync');
const givenString = readLineSync.question('\n\nEnter the string to be Hashed:\n\n');

const crypto = require('crypto');
const algo = 'md5';  
const hash = crypto.createHash(algo).update(givenString).digest('hex');

console.log(`\n\nThe Hashed String is --->\n\n${hash}`);
}

const hashSha1 = () =>
{
const readLineSync = require('readline-sync');
const givenString = readLineSync.question('\n\nEnter the string to be Hashed:\n\n');

const crypto = require('crypto');
const algo = 'sha1';  
const hash = crypto.createHash(algo).update(givenString).digest('hex');

console.log(`\n\nThe Hashed String is --->\n\n${hash}`);
}

const hashSha256 = () =>
{
const readLineSync = require('readline-sync');
const givenString = readLineSync.question('\n\nEnter the string to be Hashed:\n\n');

const crypto = require('crypto');
const algo = 'sha256';  
const hash = crypto.createHash(algo).update(givenString).digest('hex');

console.log(`\n\nThe Hashed String is --->\n\n${hash}`);
}

const hashSha512 = () =>
{
const readLineSync = require('readline-sync');
const givenString = readLineSync.question('\n\nEnter the string to be Hashed:\n\n');

const crypto = require('crypto');
const algo = 'sha512';  
const hash = crypto.createHash(algo).update(givenString).digest('hex');

console.log(`\n\nThe Hashed String is --->\n\n${hash}`);
}


 

function driver()
{
  welcomeNote();
  takeInput();
  
}

driver();