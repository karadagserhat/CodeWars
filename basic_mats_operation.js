function basicOp(operation, value1, value2)
{
  // Code
  if(operation == '+'){
      return value1 + value2
  }
  if(operation == '-'){
      return value1 - value2
  }
  if(operation == '*'){
      return value2 * value1
  }
  if(operation == '/'){
      return value1 / value2
  }
}

function basicOp2(operation, value1, value2)
{
    switch(operation){
        case '+' : return value2 + value1
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }

}

function basicOp3(operation,val1,val2){
    return eval(val1 + operation + val2)
}


console.log(basicOp3('*',12,3));