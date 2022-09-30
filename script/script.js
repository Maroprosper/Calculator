let buttons = document.getElementsByTagName('button');
let show = document.querySelector('.screen');
let answer = document.querySelector('.answer');
let first = '';
let second = '';
let operator = '';
let result = '';
const append = (no) => {
  show.textContent += `${no}`;
        if(operator === ''){
          first += `${no}`;
        }
        else{
          second += `${no}`;
          solve();
        }
};
for(let button of buttons){
  button.addEventListener('keypress', (e) => {
    if(first.length >= 1){
      document.getElementById('del').textContent = 'DEL';
      document.querySelector('.clear').style.visibility = 'visible';
    }
    switch(e.key){
      case '7':
        append(7);
        break;
      case '8':
        append(8);
        break;
      case '9':
        append(9);
        break;
      case '4':
        append(4);
        break;
      case '5':
        append(5);
        break;
      case '6':
        append(6);
        break;
      case '1':
        append(1);
        break;
      case '2':
        append(2);
        break;
      case '3':
        append(3);
        break;
      case '.':
        if(operator === ''){
          if(first !== '' && first.includes('.') === false){
            show.textContent += '.';
            first += '.';
          }
        }
        else{
          if(second !== '' && second.includes('.') === false){
            show.textContent += '.';
            second += '.';
  
          }
        }
        break;
      case '0':
        append(0);
        break;
      case '=':
        operate();
        operator = '';
        show.textContent = result;
        answer.textContent = '';
        break;
      case 'Enter':
        operate();
        operator = '';
        show.textContent = result;
        answer.textContent = '';
        break;
      case 'Backspace':
        if(second !== '0' && second !== '1' && second !== ''){
          second = second.slice(0,-1);
          show.textContent = show.textContent.slice(0, -1);
          solve();
        }
        else if(first !== '' && (second.length === 1 || second.length === 0) && operator === ''){
            first = first.slice(0,-1);
            show.textContent = show.textContent.slice(0, -1);
            if(first.length === 1){
              answer.textContent = '';
              document.getElementById('del').textContent = 'CLR';
              document.querySelector('.clear').style.visibility = 'hidden';
            }
            else{
              document.getElementById('del').textContent = 'DEL';
              document.querySelector('.clear').style.visibility = 'visible';
            }
            if(first.length === 0 || (show.textContent).length === 0){
                  clear();
            }
        }
        else if(second.length === 1 || second.length === 0){
          second = '';
          operator = '';
          show.textContent = show.textContent.slice(0, -1);
          if(first.length === 1){
            answer.textContent = '';
          }
        }
        else{
          answer.textContent = '';
          clear();
        }
        break;
      case '/':
        if(show.textContent[show.textContent.length - 1] === '+' || show.textContent[show.textContent.length - 1] === document.getElementById('*').textContent || show.textContent[show.textContent.length - 1] === '-' ||
        show.textContent[show.textContent.length - 1] === '^'){
          let string = show.textContent;
          show.textContent = string.slice(0, -1) + document.getElementById('/').textContent;
          operator = '/';
        }
        if(show.textContent[show.textContent.length - 1] === '√'){
          operator = '√'
          show.textContent += '';
        }
        if(show.textContent[show.textContent.length - 1] !== document.getElementById('/').textContent && first !== ''){
          operate();
          show.textContent += document.getElementById('/').textContent;
          operator = '/';
        }
        break;
      case '*':
        if(show.textContent[show.textContent.length - 1] === '+' || show.textContent[show.textContent.length - 1] === document.getElementById('/').textContent || show.textContent[show.textContent.length - 1] === '-' ||
        show.textContent[show.textContent.length - 1] === '^'){
          let string = show.textContent;
          show.textContent = string.slice(0, -1) + document.getElementById('*').textContent;
          operator = '*';
        }
        if(show.textContent[show.textContent.length - 1] === '√'){
          operator = '√'
          show.textContent += '';
        }
        if(show.textContent[show.textContent.length - 1] !== document.getElementById('*').textContent && first !== ''){
          operate();
          show.textContent += document.getElementById('*').textContent;
          operator = '*';
        }
        break;
      case '-':
        if(show.textContent[show.textContent.length - 1] === document.getElementById('*').textContent || show.textContent[show.textContent.length - 1] === document.getElementById('/').textContent || show.textContent[show.textContent.length - 1] === '^' ||
        show.textContent[show.textContent.length - 1] === '√'){
          second += '-';
          show.textContent += '-';
        }
        if(show.textContent[show.textContent.length - 1] === '+'){
          let string = show.textContent;
          show.textContent = string.slice(0, -1) + '-';
          operator = '-';
        }
        if(show.textContent[show.textContent.length - 1] !== '-'){
          if(first === ''){
            first = '-'
            show.textContent += '-';
          }
          else{
          operate();
          operator = '-';
          show.textContent += '-';
          }
        }
        break;
      case '+':
        if(show.textContent[show.textContent.length - 1] === '-' || show.textContent[show.textContent.length - 1] === document.getElementById('*').textContent || show.textContent[show.textContent.length - 1] === document.getElementById('/').textContent ||
        show.textContent[show.textContent.length - 1] === '^'){
          let string = show.textContent;
          show.textContent = string.slice(0, -1) + '+';
          operator = '+';
        }
        if(show.textContent[show.textContent.length - 1] === '√'){
          operator = '√'
          show.textContent += '';
        }
        if(show.textContent[show.textContent.length - 1] !== '+' && first !== ''){
          operate();
          show.textContent += '+';
          operator = '+';
        }
        break;
      };
     });
     button.addEventListener('click', () => {
      if(first.length >= 1){
        document.getElementById('del').textContent = 'DEL';
        document.querySelector('.clear').style.visibility = 'visible';
      }
      switch(button.id){
        case '7':
          append(7);
          break;
        case '8':
          append(8);
          break;
        case '9':
          append(9);
          break;
        case '4':
          append(4);
          break;
        case '5':
          append(5);
          break;
        case '6':
          append(6);
          break;
        case '1':
          append(1);
          break;
        case '2':
          append(2);
          break;
        case '3':
          append(3);
          break;
        case '.':
          if(operator === ''){
            if(first !== '' && first.includes('.') === false){
              show.textContent += '.';
              first += '.';
            }
          }
          else{
            if(second !== '' && second.includes('.') === false){
              show.textContent += '.';
              second += '.';

            }
          }
          break;
        case '0':
          append(0);
          break;
        case '=':
          operate();
          operator = '';
          show.textContent = result;
          answer.textContent = '';
          break;
        case 'del':
          if(second !== '0' && second !== '1' && second !== ''){
            second = second.slice(0,-1);
            show.textContent = show.textContent.slice(0, -1);
            solve();
          }
          else if(first !== '' && (second.length === 1 || second.length === 0) && operator === ''){
              first = first.slice(0,-1);
              show.textContent = show.textContent.slice(0, -1);
              if(first.length === 1){
                answer.textContent = '';
                document.getElementById('del').textContent = 'CLR';
                document.querySelector('.clear').style.visibility = 'hidden';
              }
              else{
                document.getElementById('del').textContent = 'DEL';
                document.querySelector('.clear').style.visibility = 'visible';
              }
              if(first.length === 0 || (show.textContent).length === 0){
                    clear();
              }
          }
          else if(second.length === 1 || second.length === 0){
            second = '';
            operator = '';
            show.textContent = show.textContent.slice(0, -1);
            if(first.length === 1){
              answer.textContent = '';
            }
          }
          else{
            answer.textContent = '';
            clear();
          }
          break;
        case '/':
          if(show.textContent[show.textContent.length - 1] === '+' || show.textContent[show.textContent.length - 1] === document.getElementById('*').textContent || show.textContent[show.textContent.length - 1] === '-' ||
          show.textContent[show.textContent.length - 1] === '^'){
            let string = show.textContent;
            show.textContent = string.slice(0, -1) + document.getElementById('/').textContent;
            operator = '/';
          }
          if(show.textContent[show.textContent.length - 1] === '√'){
            operator = '√'
            show.textContent += '';
          }
          if(show.textContent[show.textContent.length - 1] !== document.getElementById('/').textContent && first !== ''){
            operate();
            show.textContent += document.getElementById('/').textContent;
            operator = '/';
          }
          break;
        case '*':
          if(show.textContent[show.textContent.length - 1] === '+' || show.textContent[show.textContent.length - 1] === document.getElementById('/').textContent || show.textContent[show.textContent.length - 1] === '-' ||
          show.textContent[show.textContent.length - 1] === '^'){
            let string = show.textContent;
            show.textContent = string.slice(0, -1) + document.getElementById('*').textContent;
            operator = '*';
          }
          if(show.textContent[show.textContent.length - 1] === '√'){
            operator = '√'
            show.textContent += '';
          }
          if(show.textContent[show.textContent.length - 1] !== document.getElementById('*').textContent && first !== ''){
            operate();
            show.textContent += document.getElementById('*').textContent;
            operator = '*';
          }
          break;
        case '-':
          if(show.textContent[show.textContent.length - 1] === document.getElementById('*').textContent || show.textContent[show.textContent.length - 1] === document.getElementById('/').textContent || show.textContent[show.textContent.length - 1] === '^' ||
          show.textContent[show.textContent.length - 1] === '√'){
            second += '-';
            show.textContent += '-';
          }
          if(show.textContent[show.textContent.length - 1] === '+'){
            let string = show.textContent;
            show.textContent = string.slice(0, -1) + '-';
            operator = '-';
          }
          if(show.textContent[show.textContent.length - 1] !== '-'){
            if(first === ''){
              first = '-'
              show.textContent += '-';
            }
            else{
            operate();
            operator = '-';
            show.textContent += '-';
            }
          }
          break;
        case '+':
          if(show.textContent[show.textContent.length - 1] === '-' || show.textContent[show.textContent.length - 1] === document.getElementById('*').textContent || show.textContent[show.textContent.length - 1] === document.getElementById('/').textContent ||
          show.textContent[show.textContent.length - 1] === '^'){
            let string = show.textContent;
            show.textContent = string.slice(0, -1) + '+';
            operator = '+';
          }
          if(show.textContent[show.textContent.length - 1] === '√'){
            operator = '√'
            show.textContent += '';
          }
          if(show.textContent[show.textContent.length - 1] !== '+' && first !== ''){
            operate();
            show.textContent += '+';
            operator = '+';
          }
          break;
        case 'x**y':
          if(show.textContent[show.textContent.length - 1] === '-' || show.textContent[show.textContent.length - 1] === document.getElementById('*').textContent || show.textContent[show.textContent.length - 1] === document.getElementById('/').textContent ||
          show.textContent[show.textContent.length - 1] === '+'){
            let string = show.textContent;
            show.textContent = string.slice(0, -1) + '^';
            operator = '^';
          }
          if(show.textContent[show.textContent.length - 1] === '√'){
            operator = '√'
            show.textContent += '';
          }
            if(show.textContent[show.textContent.length - 1] !== '^' && first !== ''){
              operate();
              show.textContent += '^';
              operator = '^';
            }          
          break;
        case 'x//y':
          if(show.textContent[show.textContent.length - 1] === '-' || show.textContent[show.textContent.length - 1] === document.getElementById('*').textContent || show.textContent[show.textContent.length - 1] === document.getElementById('/').textContent ||
          show.textContent[show.textContent.length - 1] === '+'){
            let string = show.textContent;
            show.textContent = string.slice(0, -1) + '√';
            operator = '√';
          }
          if(show.textContent[show.textContent.length - 1] === '√'){
            operator = '√'
            show.textContent += '';
          }
            if(show.textContent[show.textContent.length - 1] !== '^' && first !== ''){
              operate();
              show.textContent += '√';
              operator = '√';
            }                   
          break;
        case '%':
          show.textContent += '%';
          if(operator === ''){
            first = `${first/100}`;
            result = `${first}`;
            answer.textContent = first;
          }
          else{
            second = `${second/100}`;
            solve();
          }
          break;
        case 'sin':
          break;
        case 'cos':
          break;
        case 'tan':
          break;
        case 'inv':
          show.textContent += '^-1';
          if(operator === ''){
            first = `${1/first}`;
            result = `${first}`;
            answer.textContent = first;
          }
          else{
            second = `${1/second}`;
            solve();
          }
          break;
        case 'log':
          break;
        case '!':
          show.textContent += '!';
          if(operator === ''){
            first = `${factorial(first)}`;
            result = `${first}`;
            answer.textContent = first;
          }
          else{
            second = `${factorial(second)}`;
            solve();
          }
          break;
        case 'pi':
          show.textContent += 'π';
          if(operator === ''){
            first = `${Math.PI}`;
            result = `${first}`;
            answer.textContent = first;
          }
          else{
            second = `${Math.PI}`;
            solve();
          }
          break;
        case 'exp':
          break;
        case '**2':
          show.textContent += '^2';
          if(operator === ''){
            first = `${first ** 2}`;
            result = `${first}`;
            answer.textContent = first;
          }
          else{
            second = `${second ** 2}`;
            solve();
          }
          break;
        case '(':
          break;
        case ')':
          break;
        case '//2':
          show.textContent += '^(1/2)';
          if(operator === ''){
            first = `${Math.sqrt(first)}`;
            result = `${first}`;
            answer.textContent = first;
          }
          else{
            second = `${Math.sqrt(second)}`;
            solve();
          }
          break;
      }
});  
}
const sum = (a,b) => (a+b);
const minus = (a,b) => (a-b);
const times = (a,b) => (a*b);
const divide = (a,b) => (a/b);
const power = (a,b) => (a**b);
const root = (a,b) => (b**(1/a));
const factorial = (number) => {
    let outcome = 1;
    if(number === 0){
      outcome = 1;
    }
    else{
      for(let i = 1; i <= number; i++){
      outcome *= i;
      }
    }
  return outcome;
}
const operate = () => {
    if(operator === '+'){
      result = sum(parseFloat(first),parseFloat(second));
      first = result.toString();
      second = '0';
      answer.textContent = result;
    }
    if(operator === '-'){
      result = minus(parseFloat(first),parseFloat(second));
      first = result.toString();
      second = '0';
      answer.textContent = result;
    }
    if(operator === '/'){
      result = (divide(parseFloat(first),parseFloat(second)));
      first = result.toString();
      second = '';
      answer.textContent = result;
    }
    if(operator === '*'){
      result = (times(parseFloat(first),parseFloat(second)));
      first = result.toString();
      second = '';
      answer.textContent = result;
    }
    if(operator === '^'){
      result = (power(parseInt(first), parseInt(second)));
      first = result.toString();
      second = '';
      answer.textContent = result;
    }
    if(operator === '√'){
      result = (root(parseInt(first), parseInt(second)));
      first = result.toString();
      second = '';
      answer.textContent = result;
    }
}
function solve(){
  if(operator === '+'){
    if(second === ''){
      second = '0';
    }
   result = sum(parseFloat(first),parseFloat(second));
   answer.textContent = result;
 }
 if(operator === '-'){
  if(second === ''){
    second = '0';
  }
  result = minus(parseFloat(first),parseFloat(second));
  answer.textContent = result;
}
if(operator === '/'){
  if(second === ''){
    result = parseFloat(first)/1;
    second = '';
  }
  else{
  result = (divide(parseFloat(first),parseFloat(second)));
  }
  answer.textContent = result;
}
if(operator === '*'){
  if(second === ''){
    result = parseFloat(first)*1;
    second = '';
  }
  else{
  result = (times(parseFloat(first),parseFloat(second)));
  }
  answer.textContent = result;
}
if(operator === '^'){
  if(second === ''){
    result = parseFloat(first)**1;
    second = '';
  }
  else{
  result = (power(parseInt(first), parseInt(second)));
  }
  answer.textContent = result;
}
if(operator === '√'){
  if(second === ''){
    result = parseInt(first)**(1/2);
    second = '';
  }
  else{
  result = (root(parseInt(first), parseInt(second)));
  }
  answer.textContent = result;
}
};
const clear = () => {
  first = '';
  second = '';
  result = '';
  operator = '';
  answer.textContent = '';
  show.textContent = '';
};
document.querySelector('.clear').addEventListener('click', clear);
const toggle = document.querySelector('.switch');
toggle .addEventListener('click', () => {
    if(toggle.style.left === '0px'){
         toggle.style.left = '50%';
         document.querySelector('.display').style.backgroundColor = '#eeeeee';
         document.querySelector('.col1').style.backgroundColor = '#e9e9e9';
         document.querySelector('.col1').style.color = '#000000';
         document.querySelector('.col2').style.backgroundColor = '#dfdfdf';
         document.querySelector('.col4').style.color = '#000000';
         document.querySelector('.clear h3').style.color = '#090909';
         document.querySelector('.screen').style.color = '#000000';
         document.querySelector('.answer').style.color = '#7f7f7';
    }
    else{
        toggle.style.left = '0';
        document.querySelector('.display').style.backgroundColor = '';
        document.querySelector('.col1').style.backgroundColor = '';
        document.querySelector('.col1').style.color = '';
        document.querySelector('.col2').style.backgroundColor = '';
        document.querySelector('.col4').style.color = '';
        document.querySelector('.clear h3').style.color = '';
        document.querySelector('.screen').style.color = '';
        document.querySelector('.answer').style.color = '';
    }
});
function disabler(){
  if(document.querySelector('.col4').style.display === 'flex'){
    document.querySelectorAll('.col1 button').forEach((key) => {
      key.setAttribute('disabled', 'true');
    });
    document.querySelectorAll('.col4 button').forEach((key) => {
      key.removeAttribute('disabled');
    });
}
  else{
    document.querySelectorAll('.col1 button').forEach((key) => {
      key.removeAttribute('disabled');
    });
    document.querySelectorAll('.col4 button').forEach((key) => {
        key.setAttribute('disabled', 'true');
    });
  } 
}
const resize = () => {
  if(window.innerWidth > 520){
    document.querySelector('.col3').addEventListener('mouseover', () => {
      document.querySelector('.col4').style.display = 'flex';
      document.querySelector('.col5').style.display = 'flex';
      if(document.querySelector('.col4').style.display === 'flex'){
      document.querySelector('.col5').addEventListener('mouseover', () => {
      document.querySelector('.col4').style.display = '';
      document.querySelector('.col5').style.display = '';
      });
    }
  });
  }
  else{
      document.querySelector('.col3').addEventListener('click', () => {
      document.querySelector('.col4').style.display = 'flex';
      document.querySelector('.col5').style.display = 'flex';
      disabler();
      if(document.querySelector('.col4').style.display === 'flex'){
      document.querySelector('.col5').addEventListener('click', () => {
      document.querySelector('.col4').style.display = '';
      document.querySelector('.col5').style.display = '';
      disabler();
      });
    }
  });
  }
};
resize()
window.addEventListener('resize', resize);