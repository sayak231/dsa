// Delete the middle element of a stack using recursion

// So using Base Condition, Hypothesis and Induction method we can do this.

const st = [1, 2, 3, 6, 5];
const k = parseInt(st.length / 2) + 1;

const deleteMid = (k) => {
  if (k == 1) {
    st.pop();
    return;
  }
  const temp = st[st.length - 1];
  st.pop();
  deleteMid(k - 1);
  st.push(temp);
  return;
};
// deleteMid(k);
console.log(st);

//---------------------------------------------------------------------------------------------------------------------------------------------------

// Reverse a stack using recursion - O(1) space

const reverse = () => {
  if (st.length === 1) {
    return;
  }
  const last = st.pop();
  reverse();
  //   st.unshift(last);
  unshift(last);
  return;
};
reverse();
console.log(st);

// unshift function using recursion

function unshift(ele) {
  if (st.length === 0) {
    st.push(ele);
    return;
  }

  let temp = st.pop();
  unshift(ele);
  st.push(temp);
  return;
}
