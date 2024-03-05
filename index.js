console.log('bobbyhadz.com');

// 1) Get First (Sunday) and Last Day (Saturday) of the current Week

const today = new Date();

// ✅ Get the first day of the current week (Sunday)
const firstDay = new Date(
  today.setDate(today.getDate() - today.getDay()),
);

// ✅ Get the last day of the current week (Saturday)
const lastDay = new Date(
  today.setDate(today.getDate() - today.getDay() + 6),
);

console.log(firstDay); // 👉️ Sun Jul 23 2023 14:38:23
console.log(lastDay); // 👉️ Sat Jul 29 2023 14:38:23

// --------------------------------------------------------------------

// // 2) Get the First (Monday) and Last Day (Sunday) of the current Week

// const today = new Date();

// // ✅ Get the first day of the current week (Monday)
// function getFirstDayOfWeek(d) {
//   // 👇️ clone date object, so we don't mutate it
//   const date = new Date(d);
//   const day = date.getDay(); // 👉️ get day of week

//   // 👇️ day of month - day of week (-6 if Sunday), otherwise +1
//   const diff = date.getDate() - day + (day === 0 ? -6 : 1);

//   return new Date(date.setDate(diff));
// }

// const firstDay = getFirstDayOfWeek(today);

// // ✅ Get the last day of the current week (Sunday)
// const lastDay = new Date(firstDay);
// lastDay.setDate(lastDay.getDate() + 6);

// console.log(firstDay); // 👉️ Mon Jul 24 2023 14:40:17
// console.log(lastDay); // 👉️ Sun Jul 30 2023 14:40:17
