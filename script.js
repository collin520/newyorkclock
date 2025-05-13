function updateClock() {
  const now = new Date();

  // 纽约时间（UTC-4）
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const nyTime = new Date(utc - 4 * 3600000);

  const hours = nyTime.getHours().toString().padStart(2, '0');
  const minutes = nyTime.getMinutes().toString().padStart(2, '0');
  const seconds = nyTime.getSeconds().toString().padStart(2, '0');
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById('date').textContent = `${nyTime.getFullYear()}年${nyTime.getMonth() + 1}月${nyTime.getDate()}日`;
  document.getElementById('weekday').textContent = weekdays[nyTime.getDay()];
}

updateClock();
setInterval(updateClock, 1000);
