let count = 0, z = 0;
increment = () => {
    document.getElementById("btn").innerText = count+=2;
};

decrement = () => {
  if (count>0) {
      count--;
  };
  document.getElementById("btn").innerText = count;
}
