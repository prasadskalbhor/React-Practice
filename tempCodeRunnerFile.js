for(let i=0;i<actions.length;i++){
  if(actions[i] ==="call")
    console.log(memoizedFn(...(values[i])));
}