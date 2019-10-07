function solve() {
  
   const input = document.getElementById('searchField');
   const btn = document.getElementById('searchBtn');
   const rows = document.querySelectorAll('tbody > tr');

   const handler = () => {
      Array.from(rows).map(e => (e.classList=''));
      Array.from(rows).forEach(e => {
   debugger
         Array.from(e.children).forEach(elem => {
            const text = elem.textContent;

            if (text.includes(input.value) && input.value !=='') {
               elem.parentElement.className = 'select';
            }
         });
      });
      input.value = '';

   };

   btn.addEventListener('click', handler);

}