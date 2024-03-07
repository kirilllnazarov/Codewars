function solution(list) {
  let final = `${list[0]}`;
  let queue = [];
  for (let i = 0; i < list.length - 1; i++) {
    const num = list[i + 1];
    const prevNum = list[i];
    if (prevNum == num - 1) {
      queue.push(num);
    } else {
      if (queue.length == 1) {
        final += `,${prevNum},${num}`;
      } else if (queue.length == 0) {
        final += `,${num}`;
      } else {
        final += `-${prevNum},${num}`;
      }
      queue.length = 0;
    }
  }
  let prevNum = queue[queue.length - 1];
  let num = list[list.length - 1];
  if (queue.length == 1) {
    final += `,${prevNum}`;
  } else if (queue.length > 1) {
    final += `-${num}`;
  }
  return final;
}
