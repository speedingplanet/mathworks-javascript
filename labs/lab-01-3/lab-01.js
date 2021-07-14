import { users } from '../node_modules/@speedingplanet/rest-server/index.js';

const names = [];

// forEach()
users.forEach( ( user ) => names.push( user.displayName ) );

// map()
// const mappedNames = people.map( ( user ) => user.displayName );

// filter() and map()
const mappedNames = users
  .filter( ( user ) => user.userType === 'person' )
  .map( ( user ) => user.displayName );

console.log( 'Names: ', names );
console.log( 'mappedNames: ', mappedNames );
const div = document.getElementsByClassName( 'col' )[0];
const ul = document.createElement( 'ul' );

mappedNames.forEach( ( name, index ) => {
  ul.insertAdjacentHTML( 'beforeend', `<li id="name-${index}">${name}</li>` );
} );

// div.appendChild( ul );
// div.insertAdjacentElement( 'beforeend', ul );
div.append( ul );
// div.prepend( ul );

const textField = document.getElementById( 'add-name' );
const addNameButton = document.querySelector( 'button.btn.btn-primary' );
addNameButton.addEventListener( 'click', () => {
  if ( !textField.value.trim() ) {
    return;
  }
  const addedName = textField.value;
  mappedNames.unshift( addedName );
  ul.insertAdjacentHTML(
    'afterbegin',
    `<li id="${addedName}">${addedName}</li>`,
  );

  textField.value = null;
} );
